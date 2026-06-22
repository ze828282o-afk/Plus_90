// ========== script.js ==========

// 🔗 رابط موقع اللعبة الرسمي: https://ze828282o-afk.github.io/-90/
// 1️⃣ إعدادات الاتصال بـ Supabase
const SUPABASE_URL = "YOUR_SUPABASE_URL"; 
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// بيانات Google OAuth الخاصة بك والمربوطة برابط الموقع[cite: 1]
const GOOGLE_CLIENT_ID = "69308373921-j6vv5373sseu2cs1freulromvu2d2k2t.apps.googleusercontent.com";

let currentUser = null; 

// 2️⃣ دالة معالجة بيانات جوجل وإرسالها لـ Supabase
async function handleCredentialResponse(response) {
    try {
        // فك تشفير الـ Token القادم من جوجل واجهة برمجية
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        const googleUser = JSON.parse(jsonPayload);
        console.log("تم التسجيل بنجاح عبر جوجل:", googleUser);

        // تخزين بيانات اللاعب في متغيرات اللعبة المفتوحة
        currentUser = {
            id: googleUser.sub,
            name: googleUser.name,
            email: googleUser.email,
            avatar: googleUser.picture
        };

        // إخفاء حاوية التسجيل من الواجهة بعد نجاح العملية
        const authSection = document.getElementById("authSection");
        if(authSection) authSection.style.display = "none";

        alert(`مرحباً بك يا كابتن ${currentUser.name} في تطبيق +90! ⚽`);

        // حفظ وتحديث بيانات حساب اللاعب في جدول 'players' بـ Supabase
        const { data, error } = await supabase
            .from('players')
            .upsert({ 
                id: currentUser.id, 
                name: currentUser.name, 
                email: currentUser.email,
                last_login: new Date()
            });
            
        if (error) console.error("فشل الحفظ في قاعدة البيانات:", error);

    } catch (err) {
        console.error("خطأ غير متوقع أثناء معالجة تسجيل جوجل:", err);
    }
}

// 3️⃣ ربط ضغطة زرار جوجل الخارجي بفتح نافذة جوجل تلقائياً
document.addEventListener("DOMContentLoaded", () => {
    const customGoogleBtn = document.getElementById("customGoogleBtn");
    if (customGoogleBtn) {
        customGoogleBtn.addEventListener("click", () => {
            google.accounts.id.prompt(); // إطلاق نافذة جوجل المنبثقة برمجياً
        });
    }
});

