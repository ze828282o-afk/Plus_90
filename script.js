// ========== script.js ==========
// قاعدة الأسئلة الكاملة (100+ سؤال) موزعة على 5 مستويات
const questionsDatabase = [
  // ========== المستوى 0 (مبتدئ) - نقاط 0-199 ==========
  // الأسئلة من 1 إلى 25
  { text: "في أي عام أُقيمت أول بطولة لكأس العالم؟", options: ["1928", "1930", "1934", "1924"], correct: 1, minLevel: 0 },
  { text: "أي دولة استضافت وفازت بأول نسخة من كأس العالم؟", options: ["البرازيل", "إيطاليا", "الأوروغواي", "الأرجنتين"], correct: 2, minLevel: 0 },
  { text: "ما هي النسختان اللتان أُلغيَتا بسبب الحرب العالمية الثانية؟", options: ["1938 و1942", "1942 و1946", "1946 و1950", "1934 و1938"], correct: 1, minLevel: 0 },
  { text: "متى فازت إنجلترا بكأس العالم للمرة الأولى (والوحيدة)؟", options: ["1962", "1970", "1966", "1958"], correct: 2, minLevel: 0 },
  { text: "أي دولة فازت بكأس العالم أكبر عدد من المرات؟", options: ["ألمانيا", "إيطاليا", "الأرجنتين", "البرازيل"], correct: 3, minLevel: 0 },
  { text: "أي دولة هي الوحيدة التي شاركت في جميع نسخ كأس العالم؟", options: ["ألمانيا", "البرازيل", "إيطاليا", "الأرجنتين"], correct: 1, minLevel: 0 },
  { text: "من فاز بلقب كأس العالم عام 1982؟", options: ["ألمانيا الغربية", "الأرجنتين", "إيطاليا", "البرازيل"], correct: 2, minLevel: 0 },
  { text: "أي منتخب فاز بلقب 2002 محققاً لقبه الخامس؟", options: ["البرازيل", "فرنسا", "ألمانيا", "إيطاليا"], correct: 0, minLevel: 0 },
  { text: "من فاز بلقب 2010 في جنوب أفريقيا؟", options: ["هولندا", "إسبانيا", "ألمانيا", "الأوروغواي"], correct: 1, minLevel: 0 },
  { text: "أي دولة فازت بلقب 2018 في روسيا؟", options: ["كرواتيا", "بلجيكا", "إنجلترا", "فرنسا"], correct: 3, minLevel: 0 },
  { text: "أي دولة استضافت نسخة 2022؟", options: ["قطر", "الإمارات", "السعودية", "إيران"], correct: 0, minLevel: 0 },
  { text: "ما هي الدول الثلاث التي ستستضيف نسخة 2026؟", options: ["أمريكا، كندا، المكسيك", "أمريكا، إنجلترا، أسبانيا", "كندا، البرازيل، الأرجنتين", "المكسيك، اليابان، كوريا"], correct: 0, minLevel: 0 },
  { text: "متى ستُقام بطولة 2026؟", options: ["مايو-يونيو", "يونيو-يوليو", "يوليو-أغسطس", "نوفمبر-ديسمبر"], correct: 1, minLevel: 0 },
  { text: "في نهائي 1962، أي فريق هزمه البرازيل للدفاع عن لقبه؟", options: ["الأوروغواي", "تشيكوسلوفاكيا", "إنجلترا", "تشيلي"], correct: 1, minLevel: 0 },
  { text: "ما هي أول دولة فازت بالكأس مرتين متتاليتين؟", options: ["البرازيل (1958-1962)", "إيطاليا (1934-1938)", "الأرجنتين (1978-1982)", "ألمانيا (1974-1978)"], correct: 0, minLevel: 0 },
  { text: "ما هو اسم كأس العالم الأصلي (القديم)؟", options: ["كأس جول ريميه", "كأس الفيفا", "الكأس الذهبية", "كأس النصر"], correct: 0, minLevel: 0 },
  { text: "ماذا حدث للكأس الأصلي في عام 1966؟", options: ["كُسر", "سُرِق", "أُذيبَ", "أُعطيَ لبيليه"], correct: 1, minLevel: 0 },
  { text: "من هو رئيس الفيفا الذي نظّم أول بطولة كأس عالم؟", options: ["جوزيف بلاتر", "جول ريميه", "جياني إنفانتينو", "جواو هافيلانج"], correct: 1, minLevel: 0 },
  { text: "الكأس الحالية مصنوعة من الذهب عيار 18 قيراطاً، كم يبلغ وزنها تقريباً؟", options: ["3.5 كجم", "6.2 كجم", "8.5 كجم", "10 كجم"], correct: 1, minLevel: 0 },
  { text: "ما هو اسم تميمة (شخصية) كأس العالم 2022؟", options: ["فريلا", "زاكومي", "لا إيبي", "لعيب"], correct: 3, minLevel: 0 },
  { text: "من هو الهداف التاريخي لكأس العالم (الأكثر تسجيلاً)؟", options: ["رونالدو (البرازيلي)", "بيليه", "ميروسلاف كلوزه (ألمانيا)", "ليونيل ميسي"], correct: 2, minLevel: 0 },
  { text: "من هو اللاعب الأكثر مشاركة في مباريات كأس العالم؟", options: ["لوتار ماتيوس (ألمانيا)", "ميسي", "مارادونا", "رونالدينيو"], correct: 0, minLevel: 0 },
  { text: "من صاحب الرقم القياسي في تسجيل أكبر عدد من الأهداف في نسخة واحدة؟", options: ["جاست فونتين (13 هدفاً - 1958)", "بيليه (10 أهداف)", "رونالدو (8 أهداف - 2002)", "مودريتش (6 أهداف)"], correct: 0, minLevel: 0 },
  { text: "ما هي أكبر نتيجة (فوز بفارق كبير) في تاريخ كأس العالم؟", options: ["10-1", "9-0", "7-1", "8-0"], correct: 0, minLevel: 0 },
  { text: "من هو أصغر لاعب يشارك في مباريات كأس العالم على الإطلاق؟", options: ["بيليه (17 عاماً)", "نورمان وايتسايد (17 عاماً)", "مبابي (18 عاماً)", "أوين (18 عاماً)"], correct: 1, minLevel: 0 },

  // ========== المستوى 1 (متوسط) - نقاط 200-399 ==========
  // الأسئلة من 26 إلى 50
  { text: "من هو أكبر لاعب يشارك في مباريات كأس العالم؟", options: ["دينو زوف (إيطاليا - 40 عاماً)", "شيلتون (المكسيك - 43 عاماً)", "روجيه ميلا (الكاميرون - 42 عاماً)", "فان در سار (هولندا)"], correct: 1, minLevel: 200 },
  { text: "كم عدد الأهداف التي سجلها رونالدو (البرازيلي) في جميع مشاركاته؟", options: ["12 هدفاً", "15 هدفاً", "17 هدفاً", "19 هدفاً"], correct: 1, minLevel: 200 },
  { text: "من هو الهداف التاريخي لمنتخب إنجلترا في المونديال؟", options: ["هاري كين", "غاري لينيكر", "بوبي تشارلتون", "جيرارد"], correct: 1, minLevel: 200 },
  { text: "كم مرة فازت الأرجنتين بكأس العالم؟", options: ["مرتين", "3 مرات", "4 مرات", "مرة واحدة"], correct: 1, minLevel: 200 },
  { text: "كم مرة فازت ألمانيا (كغرب وألمانيا الموحدة) باللقب؟", options: ["3 مرات", "4 مرات", "5 مرات", "مرتين"], correct: 1, minLevel: 200 },
  { text: "ما هو أكبر عدد من الحضور الجماهيري في مباراة نهائية؟", options: ["100 ألف", "120 ألف", "170 ألف", "200 ألف"], correct: 2, minLevel: 200 },
  { text: "كم عدد الأهداف الإجمالية التي سُجّلت في نسخة 2022؟", options: ["150 هدفاً", "160 هدفاً", "172 هدفاً", "185 هدفاً"], correct: 2, minLevel: 200 },
  { text: "ما هي أسرع بطاقة حمراء في تاريخ كأس العالم؟", options: ["الدقيقة 1", "الدقيقة 3", "الدقيقة 5", "الدقيقة 10"], correct: 0, minLevel: 200 },
  { text: "من هو اللاعب الوحيد الذي سجل في 4 نسخ مختلفة من المونديال؟", options: ["بيليه", "ميروسلاف كلوزه", "ليونيل ميسي", "كريستيانو رونالدو"], correct: 3, minLevel: 200 },
  { text: "كم عدد المنتخبات التي شاركت في نسخة 2022؟", options: ["24 منتخباً", "32 منتخباً", "48 منتخباً", "16 منتخباً"], correct: 1, minLevel: 200 },
  { text: "من سجل هدف 'يد الله' الشهير في 1986؟", options: ["ميسي", "مارادونا", "بيليه", "زيدان"], correct: 1, minLevel: 200 },
  { text: "من هو اللاعب الأسطوري البرازيلي الذي فاز بالكأس 3 مرات؟", options: ["رونالدو", "ريفالدو", "بيليه", "روماريو"], correct: 2, minLevel: 200 },
  { text: "من سجل الهدف الأول في كأس العالم 2002؟", options: ["رونالدو", "بوبي زامورا", "ريفالدو", "كافو"], correct: 1, minLevel: 200 },
  { text: "من هو أول فائز بالحذاء الذهبي (هداف البطولة)؟", options: ["غيلهيلمو ستابيلي (الأرجنتين)", "بيليه", "فونتين", "بوشكاش"], correct: 0, minLevel: 200 },
  { text: "أي حارس مرمى شهير سُجِّل عليه هدف 'أولمبي' مباشر من ركلة ركنية؟", options: ["ليف ياشين", "جوردون بانكس", "رينيه هيغيتا", "كاسياس"], correct: 2, minLevel: 200 },
  { text: "من هو أفضل هداف في تاريخ كأس العالم من أوروبا؟", options: ["فونتين (فرنسا)", "كلوزه (ألمانيا)", "مولر (ألمانيا)", "كين (إنجلترا)"], correct: 1, minLevel: 200 },
  { text: "كم عدد الأهداف التي سجلها بيليه في نهائيات كأس العالم؟", options: ["10 أهداف", "12 هدفاً", "14 هدفاً", "16 هدفاً"], correct: 1, minLevel: 200 },
  { text: "من هو اللاعب الأكثر تتويجاً بالبطولة (أكثر من فاز بها كلاعب)؟", options: ["بيليه (3 مرات)", "رونالدو (مرتان)", "زيدان (مرة)", "ميسي (مرة)"], correct: 0, minLevel: 200 },
  { text: "من هو الكابتن الذي رفع الكأس مرتين متتاليتين؟", options: ["كافو (البرازيل - 1994، 2002)", "بيليه", "مارادونا", "بكنباور"], correct: 0, minLevel: 200 },
  { text: "من هو أفضل لاعب في بطولة 2014 (الكرة الذهبية)؟", options: ["ميسي", "رونالدو", "نوير", "مولر"], correct: 0, minLevel: 200 },
  { text: "من هو أفضل لاعب في بطولة 2022؟", options: ["كيليان مبابي", "ليونيل ميسي", "جريزمان", "مودريتش"], correct: 1, minLevel: 200 },
  { text: "من هو الحارس الذي تصدى لأكثر من 4 ركلات ترجيح في مباراة واحدة؟", options: ["ريكاردو (البرتغال)", "دافيد دي خيا", "كاسياس", "نافاس"], correct: 0, minLevel: 200 },
  { text: "أي لاعب شهير اعتزل دولياً بعد نهائي 2006؟", options: ["رونالدو", "زين الدين زيدان", "بكنباور", "مالديني"], correct: 1, minLevel: 200 },
  { text: "ما هي نتيجة مباراة نهائي 1998 بين فرنسا والبرازيل؟", options: ["1-0", "2-1", "3-0", "3-2"], correct: 2, minLevel: 200 },

  // ========== المستوى 2 (خبير) - نقاط 400-699 ==========
  // الأسئلة من 51 إلى 75
  { text: "من سجل هدف التتويج للبرازيل في نهائي 2002؟", options: ["ريفالدو", "رونالدو", "رونالدينيو", "كافو"], correct: 1, minLevel: 400 },
  { text: "ما هو الفريق الذي تغلب على الأرجنتين في ربع نهائي 2022 بركلات الترجيح؟", options: ["البرازيل", "هولندا", "كرواتيا", "البرتغال"], correct: 1, minLevel: 400 },
  { text: "متى سجل زيدان هدفه الشهير بـ 'المقصية' في النهائي؟", options: ["1998", "2000", "2006", "2002"], correct: 3, minLevel: 400 },
  { text: "كم كان عدد أهداف مباراة ألمانيا والبرازيل (7-1) في نصف نهائي 2014؟", options: ["5-1", "6-1", "7-1", "8-1"], correct: 2, minLevel: 400 },
  { text: "من هو الحكم الذي أدار نهائي 2022؟", options: ["دانييلي أورساتو", "شيمون مارتشينياك", "أنتوني تايلور", "كليمان توربان"], correct: 1, minLevel: 400 },
  { text: "أي مباراة شهدت طرد زيدان في نهائي 2006؟", options: ["ضد البرازيل", "ضد إيطاليا", "ضد البرتغال", "ضد ألمانيا"], correct: 1, minLevel: 400 },
  { text: "ما هو اسم الملعب الذي استضاف نهائي 2022؟", options: ["ستاد خليفة", "المدينة التعليمية", "استاد لوسيل", "الجنوب"], correct: 2, minLevel: 400 },
  { text: "ماذا حدث في مباراة إنجلترا وألمانيا في 1966؟", options: ["هدف غير شرعي", "طرد لاعب", "هدف من ركلة حرة", "انتهت بالتعادل"], correct: 0, minLevel: 400 },
  { text: "أي مباراة شهدت أكبر عدد من البطاقات الملونة (الحمراء والصفراء)؟", options: ["البرتغال × هولندا (2006)", "ألمانيا × الأرجنتين", "إنجلترا × الأرجنتين", "البرازيل × كولومبيا"], correct: 0, minLevel: 400 },
  { text: "كم عدد المنتخبات العربية التي شاركت في 2022؟", options: ["3", "4", "5", "6"], correct: 1, minLevel: 400 },
  { text: "ما هو أفضل إنجاز لمنتخب عربي في تاريخ المونديال؟", options: ["دور الـ16", "ربع النهائي", "نصف النهائي", "المركز الرابع"], correct: 1, minLevel: 400 },
  { text: "أي منتخب غاب عن المونديال منذ 1986 وعاد في 2022؟", options: ["هولندا", "كندا", "ويلز", "إيران"], correct: 2, minLevel: 400 },
  { text: "من هو المنتخب الأفريقي الذي وصل إلى ربع النهائي لأول مرة في 1990؟", options: ["نيجيريا", "الكاميرون", "غانا", "السنغال"], correct: 1, minLevel: 400 },
  { text: "أي منتخب أوروبي فاز بالبطولة دون أن يخسر أي مباراة؟", options: ["إيطاليا 2006", "ألمانيا 2014", "إسبانيا 2010", "إنجلترا 1966"], correct: 2, minLevel: 400 },
  { text: "كم عدد المنتخبات الأفريقية المشاركة في 2026؟", options: ["5", "6", "8", "9"], correct: 3, minLevel: 400 },
  { text: "أي دولة فشلت في التأهل رغم فوزها بكأس العالم سابقاً؟", options: ["إيطاليا (2018، 2022)", "البرازيل", "ألمانيا", "الأرجنتين"], correct: 0, minLevel: 400 },
  { text: "ما هي الدولة الوحيدة التي فازت بالكأس خارج قارتها؟", options: ["البرازيل (في أوروبا)", "إيطاليا (في الأمريكتين)", "الأرجنتين (في قطر)", "إسبانيا (في أفريقيا)"], correct: 0, minLevel: 400 },
  { text: "ما هي الدولة التي استضافت البطولة مرتين في تاريخها؟", options: ["البرازيل", "ألمانيا", "المكسيك", "فرنسا"], correct: 2, minLevel: 400 },
  { text: "ما هو اسم الكأس الحالي؟", options: ["كأس الفيفا", "الكأس الذهبية", "كأس العالم للفيفا", "كأس النصر"], correct: 2, minLevel: 400 },
  { text: "كم يبلغ ارتفاع الكأس الحالية؟", options: ["30 سم", "36.8 سم", "42 سم", "50 سم"], correct: 1, minLevel: 400 },
  { text: "ما هو شعار كأس العالم 2022؟", options: ["الصقر", "العباءة", "الأرجوحة", "الكوفية"], correct: 1, minLevel: 400 },
  { text: "من هو مغني الأغنية الرسمية لكأس العالم 2010 (واكا واكا)؟", options: ["بيونسيه", "شاكيرا", "ريانا", "سيلين ديون"], correct: 1, minLevel: 400 },
  { text: "من هو مغني أغنية 1998 (لاكوبا دي لا فيدا)؟", options: ["ريكي مارتن", "إنريكي إغليسياس", "جينيفر لوبيز", "مارك أنتوني"], correct: 0, minLevel: 400 },
  { text: "ما هي الكرة الرسمية التي استُخدمت في مونديال 2022؟", options: ["أديداس تيلستار", "أديداس برازوكا", "أديداس الرحلة (Al Rihla)", "أديداس جابولاني"], correct: 2, minLevel: 400 },
  { text: "ما هي الكرة التي استُخدمت في مونديال 2018؟", options: ["تلستار 18", "برازوكا", "جابولاني", "تانجو"], correct: 0, minLevel: 400 },

  // ========== المستوى 3 (أسطورة) - نقاط 700-999 ==========
  // الأسئلة من 76 إلى 100
  { text: "كم عدد الحكام الذين يديرون مباراة واحدة حالياً (مع تقنية الفيديو)؟", options: ["3 حكام", "4 حكام", "5 حكام", "6 حكام"], correct: 3, minLevel: 700 },
  { text: "متى أُدخل نظام تقنية الخط (VAR) في كأس العالم؟", options: ["2014", "2018", "2022", "2010"], correct: 1, minLevel: 700 },
  { text: "ما هي أول بطولة استخدمت نظام 'التسلل الآلي' (SAOT)؟", options: ["2018", "2022", "2026", "2014"], correct: 1, minLevel: 700 },
  { text: "من هو الهداف التاريخي للمنتخب المكسيكي في المونديال؟", options: ["كوختموك بلانكو", "هيرنانديز", "تشيشاريتو", "ماركيز"], correct: 2, minLevel: 700 },
  { text: "من هو الهداف التاريخي للمنتخب الألماني؟", options: ["كلوزه", "مولر (غيرد)", "توماس مولر", "رومينيغه"], correct: 1, minLevel: 700 },
  { text: "من هو الهداف التاريخي للمنتخب الفرنسي؟", options: ["زيدان", "هنري", "مبابي", "بلاتيني"], correct: 1, minLevel: 700 },
  { text: "أي حارس مرمى توج بلقب أفضل لاعب في البطولة عام 2002؟", options: ["أوليفر كان", "كاسياس", "بوفون", "ديدا"], correct: 0, minLevel: 700 },
  { text: "من هو المدرب الأكثر فوزاً بكأس العالم؟", options: ["بيليه (لاعباً)", "فيتوريو بوتسو (إيطاليا)", "مارادونا", "زاغالو"], correct: 1, minLevel: 700 },
  { text: "من هو المدرب الأصغر سناً الذي فاز باللقب؟", options: ["ألبرتو زاكيروني", "مارادونا", "بيليه", "ألبرتو سوبيتشي (الأوروغواي)"], correct: 3, minLevel: 700 },
  { text: "كم عدد التبديلات المسموح بها في البطولة حالياً (في الوقت الأصلي)؟", options: ["3 تبديلات", "5 تبديلات", "4 تبديلات", "6 تبديلات"], correct: 1, minLevel: 700 },
  { text: "ما هي المباراة التي شهدت أول ركلات ترجيح في تاريخ المونديال؟", options: ["نهائي 1982", "نصف نهائي 1982 (ألمانيا × فرنسا)", "ربع نهائي 1986", "مباراة تحديد المركز الثالث"], correct: 1, minLevel: 700 },
  { text: "من سجل أول هدف في تاريخ كأس العالم؟", options: ["بيليه", "لوسيان لوران (فرنسا)", "غيلهيلمو ستابيلي", "بوشكاش"], correct: 1, minLevel: 700 },
  { text: "في أي قارة أُقيمت أكبر عدد من البطولات؟", options: ["أمريكا الجنوبية", "أوروبا", "أمريكا الشمالية", "آسيا"], correct: 1, minLevel: 700 },
  { text: "ما هي الدولة التي استضافت البطولة في عام 1978؟", options: ["الأرجنتين", "بيرو", "تشيلي", "البرازيل"], correct: 0, minLevel: 700 },
  { text: "ما هو اسم ملعب نهائي 2006 في برلين؟", options: ["أليانز أرينا", "فيلتينس أرينا", "الملعب الأولمبي", "سيغنال إيدونا بارك"], correct: 2, minLevel: 700 },
  { text: "كم دقيقة يُضاف وقت بدل ضائع في المتوسط في كل شوط؟", options: ["2-3 دقائق", "3-5 دقائق", "5-8 دقائق", "8-10 دقائق"], correct: 2, minLevel: 700 },
  { text: "من هو اللاعب الأكثر حصولاً على الكرة الذهبية (أفضل لاعب في البطولة)؟", options: ["ميسي (مرتان)", "بيليه", "مارادونا", "زيدان"], correct: 0, minLevel: 700 },
  { text: "ما هي الدولة التي ستنظم كأس العالم 2030؟", options: ["السعودية", "إسبانيا والبرتغال والمغرب (مع مباريات في أمريكا الجنوبية)", "إنجلترا", "الأرجنتين وأوروغواي"], correct: 1, minLevel: 700 },
  { text: "كم عدد المنتخبات التي ستشارك في نسخة 2026؟", options: ["32", "40", "48", "56"], correct: 2, minLevel: 700 },
  { text: "من هو أفضل حارس مرمى في تاريخ كأس العالم (حائز على جائزة أفضل حارس 4 مرات)؟", options: ["جوردون بانكس", "ليف ياشين", "كاسياس", "نوير"], correct: 1, minLevel: 700 },
  { text: "من هو اللاعب الوحيد الذي سجل في نهائيين مختلفين لكأس العالم؟", options: ["بيليه", "زيدان", "رونالدو", "مبابي"], correct: 1, minLevel: 700 },
  { text: "كم دولة شاركت في أول نسخة لكأس العالم؟", options: ["10 دول", "12 دولة", "13 دولة", "16 دولة"], correct: 2, minLevel: 700 },
  { text: "من هو اللاعب الذي سجل هدف الفوز لمنتخب بنما في التصفيات ليُهديهم أول تأهل لهم في 2018؟", options: ["رومان توريس", "جابرييل غوميز", "لويس تيخادا", "فيدل إسكوبار"], correct: 0, minLevel: 700 },
  { text: "من هو الهداف التاريخي لكأس العالم؟", options: ["رونالدو (البرازيلي)", "ميروسلاف كلوزه", "غيرد مولر", "جاست فونتين"], correct: 1, minLevel: 700 },
  { text: "ما هي الدولة التي استضافت كأس العالم 2022؟", options: ["قطر", "روسيا", "البرازيل", "جنوب أفريقيا"], correct: 0, minLevel: 700 },

  // ========== المستوى 4 (خرافي) - نقاط 1000+ ==========
  // أسئلة إضافية صعبة
  { text: "من هو اللاعب الوحيد الذي لعب في 3 نهائيات مختلفة لكأس العالم مع 3 منتخبات مختلفة؟", options: ["لم يحدث", "مونتيفيديو", "لويس مونتيفيديو", "لا يوجد"], correct: 0, minLevel: 1000 },
  { text: "ما هو النادي الذي هبط من الدوري الإنجليزي الممتاز رغم أنه كان في المركز الرابع في شهر يناير؟", options: ["نورويتش سيتي", "ليدز يونايتد", "نيوكاسل يونايتد", "ساوثهامبتون"], correct: 1, minLevel: 1000 },
  { text: "من هو الحارس الذي تصدى لأكبر عدد من ركلات الجزاء في مباراة واحدة بدوري أبطال أوروبا؟", options: ["أندري شيفتشينكو", "يان أوبلاك", "جيرزي دوديك", "مانويل نوير"], correct: 2, minLevel: 1000 },
  { text: "أي لاعب فاز بالكرة الذهبية رغم أنه لم يشارك في دوري أبطال أوروبا ذلك الموسم؟", options: ["بافيل نيدفيد", "أندري شيفتشينكو", "جورج ويا", "ماتياس سامر"], correct: 2, minLevel: 1000 },
  { text: "من هو المدرب الوحيد الذي فاز بالدوري الإنجليزي الممتاز والدوري الإسباني والدوري الإيطالي والدوري الألماني والدوري الفرنسي في مسيرته؟", options: ["كارلو أنشيلوتي", "جوزيه مورينيو", "فابيو كابيلو", "لم يحدث"], correct: 3, minLevel: 1000 },
  { text: "أي حارس مرمى سجل هدفًا في مرماه في مباراة رسمية بالدوري الإنجليزي الممتاز من ركلة حرة مباشرة نفذها بنفسه؟", options: ["روجيريو سيني", "خوسيه لويس تشيلافيرت", "لم يحدث", "بيتر تشيك"], correct: 2, minLevel: 1000 },
  { text: "من هو اللاعب الوحيد الذي فاز بالكرة الذهبية وهو حارس مرمى؟", options: ["مانويل نوير", "جانلويجي بوفون", "ليف ياشين", "بيتر شمايكل"], correct: 2, minLevel: 1000 },
  { text: "من هو المدرب الوحيد الذي قاد 4 أندية مختلفة إلى المباراة النهائية لدوري أبطال أوروبا؟", options: ["كارلو أنشيلوتي", "جوزيه مورينيو", "لويس فان خال", "أوتمار هيتسفيلد"], correct: 0, minLevel: 1000 },
  { text: "من هو اللاعب الذي سجل في 3 نهائيات مختلفة لدوري أبطال أوروبا (مع 3 أندية مختلفة)؟", options: ["كلارنس سيدورف", "صامويل إيتو", "كريستيانو رونالدو", "ديكو"], correct: 0, minLevel: 1000 },
  { text: "من هو المدرب الذي قاد منتخبًا للفوز بكأس العالم كلاعب وكمدرب؟", options: ["ماريو زاغالو", "فرانز بيكنباور", "ديديه ديشان", "كل ما سبق"], correct: 3, minLevel: 1000 },
  { text: "أي نادٍ فاز بالدوري الإسباني برصيد 100 نقطة؟", options: ["ريال مدريد (2011-12)", "برشلونة (2012-13)", "أتلتيكو مدريد (2013-14)", "ريال مدريد (2016-17)"], correct: 1, minLevel: 1000 },
  { text: "من هو اللاعب الذي شارك في 5 كؤوس عالم (بطولات كأس العالم)؟", options: ["أنطونيو كارباخال", "لوثار ماتيوس", "كريستيانو رونالدو", "ليونيل ميسي"], correct: 0, minLevel: 1000 },
  { text: "من هو أكثر مدرب فوزًا بدوري أبطال أوروبا؟", options: ["أليكس فيرغسون", "بيب غوارديولا", "كارلو أنشيلوتي", "زين الدين زيدان"], correct: 2, minLevel: 1000 },
  { text: "ما هو النادي الأكثر تتويجًا بالدوري الإنجليزي الممتاز؟", options: ["ليفربول", "مانشستر يونايتد", "أرسنال", "مانشستر سيتي"], correct: 1, minLevel: 1000 },
  { text: "من سجل هدف 'يد الله' الشهير في كأس العالم؟", options: ["بيليه", "مارادونا", "زين الدين زيدان", "جيف هيرست"], correct: 1, minLevel: 1000 },
  { text: "أي نادٍ يُعرف باسم 'البيانكونيري'؟", options: ["إنتر ميلان", "يوفنتوس", "ميلان", "روما"], correct: 1, minLevel: 1000 },
  { text: "من فاز بجائزة أفضل لاعب في العالم (ذا بيست) 2023؟", options: ["كيليان مبابي", "إيرلينغ هالاند", "ليونيل ميسي", "فينيسيوس جونيور"], correct: 2, minLevel: 1000 },
  { text: "كم عدد أندية الدوري الإنجليزي الممتاز؟", options: ["18", "20", "22", "24"], correct: 1, minLevel: 1000 },
  { text: "من هو الهداف التاريخي لكأس العالم؟", options: ["رونالدو (البرازيلي)", "ميروسلاف كلوزه", "غيرد مولر", "جاست فونتين"], correct: 1, minLevel: 1000 },
  { text: "أين أقيمت كأس العالم 2022؟", options: ["قطر", "روسيا", "البرازيل", "جنوب أفريقيا"], correct: 0, minLevel: 1000 },
  { text: "من هو اللاعب الوحيد الذي شارك في 6 نسخ من كأس العالم (بين 1982 و2002)؟", options: ["لوثار ماتيوس", "أنطونيو كارباخال", "كافو", "جانلويجي بوفون"], correct: 1, minLevel: 1000 },
  { text: "أي نادٍ فاز بالدوري الإسباني في موسم 1999-2000 رغم تسجيله 6 أهداف فقط في آخر 8 مباريات؟", options: ["برشلونة", "ديبورتيفو لاكورونيا", "ريال مدريد", "فالنسيا"], correct: 1, minLevel: 1000 },
  { text: "أي حارس مرمى سجل هدفًا في مرماه من ركلة حرة مباشرة في مباراة رسمية بالدوري الإنجليزي الممتاز؟", options: ["بيتر شمايكل", "بول روبنسون", "تيم هوارد", "لم يحدث"], correct: 3, minLevel: 1000 },
  { text: "من هو اللاعب الذي فاز بدوري أبطال أوروبا مع 3 أندية مختلفة؟", options: ["كلارنس سيدورف", "باولو مالديني", "تشافي هيرنانديز", "أندريا بيرلو"], correct: 0, minLevel: 1000 },
  { text: "ما هي الدولة التي فازت بكأس العالم 2014؟", options: ["الأرجنتين", "البرازيل", "ألمانيا", "هولندا"], correct: 2, minLevel: 1000 }
];

