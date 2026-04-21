/* ==============================================
   PARISH WEBSITE — SCRIPT
   Полные переводы без сокращений
   ============================================== */

const T = {
  ua: {
    brandName: "Парафія Успіння Пресвятої Богородиці",
    brandSub: "Греко-католицька парафія · Кишинів",
    navHistory: "Історія парафії",
    navAbout: "Про парафію",
    navPriest: "Настоятель",
    navPlanner: "План 2026",
    navPrayers: "Молитви",
    navResources: "Ресурси",
    navSacraments: "Таїнства",
    navLife: "Життя парафії",
    navGallery: "Галерея",
    navSchedule: "Розклад",
    navDonate: "Пожертвуйте",
    navContacts: "Контакти",
    headerCta: "Зв'язатись",
    prayerStrip: "Щоденна Літургія: <strong>09:00</strong> · Неділя: <strong>09:00</strong> & <strong>10:30</strong> · <a href=\"#schedule\">Повний розклад</a>",

    heroWelcome: "Ласкаво просимо",
    heroTitle: "Парафія Успіння<br>Пресвятої Богородиці",
    heroSubtitle: "Місце молитви, Божої присутності, духовної надії та живої спільноти у серці Кишинева",
    heroCta: "Дізнатися більше",
    heroContact: "Розклад богослужінь",

    aboutLabel: "Про парафію",
    aboutTitle: "Духовний дім молитви, літургії та братерства",
    aboutP1: "Парафія Успіння Пресвятої Богородиці є греко-католицькою спільнотою візантійського обряду в Кишиневі, де поєднуються вірність церковній традиції, відкрите серце до людини та жива парафіяльна присутність.",
    aboutP2: "Тут вірні збираються на Божественну Літургію, молитву, катехизацію, духовні зустрічі та братнє спілкування. Парафія прагне бути місцем, де людина знаходить мир, підтримку, правду Євангелія та шлях до внутрішнього оновлення.",
    aboutP3: "Наша спільнота дбає про дорослих, молодь, дітей, сім'ї, духовний супровід, соціальне служіння та свідчення християнської надії у сучасному світі.",

    statYear: "рік служіння",
    statRite: "Візантійський",
    statRiteLabel: "обряд",
    statCityTitle: "Кишинів",
    statCity: "Молдова",

    priestLabel: "Настоятель парафії",
    priestName: "о. Ігор Плевський",
    priestSince: "Служить у парафії з 13 червня 2013 року",
    priestP1: "Отець Ігор звершує богослужіння, проводить катехизацію, духовно супроводжує вірних та служить парафіяльній спільноті у щоденних і святкових подіях церковного життя.",
    priestP2: "Його пастирське служіння спрямоване на те, щоб кожна людина відчула себе прийнятою, почутою і укріпленою у вірі, а парафія ставала місцем молитви, миру і відновлення серця.",
    priestP3: "Парафія під його проводом прагне поєднувати літургійну глибину, людське співчуття, духовну тверезість та відкритість до потреб сучасної людини.",

    plannerLabel: "Пастирська програма",
    plannerTitle: "План життя парафії на 2026 рік",
    plannerIntro: "Рік молитви, формації, єдності та служіння ближнім",
    plan1Title: "Щоденно",
    plan1a: "Божественна Літургія — 09:00",
    plan1b: "Особиста і спільна молитва",
    plan1c: "Духовний супровід за потребою",
    plan2Title: "Щотижня",
    plan2a: "Недільні Божественні Літургії",
    plan2b: "Катехиза для дітей та дорослих",
    plan2c: "Молодіжні та парафіяльні зустрічі",
    plan3Title: "Щомісяця",
    plan3a: "Вечір християнського кіно",
    plan3b: "Lectio Divina / духовний вечір",
    plan3c: "Сповідь і духовні розмови",
    plan4Title: "Протягом року",
    plan4a: "Великопосні реколекції",
    plan4b: "Дні поминання померлих",
    plan4c: "Святкові парафіяльні події",
    plan4d: "Соціальне та милосердне служіння",

    resourcesLabel: "Духовні ресурси",
    resourcesTitle: "Молитва, Писання, новини та церковне життя",
    bibleTitle: "Святе Письмо онлайн",
    bibleText: "Повний текст Святого Письма для читання, молитви та щоденного духовного роздуму.",
    bibleBtn: "Читати",
    calTitle: "Церковний календар",
    calText: "Літургійний календар із церковними святами, читаннями та ритмом церковного року.",
    calBtn: "Відкрити",
    vatTitle: "Vatican News",
    vatText: "Новини Вселенської Церкви, Святішого Отця та життя Католицької спільноти у світі.",
    vatBtn: "Відкрити",
    moldTitle: "Католицька Церква в Молдові",
    moldText: "Новини, події та офіційна інформація про католицьке життя в Молдові.",
    moldBtn: "Відкрити",

    sacramentsLabel: "Літургійне життя",
    sacramentsTitle: "Таїнства та Богослужіння",
    sac1Title: "Божественна Літургія",
    sac1Text: "Євхаристія є серцем парафіяльного життя, джерелом сили, миру і єдності для всієї спільноти.",
    sacVespersTitle: "Вечірня",
    sacVespersText: "Вечірнє богослужіння, що освячує завершення дня та дарує мир і спокій.",
    sacMatinsTitle: "Утреня",
    sacMatinsText: "Ранкова молитва прослави Бога на початку нового дня.",
    sacConfessionTitle: "Сповідь",
    sacConfessionText: "Таїнство Покаяння для духовного очищення, прощення гріхів та примирення з Богом.",

    lifeLabel: "Парафіяльне життя",
    lifeTitle: "Спільнота, формація та служіння",
    life1Title: "Катехизація",
    life1p: "Навчання у вірі допомагає глибше пізнавати Бога, зрозуміти Церкву і жити Євангелієм у щоденності.",
    life2Title: "Міністранти",
    life2p: "Служіння при вівтарі виховує відповідальність, пошану до святині та любов до літургії.",
    life3Title: "Екуменічний діалог",
    life3p: "Зустрічі та молитва з іншими християнами свідчать про пошук єдності, взаємної поваги та миру.",
    life4Title: "Молитва за народ і мир",
    life4p: "Парафія активно співпрацює з Посольством України та проводить молебні служби за мир в Україні, підтримуючи українську спільноту Молдови у молитві, надії та пастирській турботі.",
    life5Title: "Соціальне служіння",
    life5p: "Милосердя до ближнього є живим свідченням віри, коли Церква стає місцем підтримки, відновлення і надії.",
    life6Title: "Молодь та студенти",
    life6p: "Діалог з молодим поколінням допомагає говорити мовою надії, відповідальності та внутрішньої свободи у Христі.",

    galleryLabel: "Фотогалерея",
    galleryTitle: "Моменти віри, молитви і спільноти",

    prayerCardsLabel: "Молитовна скарбниця",
    prayerCardsTitle: "Молитви на кожен день",
    prayerCardsSubtext: "Відкрийте картку — і молитовний текст буде з вами. Зручно для молитви вдома і під час богослужіння.",
    cardMorningTitle: "Ранкові молитви",
    cardMorningDesc: "Молитви на початок дня",
    cardEveningTitle: "Вечірні молитви",
    cardEveningDesc: "Молитви на сон грядущий",
    cardMassTitle: "Чин Святої Меси",
    cardMassDesc: "Повний текст Літургії онлайн",
    cardMassBtn: "Відкрити →",

    cardIntentionTitle: "Молитовне намірення",
    cardIntentionDesc: "Напишіть намірення — ми помолимося за вас на Літургії",
    intentNameLabel: "Ваше ім'я (необов'язково)",
    intentForLabel: "За кого молитись (необов'язково)",
    intentTextLabel: "Ваше намірення",
    intentTextPh: "Напишіть тут ваше молитовне намірення...",
    intentContactLabel: "Контакт для відповіді (Telegram / Viber / Email) — необов'язково",
    intentSubmitBtn: "Надіслати намірення",
    intentPrivacy: "Ваше намірення буде надіслано настоятелю у приватний Telegram. Дані не публікуються.",
    intentSending: "Надсилаємо…",
    intentSuccess: "Дякуємо! Ваше намірення отримано. Ми будемо молитися за вас.",
    intentError: "Не вдалося надіслати. Спробуйте ще раз або зателефонуйте: +373 78 377 337.",
    intentErrEmpty: "Будь ласка, напишіть ваше намірення.",
    intentErrShort: "Намірення занадто коротке. Напишіть, будь ласка, детальніше.",

    morningPrayerText: `<h4>Ранкові молитви</h4>
<p><em>Отче наш... Радуйся Маріє...</em></p>
<p>✝ Прийдіть, заспіваймо Господеві, радісно вигукнімо скелі нашого спасіння; прийдімо перед лице Його з хвалою, піснями вигукнімо Йому. Бо Господь — великий Бог і великий Цар над усіма богами. В руці Його — глибини землі, і вершини гір — Його; Його — море, і Він сотворив його, і сушу утворили руки Його. Прийдіть, поклонімося і впадімо ниць, преклонімо коліна перед лицем Господа, Творця нашого; бо Він — Бог наш, і ми — люди пасовища Його і вівці руки Його.</p>
<p>✝ Славлю Тебе, Боже мій, і люблю Тебе всім серцем. Дякую Тобі за те, що Ти мене сотворив, зробив мене християнином і зберіг від смерті цієї ночі. Тобі віддаю всі мої сьогоднішні вчинки — нехай будуть угодні Тобі і служать Твоїй славі. Збережи мене від гріха і всякого зла. Нехай благодать Твоя завжди перебуває зі мною і моїми близькими. Амінь.</p>
<p>✝ Господи, Боже Всемогутній, Ти дозволив мені дожити до нового дня: зміцни мене благодаттю Твоєю. Допоможи мені сьогодні в кожному ближньому побачити гідність дітей Божих і вміти виявити їм любов. Допоможи мені творити навколо себе атмосферу доброзичливості та радості. Нехай мої думки і вчинки виражають волю Твою. Через Христа, Господа нашого. Амінь.</p>
<p>✝ Боже! Ти — Бог мій, Тебе від ранньої зорі шукаю я; Тебе прагне душа моя, за Тобою тужить тіло моє в землі пустій, висохлій і безводній, щоб бачити силу Твою і славу Твою, як я бачив Тебе у святилищі: бо милість Твоя краща, ніж життя. Уста мої прославлять Тебе. Так благословлятиму Тебе в житті моєму; в ім'я Твоє підніму руки мої. Як туком і оливою насичується душа моя, і радісними устами хвалять Тебе уста мої, коли згадую про Тебе на ложі моєму, розмірковую про Тебе в нічні варти, бо Ти — поміч моя, і в тіні крил Твоїх я радіюватиму; до Тебе прилипла душа моя; правиця Твоя підтримує мене.</p>
<p>✝ Боже мій, Ти — безпомилкова Істина, я вірую в усе, що Ти нам відкрив, і в що свята Церква велить нам вірити. Вірую в Тебе, єдиного істинного Бога в трьох рівних і самосущих Особах: Отця і Сина, і Святого Духа. Вірую в Ісуса Христа, Сина Божого, який заради нас став людиною, помер на хресті і воскрес, Який кожній людині воздасть по заслугах — нагородить або покарає. Бажаю завжди жити цією вірою: Господи, зміцни мою віру.</p>
<p>✝ Боже, уповаю на те, що за обітницею Твоєю і заслугами нашого Спасителя, Ісуса Христа, Ти за добротою Твоєю даруєш мені вічне життя і благодать, необхідну для того, щоб я заслужив це життя добрими вчинками, які я зобов'язаний і бажаю творити. Господи, зроби, щоб я міг радіти Тобою у вічному житті.</p>
<p>✝ Боже, люблю Тебе всім серцем і понад усе, бо Ти — безкінечне благо і вічне наше щастя! Люблю Тебе, Боже, в моєму ближньому — зроби, щоб я ще більше полюбив Тебе.</p>
<p>✝ Боже мій, я всім серцем скорблю про мої гріхи, бо, вчинивши гріх, я заслужив Твоє покарання. Каюся в них, бо образив Тебе, безкінечно благого і найгіднішого любові. З Твоєю допомогою я зобов'язуюсь надалі уникати спокус, щоб більше не ображати Тебе. Господи! Зміцни мене!</p>
<p>✝ Боже, Господи і Творче всесвіту, я віддаю Тобі всі мої сьогоднішні праці, і через них хочу виявити мою любов до Тебе, до Церкви Твоєї, до моєї родини і всього світу. Допоможи мені виконувати їх з радістю, так, ніби я беру участь у Твоїй справі творення. Нехай ця праця послужить освяченню моєї душі і благу інших людей. Я приймаю всі пов'язані з нею страждання як співпричастя хресту Ісуса. О Господи мій, Твоєму Всеблагому Серцю я доручаю всіх безробітних, злиденних і нещасних людей. Святий Йосипе, Маріє, мій ангеле-охоронцю і всі святі, моліться за мене і за всіх, хто трудиться разом зі мною. Амінь.</p>
<p>✝ Благослови, Господи, наших рідних, друзів, знайомих, команду «Оптима Фіде» та бенефіціарів, нашу Єпархію, священиків, Єпископа, вірян і подай нам усім спасіння, мир, радість, здоров'я і вічне щастя з усіма Твоїми святими на небі. Амінь.</p>`,

    eveningPrayerText: `<h4>Вечірні молитви</h4>
<p><em>Отче наш... Радуйся Маріє...</em></p>
<p>✝ О Боже, ось минув ще один день мого життя. Кожна мить, прожита мною, була подарована Тобою: чи я працював, чи відпочивав, спілкувався з людьми чи був сам на сам із собою, радів чи сумував — все було Твоїм даром.</p>
<p>✝ Дякую Тобі за все, що мені довелось пізнати і пережити сьогодні. Ти один знаєш, чи зумів я виконати Твою волю. Прости мені все те, чого я не доглянув, про що забув, за все, що не було по волі Твоїй. Помилуй мене, грішного. Дозволь, нехай нічний відпочинок примножить у мені сили, щоб я міг краще прожити день завтрашній.</p>
<p>✝ Опікуйся всіма сплячими і тими, хто трудиться цієї ночі. Все майбутнє моє і моїх близьких ввіряю Твоїй милосердній турботі, наш Боже і Отче. Амінь.</p>
<p>✝ Всемогутній вічний Боже, всім серцем дякую Тобі за всі благодіяння і благодать сьогоднішнього дня; за всі смутки і радощі, за досягнення і невдачі. Все прийми заради великої слави Твоєї. Прийми всі угодні Тобі мої вчинки, молитви, тихі зітхання, з вдячністю перенесені страждання. Прийми моє шанобливе ставлення до образу Твого в кожній людині, турботу про те, щоб завжди слідувати заповідям Твоїм. Прийми мій сон, моє бдіння і кожну мить ночі, що настає.</p>
<p>✝ Тебе, Маріє, Посередниця наша і Помічнице, вас, небесні Ангели, мій Ангеле-охоронцю і всі святі на небі, всім серцем дякую за турботу і допомогу. Випросіть у Господа благословення для мене і моїх близьких на цю ніч. Амінь.</p>
<p><em>Отче наш... Радуйся Маріє...</em></p>
<p>✝ Святий Янголе Божий, охоронцю і покровителю душі моєї! Перебувай завжди зі мною, вранці, ввечері, вдень і вночі, спрямовуй мене на шлях заповідей Божих і відгони від мене всі спокуси зла. Амінь.</p>
<p>✝ Згадай, о всемилостива Діво Маріє, що споконвіку ніхто не чув про те, щоб хтось із тих, хто до Тебе вдавався, просив Твоєї допомоги, шукав Твого заступництва, був Тобою залишений. Сповнений такою надією, приходжу до Тебе, Діво і Мати Всевишнього, зі смиренням і каяттям у своїх гріхах. Не знехтуй моїми словами, о Мати Предвічного Слова, і прихильно почуй моє прохання. Амінь.</p>
<p>✝ Господи, Царю Небесний, Духу істини і Душе душі моєї, поклоняюся Тобі і молю Тебе: настав мене, зміцни мене, будь моїм провідником і вчителем, навчи мене того, що мені слід робити. Повідай мені, Господи, всі повеління Твої, я ж обіцяю їх виконати і з любов'ю прийму все, що мені буде послано Тобою. Одного тільки прошу у Тебе: навчи мене завжди творити волю Твою. Амінь.</p>
<p>✝ Прийми, Господи, всю свободу. Візьми пам'ять, розум і волю мою. Все, що маю або чим розпоряджаюся, все мені Тобою даровано, і тому все віддаю в повне Твоє розпорядження. Єдино любов Твою і благодать Твою мені даруй, і буду багатства сповнений, і ніколи не попрошу я нічого іншого. Амінь.</p>
<p>✝ Вічний спокій даруй померлим, Господи, нашим родичам і померлим від залежностей: наркотичної, алкогольної, тютюнокуріння та ігроманії і нехай сяє їм вічне світло. Нехай спочивають у мирі. Амінь.</p>
<p>✝ Благослови, Господи, наших рідних, друзів, знайомих, команду «Оптима Фіде» та бенефіціарів, нашу Єпархію, священиків, Єпископа, вірян і подай нам усім спасіння, мир, радість, здоров'я і вічне щастя з усіма Твоїми святими на небі. Амінь.</p>
<p><em>Отче наш... Радуйся Маріє...</em></p>
<p><em>Радуйся Маріє...</em></p>
<p><em>Хваліте Господа, бо Він благий, бо повік милість Його (Пс 117:1)</em></p>`,

    scheduleLabel: "Розклад",
    scheduleTitle: "Богослужіння",
    schDay: "День",
    schTime: "Час",
    schEvent: "Богослужіння",
    schMonSat: "Понеділок – Субота",
    schSunday: "Неділя та Свята",
    schLiturgy: "Божественна Літургія",
    schLiturgySun1: "Божественна Літургія",
    schLiturgySun2: "Божественна Літургія",
    schNote: "Сповідь проводиться перед або після Літургії, або за домовленістю з настоятелем.",

    donateLabel: "Підтримка парафії",
    donateTitle: "Пожертвуйте",
    donateText: "Ваша пожертва допомагає підтримувати храм, катехитичні програми та благодійні проєкти нашої спільноти.",
    btnCopy: "Копіювати",
    btnSwift: "📋 Реквізити SWIFT / Wire Transfer",
    swiftBankLabel: "Банк",
    swiftBenLabel: "Отримувач",
    swiftAddrLabel: "Адреса банку",
    paypalOr: "або",
    paypalBtn: "Пожертвувати через PayPal",

    contactsLabel: "Контакти",
    contactsTitle: "Завжди раді вам",
    contAddressTitle: "Адреса",
    contPhoneTitle: "Телефон / Viber / Telegram",
    contSocialTitle: "Соціальні мережі",
    contFbBtn: "Сторінка парафії у Facebook",

    candleLabelOff: "Натисніть, щоб запалити свічку",
    candleLabelOn: "Свічка запалена. Нехай молитва досягне Бога.",

    historyLabel: "Наша історія",
    historyTitle: "Історія парафії",
    historySubtitle: "Історія, проваджена Божим Провидінням",
    historyBody: `<p>У 1994 році, з ініціативи кардинала Любомира Гузара, до Молдови прибув священник о. Роман Поправка, щоб дбати про духовне життя місцевої греко-католицької спільноти. Його служіння стало початком живої присутності Церкви, знаком того, що Господь Сам піклується про Свій народ, посилаючи пастирів туди, де вони найбільше потрібні. У 1999 році декретом Апостольського адміністратора Антона Коші він був призначений відповідальним за душпастирство греко-католиків у країні.</p><p>У 2006 році греко-католицька спільнота була офіційно зареєстрована державою. Це стало ще одним свідченням того, як Боже Провидіння відкриває дороги там, де їх, здавалося б, немає. Але навіть без власного храму життя Церкви тривало: у неділі Божественна Літургія звершувалася в каплиці «Матері Доброго Пораду» при кафедральному соборі «Божественного Провидіння». Там збиралися вірні, щоб разом молитися, зростати у вірі та відчувати себе однією родиною у Христі.</p><p>З 13 червня 2013 року на парафії розпочав служіння як сотрудник-вікарій священник о. Ігор Плевський. Його душпастирський шлях став продовженням цього Божого діла. Через його служіння поглиблювалося духовне життя спільноти, розширювалася пастирська опіка, зростала кількість людей, які шукають Бога. Поступово сформувалася також друга спільнота — з місцевого населення, що стало явним знаком того, що зерно віри приносить плід і вкорінюється на цій землі. Його служіння стало живим свідченням жертовної любові, посвяти та вірності покликанню.</p><p>У 2023 році, з Божої ласки, вдалося придбати квартиру, частину якої після праці та старання було переоблаштовано в каплицю. Це стало справжнім даром — місцем, де щоденно возноситься молитва, де людина зустрічається з Богом, де народжується і зміцнюється віра.</p><p>28 вересня 2024 року каплицю було урочисто освячено єпископом Степаном Сусом у присутності єпископа Антона Коші. Цей день став радісним підтвердженням того, що Сам Господь будує Свою Церкву, збираючи людей, благословляючи їхній шлях і освячуючи їхні труди.</p><p>Сьогодні парафія продовжує зростати й розвиватися, об'єднуючи людей різних культур і національностей. Вона стала живим духовним центром, де через молитву, Божественну Літургію та служіння ближньому відкривається дія Божої благодаті.</p><p class="history-final">Це історія, в якій ясно видно Боже Провидіння. Історія, написана жертовністю священників і вірою людей. Історія живої Церкви, яку веде Сам Господь.</p>`,

    footerName: "Парафія Успіння Пресвятої Богородиці",
    footerCity: "Кишинів, Молдова",
    footerCopy: "© 2026 Парафія Успіння Пресвятої Богородиці"
  },

  en: {
    brandName: "Dormition of the Mother of God Parish",
    brandSub: "Greek Catholic Parish · Chisinau",
    navHistory: "Parish History",
    navAbout: "About Us",
    navPriest: "Priest",
    navPlanner: "Plan 2026",
    navPrayers: "Prayers",
    navResources: "Resources",
    navSacraments: "Sacraments",
    navLife: "Parish Life",
    navGallery: "Gallery",
    navSchedule: "Schedule",
    navDonate: "Donate",
    navContacts: "Contacts",
    headerCta: "Contact Us",
    prayerStrip: "Daily Liturgy: <strong>09:00</strong> · Sunday: <strong>09:00</strong> & <strong>10:30</strong> · <a href=\"#schedule\">Full schedule</a>",

    heroWelcome: "Welcome",
    heroTitle: "Dormition of the<br>Mother of God Parish",
    heroSubtitle: "A place of prayer, God's presence, spiritual hope and living community in the heart of Chisinau",
    heroCta: "Learn More",
    heroContact: "Service Schedule",

    aboutLabel: "About the Parish",
    aboutTitle: "A Spiritual Home of Prayer, Liturgy and Brotherhood",
    aboutP1: "The Parish of the Dormition of the Mother of God is a Greek Catholic community of the Byzantine rite in Chisinau, where fidelity to church tradition, an open heart to people, and a living parish presence are united.",
    aboutP2: "Here the faithful gather for the Divine Liturgy, prayer, catechesis, spiritual meetings, and brotherly fellowship. The parish strives to be a place where a person finds peace, support, the truth of the Gospel, and a path to inner renewal.",
    aboutP3: "Our community cares for adults, youth, children, families, spiritual accompaniment, social ministry, and the witness of Christian hope in the modern world.",

    statYear: "year of service",
    statRite: "Byzantine",
    statRiteLabel: "rite",
    statCityTitle: "Chisinau",
    statCity: "Moldova",

    priestLabel: "Parish Priest",
    priestName: "Fr. Igor Plevschi",
    priestSince: "Serving the parish since June 13, 2013",
    priestP1: "Father Igor celebrates divine services, conducts catechesis, spiritually accompanies the faithful, and serves the parish community in the daily and festive events of church life.",
    priestP2: "His pastoral ministry is aimed at ensuring that every person feels accepted, heard, and strengthened in faith, and that the parish becomes a place of prayer, peace, and renewal of heart.",
    priestP3: "Under his leadership, the parish strives to combine liturgical depth, human compassion, spiritual sobriety, and openness to the needs of modern people.",

    plannerLabel: "Pastoral Program",
    plannerTitle: "Parish Life Plan for 2026",
    plannerIntro: "A year of prayer, formation, unity, and service to neighbors",
    plan1Title: "Daily",
    plan1a: "Divine Liturgy — 09:00",
    plan1b: "Personal and communal prayer",
    plan1c: "Spiritual guidance as needed",
    plan2Title: "Weekly",
    plan2a: "Sunday Divine Liturgies",
    plan2b: "Catechesis for children and adults",
    plan2c: "Youth and parish meetings",
    plan3Title: "Monthly",
    plan3a: "Evening of Christian Cinema",
    plan3b: "Lectio Divina / spiritual evening",
    plan3c: "Confession and spiritual conversations",
    plan4Title: "Throughout the year",
    plan4a: "Lenten retreats",
    plan4b: "Days of Commemoration of the Deceased",
    plan4c: "Festive parish events",
    plan4d: "Social and charitable ministry",

    resourcesLabel: "Spiritual Resources",
    resourcesTitle: "Prayer, Scripture, News and Church Life",
    bibleTitle: "Holy Scripture Online",
    bibleText: "The full text of the Holy Scripture for reading, prayer, and daily spiritual reflection.",
    bibleBtn: "Read",
    calTitle: "Church Calendar",
    calText: "Liturgical calendar with church feasts, readings, and the rhythm of the church year.",
    calBtn: "Open",
    vatTitle: "Vatican News",
    vatText: "News of the Universal Church, the Holy Father, and the life of the Catholic community in the world.",
    vatBtn: "Open",
    moldTitle: "Catholic Church in Moldova",
    moldText: "News, events, and official information about Catholic life in Moldova.",
    moldBtn: "Open",

    sacramentsLabel: "Liturgical Life",
    sacramentsTitle: "Sacraments and Divine Services",
    sac1Title: "Divine Liturgy",
    sac1Text: "The Eucharist is the heart of parish life, a source of strength, peace, and unity for the entire community.",
    sacVespersTitle: "Vespers",
    sacVespersText: "Evening service that sanctifies the end of the day and grants peace and tranquility.",
    sacMatinsTitle: "Matins",
    sacMatinsText: "Morning prayer of praise to God at the beginning of a new day.",
    sacConfessionTitle: "Confession",
    sacConfessionText: "The Sacrament of Penance for spiritual purification, forgiveness of sins, and reconciliation with God.",

    lifeLabel: "Parish Life",
    lifeTitle: "Community, Formation and Service",
    life1Title: "Catechesis",
    life1p: "Learning in faith helps to know God more deeply, understand the Church, and live the Gospel in daily life.",
    life2Title: "Altar Servers",
    life2p: "Serving at the altar fosters responsibility, reverence for the sanctuary, and love for the liturgy.",
    life3Title: "Ecumenical Dialogue",
    life3p: "Meetings and prayer with other Christians testify to the search for unity, mutual respect, and peace.",
    life4Title: "Prayer for Peace",
    life4p: "The parish actively cooperates with the Embassy of Ukraine and conducts prayer services for peace in Ukraine, supporting the Ukrainian community in Moldova in prayer, hope, and pastoral care.",
    life5Title: "Social Ministry",
    life5p: "Mercy to one's neighbor is a living witness of faith, when the Church becomes a place of support, restoration, and hope.",
    life6Title: "Youth & Students",
    life6p: "Dialogue with the younger generation helps to speak the language of hope, responsibility, and inner freedom in Christ.",

    galleryLabel: "Photo Gallery",
    galleryTitle: "Moments of Faith, Prayer and Community",

    prayerCardsLabel: "Prayer Treasury",
    prayerCardsTitle: "Daily Prayers",
    prayerCardsSubtext: "Open the card — and the prayer text will be with you. Convenient for praying at home and during services.",
    cardMorningTitle: "Morning Prayers",
    cardMorningDesc: "Prayers to start the day",
    cardEveningTitle: "Evening Prayers",
    cardEveningDesc: "Prayers before sleep",
    cardMassTitle: "Order of the Mass",
    cardMassDesc: "Full text of the Liturgy online",
    cardMassBtn: "Open →",

    cardIntentionTitle: "Prayer Intention",
    cardIntentionDesc: "Share your intention — we will pray for you at Liturgy",
    intentNameLabel: "Your name (optional)",
    intentForLabel: "Whom to pray for (optional)",
    intentTextLabel: "Your intention",
    intentTextPh: "Write your prayer intention here...",
    intentContactLabel: "Contact for reply (Telegram / Viber / Email) — optional",
    intentSubmitBtn: "Send intention",
    intentPrivacy: "Your intention will be sent privately to the parish priest via Telegram. It will not be published.",
    intentSending: "Sending…",
    intentSuccess: "Thank you! Your intention has been received. We will pray for you.",
    intentError: "Could not send. Please try again or call us: +373 78 377 337.",
    intentErrEmpty: "Please write your intention.",
    intentErrShort: "The intention is too short. Please write a little more detail.",

    morningPrayerText: `<h4>Morning Prayers</h4>
<p><em>Our Father... Hail Mary...</em></p>
<p>✝ Come, let us sing to the Lord, let us shout with joy to the Rock of our salvation; let us approach His presence with thanksgiving, and shout joyfully to Him. For the Lord is a great God, and a great King above all gods. In His hand are the deep places of the earth, and the mountain peaks are His; the sea is His, for He made it, and His hands formed the dry land. Come, let us worship and bow down, let us kneel before the Lord our Maker; for He is our God, and we are the people of His pasture, and the sheep of His hand.</p>
<p>✝ I praise You, my God, and I love You with all my heart. I thank You for creating me, for making me a Christian, and for keeping me safe from death during this night. I offer You all my actions of this day — may they be pleasing to You and serve Your glory. Keep me from sin and all evil. May Your grace always remain with me and my loved ones. Amen.</p>
<p>✝ Lord God Almighty, You have allowed me to reach another day: strengthen me with Your grace. Help me today to see in every neighbor the dignity of God's children, and to be able to show them love. Help me to create an atmosphere of goodwill and joy around me. May my thoughts and actions express Your will. Through Christ, our Lord. Amen.</p>
<p>✝ O God, You are my God, and I long for You from early morning; my soul thirsts for You, my flesh yearns for You in a dry and weary land without water, to see Your power and Your glory, as I have seen You in the sanctuary; for Your mercy is better than life. My lips shall praise You. I will bless You as long as I live; in Your name I will lift up my hands. My soul is satisfied as with the richest of foods, and with joyful lips my mouth praises You, when I remember You on my bed and meditate on You in the night watches, for You are my help, and in the shadow of Your wings I will rejoice; my soul clings to You; Your right hand upholds me.</p>
<p>✝ My God, You are infallible Truth; I believe all that You have revealed to us and all that the Holy Church commands us to believe. I believe in You, the one true God in three equal and self-existing Persons: the Father, the Son, and the Holy Spirit. I believe in Jesus Christ, the Son of God, who became man for our sake, died on the cross and rose again, who will render to each person according to their deeds — reward or punishment. I desire always to live by this faith: Lord, strengthen my faith.</p>
<p>✝ O God, I trust that by Your promise and through the merits of our Savior, Jesus Christ, You will in Your goodness grant me eternal life and the grace necessary for me to merit this life through the good deeds which I am bound and desire to perform. Lord, grant that I may rejoice in You in eternal life.</p>
<p>✝ O God, I love You with all my heart and above all things, for You are infinite goodness and our eternal happiness! I love You, O God, in my neighbor — grant that I may love You even more.</p>
<p>✝ My God, I am truly sorry for my sins with all my heart, for having sinned I have deserved Your punishment. I grieve over them because I have offended You, who are infinitely good and most worthy of love. With Your help, I resolve henceforth to avoid temptations so as not to offend You again. Lord! Strengthen me!</p>
<p>✝ O God, Lord and Creator of the universe, I offer You all my labors of this day, and through them I wish to express my love for You, for Your Church, for my family, and for the entire world. Help me to carry them out with joy, as if I am participating in Your work of creation. May this work serve the sanctification of my soul and the good of others. I accept all the sufferings connected with it as a participation in the cross of Jesus. O my Lord, I entrust to Your most loving Heart all the unemployed, the poor, and the suffering. Saint Joseph, Mary, my guardian angel and all the saints, pray for me and for all who labor with me. Amen.</p>
<p>✝ Lord, bless our relatives, friends, acquaintances, the team of "Optima Fide" and its beneficiaries, our Diocese, priests, the Bishop, the faithful, and grant us all salvation, peace, joy, health, and eternal happiness with all Your saints in heaven. Amen.</p>`,

    eveningPrayerText: `<h4>Evening Prayers</h4>
<p><em>Our Father... Hail Mary...</em></p>
<p>✝ O God, another day of my life has passed. Every moment I have lived was given by You: whether I was working or resting, with people or alone, joyful or sad — all was Your gift.</p>
<p>✝ I thank You for everything I have come to know and experience today. You alone know whether I was able to fulfill Your will. Forgive me for all that I have overlooked, forgotten, and for all that was not according to Your will. Have mercy on me, a sinner. Allow the night's rest to restore my strength, so that I may live tomorrow's day better.</p>
<p>✝ Watch over all who sleep and all who labor this night. I entrust my entire future and that of my loved ones to Your merciful care, our God and Father. Amen.</p>
<p>✝ Almighty eternal God, I thank You with all my heart for all the blessings and graces of this day; for all its sorrows and joys, its successes and failures. Accept them all for Your great glory. Accept all my actions, prayers, quiet sighs, and sufferings borne with gratitude that were pleasing to You. Accept my respectful regard for Your image in every person, and my care to always follow Your commandments. Accept my sleep, my wakefulness, and every moment of the coming night.</p>
<p>✝ You, Mary, our Mediatrix and Helper, you, heavenly Angels, my Guardian Angel and all the saints in heaven, I thank you wholeheartedly for your care and help. Obtain from the Lord a blessing for me and my loved ones this night. Amen.</p>
<p><em>Our Father... Hail Mary...</em></p>
<p>✝ Holy Angel of God, guardian and protector of my soul! Stay always with me, morning, evening, day and night, guide me on the path of God's commandments and remove from me all temptations of evil. Amen.</p>
<p>✝ Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to your protection, implored your help, or sought your intercession was left unaided. Inspired by this confidence, I fly to you, O Virgin of virgins, my Mother; to you I come, before you I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in your mercy hear and answer me. Amen.</p>
<p>✝ Lord, Heavenly King, Spirit of truth and Soul of my soul, I adore You and I pray to You: guide me, strengthen me, be my guide and teacher, teach me what I ought to do. Tell me, Lord, all Your commandments; I promise to fulfill them and with love accept all that You send me. Only one thing I ask of You: teach me always to do Your will. Amen.</p>
<p>✝ Take, Lord, and receive all my liberty, my memory, my understanding, and my entire will. All that I have and possess You have given to me; to You, Lord, I return it. All is Yours, do with it what You will. Give me only Your love and Your grace; that is enough for me. Amen.</p>
<p>✝ Eternal rest grant to the deceased, Lord, to our relatives and to those who died from addictions: drugs, alcohol, tobacco, and gambling, and let perpetual light shine upon them. May they rest in peace. Amen.</p>
<p>✝ Lord, bless our relatives, friends, acquaintances, the team of "Optima Fide" and its beneficiaries, our Diocese, priests, the Bishop, the faithful, and grant us all salvation, peace, joy, health, and eternal happiness with all Your saints in heaven. Amen.</p>
<p><em>Our Father... Hail Mary...</em></p>
<p><em>Hail Mary...</em></p>
<p><em>Praise the Lord, for He is good; for His mercy endures forever (Ps 117:1)</em></p>`,

    scheduleLabel: "Schedule",
    scheduleTitle: "Services",
    schDay: "Day",
    schTime: "Time",
    schEvent: "Service",
    schMonSat: "Monday – Saturday",
    schSunday: "Sunday & Feasts",
    schLiturgy: "Divine Liturgy",
    schLiturgySun1: "Divine Liturgy",
    schLiturgySun2: "Divine Liturgy",
    schNote: "Confession is held before or after the Liturgy, or by arrangement with the priest.",

    donateLabel: "Support the Parish",
    donateTitle: "Make a Donation",
    donateText: "Your donation helps support the church, catechetical programs, and charitable projects of our community.",
    btnCopy: "Copy",
    btnSwift: "📋 SWIFT / Wire Transfer Details",
    swiftBankLabel: "Bank",
    swiftBenLabel: "Beneficiary",
    swiftAddrLabel: "Bank Address",
    paypalOr: "or",
    paypalBtn: "Donate via PayPal",

    contactsLabel: "Contacts",
    contactsTitle: "Always welcome",
    contAddressTitle: "Address",
    contPhoneTitle: "Phone / Viber / Telegram",
    contSocialTitle: "Social Networks",
    contFbBtn: "Parish page on Facebook",

    candleLabelOff: "Click to light a candle",
    candleLabelOn: "Candle lit. May your prayer reach God.",

    historyLabel: "Our History",
    historyTitle: "Parish History",
    historySubtitle: "A Story Guided by Divine Providence",
    historyBody: `<p>In 1994, at the initiative of Cardinal Lubomyr Husar, Fr. Roman Popravka came to Moldova to care for the spiritual life of the local Greek Catholic community. His ministry became the beginning of the living presence of the Church — a sign that God Himself cares for His people, sending shepherds where they are most needed. In 1999, by decree of Apostolic Administrator Anton Coșa, he was appointed responsible for the pastoral care of Greek Catholics in the country.</p><p>In 2006, the Greek Catholic community was officially registered by the state. This became yet another testimony of how Divine Providence opens paths where none seem to exist. Even without its own church building, the life of the Church continued: on Sundays, the Divine Liturgy was celebrated in the Chapel of "Our Lady of Good Counsel" at the Cathedral of Divine Providence. There, the faithful gathered to pray, grow in faith, and experience unity as one family in Christ.</p><p>On June 13, 2013, Fr. Igor Plevschi began his ministry at the parish as assistant priest. His pastoral service became a continuation of God's work. Through his ministry, the spiritual life of the community deepened, pastoral care expanded, and the number of people seeking God increased. Gradually, a second community also formed — composed of local residents — a clear sign that the seed of faith was bearing fruit and taking root in this land. His service became a living witness of sacrificial love, dedication, and fidelity to his calling.</p><p>In 2023, by God's grace, an apartment was acquired, part of which, after dedicated effort and work, was transformed into a chapel. This became a true gift — a place where daily prayer is offered, where people encounter God, and where faith is born and strengthened.</p><p>On September 28, 2024, the chapel was solemnly consecrated by Bishop Stepan Sus in the presence of Bishop Anton Coșa. This day became a joyful confirmation that the Lord Himself builds His Church, gathering people, blessing their journey, and sanctifying their efforts.</p><p>Today, the parish continues to grow and develop, bringing together people of different cultures and nationalities. It has become a living spiritual center where, through prayer, the Divine Liturgy, and service to others, the grace of God is revealed.</p><p class="history-final">This is a story in which Divine Providence is clearly visible. A story written by the sacrifice of priests and the faith of people. A story of a living Church led by the Lord Himself.</p>`,

    footerName: "Dormition of the Mother of God Parish",
    footerCity: "Chisinau, Moldova",
    footerCopy: "© 2026 Dormition of the Mother of God Parish"
  },

  ru: {
    brandName: "Приход Успения Пресвятой Богородицы",
    brandSub: "Греко-католический приход · Кишинев",
    navHistory: "История прихода",
    navAbout: "О приходе",
    navPriest: "Настоятель",
    navPlanner: "План 2026",
    navPrayers: "Молитвы",
    navResources: "Ресурсы",
    navSacraments: "Таинства",
    navLife: "Жизнь прихода",
    navGallery: "Галерея",
    navSchedule: "Расписание",
    navDonate: "Пожертвовать",
    navContacts: "Контакты",
    headerCta: "Связаться",
    prayerStrip: "Ежедневная Литургия: <strong>09:00</strong> · Воскресенье: <strong>09:00</strong> & <strong>10:30</strong> · <a href=\"#schedule\">Полное расписание</a>",

    heroWelcome: "Добро пожаловать",
    heroTitle: "Приход Успения<br>Пресвятой Богородицы",
    heroSubtitle: "Место молитвы, Божьего присутствия, духовной надежды и живой общины в сердце Кишинева",
    heroCta: "Узнать больше",
    heroContact: "Расписание богослужений",

    aboutLabel: "О приходе",
    aboutTitle: "Духовный дом молитвы, литургии и братства",
    aboutP1: "Приход Успения Пресвятой Богородицы является греко-католической общиной византийского обряда в Кишиневе, где сочетаются верность церковной традиции, открытое сердце к человеку и живое приходское присутствие.",
    aboutP2: "Здесь верные собираются на Божественную Литургию, молитву, катехизацию, духовные встречи и братское общение. Приход стремится быть местом, где человек находит мир, поддержку, истину Евангелия и путь к внутреннему обновлению.",
    aboutP3: "Наша община заботится о взрослых, молодежи, детях, семьях, духовном сопровождении, социальном служении и свидетельстве христианской надежды в современном мире.",

    statYear: "год служения",
    statRite: "Византийский",
    statRiteLabel: "обряд",
    statCityTitle: "Кишинев",
    statCity: "Молдова",

    priestLabel: "Настоятель прихода",
    priestName: "о. Игорь Плевский",
    priestSince: "Служит в приходе с 13 июня 2013 года",
    priestP1: "Отец Игорь совершает богослужения, проводит катехизацию, духовно сопровождает верных и служит приходской общине в повседневных и праздничных событиях церковной жизни.",
    priestP2: "Его пастырское служение направлено на то, чтобы каждый человек почувствовал себя принятым, услышанным и укрепленным в вере, а приход становился местом молитвы, мира и обновления сердца.",
    priestP3: "Приход под его руководством стремится сочетать литургическую глубину, человеческое сострадание, духовную трезвость и открытость к потребностям современного человека.",

    plannerLabel: "Пастырская программа",
    plannerTitle: "План жизни прихода на 2026 год",
    plannerIntro: "Год молитвы, формации, единства и служения ближним",
    plan1Title: "Ежедневно",
    plan1a: "Божественная Литургия — 09:00",
    plan1b: "Личная и общая молитва",
    plan1c: "Духовное сопровождение",
    plan2Title: "Еженедельно",
    plan2a: "Воскресные Литургии",
    plan2b: "Катехизация для детей и взрослых",
    plan2c: "Молодежные и приходские встречи",
    plan3Title: "Ежемесячно",
    plan3a: "Вечер христианского кино",
    plan3b: "Lectio Divina / духовный вечер",
    plan3c: "Исповедь и духовные беседы",
    plan4Title: "В течение года",
    plan4a: "Великопостные реколлекции",
    plan4b: "Дни поминовения усопших",
    plan4c: "Праздничные события прихода",
    plan4d: "Социальное и благотворительное служение",

    resourcesLabel: "Духовные ресурсы",
    resourcesTitle: "Молитва, Писание, новости и церковная жизнь",
    bibleTitle: "Священное Писание онлайн",
    bibleText: "Полный текст Священного Писания для чтения, молитвы и ежедневного духовного размышления.",
    bibleBtn: "Читать",
    calTitle: "Церковный календарь",
    calText: "Литургический календарь с церковными праздниками, чтениями и ритмом церковного года.",
    calBtn: "Открыть",
    vatTitle: "Vatican News",
    vatText: "Новости Вселенской Церкви, Святейшего Отца и жизнь Католической общины в мире.",
    vatBtn: "Открыть",
    moldTitle: "Католическая Церковь в Молдове",
    moldText: "Новости, события и официальная информация о католической жизни в Молдове.",
    moldBtn: "Открыть",

    sacramentsLabel: "Литургическая жизнь",
    sacramentsTitle: "Таинства и Богослужения",
    sac1Title: "Божественная Литургия",
    sac1Text: "Евхаристия является сердцем приходской жизни, источником силы, мира и единства для всей общины.",
    sacVespersTitle: "Вечерня",
    sacVespersText: "Вечернее богослужение, освящающее завершение дня и дарующее мир и покой.",
    sacMatinsTitle: "Утреня",
    sacMatinsText: "Утренняя молитва прославления Бога в начале нового дня.",
    sacConfessionTitle: "Исповедь",
    sacConfessionText: "Таинство Покаяния для духовного очищения, прощения грехов и примирения с Богом.",

    lifeLabel: "Приходская жизнь",
    lifeTitle: "Община, формация и служение",
    life1Title: "Катехизация",
    life1p: "Обучение в вере помогает глубже познавать Бога, понять Церковь и жить Евангелием в повседневности.",
    life2Title: "Министранты",
    life2p: "Служение при алтаре воспитывает ответственность, почтение к святыне и любовь к литургии.",
    life3Title: "Экуменический диалог",
    life3p: "Встречи и молитва с другими христианами свидетельствуют о поиске единства, взаимного уважения и мира.",
    life4Title: "Молитва за мир",
    life4p: "Приход активно сотрудничает с Посольством Украины и проводит молебны за мир в Украине, поддерживая украинскую общину Молдовы в молитве, надежде и пастырской заботе.",
    life5Title: "Социальное служение",
    life5p: "Милосердие к ближнему является живым свидетельством веры, когда Церковь становится местом поддержки, восстановления и надежды.",
    life6Title: "Молодежь и студенты",
    life6p: "Диалог с молодым поколением помогает говорить языком надежды, ответственности и внутренней свободы во Христе.",

    galleryLabel: "Фотогалерея",
    galleryTitle: "Моменты веры, молитвы и общины",

    prayerCardsLabel: "Молитвенная сокровищница",
    prayerCardsTitle: "Молитвы на каждый день",
    prayerCardsSubtext: "Откройте карточку — и молитвенный текст будет с вами. Удобно для молитвы дома и во время богослужений.",
    cardMorningTitle: "Утренние молитвы",
    cardMorningDesc: "Молитвы на начало дня",
    cardEveningTitle: "Вечерние молитвы",
    cardEveningDesc: "Молитвы на сон грядущий",
    cardMassTitle: "Чин Святой Мессы",
    cardMassDesc: "Полный текст Литургии онлайн",
    cardMassBtn: "Открыть →",

    cardIntentionTitle: "Молитвенное намерение",
    cardIntentionDesc: "Напишите намерение — мы помолимся за вас на Литургии",
    intentNameLabel: "Ваше имя (необязательно)",
    intentForLabel: "О ком молиться (необязательно)",
    intentTextLabel: "Ваше намерение",
    intentTextPh: "Напишите здесь ваше молитвенное намерение...",
    intentContactLabel: "Контакт для ответа (Telegram / Viber / Email) — необязательно",
    intentSubmitBtn: "Отправить намерение",
    intentPrivacy: "Ваше намерение будет отправлено настоятелю в приватный Telegram. Данные не публикуются.",
    intentSending: "Отправляем…",
    intentSuccess: "Спасибо! Ваше намерение принято. Мы будем молиться за вас.",
    intentError: "Не удалось отправить. Попробуйте ещё раз или позвоните: +373 78 377 337.",
    intentErrEmpty: "Пожалуйста, напишите ваше намерение.",
    intentErrShort: "Намерение слишком короткое. Напишите, пожалуйста, подробнее.",

    morningPrayerText: `<h4>Утренние молитвы</h4>
<p><em>Отче наш... Радуйся Мария...</em></p>
<p>✝ Придите, воспоём Господу, воскликнем твердыне спасения нашего; предстанем лицу Его со славословием, в песнях воскликнем Ему. Ибо Господь есть Бог великий и Царь великий над всеми богами. В Его руке глубины земли, и вершины гор — Его же; Его — море, и Он создал его, и сушу образовали руки Его. Придите, поклонимся и припадём, преклоним колени пред лицом Господа, Творца нашего; ибо Он есть Бог наш, и мы — народ паствы Его и овцы руки Его.</p>
<p>✝ Славлю Тебя, мой Боже, и люблю Тебя всем сердцем. Благодарю Тебя за то, что Ты сотворил меня, соделал христианином и сохранил от смерти этой ночью. Тебе отдаю все мои сегодняшние поступки — да будут они угодны Тебе и служат Твоей славе. Сохрани меня от греха и всякого зла. Пусть благодать Твоя всегда пребудет со мной и моими близкими. Аминь.</p>
<p>✝ Господи, Боже Всемогущий, Ты позволил мне дожить до нового дня: укрепи меня благодатью Твоею. Помоги мне сегодня в каждом ближнем увидеть достоинство детей Божиих, и уметь оказать им любовь. Помоги мне творить вокруг себя атмосферу доброжелательности и радости. Пусть мои мысли и поступки выражают волю Твою. Через Христа, Господа нашего. Аминь.</p>
<p>✝ Боже! Ты Бог мой, Тебя от ранней зари ищу я; Тебя жаждет душа моя, по Тебе томится плоть моя в земле пустой, иссохшей и безводной, чтобы видеть силу Твою и славу Твою, как я видел Тебя во святилище: ибо милость Твоя лучше, нежели жизнь. Уста мои восхвалят Тебя. Так благословлю Тебя в жизни моей; во имя Твоё вознесу руки мои. Как туком и елеем насыщается душа моя, и радостным гласом восхваляют Тебя уста мои, когда я вспоминаю о Тебе на постели моей, размышляю о Тебе в ночные стражи, ибо Ты помощь моя, и в тени крыл Твоих я возрадуюсь; к Тебе прилепилась душа моя; десница Твоя поддерживает меня.</p>
<p>✝ Мой Боже, Ты — безошибочная Истина, я верую во всё, что Ты открыл нам, и во что святая Церковь велит нам верить. Верую в Тебя, единого истинного Бога в трёх равных и самосущих Лицах: Отца и Сына, и Святого Духа. Верую в Иисуса Христа, Сына Божия, ради нас вочеловечившегося, умершего на кресте и воскресшего, Который каждому человеку воздаст по заслугам — вознаградит или покарает. Желаю всегда жить этой верой: Господи, укрепи мою веру.</p>
<p>✝ Боже, уповаю на то, что по обетованию Твоему и заслугами нашего Спасителя, Иисуса Христа, Ты по благости Твоей даруешь мне жизнь вечную и благодать, необходимую для того, чтобы я заслужил эту жизнь хорошими поступками, которые я обязан и желаю творить. Господи, соделай, дабы я мог радоваться Тобою в вечной жизни.</p>
<p>✝ Боже, люблю Тебя всем сердцем и превыше всего, ибо Ты — бесконечное благо и вечное наше счастье! Люблю Тебя, Боже, в моём ближнем — соделай, дабы я ещё больше возлюбил Тебя.</p>
<p>✝ Мой Боже, я всем сердцем скорблю о моих грехах, ибо, совершив грех, я заслужил Твоё наказание. Сокрушаюсь о них, ибо оскорбил Тебя, бесконечно благого и наиболее достойного любви. С Твоей помощью я обязуюсь впредь избегать соблазнов, дабы более не оскорблять Тебя. Господи! Укрепи меня!</p>
<p>✝ Боже, Господь и Творец вселенной, я отдаю Тебе все мои сегодняшние труды, и через них хочу выразить мою любовь к Тебе, к Церкви Твоей, к моей семье и всему миру. Помоги мне выполнять их с радостью, так, словно я участвую в Твоём деле творения. Да послужит этот труд освящению моей души и благу других людей. Я принимаю все связанные с ним страдания как сопричастие кресту Иисуса. О мой Господь, Твоему Всеблагому Сердцу я препоручаю всех безработных, нищих и несчастных людей. Святой Иосиф, Мария, мой ангел хранитель и все святые, молись обо мне и о всех, кто трудится вместе со мною. Аминь.</p>
<p>✝ Благослови Господи наших родственников, друзей, знакомых, команду «Оптима Фиде» и бенефициариев, нашу Епархию, священников, Епископа, верующих и подай нам всем спасение, мир, радость, здоровье и вечное счастье со всеми святыми Твоими в небе. Аминь.</p>`,

    eveningPrayerText: `<h4>Вечерние молитвы</h4>
<p><em>Отче наш... Радуйся Мария...</em></p>
<p>✝ О Боже, вот минул ещё один день моей жизни. Каждый миг, прожитый мною, был подарен Тобой: работал ли я или отдыхал, общался с людьми или был один на один с собою, радовался или грустил — всё было Твоим даром.</p>
<p>✝ Благодарю Тебя за всё, что мне довелось узнать и пережить сегодня. Ты один знаешь, сумел ли я исполнить Твою волю. Прости мне всё то, в чём я недосмотрел, о чём забыл, за всё, что не было по воле Твоей. Помилуй меня, грешного. Позволь, пусть ночной отдых приумножит во мне силы, чтобы я мог лучше прожить день завтрашний.</p>
<p>✝ Опекай всех спящих и тех, кто трудится этой ночью. Всё будущее моё и моих близких вверяю Твоей милосердной заботе, наш Боже и Отче. Аминь.</p>
<p>✝ Всемогущий вечный Боже, всем сердцем благодарю Тебя за все благодеяния и благодать сегодняшнего дня; за все печали и радости, за достижения и неудачи. Всё прими ради великой славы Твоей. Прими все приятные Тебе мои поступки, молитвы, тихие воздыхания, благодарно перенесённые страдания. Прими моё уважительное отношение к образу Твоему в каждом человеке, заботу о том, чтобы всегда следовать заповедям Твоим. Прими мой сон, моё бдение и каждый миг наступающей ночи.</p>
<p>✝ Тебя, Мария, Посредница наша и Помощница, вас, небесные Ангелы, мой Ангел хранитель и все святые в небе, всем сердцем благодарю за заботу и помощь. Испросите у Господа благословение для меня и моих близких на эту ночь. Аминь.</p>
<p><em>Отче наш... Радуйся Мария...</em></p>
<p>✝ Святой Ангел Божий, хранитель и покровитель души моей! Пребудь всегда со мной, утром, вечером, днём и ночью, направляй меня на путь заповедей Божиих и удали от меня все искушения зла. Аминь.</p>
<p>✝ Вспомни, о всемилостивая Дева Мария, что испокон века никто не слыхал о том, чтобы кто-либо из прибегающих к Тебе, просящих о Твоей помощи, ищущих Твоего заступничества, был Тобою оставлен. Исполненный такого упования, прихожу к Тебе, Дева и Матерь Всевышнего, со смирением и сокрушением о своих грехах. Не презри моих слов, о Матерь Предвечного Слова, и благосклонно внемли моей просьбе. Аминь.</p>
<p>✝ Господи, Царь Небесный, Дух истины и Душа души моей, поклоняюсь Тебе и молю Тебя: наставь меня, укрепи меня, будь моим руководителем и учителем, научи меня тому, что мне следует делать. Поведай мне, Господи, все повеления Твои, я же обещаю их исполнить и с любовью приму всё, что мне будет послано Тобой. Одного только прошу у Тебя: научи меня всегда творить волю Твою. Аминь.</p>
<p>✝ Прими, Господи, всю свободу. Возьми память, разум и волю мою. Все что имею или чем располагаю, все мне Тобою даровано, и потому предаю все в полное твое распоряжение. Единственно любовь Твою и благодать Твою мне даруй, и буду богатства преисполнен, и никогда не попрошу я ничего другого. Аминь.</p>
<p>✝ Вечный покой даруй усопшим, Господи, нашим родственникам и умершим от зависимостей: наркотической, алкогольной, табака-курения и игромании и да сияет им свет вечный. Да покоятся в мире. Аминь.</p>
<p>✝ Благослови Господи наших родственников, друзей, знакомых, команду «Оптима Фиде» и бенефициариев, нашу Епархию, священников, Епископа, верующих и подай нам всем спасение, мир, радость, здоровье и вечное счастье со всеми святыми Твоими в небе. Аминь.</p>
<p><em>Отче наш... Радуйся Мария...</em></p>
<p><em>Радуйся Мария...</em></p>
<p><em>Славьте Господа, ибо Он благ, ибо вовек милость Его (Пс 117:1)</em></p>`,

    scheduleLabel: "Расписание",
    scheduleTitle: "Богослужения",
    schDay: "День",
    schTime: "Время",
    schEvent: "Богослужение",
    schMonSat: "Понедельник – Суббота",
    schSunday: "Воскресенье и Праздники",
    schLiturgy: "Божественная Литургия",
    schLiturgySun1: "Божественная Литургия",
    schLiturgySun2: "Божественная Литургия",
    schNote: "Исповедь проводится до или после Литургии, или по договорённости с настоятелем.",

    donateLabel: "Поддержка прихода",
    donateTitle: "Пожертвовать",
    donateText: "Ваше пожертвование помогает поддерживать храм, катехитические программы и благотворительные проекты нашей общины.",
    btnCopy: "Копировать",
    btnSwift: "📋 Реквизиты SWIFT / Wire Transfer",
    swiftBankLabel: "Банк",
    swiftBenLabel: "Получатель",
    swiftAddrLabel: "Адрес банка",
    paypalOr: "или",
    paypalBtn: "Пожертвовать через PayPal",

    contactsLabel: "Контакты",
    contactsTitle: "Всегда рады вам",
    contAddressTitle: "Адрес",
    contPhoneTitle: "Телефон / Viber / Telegram",
    contSocialTitle: "Социальные сети",
    contFbBtn: "Страница прихода в Facebook",

    candleLabelOff: "Нажмите, чтобы зажечь свечу",
    candleLabelOn: "Свеча зажжена. Пусть молитва достигнет Бога.",

    historyLabel: "Наша история",
    historyTitle: "История прихода",
    historySubtitle: "История, ведомая Божьим Промыслом",
    historyBody: `<p>В 1994 году, по инициативе кардинала Любомира Гузара, в Молдову прибыл священник Роман Поправка, чтобы заботиться о духовной жизни местной общины. Его служение стало началом живого присутствия Церкви, знаком того, что Господь Сам заботится о Своём народе, посылая пастырей туда, где они особенно нужны. В 1999 году декретом Апостольского администратора Антона Коши он был назначен ответственным за пастырское служение греко-католиков в стране.</p><p>В 2006 году греко-католическая община была официально зарегистрирована государством. Это стало ещё одним свидетельством того, как Божий Промысл открывает пути там, где их, казалось бы, нет. Но даже без собственного храма жизнь Церкви продолжалась: по воскресеньям Божественная Литургия совершалась в часовне «Матери Доброго Совета» при кафедральном соборе «Божественного Провидения». Там собирались верующие, чтобы вместе молиться, укрепляться в вере и ощущать себя одной семьёй во Христе.</p><p>С 13 июня 2013 года на приходе начал служение в качестве сотрудника-викария священник о. Игорь Плевский. Его пастырский путь стал продолжением этого Божьего дела. Через его служение углублялась духовная жизнь общины, расширялась пастырская забота, возрастало число людей, ищущих Бога. Постепенно сформировалась также вторая община — из местного населения, что стало ясным знаком того, что семя веры приносит плод и укореняется в этой земле. Служение священника стало живым свидетельством жертвенной любви, посвящения и верности призванию.</p><p>В 2023 году, по милости Божией, удалось приобрести квартиру, часть которой после труда и старания была преобразована в часовню. Это стало настоящим даром — местом, где ежедневно возносится молитва, где человек встречается с Богом, где рождается и укрепляется вера.</p><p>28 сентября 2024 года часовня была торжественно освящена епископом Степаном Сусом в присутствии епископа Антона Коши. Этот день стал радостным подтверждением того, что Господь Сам строит Свою Церковь, собирая людей, благословляя их путь и освящая их труды.</p><p>Сегодня парафия продолжает расти и развиваться, объединяя людей разных культур и национальностей. Она стала живым духовным центром, где через молитву, Литургию и служение ближнему открывается действие Божьей благодати.</p><p class="history-final">Это история, в которой ясно виден Божий Промысл. История, написанная жертвенностью священников и верой людей. История живой Церкви, которую ведёт Сам Господь.</p>`,

    footerName: "Приход Успения Пресвятой Богородицы",
    footerCity: "Кишинев, Молдова",
    footerCopy: "© 2026 Приход Успения Пресвятой Богородицы"
  }
};