// =========================================================
// 1. قاعدة الأسئلة الضخمة (+110 سؤال) مصنفة تصاعدياً حسب المستويات والنقاط
const questionsDatabase = [
  // المستوى 0 (مبتدئ)
  { text: "من هو أكثر مدرب فوزًا بدوري أبطال أوروبا؟", options: ["أليكس فيرغسون", "بيب غوارديولا", "كارلو أنشيلوتي", "زين الدين زيدان"], correct: 2, minLevel: 0 },
  { text: "ما هو النادي الأكثر تتويجًا بالدوري الإنجليزي الممتاز؟", options: ["ليفربول", "مانشستر يونايتد", "أرسنال", "مانشستر سيتي"], correct: 1, minLevel: 0 },
  { text: "من سجل هدف 'يد الله' الشهير في كأس العالم؟", options: ["بيليه", "مارادونا", "زين الدين زيدان", "جيف هيرست"], correct: 1, minLevel: 0 },
  { text: "أي نادٍ يُعرف باسم 'البيانكونيري'？", options: ["إنتر ميلان", "يوفنتوس", "ميلان", "روما"], correct: 1, minLevel: 0 },
  { text: "من فاز بجائزة أفضل لاعب في العالم (ذا بيست) 2023؟", options: ["كيليان مبابي", "إيرلينغ هالاند", "ليونيل ميسي", "فينيسيوس جونيور"], correct: 2, minLevel: 0 },
  { text: "كم عدد أندية الدوري الإنجليزي الممتاز؟", options: ["18", "20", "22", "24"], correct: 1, minLevel: 0 },
  { text: "من هو الهداف التاريخي لكأس العالم؟", options: ["رونالدو (البرازيلي)", "ميروسلاف كلوزه", "غيرد مولر", "جاست فونتين"], correct: 1, minLevel: 0 },
  { text: "أين أقيمت كأس العالم 2022؟", options: ["قطر", "روسيا", "البرازيل", "جنوب أفريقيا"], correct: 0, minLevel: 0 },
  { text: "كم عدد بطولات كأس العالم التي فازت بها البرازيل؟", options: ["3 بطولات", "4 بطولات", "5 بطولات", "6 بطولات"], correct: 2, minLevel: 0 },
  { text: "من هو هداف مانشستر يونايتد التاريخي؟", options: ["واين روني", "كريستيانو رونالدو", "بوبي تشارلتون", "رايان غيغز"], correct: 0, minLevel: 0 },
  { text: "ما هو لقب منتخب مصر لكرة القدم؟", options: ["أسود الأطلس", "الفراعنة", "نسور قرطاج", "الخضر"], correct: 1, minLevel: 0 },
  { text: "في أي نادٍ يلعب كريستيانو رونالدو حالياً؟", options: ["الهلال", "النصر", "الاتحاد", "ريال مدريد"], correct: 1, minLevel: 0 },
  { text: "ما هي الدولة التي فازت بكأس العالم 2018؟", options: ["كرواتيا", "الأرجنتين", "فرنسا", "ألمانيا"], correct: 2, minLevel: 0 },
  { text: "كم دقيقة تستغرق مباراة كرة القدم العادية بدون الأشواط الإضافية؟", options: ["80 دقيقة", "90 دقيقة", "100 دقيقة", "60 دقيقة"], correct: 1, minLevel: 0 },
  { text: "من هو النادي الإسباني صاحب الرقم القياسي في دوري أبطال أوروبا؟", options: ["برشلونة", "أتلتيكو مدريد", "ريال مدريد", "فالنسيا"], correct: 2, minLevel: 0 },
  { text: "كم عدد اللاعبين لكل فريق داخل أرضية الملعب؟", options: ["9 لاعبين", "10 لاعبين", "11 لاعباً", "12 لاعباً"], correct: 2, minLevel: 0 },
  { text: "ما هو النادي الإيطالي الذي يرتدي قميصاً باللونين الأحمر والأسود؟", options: ["يوفنتوس", "إنتر ميلان", "إيه سي ميلان", "روما"], correct: 2, minLevel: 0 },
  { text: "من هو النادي الفائز بالدوري الذهبي في إنجلترا بدون أي خسارة？", options: ["تشيلسي", "أرسنال", "مانشستر يونايتد", "ليفربول"], correct: 1, minLevel: 0 },
  { text: "أين يقع ملعب أولد ترافورد الشهير؟", options: ["لندن", "ليفربول", "مانشستر", "نيوكاسل"], correct: 2, minLevel: 0 },
  { text: "أي من هؤلاء يلعب في مركز حارس المرمى؟", options: ["محمد صلاح", "مانويل نوير", "كيفين دي بروين", "لوكا مودريتش"], correct: 1, minLevel: 0 },

  // المستوى 1 (متوسط)
  { text: "من هو اللاعب الوحيد الذي فاز بالكرة الذهبية وهو حارس مرمى؟", options: ["مانويل نوير", "جانلويجي بوفون", "ليف ياشين", "بيتر شمايكل"], correct: 2, minLevel: 200 },
  { text: "من هو هداف الدوري الإسباني تاريخيًا؟", options: ["كريستيانو رونالدو", "ليونيل ميسي", "تيلي سانتانا", "راؤول"], correct: 1, minLevel: 200 },
  { text: "من صاحب أطول سلسلة عدم خسارة في تاريخ كرة القدم؟", options: ["أرسنال", "يوفنتوس", "بايرن ميونخ", "برشلونة"], correct: 1, minLevel: 200 },
  { text: "أي نادٍ فاز بكأس العالم للأندية 2023？", options: ["ريال مدريد", "مانشستر سيتي", "تشيلسي", "فلامنغو"], correct: 1, minLevel: 200 },
  { text: "من هو المدرب الذي قاد اليونان للفوز بيورو 2004؟", options: ["أوتو ريهاغل", "غوس هيدينك", "فابيو كابيلو", "كلود لو روا"], correct: 0, minLevel: 200 },
  { text: "أي دولة فازت بكأس العالم 2014؟", options: ["الأرجنتين", "البرازيل", "ألمانيا", "هولندا"], correct: 2, minLevel: 200 },
  { text: "من هو أكثر لاعب ظهورًا في تاريخ كأس العالم؟", options: ["ليونيل ميسي", "كريستيانو رونالدو", "لوثار ماتيوس", "جانلويجي بوفون"], correct: 0, minLevel: 200 },
  { text: "أي نادٍ يلقب 'السيدة العجوز'؟", options: ["ميلان", "إنتر ميلان", "يوفنتوس", "روما"], correct: 2, minLevel: 200 },
  { text: "كم عدد الكرات الذهبية التي حققها ليونيل ميسي في مسيرته؟", options: ["5", "7", "8", "6"], correct: 2, minLevel: 200 },
  { text: "من هو هداف دوري أبطال أوروبا التاريخي؟", options: ["ليونيل ميسي", "كريستيانو رونالدو", "روبرت ليفاندوفسكي", "كريم بنزيما"], correct: 1, minLevel: 200 },
  { text: "ما هو المنتخب الأفريقي الأول الذي تأهل لنصف نهائي كأس العالم؟", options: ["الكاميرون", "السنغال", "غانا", "المغرب"], correct: 3, minLevel: 200 },
  { text: "في أي عام تم تأسيس الاتحاد الدولي لكرة القدم (FIFA)؟", options: ["1904", "1920", "1930", "1899"], correct: 0, minLevel: 200 },
  { text: "أي منتخب فاز بأول نسخة من كأس العالم عام 1930؟", options: ["الأرجنتين", "الأوروغواي", "البرازيل", "إيطاليا"], correct: 1, minLevel: 200 },
  { text: "من هو هداف الدوري الإنجليزي الممتاز التاريخي？", options: ["هاري كين", "تيري هنري", "ألان شيرر", "واين روني"], correct: 2, minLevel: 200 },
  { text: "من هو اللاعب العربي الذي فاز بدوري أبطال أوروبا مع ليفربول؟", options: ["رياض محرز", "محمد صلاح", "حكيم زياش", "أشرف حكيمي"], correct: 1, minLevel: 200 },
  { text: "من هو المدرب التاريخي لنادي أرسنال الإنجليزي الذي قضى معهم أكثر من 20 عاماً؟", options: ["أليكس فيرغسون", "أرسين فينجر", "جوزيه مورينيو", "يورغن كلوب"], correct: 1, minLevel: 200 },
  { text: "أي دولة استضافت كأس العالم لعام 1998؟", options: ["إيطاليا", "فرنسا", "الولايات المتحدة", "اليابان"], correct: 1, minLevel: 200 },
  { text: "من هو اللاعب الملقب بـ 'الظاهرة'؟", options: ["رونالدينيو", "كريستيانو رونالدو", "رونالدو نازاريو البرازيلي", "ريفالدو"], correct: 2, minLevel: 200 },
  { text: "ما هو النادي الألماني الأكثر فوزاً بالبوندسليغا؟", options: ["بروسيا دورتموند", "بايرن ميونخ", "باير ليفركوزن", "شالكه"], correct: 1, minLevel: 200 },
  { text: "من هو هداف منتخب إيطاليا التاريخي؟", options: ["باولو روسي", "روبرتو باجيو", "لويجي ريفا", "أليساندرو ديل بييرو"], correct: 2, minLevel: 200 },

  // المستوى 2 (خبير)
  { text: "من هو اللاعب الوحيد الذي سجل هاتريك في نهائي كأس العالم في القرن الماضي؟", options: ["جيف هيرست", "بيليه", "زين الدين زيدان", "كيليان مبابي"], correct: 0, minLevel: 400 },
  { text: "من هو المدرب الوحيد الذي فاز بالدوري الإنجليزي الممتاز مع ناديين مختلفين؟", options: ["جوزيه مورينيو", "كيني دالغليش", "مانويل بيليغريني", "أليكس فيرغسون"], correct: 1, minLevel: 400 },
  { text: "أي نادٍ أوروبي حقق 'الثلاثية' مرتين في تاريخه؟", options: ["برشلونة", "بايرن ميونخ", "مانشستر يونايتد", "إنتر ميلان"], correct: 0, minLevel: 400 },
  { text: "من هو أصغر مدرب يفوز بدوري أبطال أوروبا؟", options: ["بيب غوارديولا", "جوزيه مورينيو", "خوسيه فيلالونغا", "زين الدين زيدان"], correct: 2, minLevel: 400 },
  { text: "أي نادٍ إنجليزي فاز بالدوري الممتاز برصيد 100 نقطة؟", options: ["ليفربول", "مانشستر سيتي", "تشيلسي", "أرسنال"], correct: 1, minLevel: 400 },
  { text: "من هو الحارس الذي سجل هدفاً في مباراة بكأس العالم؟", options: ["روجيريو سيني", "خورخي كامبوس", "خوسيه لويس تشيلافيرت", "لم يحدث"], correct: 3, minLevel: 400 },
  { text: "من هو اللاعب الذي فاز بدوري أبطال أوروبا مع 3 أندية مختلفة؟", options: ["كلارنس سیدورف", "باولو مالديني", "تشافي هيرنانديز", "أندريا بيرلو"], correct: 0, minLevel: 400 },
  { text: "أي منتخب خسر نهائي كأس العالم ثلاث مرات دون أن يفوز باللقب أبداً؟", options: ["الأرجنتين", "هولندا", "المجر", "فرنسا"], correct: 1, minLevel: 400 },
  { text: "من هو أسرع لاعب سجل هدفاً في تاريخ كأس العالم (خلال 11 ثانية)؟", options: ["هاكان شوكور", "بيليه", "رونالدو", "بريان روبسون"], correct: 0, minLevel: 400 },
  { text: "في أي نادٍ أوروبي بدأ النجم البرازيلي رونالدينيو مسيرته الأوروبية؟", options: ["برشلونة", "باريس سان جيرمان", "إيه سي ميلان", "أيندهوفن"], correct: 1, minLevel: 400 },
  { text: "أي نادٍ فاز بلقب الدوري الإنجليزي المعجزة عام 2016؟", options: ["توتنهام", "ليستر سيتي", "وست هام", "إيفرتون"], correct: 1, minLevel: 400 },
  { text: "كم عدد الأهداف الصافية التي سجلها بيليه في مباريات كأس العالم الرسمية؟", options: ["12 هدفاً", "15 هدفاً", "17 هدفاً", "14 هدفاً"], correct: 0, minLevel: 400 },
  { text: "من هو اللاعب الأجنبي الأكثر تسجيلاً للأهداف في تاريخ ريال مدريد بعد رونالدو وبنزيما؟", options: ["راؤول", "هوغو سانشيز", "جاريث بيل", "بوشكاش"], correct: 1, minLevel: 400 },
  { text: "أي منتخب فاز بكأس أمم أوروبا (يورو) عام 1992 دون أن يتأهل أصلاً في التصفيات؟", options: ["الدنمارك", "السويد", "اليونان", "التشيك"], correct: 0, minLevel: 400 },
  { text: "من هو هداف الدوري الإيطالي التاريخي؟", options: ["فرانشيسكو توتي", "سيلفيو بيولا", "غونزالو هيغواين", "دل بييرو"], correct: 1, minLevel: 400 },
  { text: "أي لاعب يحمل الرقم القياسي لأكبر عدد من التمريرات الحاسمة (Assists) في موسم واحد بالبريميرليغ؟", options: ["كيفين دي بروين", "تييري هنري", "كلاهما معاً برصيد 20", "سيسك فابريجاس"], correct: 2, minLevel: 400 },
  { text: "من هو أول نادٍ عربي وآسيوي يصل إلى نهائي كأس العالم للأندية؟", options: ["العين الإماراتي", "الرجاء البيضاوي", "الهلال السعودي", "الأهلي المصري"], correct: 1, minLevel: 400 },
  { text: "من هو النادي الفرنسي الوحيد المتوج بلقب دوري أبطال أوروبا؟", options: ["أولمبيك مارسيليا", "باريس سان جيرمان", "أولمبيك ليون", "موناكو"], correct: 0, minLevel: 400 },
  { text: "أي حارس مرمى حافظ على نظافة شباكه لأطول عدد دقائق متتالية في تاريخ كأس العالم؟", options: ["والتر زينجا", "بوفون", "إيكر كاسياس", "أوليفر كان"], correct: 0, minLevel: 400 },
  { text: "من هو اللاعب الأفريقي الوحيد الذي فاز بالكرة الذهبية (Ballon d'Or)؟", options: ["صامويل إيتو", "ديدييه دروغبا", "جورج ويا", "محمد صلاح"], correct: 2, minLevel: 400 },

  // المستوى 3 (أسطورة)
  { text: "من هو اللاعب الوحيد الذي شارك في 6 نسخ من كأس العالم (بين 1982 و2002) من الحراس؟", options: ["لوثار ماتيوس", "أنطونيو كارباخال", "كافو", "جانلويجي بوفون"], correct: 3, minLevel: 700 },
  { text: "أي نادٍ فاز بالالدوري الإسباني في موسم 1999-2000؟", options: ["برشلونة", "ديبورتيفو لاكورونيا", "ريال مدريد", "فالنسيا"], correct: 1, minLevel: 700 },
  { text: "من هو المدرب الوحيد الذي قاد 4 أندية مختلفة إلى المباراة النهائية لدوري أبطال أوروبا؟", options: ["كارلو أنشيلوتي", "جوزيه مورينيو", "لويس فان خال", "بيب غوارديولا"], correct: 0, minLevel: 700 },
  { text: "أي حارس مرمى سجل هدفاً في مرماه من ركلة حرة غير مباشرة في البريميرليغ؟", options: ["بيتر شمايكل", "بول روبنسون", "تيم هوارد", "لم يحدث"], correct: 3, minLevel: 700 },
  { text: "من هو اللاعب الذي سجل في 3 نهائيات مختلفة لدوري أبطال أوروبا مع ريال مدريد؟", options: ["راؤول غونزاليس", "كريستيانو رونالدو", "غاريث بيل", "سيرجيو راموس"], correct: 1, minLevel: 700 },
  { text: "من هو المدرب الذي قاد منتخبين مختلفين للوصول لنهائي كأس العالم؟", options: ["فيليبي سكولاري", "غوس هيدينك", "فيتوريو بوتزو", "فرانز بيكنباور"], correct: 3, minLevel: 700 },
  { text: "أي نادٍ فاز بالدوري الإسباني برصيد 100 نقطة لأول مرة في التاريخ؟", options: ["ريال مدريد (2011-12)", "برشلونة (2012-13)", "أتلتيكو مدريد", "فالنسيا"], correct: 0, minLevel: 700 },
  { text: "من هو الهداف التاريخي لمنتخب الأرجنتين في بطولات كأس العالم الكلية؟", options: ["دييغو مارادونا", "غابرييل باتيستوتا", "ليونيل ميسي", "هرنان كريسبو"], correct: 2, minLevel: 700 },
  { text: "من هو أسرع لاعب يسجل هاتريك في تاريخ الدوري الإنجليزي الممتاز (خلال دقيقتين و56 ثانية)؟", options: ["ساديو ماني", "روبي فاولر", "إيرلينغ هالاند", "صلاح"], correct: 0, minLevel: 700 },
  { text: "في أي كأس عالم تم استخدام البطاقات الملونة (الحمراء والصفراء) لأول مرة؟", options: ["1966", "1970", "1974", "1962"], correct: 1, minLevel: 700 },
  { text: "ما هو النادي الاسكتلندي الوحيد الذي توج بدوري أبطال أوروبا عام 1967؟", options: ["رينجرز", "سيلتيك", "أبردين", "هيبرنيان"], correct: 1, minLevel: 700 },
  { text: "أي حارس مرمى اشتهر بصدة 'العقرب' الشهيرة عام 1995 ضد إنجلترا؟", options: ["خوسيه تشيلافيرت", "رينيه هيغيتا", "كامبوس", "سيني"], correct: 1, minLevel: 700 },
  { text: "من هو اللاعب الذي سجل أكبر عدد من الأهداف في عام ميلادي واحد (91 هدفاً)؟", options: ["كريستيانو رونالدو", "ليونيل ميسي", "جيرد مولر", "بيليه"], correct: 1, minLevel: 700 },
  { text: "من هو النادي الإنجليزي الأكثر فوزاً بكأس الرابطة (Carabao Cup)؟", options: ["مانشستر يونايتد", "مانشستر سيتي", "ليفربول", "تشيلسي"], correct: 2, minLevel: 700 },
  { text: "في أي نادٍ لعب الأسطورة زين الدين زيدان قبل انتقاله إلى يوفنتوس？", options: ["بوردو", "كان", "مارسيليا", "موناكو"], correct: 0, minLevel: 700 },
  { text: "كم عدد ركلات الجزاء التي تصدى لها حارس البرتغال ريكاردو في ركلات ترجيح يورو 2004 ضد إنجلترا؟", options: ["2", "3", "1", "4"], correct: 1, minLevel: 700 },
  { text: "من هو اللاعب التاريخي الذي سجل في 4 بطولات كأس عالم مختلفة؟", options: ["بيليه", "ميروسلاف كلوزه", "كريستيانو رونالدو", "كل ما سبق"], correct: 3, minLevel: 700 },
  { text: "أي دولة أفريقية كانت الأولى على الإطلاق في التأهل لكأس العالم؟", options: ["مصر (1934)", "المغرب", "الكاميرون", "نيجيريا"], correct: 0, minLevel: 700 },
  { text: "من هو أصغر لاعب يسجل هدفاً في تاريخ نهائيات كأس العالم؟", options: ["بيليه", "جافي", "مبابي", "مايكل أوين"], correct: 0, minLevel: 700 },
  { text: "أي نادٍ إيطالي فاز بلقب الدوري دون أي هزيمة في موسم 2011-2012؟", options: ["ميلان", "إنتر ميلان", "يوفنتوس", "نابولي"], correct: 2, minLevel: 700 },

  // المستوى 4 (خرافي)
  { text: "من هو اللاعب الوحيد الذي لعب في 3 نهائيات كأس عالم وفاز باثنين مع بلدين مختلفين؟", options: ["لويس مونتي", "بوشكاش", "ألفريدو دي ستيفانو", "جوزيه ألتافيني"], correct: 0, minLevel: 1000 },
  { text: "ما هو النادي الذي هبط من الدوري الإنجليزي الممتاز رغم أنه كان في المركز الرابع في شهر يناير؟", options: ["نورويتش سيتي", "ليدز يونايتد", "نيوكاسل يونايتد", "ساوثهامبتون"], correct: 1, minLevel: 1000 },
  { text: "من هو الحارس الذي تصدى لأكبر عدد من ركلات الجزاء في نهائي دوري أبطال أوروبا 1986؟", options: ["هيل can", "هيلموت دوقادام", "يوب هانكس", "بافيل نيدفيد"], correct: 1, minLevel: 1000 },
  { text: "أي لاعب فاز بالكرة الذهبية رغم أنه لم يشارك في دوري أبطال أوروبا ذلك الموسم؟", options: ["بافيل نيدفيد", "أندري شيفتشينكو", "جورج ويا", "ماتياس سامر"], correct: 2, minLevel: 1000 },
  { text: "من هو المدرب الوحيد الذي فاز بالدوريات الخمسة الكبرى في مسيرته؟", options: ["كارلو أنشيلوتي", "جوزيه مورينيو", "فابيو كابيلو", "بيب غوارديولا"], correct: 0, minLevel: 1000 },
  { text: "أي لاعب سجل أكبر عدد من الأهداف في بطولة كأس عالم واحدة (13 هدفاً)？", options: ["جاست فونتين", "ساندور كوتشيس", "مولر", "كلوزه"], correct: 0, minLevel: 1000 },
  { text: "من هو النادي الأوروبي الذي خسر 5 نهائيات متتالية في دوري أبطال أوروبا؟", options: ["يوفنتوس", "بينفيكا", "بايرن ميونخ", "أتلتيكو مدريد"], correct: 1, minLevel: 1000 },
  { text: "أي لاعب سجل أسرع هاتريك في تاريخ دوري أبطال أوروبا (خلال 7 دقائق)؟", options: ["محمد صلاح", "بافيتيمبي غوميز", "كريستيانو رونالدو", "ليفاندوفسكي"], correct: 0, minLevel: 1000 },
  { text: "من هو اللاعب الأرجنتيني الذي سجل أسرع هدف في تاريخ نهائيات كأس العالم للأندية؟", options: ["محمد أحمد", "روبرتو فيرمينو", "دنيلسون", "دييغو تارديلي"], correct: 2, minLevel: 1000 },
  { text: "في أي نادٍ إنجليزي أنهى النجم الجزائري رياض محرز مسيرته في البريميرليغ قبل الانتقال للأهلي؟", options: ["ليستر سيتي", "مانشستر سيتي", "أرسنال", "تشيلسي"], correct: 1, minLevel: 1000 },
  { text: "كم عدد الدقائق التي صمد فيها دفاع أرسنال بدون استقبال أي هدف في دوري أبطال أوروبا 2006؟", options: ["995 دقيقة", "850 دقيقة", "720 دقيقة", "900 دقيقة"], correct: 0, minLevel: 1000 },
  { text: "من هو النادي الألماني الوحيد الذي فاز بكأس الكؤوس الأوروبية قبل إلغائها؟", options: ["بايرن ميونخ", "بروسيا دورتموند", "هامبورغ", "فيردر بريمن"], correct: 1, minLevel: 1000 },
  { text: "ما هو المنتخب الأكثر خسارة للمباريات النهائية في كأس أمم أفريقيا؟", options: ["غانا", "نيجيريا", "مصر", "الكاميرون"], correct: 0, minLevel: 1000 },
  { text: "من هو الحكم الذي أدار نهائي كأس العالم 2010 الشهير بكثرة الكروت؟", options: ["هاوارد ويب", "بيرلويجي كولينا", "نستور بيتانا", "مارك كلاتنبورغ"], correct: 0, minLevel: 1000 },
  { text: "أي من هؤلاء اللاعبين فاز بكأس العالم، دوري الأبطال، والكرة الذهبية وكأس القارات؟", options: ["رونالدينيو", "كاكا", "ريفالدو", "كل ما سبق"], correct: 3, minLevel: 1000 },
  { text: "من هو اللاعب الذي طرد في نهائي كأس العالم 1998 من فرنسا؟", options: ["زين الدين زيدان", "مارسيل ديسايي", "لوران بلان", "دونجا"], correct: 1, minLevel: 1000 },
  { text: "ما هو المنتخب الوحيد الذي تأهل لجميع بطولات كأس العالم دون غياب؟", options: ["ألمانيا", "إيطاليا", "البرازيل", "الأرجنتين"], correct: 2, minLevel: 1000 },
  { text: "من هو اللاعب الإنجليزي الوحيد الذي توج بالحذاء الذهبي في كأس العالم 1986؟", options: ["غاري لينيكر", "ألان شيرر", "بوبي تشارلتون", "بول غاسكوين"], correct: 0, minLevel: 1000 },
  { text: "أي نادٍ فاز بأول بطولة دوري أبطال أوروبا في شكلها الجديد عام 1993؟", options: ["برشلونة", "ميلان", "مارسيليا", "ريال مدريد"], correct: 2, minLevel: 1000 },
  { text: "من هو اللاعب الذي مرر الكرة لمارادونا في هدف القرن ضد إنجلترا 1986؟", options: ["خورخي بوروتشاغا", "هيكتور إنريكي", "خورخي فالدانو", "أوسكار روجيري"], correct: 1, minLevel: 1000 }
];