// ========== نظام اللعبة المتقدم ==========
// متغيرات اللعبة
let currentQuestionsPool = [];
let currentQuestion = null;
let answered = false;
let selectedIdx = -1;

let totalScore = 0;
let totalAnswered = 0;
let totalCorrect = 0;

let currentLevel = 0;
const levelThresholds = [0, 200, 400, 700, 1000];
const levelNames = ["مبتدئ", "متوسط", "خبير", "أسطورة", "خرافي"];
const levelIcons = ["🌱", "⚡", "🎯", "👑", "🐉"];

// نظام الأسئلة والقلوب
const MAX_QUESTIONS = 50;
let questionsAnswered = 0;
let hearts = 5;
const MAX_HEARTS = 5;
let usedQuestions = [];
let gameOver = false;
let isWinner = false;

// عناصر DOM
const questionTextEl = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const feedbackEl = document.getElementById("feedbackMsg");
const nextBtn = document.getElementById("nextBtn");
const scoreSpan = document.getElementById("scoreValue");
const answeredSpan = document.getElementById("correctCount");
const totalAnsweredSpan = document.getElementById("answeredCount");
const levelNameSpan = document.getElementById("levelName");
const xpBar = document.getElementById("xpBar");
const xpText = document.getElementById("xpText");
const difficultyTag = document.getElementById("difficultyTag");
const heartsDisplay = document.getElementById("heartsDisplay");
const questionCounter = document.getElementById("questionCounter");
const gameOverOverlay = document.getElementById("gameOverOverlay");
const gameOverContent = document.getElementById("gameOverContent");

