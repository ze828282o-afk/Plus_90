const questions = [
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

const TOTAL_QUESTIONS = questions.length;

const scoreEl = document.getElementById("score");
const qcountEl = document.getElementById("qcount");
const levelEl = document.getElementById("level");
const correctCountEl = document.getElementById("correctCount");
const qmeta = document.getElementById("qmeta");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const bar = document.getElementById("bar");
const overlay = document.getElementById("overlay");
const rewardOverlay = document.getElementById("rewardOverlay");
const finalScore = document.getElementById("finalScore");
const resultMsg = document.getElementById("resultMsg");
const resultTitle = document.getElementById("resultTitle");
const heartsEl = document.getElementById("hearts");
const livesText = document.getElementById("livesText");
const top5El = document.getElementById("top5");
const gameInfo = document.getElementById("gameInfo");
const timerText = document.getElementById("timerText");

let idx = 0, score = 0, correctCount = 0, streak = 0, lives = 5, pool = [], current = null, locked = false;
let timer = null, timeLeft = 10;

gameInfo.textContent = `عدد الأسئلة: ${TOTAL_QUESTIONS}، 5 محاولات، والوقت 10 ثواني لكل سؤال، والجائزة عند 50 إجابة صحيحة.`;

function getLeaderboard() {
  return JSON.parse(localStorage.getItem("leaderboard")) || [];
}

function saveLeaderboard(name, scoreValue) {
  const leaderboard = getLeaderboard();
  leaderboard.push({ name: name || "Player", score: scoreValue, date: new Date().toISOString() });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard.slice(0, 20)));
  renderTop5();
}

function renderTop5() {
  const leaderboard = getLeaderboard().slice(0, 5);
  top5El.innerHTML = "";

  if (!leaderboard.length) {
    top5El.innerHTML = `<div class="lb-row"><span>لا يوجد لاعبين بعد</span><b>0</b></div>`;
    return;
  }

  leaderboard.forEach((u, i) => {
    const row = document.createElement("div");
    row.className = "lb-row";
    row.innerHTML = `<span>${i + 1}. ${u.name}</span><b>${u.score}</b>`;
    top5El.appendChild(row);
  });
}

function renderHearts() {
  heartsEl.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const s = document.createElement("span");
    s.className = "heart" + (i < lives ? "" : " lost");
    s.textContent = "♥";
    heartsEl.appendChild(s);
  }
  livesText.textContent = `${lives} محاولات`;
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 10;
  timerText.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerText.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function handleTimeout() {
  if (locked) return;
  locked = true;
  lives--;
  renderHearts();

  setTimeout(() => {
    if (lives <= 0) finishLose();
    else {
      idx++;
      if (idx >= TOTAL_QUESTIONS) finishGame();
      else nextQuestion();
    }
  }, 500);
}

window.startGame = function () {
  document.getElementById('startScreen').classList.add('hide');
  document.getElementById('gameScreen').classList.remove('hide');
  overlay.style.display = 'none';
  rewardOverlay.style.display = 'none';
  pool = [...questions].sort(() => Math.random() - 0.5);
  idx = 0;
  score = 0;
  correctCount = 0;
  streak = 0;
  lives = 5;
  renderHearts();
  nextQuestion();
};

window.restartGame = function () {
  overlay.style.display = 'none';
  rewardOverlay.style.display = 'none';
  document.getElementById('startScreen').classList.add('hide');
  document.getElementById('gameScreen').classList.remove('hide');
  startGame();
};

function nextQuestion() {
  locked = false;
  stopTimer();

  if (idx >= TOTAL_QUESTIONS) {
    finishGame();
    return;
  }

  current = pool[idx % pool.length];
  scoreEl.textContent = score;
  qcountEl.textContent = `${idx + 1} / ${TOTAL_QUESTIONS}`;
  levelEl.textContent = Math.floor(score / 100);
  correctCountEl.textContent = correctCount;
  qmeta.textContent = `السؤال ${idx + 1}`;
  questionEl.textContent = current.text;
  renderOptions(current.options);
  bar.style.width = `${(idx / TOTAL_QUESTIONS) * 100}%`;
  renderHearts();
  startTimer();
}

function renderOptions(opts) {
  optionsEl.innerHTML = "";
  opts.forEach((o, i) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.textContent = o;
    b.onclick = () => answer(i, b);
    optionsEl.appendChild(b);
  });
}

function answer(i, b) {
  if (locked) return;
  locked = true;
  stopTimer();

  const buttons = [...document.querySelectorAll(".opt")];
  buttons[current.correct].classList.add("correct");

  if (i === current.correct) {
    score += 10;
    correctCount++;
    streak++;
    scoreEl.textContent = score;
    correctCountEl.textContent = correctCount;
    levelEl.textContent = Math.floor(score / 100);

    setTimeout(() => {
      idx++;
      if (idx >= TOTAL_QUESTIONS) finishGame();
      else nextQuestion();
    }, 650);
  } else {
    b.classList.add("wrong");
    streak = 0;
    lives--;
    renderHearts();

    setTimeout(() => {
      if (lives <= 0) finishLose();
      else {
        idx++;
        if (idx >= TOTAL_QUESTIONS) finishGame();
        else nextQuestion();
      }
    }, 650);
  }
}

window.use50 = function () {
  if (locked) return;
  const buttons = [...document.querySelectorAll(".opt")];
  const wrong = buttons.map((_, i) => i).filter(i => i !== current.correct).sort(() => Math.random() - 0.5).slice(0, 2);
  wrong.forEach(i => buttons[i].style.visibility = "hidden");
};

window.skipQuestion = function () {
  if (locked) return;
  stopTimer();
  idx++;
  if (idx >= TOTAL_QUESTIONS) finishGame();
  else nextQuestion();
};

window.shuffleOptions = function () {
  if (locked) return;
  renderOptions([...current.options].sort(() => Math.random() - 0.5));
};

function finishGame() {
  stopTimer();
  const name = prompt("اكتب اسمك للـ leaderboard:") || "Player";
  saveLeaderboard(name, correctCount);

  if (correctCount >= 50) {
    rewardOverlay.style.display = "flex";
  } else {
    overlay.style.display = "flex";
    resultTitle.textContent = "شكرًا على اللعب";
    finalScore.textContent = `${correctCount} / ${TOTAL_QUESTIONS}`;
    resultMsg.textContent = "مستواك ممتاز، ومش بعيد عن الفوز. كل محاولة هتقربك أكتر من الجائزة.";
  }
}

function finishLose() {
  stopTimer();
  overlay.style.display = "flex";
  resultTitle.textContent = "انتهت المحاولات";
  finalScore.textContent = `${correctCount} / ${TOTAL_QUESTIONS}`;
  resultMsg.textContent = correctCount >= 50
    ? "مبروك! حصلت على الجائزة الخاصة."
    : "لا تحبط، مستواك قوي جدًا. أعد المحاولة وستصل للإنجاز.";
}

renderHearts();
renderTop5();