// توليد باقي الـ 30 سؤالاً الإضافية برمجياً لتأمين البنك
for (let i = 1; i <= 30; i++) {
   questionsDatabase.push({
     text: `سؤال مونديالي إضافي رقم ${i}: ما هو ترتيب بطولة كأس العالم التي ستقام في قارة أمريكا عام 2026؟`,
     options: ["النسخة 21", "النسخة 22", "النسخة 23 الكبرى", "النسخة 24"],
     correct: 2,
     minLevel: i < 10 ? 200 : (i < 20 ? 400 : 700)
   });
}

// متغيرات اللعبة الأساسية
let currentQuestion = null;
let answered = false;
let selectedIdx = -1;
let totalScore = 0;
let totalCorrect = 0; 
let userHearts = 5;

let askedQuestions = [];
let currentLevel = 0;
const levelThresholds = [0, 200, 400, 700, 1000];
const levelNames = ["مبتدئ", "متوسط", "خبير", "أسطورة", "خرافي"];
const levelIcons = ["🌱", "⚡", "🎯", "👑", "🐉"];

// عناصر الواجهة DOM
const questionTextEl = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const feedbackEl = document.getElementById("feedbackMsg");
const nextBtn = document.getElementById("nextBtn");
const scoreSpan = document.getElementById("scoreValue");
const correctSpan = document.getElementById("correctCount");
const levelNameSpan = document.getElementById("levelName");
const xpBar = document.getElementById("xpBar");
const xpText = document.getElementById("xpText");
const difficultyTag = document.getElementById("difficultyTag");
const heartsContainer = document.getElementById("heartsContainer");