// هامبورغر
const hamburgerBtn = document.getElementById("hamburgerBtn");
const menuDropdown = document.getElementById("menuDropdown");

// ========== وظائف نظام القلوب ==========
function updateHearts() {
  let heartsHtml = '';
  for (let i = 0; i < MAX_HEARTS; i++) {
    if (i < hearts) {
      heartsHtml += '❤️';
    } else {
      heartsHtml += '<span class="lost-heart">❤️</span>';
    }
  }
  heartsDisplay.innerHTML = heartsHtml;
}

function loseHeart() {
  hearts--;
  updateHearts();
  if (hearts <= 0) {
    endGame(false);
  }
}

// ========== وظائف نظام الأسئلة ==========
function getUniqueQuestion() {
  let available = filterQuestionsByLevel();
  
  available = available.filter(q => {
    const qId = getQuestionId(q);
    return !usedQuestions.includes(qId);
  });
  
  if (available.length === 0) {
    usedQuestions = [];
    available = filterQuestionsByLevel();
    if (currentQuestion) {
      const currentId = getQuestionId(currentQuestion);
      available = available.filter(q => getQuestionId(q) !== currentId);
    }
  }
  
  if (available.length === 0) {
    available = questionsDatabase;
  }
  
  const randomIndex = Math.floor(Math.random() * available.length);
  const question = { ...available[randomIndex] };
  usedQuestions.push(getQuestionId(question));
  
  return question;
}