let currentLang = 'ua';

function setLanguage(lang) {
  currentLang = lang;

  // Обновление текстов по data-key
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (T[lang] && T[lang][key]) {
      el.innerHTML = T[lang][key];
    }
  });

  // Обновление placeholder'ов по data-key-placeholder
  document.querySelectorAll('[data-key-placeholder]').forEach(el => {
    const key = el.getAttribute('data-key-placeholder');
    if (T[lang] && T[lang][key]) {
      el.setAttribute('placeholder', T[lang][key]);
    }
  });

  // Обновление активных кнопок языка
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === 'langBtn' + lang.toUpperCase());
  });

  // Правильный lang-атрибут для <html>
  document.documentElement.lang = lang === 'ua' ? 'uk' : lang;

  // Обновление подписей к галерее
  document.querySelectorAll('.gallery-item').forEach(item => {
    if (item.dataset[lang]) {
      item.querySelector('.gallery-caption').innerText = item.dataset[lang];
    }
  });

  // BUG FIX: если свеча горит — восстанавливаем правильный текст подписи.
  const candleWrap = document.getElementById('candleWrap');
  const candleLabel = document.getElementById('candleLabel');
  if (candleWrap && candleLabel && candleWrap.classList.contains('lit')) {
    candleLabel.innerText = T[lang].candleLabelOn;
    candleLabel.style.color = 'var(--gold)';
  }
}