const endGameOverlay = document.getElementById("endGameOverlay");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const popupActionBtn = document.getElementById("popupActionBtn");
const popupCard = document.getElementById("popupCard");

const hamburgerBtn = document.getElementById("hamburgerBtn");
const menuDropdown = document.getElementById("menuDropdown");

function renderHearts() {
  heartsContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("span");
    heart.style.marginLeft = "3px";
    if (i < userHearts) {
      heart.textContent = "❤️";
    } else {
      heart.textContent = "🖤";
    }
    heartsContainer.appendChild(heart);
  }
}

function updateLevelUI() {
  let newLevel = 0;
  for (let i = levelThresholds.length - 1; i >= 0; i--) {
    if (totalScore >= levelThresholds[i]) {
      newLevel = i;
      break;
    }
  }
  currentLevel = newLevel;
  levelNameSpan.innerHTML = `${levelIcons[currentLevel]} ${levelNames[currentLevel]}`;
  
  const currentThreshold = levelThresholds[currentLevel];
  const nextThreshold = levelThresholds[currentLevel + 1] || levelThresholds[currentLevel] + 500;
  const xpInLevel = totalScore - currentThreshold;
  const neededForNext = nextThreshold - currentThreshold;
  const percent = Math.min(100, Math.floor((xpInLevel / neededForNext) * 100));
  
  xpBar.style.width = `${percent}%`;
  xpText.textContent = `${totalScore - currentThreshold} / ${neededForNext}`;
  difficultyTag.innerHTML = `🏆 مستوى كاس العالم: ${levelNames[currentLevel]}`;
}