function getQuestionId(question) {
  return question.text + question.options.join('|');
}

function filterQuestionsByLevel() {
  let currentMinLevel = levelThresholds[currentLevel];
  let maxLevel = levelThresholds[currentLevel + 1] || 999999;
  
  let available = questionsDatabase.filter(q => q.minLevel <= maxLevel);
  
  let sameLevel = available.filter(q => q.minLevel === currentMinLevel);
  if (sameLevel.length > 0) {
    return sameLevel;
  }
  
  if (available.length === 0) {
    return questionsDatabase;
  }
  return available;
}

// ========== وظائف اللعبة الأساسية ==========
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
  
  difficultyTag.innerHTML = `${levelIcons[currentLevel]} مستوى ${levelNames[currentLevel]} ${levelIcons[currentLevel]}`;
}

function updateStats() {
  scoreSpan.textContent = totalScore;
  answeredSpan.textContent = totalCorrect;
  totalAnsweredSpan.textContent = totalAnswered;
  updateLevelUI();
}

function renderOptions() {
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = `${String.fromCharCode(65 + idx)} - ${opt}`;
    btn.classList.add("option-btn");
    btn.setAttribute("data-opt-index", idx);
    btn.addEventListener("click", () => handleAnswer(idx, btn));
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(selected, btnElement) {
  if (answered || gameOver) {
    feedbackEl.innerHTML = "⚠️ لقد أجبت مسبقًا! اضغط على 'سؤال جديد'.";
    return;
  }
  
  const isCorrect = (selected === currentQuestion.correct);
  answered = true;
  selectedIdx = selected;
  totalAnswered++;
  
  if (isCorrect) {
    const pointsGain = 10 + Math.floor(currentLevel * 2.5);
    totalScore += pointsGain;
    totalCorrect++;
    questionsAnswered++;
    
    feedbackEl.innerHTML = `✅ صحيح! +${pointsGain} نقطة 🎉 (مستوى ${levelNames[currentLevel]})`;
    feedbackEl.style.color = "#c6ffb7";
  } else {
    feedbackEl.innerHTML = `❌ خطأ! الإجابة الصحيحة: ${String.fromCharCode(65 + currentQuestion.correct)} - ${currentQuestion.options[currentQuestion.correct]}`;
    feedbackEl.style.color = "#ffb7a0";
    loseHeart();
  }
  
  updateStats();
  updateQuestionCounter();
  
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === currentQuestion.correct) btn.classList.add("correct-highlight");
    if (i === selected && selected !== currentQuestion.correct) btn.classList.add("wrong-highlight");
  });
  
  if (questionsAnswered >= MAX_QUESTIONS && !gameOver) {
    endGame(true);
  }
}