function toggleNav() {
  document.getElementById('mainNav').classList.toggle('active');
}

function closeNav() {
  document.getElementById('mainNav').classList.remove('active');
  const btn = document.getElementById('burgerBtn');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

// Prayer Cards
function togglePrayerCard(cardId) {
  const card = document.querySelector(`[data-card="${cardId}"]`);
  const trigger = card.querySelector('.prayer-card-trigger');
  const isActive = card.classList.toggle('active');
  trigger.setAttribute('aria-expanded', isActive);
}

let prayerFontSizes = { morning: 1, evening: 1 };
function changeFontSize(cardId, step) {
  const textContainer = document.getElementById(`text-${cardId}`);
  if (!textContainer) return;

  prayerFontSizes[cardId] += step * 0.1;
  if(prayerFontSizes[cardId] < 0.8) prayerFontSizes[cardId] = 0.8;
  if(prayerFontSizes[cardId] > 1.8) prayerFontSizes[cardId] = 1.8;

  textContainer.style.fontSize = prayerFontSizes[cardId] + 'rem';
}

// Copy IBAN Function
function copyToClipboard(elementId, btnElement) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.innerText.trim();

  function showCopied() {
    const originalText = btnElement.innerText;
    btnElement.innerText = currentLang === 'ua' ? 'Скопійовано!' : currentLang === 'en' ? 'Copied!' : 'Скопировано!';
    btnElement.style.background = '#4CAF50';
    setTimeout(() => {
      btnElement.innerText = originalText;
      btnElement.style.background = '';
    }, 2000);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopied).catch(() => {
      fallbackCopy(text, showCopied);
    });
  } else {
    fallbackCopy(text, showCopied);
  }
}