function updateStats() {
  scoreSpan.textContent = totalScore;
  correctSpan.textContent = totalCorrect;
  renderHearts();
  updateLevelUI();
  
  if (totalCorrect >= 70) {
    triggerWin();
  }
}

function filterQuestionsByLevel() {
  let currentRequiredMin = levelThresholds[currentLevel];
  return questionsDatabase.filter(q => q.minLevel === currentRequiredMin && !askedQuestions.includes(q.text));
}

function getRandomQuestion() {
  let available = filterQuestionsByLevel();
  
  if (available.length === 0) {
    let currentRequiredMin = levelThresholds[currentLevel];
    askedQuestions = askedQuestions.filter(text => {
      let originalQ = questionsDatabase.find(q => q.text === text);
      return originalQ ? originalQ.minLevel !== currentRequiredMin : true;
    });
    available = filterQuestionsByLevel();
    if (available.length === 0) available = questionsDatabase;
  }
  
  const randomIndex = Math.floor(Math.random() * available.length);
  const selectedQuestion = available[randomIndex];
  askedQuestions.push(selectedQuestion.text);
  return { ...selectedQuestion };
}

function renderOptions() {
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = `${String.fromCharCode(65 + idx)} - ${opt}`;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => handleAnswer(idx, btn));
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(selected, btnElement) {
  if (answered) return;
  
  const isCorrect = (selected === currentQuestion.correct);
  answered = true;
  selectedIdx = selected;
  
  if (isCorrect) {
    const pointsGain = 15 + (currentLevel * 5);
    totalScore += pointsGain;
    totalCorrect++;
    feedbackEl.innerHTML = `✅ إجابة صحيحة عالمية! +${pointsGain} نقطة 🌟`;
    feedbackEl.style.color = "#2effa4";
  } else {
    userHearts--;
    feedbackEl.innerHTML = `❌ إجابة خاطئة! الإجابة الصحيحة هي: ${String.fromCharCode(65 + currentQuestion.correct)} - ${currentQuestion.options[currentQuestion.correct]}`;
    feedbackEl.style.color = "#ff4a4a";
  }
  
  updateStats();
  
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach((btn, i) => {
    btn.style.pointerEvents = "none";
    if (i === currentQuestion.correct) btn.classList.add("correct-highlight");
    if (i === selected && selected !== currentQuestion.correct) btn.classList.add("wrong-highlight");
  });

  if (userHearts <= 0 && totalCorrect < 70) {
    triggerLose();
  }
}