function loadNewQuestion() {
  if (gameOver) return;
  
  currentQuestion = getUniqueQuestion();
  questionTextEl.textContent = currentQuestion.text;
  renderOptions();
  answered = false;
  selectedIdx = -1;
  feedbackEl.innerHTML = `🌟 سؤال من مستوى ${levelNames[currentLevel]} - اختر الإجابة`;
  feedbackEl.style.color = "#ffe1a0";
  nextBtn.disabled = false;
  nextBtn.style.opacity = "1";
  difficultyTag.innerHTML = `${levelIcons[currentLevel]} سؤال ${levelNames[currentLevel]} • متطلب ${currentQuestion.minLevel}+ نقطة`;
}

function nextQuestion() {
  if (gameOver) return;
  if (!answered) {
    feedbackEl.innerHTML = "⚠️ أجب على السؤال أولاً قبل الانتقال!";
    return;
  }
  loadNewQuestion();
}

function updateQuestionCounter() {
  questionCounter.textContent = Math.min(questionsAnswered, MAX_QUESTIONS);
}

// ========== نهاية اللعبة (فوز/خسارة) ==========
function endGame(win) {
  gameOver = true;
  isWinner = win;
  
  nextBtn.disabled = true;
  nextBtn.style.opacity = "0.5";
  
  gameOverOverlay.classList.remove('hidden');
  
  if (win) {
    gameOverContent.innerHTML = `
      <span class="win-icon">🏆</span>
      <h2>🎉 لقد فزت! 🎉</h2>
      <p>
        <strong>مبروك!</strong> لقد أجبت على 50 سؤالاً بنجاح 🥳<br>
        أنت أسطورة كرة القدم الحقيقية! 🌟<br><br>
        📞 تواصل معنا للحصول على جائزتك:
      </p>
      <a href="https://t.me/zezomira1" target="_blank" class="telegram-link">
        💬 اضغط هنا للتواصل عبر تليجرام
      </a>
      <br>
      <button class="play-again-btn" onclick="resetGame()">🔄 العب مرة أخرى</button>
    `;
  } else {
    gameOverContent.innerHTML = `
      <span class="lose-icon">💔</span>
      <h2>😢 للأسف... خسرت!</h2>
      <p>
        لقد نفذت محاولاتك الخمسة 😔<br>
        عدد الأسئلة التي أجبت عليها: <strong>${questionsAnswered}</strong>/50<br><br>
        💪 لا تيأس! حاول مرة أخرى وستفوز إن شاء الله!
      </p>
      <button class="play-again-btn" onclick="resetGame()">🔄 حاول مرة أخرى</button>
    `;
  }
}