function fallbackCopy(text, callback) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    if (callback) callback();
  } catch (e) {
    console.warn('Copy failed:', e);
  }
  document.body.removeChild(ta);
}

// SWIFT panel toggle
function toggleSwift() {
  const panel = document.getElementById('swiftPanel');
  const btn   = document.getElementById('swiftToggleBtn');
  if (!panel || !btn) return;
  const isHidden = panel.hasAttribute('hidden');
  if (isHidden) {
    panel.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    panel.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
  }
}

// Candle
function lightCandle() {
  const wrap = document.getElementById('candleWrap');
  const label = document.getElementById('candleLabel');
  if (!wrap) return;

  const isLit = wrap.classList.toggle('lit');
  wrap.setAttribute('aria-pressed', isLit ? 'true' : 'false');

  if (label) {
    label.innerText = isLit ? T[currentLang].candleLabelOn : T[currentLang].candleLabelOff;
    label.style.color = isLit ? 'var(--gold)' : 'var(--muted)';
  }
}

// ===================== SHOOTING STAR =====================
(function () {
  function spawnShootingStar() {
    const wrap = document.querySelector('#hero .hero-image-wrap');
    if (!wrap) return;

    const star = document.createElement('div');
    star.className = 'shooting-star';

    star.style.left = (35 + Math.random() * 50) + '%';
    star.style.top  = (4  + Math.random() * 28) + '%';

    wrap.appendChild(star);
    setTimeout(() => star.remove(), 1300);
  }

  function scheduleNext() {
    const delay = 20000 + Math.random() * 10000;
    setTimeout(() => {
      spawnShootingStar();
      scheduleNext();
    }, delay);
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      spawnShootingStar();
      scheduleNext();
    }, 6500);
  });
})();