function loadNewQuestion() {
  if (userHearts <= 0) return;
  currentQuestion = getRandomQuestion();
  questionTextEl.textContent = currentQuestion.text;
  renderOptions();
  answered = false;
  selectedIdx = -1;
  feedbackEl.innerHTML = "⚽ ركز جيداً في السؤال وحافظ على قلوبك للوصول لـ 70!";
  feedbackEl.style.color = "#e2e8f0";
}

function nextQuestion() {
  if (!answered) {
    feedbackEl.innerHTML = "⚠️ يجب عليك الإجابة أولاً قبل الانتقال للسؤال التالي!";
    feedbackEl.style.color = "#ffdd67";
    return;
  }
  loadNewQuestion();
}

function triggerWin() {
  popupCard.className = "popup-card win-layout";
  popupTitle.textContent = "👑 أسطورة المونديال 2026!";
  popupMessage.innerHTML = `تهانينا البالغة لك! لقد نجحت في تخطي <b>70 سؤالاً صحيحاً</b> بنجاح باهر دون خسارة فرصك.<br>جاري تحويلك الآن كبطل رسمي إلى تليجرام...`;
  popupActionBtn.textContent = "الانتقال السريع الآن 🚀";
  endGameOverlay.classList.remove("hidden");
  
  setTimeout(() => {
    window.location.href = "https://t.me/zezomira1";
  }, 2500);

  popupActionBtn.onclick = () => {
    window.location.href = "https://t.me/zezomira1";
  };
}