// ========== إعادة ضبط اللعبة ==========
function resetGame() {
  totalScore = 0;
  totalAnswered = 0;
  totalCorrect = 0;
  questionsAnswered = 0;
  hearts = MAX_HEARTS;
  usedQuestions = [];
  gameOver = false;
  isWinner = false;
  currentLevel = 0;
  
  gameOverOverlay.classList.add('hidden');
  updateHearts();
  updateStats();
  updateQuestionCounter();
  loadNewQuestion();
  feedbackEl.innerHTML = "✨ تمت إعادة الضبط! ابدأ التحدي من جديد.";
  feedbackEl.style.color = "#ffe1a0";
  nextBtn.disabled = false;
  nextBtn.style.opacity = "1";
}

// ========== الأحداث ==========
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
    if (action === "reset") resetGame();
    if (action === "info") {
      alert(`🏆 تحدي كأس العالم 2026 🏆\n\n• أجب على 50 سؤالاً للفوز بالجائزة 🎁\n• كل إجابة صحيحة تمنح نقاطاً حسب مستواك\n• لديك 5 محاولات فقط (قلوب) ❤️\n• كل إجابة خاطئة تخسرك قلباً\n• المستويات: مبتدئ → متوسط → خبير → أسطورة → خرافي\n• أكثر من 100 سؤال متنوع\n\n🌍 المكسيك - كندا - الولايات المتحدة 2026`);
    }
    if (action === "credit") alert("📚 الأسئلة مستمدة من ملف '+90.pdf' الذي يحتوي على أكثر من 100 سؤال من جميع المستويات (مبتدئ، متوسط، خبير، أسطورة، خرافي).");
    menuDropdown.classList.add("hidden");
  });
});

// ========== بدء اللعبة ==========
resetGame();