// ===================== INITIALIZATION =====================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('ua');

  // Lightbox Gallery
  const lightbox        = document.getElementById('lightbox');
  const lightboxImg     = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      lightboxImg.src = item.dataset.src;
      lightboxCaption.innerText = item.dataset[currentLang] || item.querySelector('.gallery-caption').innerText;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // ===== PARISH HISTORY: fade-in on scroll =====
  const historyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        historyObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.history-prose-text, .history-prose-image').forEach(el => {
    historyObserver.observe(el);
  });

  // ===== PRAYER INTENTION FORM =====
  initIntentionForm();
});

// ===================== PRAYER INTENTION FORM =====================
function initIntentionForm() {
  const form = document.getElementById('intentionForm');
  if (!form) return;

  const statusEl  = document.getElementById('intentionStatus');
  const submitBtn = document.getElementById('intentionSubmitBtn');

  function setStatus(msg, cls) {
    if (!statusEl) return;
    statusEl.textContent = msg || '';
    statusEl.className = 'intention-status' + (cls ? ' ' + cls : '');
  }

  function t(key, fallback) {
    return (T[currentLang] && T[currentLang][key]) || fallback || '';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot — молчаливо игнорируем ботов
    const honey = form.querySelector('.intent-honeypot');
    if (honey && honey.value) return;

    const intention = (form.intention.value || '').trim();

    if (!intention) {
      setStatus(t('intentErrEmpty', 'Будь ласка, напишіть ваше намірення.'), 'error');
      form.intention.focus();
      return;
    }
    if (intention.length < 5) {
      setStatus(t('intentErrShort', 'Намірення занадто коротке.'), 'error');
      form.intention.focus();
      return;
    }

    const payload = {
      name:      (form.name.value      || '').trim(),
      forWhom:   (form.forWhom.value   || '').trim(),
      intention: intention,
      contact:   (form.contact.value   || '').trim(),
      lang:      currentLang,
      page:      (typeof window !== 'undefined' && window.location) ? window.location.href : '',
      ua:        (typeof navigator !== 'undefined') ? (navigator.userAgent || '').slice(0, 200) : '',
      ts:        new Date().toISOString()
    };

    submitBtn.disabled = true;
    submitBtn.classList.add('is-loading');
    setStatus(t('intentSending', 'Надсилаємо…'), '');

    try {
      const resp = await fetch('/api/prayer-intention', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      let data = null;
      try { data = await resp.json(); } catch (_) { data = null; }

      if (!resp.ok || (data && data.ok === false)) {
        throw new Error((data && data.error) || 'server_error');
      }

      setStatus(t('intentSuccess', 'Дякуємо! Ваше намірення отримано.'), 'success');
      form.reset();
    } catch (err) {
      console.warn('Intention submit failed:', err);
      setStatus(t('intentError', 'Не вдалося надіслати. Спробуйте ще раз.'), 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('is-loading');
    }
  });
}