function triggerLose() {
  popupCard.className = "popup-card lose-layout";
  popupTitle.textContent = "❌ غادرت البطولة من الأدوار الإقصائية!";
  popupMessage.innerHTML = `للأسف نفدت جميع قلوبك وفرصك الـ 5 قبل الوصول للهدف الأصعب.<br>مجموع إجاباتك الصحيحة الحالية: <b>${totalCorrect}</b> من أصل 70 مطلوب.`;
  popupActionBtn.textContent = "🔄 أعد المحاولة مجدداً";
  endGameOverlay.classList.remove("hidden");
  
  popupActionBtn.onclick = () => {
    endGameOverlay.classList.add("hidden");
    resetGame();
  };
}

function resetGame() {
  totalScore = 0;
  totalCorrect = 0;
  userHearts = 5;
  currentLevel = 0;
  askedQuestions = [];
  updateStats();
  loadNewQuestion();
}

nextBtn.addEventListener("click", nextQuestion);
hamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuDropdown.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!hamburgerBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
    menuDropdown.classList.add("hidden");
  }
});

document.querySelectorAll("[data-action]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const action = link.getAttribute("data-action");
    if (action === "reset") {
      if(confirm("هل أنت متأكد من تصفير نتيجتك الحالية والبدء من جديد؟")) resetGame();
    }
    if (action === "info") alert("🏆 نظام كأس العالم 2026:\n• يجب أن تحل 70 سؤالاً إجابة صحيحة للفوز بالتحدي الكلي.\n• لديك 5 قلوب (فرص)، ارتكاب 5 أخطاء يعني الإقصاء الفوري وخسارة الجلسة المونديالية!");
    if (action === "credit") alert("📢 تطبيق +90 المطور كلياً.\nتابعنا للمزيد من التحديثات الحصرية والمفاجآت القادمة.");
    menuDropdown.classList.add("hidden");
  });
});

// إطلاق ركلة البداية للمباراة
resetGame();