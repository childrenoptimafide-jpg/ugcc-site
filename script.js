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
    navCalendar: "Планер",
    navIntention: "Намірення",
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

    morningPrayerText: `<h4>Ранкові молитви</h4>
<p class="prayer-rubric">Прокинувшись, стань благоговійно, уяви себе перед лицем Бога і з почуттям кажи:</p>
<p><strong>В ім'я Отця і Сина і Святого Духа. Амінь.</strong></p>
<p>Господи Ісусе Христе, Сину Божий, молитвами Пречистої Твоєї Матері і всіх святих, помилуй мене грішного (грішну).</p>
<p class="prayer-rubric">Ранкове славослів'я</p>
<p>Прославляю Тебе, Боже мій, і люблю Тебе всім серцем. Дякую Тобі за те, що Ти створив мене, зробив мене християнином і зберіг від смерті цієї ночі. Тобі віддаю всі мої сьогоднішні вчинки — нехай вони будуть Тобі угодні і слугують Твоїй славі. Збережи мене від гріха і всякого зла. Нехай благодать Твоя завжди перебуває зі мною і моїми близькими. Амінь.</p>
<p class="prayer-rubric">Прохання добре прожити цей день</p>
<p>Господи, Боже Всемогутній, Ти дозволив мені дожити до нового дня: зміцни мене благодаттю Твоєю. Допоможи мені сьогодні в кожному ближньому побачити гідність дітей Божих і вміти виявити їм любов. Допоможи мені творити навколо себе атмосферу доброзичливості й радості. Нехай мої думки й учинки виражають волю Твою. Через Христа, Господа нашого. Амінь.</p>
<p><strong>Молитва Господня</strong></p>
<p>Отче наш, що єси на небесах, нехай святиться Ім'я Твоє, нехай прийде Царство Твоє, нехай буде воля Твоя, як на небі, так і на землі. Хліб наш насущний дай нам сьогодні; і прости нам провини наші, як і ми прощаємо нашим винуватцям; і не введи нас у спокусу, але визволи нас від лукавого. Амінь.</p>
<p><strong>Символ Віри</strong></p>
<p>Вірую в єдиного Бога Отця, Вседержителя, Творця неба і землі, і всього видимого і невидимого. І в єдиного Господа Ісуса Христа, Сина Божого, Єдинородного, від Отця рожденного перед усіма віками, Світло від Світла, Бога істинного від Бога істинного, рожденного, не сотвореного, єдиносущного з Отцем, що через Нього все сталося. Він задля нас, людей, і нашого ради спасіння зійшов із небес, і воплотився з Духа Святого і Марії Діви, і став людиною. І був розп'ятий за нас за Понтія Пилата, і страждав, і був похований, і воскрес у третій день, згідно з Писанням. І вознісся на небо, і сидить праворуч Отця. І вдруге прийде зі славою судити живих і мертвих, а Його Царству не буде кінця. І в Духа Святого, Господа животворного, що від Отця і Сина ісходить, що з Отцем і Сином рівнопоклоняємий і рівнославимий, що говорив через пророків. В єдину, святу, соборну і апостольську Церкву. Ісповідую одне хрещення на відпущення гріхів. Очікую воскресіння мертвих і життя майбутнього віку. Амінь.</p>
<p class="prayer-rubric">Молитовні воззвання (Вірую, Надіюсь, Люблю, Каюсь)</p>
<p><em>Вірую:</em> Боже мій, Ти є безпомилкова Істина, вірую в усе, що Ти відкрив нам, і в що свята Церква велить нам вірити. Вірую в Тебе, єдиного істинного Бога в трьох рівних і самосущих Особах: Отця і Сина, і Святого Духа. Господи, зміцни мою віру.</p>
<p><em>Надіюсь:</em> Боже мій, уповаю на те, що за обітницею Твоєю і заслугами Спасителя нашого, Ісуса Христа, Ти за добротою Своєю даруєш мені вічне життя і благодать, необхідну для того, щоб я заслужив це життя добрими вчинками. Господи, нехай я вічно радію Тобою.</p>
<p><em>Люблю:</em> Боже мій, люблю Тебе всім серцем і понад усе, бо Ти є нескінченне благо і вічне наше щастя! Люблю Тебе, Боже, в моєму ближньому — зроби, щоб я ще більше полюбив Тебе.</p>
<p><em>Каюсь:</em> Боже мій, я всім серцем скорблю про мої гріхи, бо, вчинивши гріх, я заслужив Твоє покарання і образив Тебе, нескінченно Благого. З Твоєю допомогою зобов'язуюсь надалі уникати спокус. Господи, зміцни мене!</p>
<p class="prayer-rubric">Щоденне препоручення трудів Богові</p>
<p>Боже, Господи і Творче всесвіту, я віддаю Тобі всі мої сьогоднішні праці і через них хочу виразити мою любов до Тебе, до Церкви Твоєї, до моєї сім'ї і всього світу. Допоможи мені виконувати їх з радістю, ніби я беру участь у Твоєму ділі творення. Нехай ця праця послужить освяченню моєї душі і благу інших людей. Я приймаю всі пов'язані з нею страждання як співпричастя хресту Ісуса. Господи, Твоєму Всеблагому Серцю препоручаю всіх безробітних, убогих і нещасних людей. Свята Маріє, мій Ангеле-Охоронителю і всі святі, моліться за мене. Амінь.</p>`,

    eveningPrayerText: `<h4>Вечірні молитви</h4>
<p><strong>В ім'я Отця і Сина і Святого Духа. Амінь.</strong></p>
<p>Царю Небесний, Утішителю, Душе істини, що всюди єси і все наповняєш, Скарбе дібр і життя Подателю, прийди і вселися в нас, і очисти нас від усякої скверни, і спаси, Благий, душі наші.</p>
<p>Святий Боже, Святий Кріпкий, Святий Безсмертний, помилуй нас. <em>(3 рази)</em></p>
<p class="prayer-rubric">Подяка і прохання про прощення</p>
<p>Боже, ось минув ще один день мого життя. Кожна мить, прожита мною, була подарована Тобою: чи то я працював, чи відпочивав, спілкувався з людьми чи був наодинці, радів чи сумував — все було Твоїм даром.</p>
<p>Дякую Тобі за все, що мені довелося пізнати і пережити сьогодні. Ти один знаєш, чи зумів я виконати Твою волю. Прости мені все те, в чому я недобачив, про що забув, за все, що не було по волі Твоїй. Помилуй мене, грішного. Дозволь, нехай нічний відпочинок примножить у мені сили, щоб я міг краще прожити завтрашній день. Опікуй усіх сплячих і тих, хто працює цієї ночі. Все майбутнє моє і моїх близьких вручаю Твоїй милосердній турботі, наш Боже і Отче. Амінь.</p>
<p>Господи Боже наш, усе, що я згрішив у цей день словом, ділом чи думкою, Ти, як Благий і Чоловіколюбець, прости мені. Мирний і спокійний сон даруй мені. Ангела Твого Охоронителя пошли мені, щоб заступав і охороняв мене від усякого зла. Амінь.</p>
<p class="prayer-rubric">Слався, Цариця (Salve Regina)</p>
<p>Слався, Цариця, Матір милосердя, життя, утіхо і надіє наша, слався. До Тебе взиваємо, вигнані чада Єви. До Тебе зітхаємо, стогнучи і плачучи у цій долині сліз. О Заступнице наша! До нас зверни Твої милосердні погляди і після цього вигнання яви нам Ісуса, благословенний плід чрева Твого. О лагідна, о добра, о солодка Діво Маріє.</p>
<p class="prayer-rubric">До Ангела-Охоронителя</p>
<p>Святий Ангеле Божий, охоронителю і покровителю душі моєї! Перебувай завжди зі мною, вранці, ввечері, вдень і вночі, направляй мене на шлях заповідей Божих і відганяй від мене всі спокуси зла. Амінь.</p>
<p class="prayer-rubric">Пригадай, о Всемилосердна Діво Маріє</p>
<p>Пригадай, о Всемилосердна Діво Маріє, що від віку ніхто не чував про те, щоб хтось із тих, хто вдавався до Тебе, просив Твоєї допомоги, шукав Твого заступництва, був Тобою залишений. Сповнений такої надії, приходжу до Тебе, Діво і Матір Всевишнього, зі смиренням і скрухою про мої гріхи. Не зневаж моїх слів, о Матір Предвічного Слова, і благосклонно почуй прохання моє. Амінь.</p>
<p class="prayer-rubric">Молитва перед сном</p>
<p>Господи, Царю Небесний, Духу істини і душе душі моєї, поклоняюся Тобі і молю Тебе: наставляй мене, зміцнюй мене, будь моїм провідником і вчителем, навчи мене тому, що мені слід робити. Нехай мої мисль і вчинки виражають волю Твою. Прийми мій сон, моє бдіння і кожну мить наступної ночі. Одного тільки прошу у Тебе: навчи мене завжди творити волю Твою. Амінь.</p>`,
    
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

    morningPrayerText: `<h4>Morning Prayers</h4>
<p class="prayer-rubric">Upon waking, stand reverently, place yourself in the presence of God, and say with devotion:</p>
<p><strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong></p>
<p>Lord Jesus Christ, Son of God, through the prayers of Your Most Pure Mother and all the saints, have mercy on me, a sinner.</p>
<p class="prayer-rubric">Morning Offering</p>
<p>I praise You, my God, and love You with all my heart. I thank You for creating me, for making me a Christian, and for preserving me through this night. To You I offer all my actions of today — may they be pleasing to You and serve Your glory. Keep me from sin and all evil. May Your grace always be with me and my loved ones. Amen.</p>
<p class="prayer-rubric">Prayer for a Good Day</p>
<p>Lord God Almighty, You have allowed me to reach this new day: strengthen me with Your grace. Help me today to see the dignity of God's children in every neighbour and to show them love. Help me to create an atmosphere of goodwill and joy around me. May my thoughts and deeds express Your will. Through Christ our Lord. Amen.</p>
<p><strong>The Lord's Prayer</strong></p>
<p>Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.</p>
<p><strong>The Nicene Creed</strong></p>
<p>I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible. I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made. For us men and for our salvation he came down from heaven, and by the Holy Spirit was incarnate of the Virgin Mary, and became man. For our sake he was crucified under Pontius Pilate, he suffered death and was buried, and rose again on the third day in accordance with the Scriptures. He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end. I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets. I believe in one, holy, catholic and apostolic Church. I confess one Baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come. Amen.</p>
<p class="prayer-rubric">Acts of Faith, Hope, Love, and Contrition</p>
<p><em>Act of Faith:</em> My God, You are infallible Truth; I believe all that You have revealed and all that holy Church teaches. I believe in You, one true God in three equal Persons: Father, Son, and Holy Spirit. Lord, strengthen my faith.</p>
<p><em>Act of Hope:</em> My God, trusting in Your promise and the merits of Jesus Christ our Saviour, I hope in Your goodness to grant me eternal life and the grace to merit it by good works. Lord, let me rejoice in You forever.</p>
<p><em>Act of Love:</em> My God, I love You with all my heart above all things, for You are the infinite Good and our eternal happiness. I love You in my neighbour — help me to love You even more.</p>
<p><em>Act of Contrition:</em> My God, I am heartily sorry for all my sins, because by sinning I have deserved Your punishment and offended You, who are infinitely Good. With Your help I resolve to avoid temptation and no longer offend You. Lord, strengthen me!</p>
<p class="prayer-rubric">Morning Offering of Work to God</p>
<p>God, Lord and Creator of the universe, I offer You all my labours of today, and through them I wish to express my love for You, for Your Church, for my family, and for all the world. Help me to carry them out with joy, as though sharing in Your work of creation. May this work serve the sanctification of my soul and the good of others. I accept all the sufferings connected with it as sharing in the cross of Jesus. O my Lord, to Your Most Sacred Heart I entrust all the unemployed, the poor, and the suffering. Holy Mary, my Guardian Angel, and all the saints, pray for me. Amen.</p>`,

    eveningPrayerText: `<h4>Evening Prayers</h4>
<p><strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong></p>
<p>Heavenly King, Comforter, Spirit of Truth, who art everywhere present and fillest all things, Treasury of blessings and Giver of life: come and dwell in us, cleanse us from all impurity, and save our souls, O gracious Lord.</p>
<p>Holy God, Holy Mighty, Holy Immortal, have mercy on us. <em>(3 times)</em></p>
<p class="prayer-rubric">Thanksgiving and Request for Forgiveness</p>
<p>God, another day of my life has passed. Every moment I have lived was given by You: whether I worked or rested, was with others or alone, rejoiced or was sad — all was Your gift.</p>
<p>I thank You for all that I have come to know and experience today. You alone know whether I have fulfilled Your will. Forgive me for all that I overlooked, forgot, or did contrary to Your will. Have mercy on me, a sinner. Let the night's rest increase my strength, so I may live tomorrow better. Watch over all who sleep and those who labour this night. I entrust my future and that of my loved ones to Your merciful care, our God and Father. Amen.</p>
<p>Lord our God, forgive all I have sinned against You this day in word, deed, or thought, You who are good and loving. Grant me peaceful and undisturbed sleep. Send Your holy Guardian Angel to protect and guard me from all evil. Amen.</p>
<p class="prayer-rubric">Hail, Holy Queen (Salve Regina)</p>
<p>Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this vale of tears. Turn then, most gracious advocate, thine eyes of mercy toward us; and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.</p>
<p class="prayer-rubric">Prayer to the Guardian Angel</p>
<p>Angel of God, my guardian dear, to whom God's love entrusts me here: ever this night be at my side, to light and guard, to rule and guide. Keep me always on the path of God's commandments and remove from me every temptation of evil. Amen.</p>
<p class="prayer-rubric">Remember, O Most Gracious Virgin Mary (Memorare)</p>
<p>Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired with this confidence, I fly to thee, O Virgin of virgins, my Mother; to thee do I come; before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.</p>
<p class="prayer-rubric">Night Prayer</p>
<p>Lord, Heavenly King, Spirit of truth and soul of my soul, I adore You and I beg You: guide me, strengthen me, be my ruler and my teacher, teach me what I should do. May my thoughts and deeds always express Your will. I offer You my sleep, my waking, and every moment of the coming night. One thing only I ask of You: teach me always to do Your will. Amen.</p>`,
    
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

    morningPrayerText: `<h4>Утренние молитвы</h4>
<p class="prayer-rubric">Проснувшись, встань благоговейно, представь себя перед лицом Бога и с чувством говори:</p>
<p><strong>Во имя Отца и Сына и Святого Духа. Аминь.</strong></p>
<p>Господи Иисусе Христе, Сыне Божий, молитвами Пречистой Твоей Матери и всех святых, помилуй мя грешного (грешную).</p>
<p class="prayer-rubric">Утреннее славословие</p>
<p>Славлю Тебя, мой Боже, и люблю Тебя всем сердцем. Благодарю Тебя за то, что Ты сотворил меня, соделал христианином и сохранил от смерти этой ночью. Тебе отдаю все мои сегодняшние поступки — да будут они угодны Тебе и служат Твоей славе. Сохрани меня от греха и всякого зла. Пусть благодать Твоя всегда пребудет со мной и моими близкими. Аминь.</p>
<p class="prayer-rubric">Просьба хорошо прожить этот день</p>
<p>Господи, Боже Всемогущий, Ты позволил мне дожить до нового дня: укрепи меня благодатью Твоею. Помоги мне сегодня в каждом ближнем увидеть достоинство детей Божиих и уметь оказать им любовь. Помоги мне творить вокруг себя атмосферу доброжелательности и радости. Пусть мои мысли и поступки выражают волю Твою. Через Христа, Господа нашего. Аминь.</p>
<p><strong>Отче наш</strong></p>
<p>Отче наш, Иже еси на небесех, да святится имя Твое, да приидет Царствие Твое, да будет воля Твоя, яко на небеси и на земли. Хлеб наш насущный даждь нам днесь; и остави нам долги наша, якоже и мы оставляем должником нашим; и не введи нас во искушение, но избави нас от лукаваго. Аминь.</p>
<p><strong>Символ Веры</strong></p>
<p>Верую во единого Бога Отца, Вседержителя, Творца неба и земли, видимым же всем и невидимым. И во единого Господа Иисуса Христа, Сына Божия, Единородного, Иже от Отца рожденного прежде всех век; Света от Света, Бога истинна от Бога истинна, рожденна, несотворенна, единосущна Отцу, Имже вся быша. Нас ради человек и нашего ради спасения сшедшего с небес и воплотившегося от Духа Свята и Марии Девы, и вочеловечшася. Распятого же за ны при Понтийстем Пилате, и страдавша, и погребенна. И воскресшего в третий день по Писанием. И восшедшего на небеса, и седяща одесную Отца. И паки грядущего со славою судити живым и мертвым, Его же Царствию не будет конца. И в Духа Святаго, Господа Животворящего, Иже от Отца и Сына исходящего, Иже со Отцем и Сыном спокланяема и сславима, глаголавшего пророки. Во единую Святую, Соборную и Апостольскую Церковь. Исповедую едино крещение во оставление грехов. Чаю воскресения мертвых, и жизни будущаго века. Аминь.</p>
<p class="prayer-rubric">Молитвенные воззвания (Верую, Надеюсь, Люблю, Каюсь)</p>
<p><em>Верую:</em> Боже мой, Ты — безошибочная Истина, я верую во всё, что Ты открыл нам, и во что святая Церковь велит нам верить. Верую в Тебя, единого истинного Бога в трёх равных и самосущих Лицах: Отца и Сына, и Святого Духа. Господи, укрепи мою веру.</p>
<p><em>Надеюсь:</em> Боже мой, уповаю на то, что по обетованию Твоему и заслугами Спасителя нашего Иисуса Христа Ты по благости Твоей даруешь мне жизнь вечную и благодать, необходимую, чтобы заслужить её добрыми делами. Господи, соделай, дабы я мог радоваться Тобою в вечной жизни.</p>
<p><em>Люблю:</em> Боже мой, люблю Тебя всем сердцем и превыше всего, ибо Ты — бесконечное благо и вечное наше счастье! Люблю Тебя, Боже, в моём ближнем — соделай, дабы я ещё больше возлюбил Тебя.</p>
<p><em>Каюсь:</em> Боже мой, я всем сердцем скорблю о моих грехах, ибо, совершив грех, я заслужил Твоё наказание и оскорбил Тебя, бесконечно Благого. С Твоей помощью обязуюсь впредь избегать соблазнов. Господи, укрепи меня!</p>
<p class="prayer-rubric">Ежедневное препоручение Богу своих трудов</p>
<p>Боже, Господь и Творец вселенной, я отдаю Тебе все мои сегодняшние труды, и через них хочу выразить мою любовь к Тебе, к Церкви Твоей, к моей семье и всему миру. Помоги мне выполнять их с радостью, так, словно я участвую в Твоём деле творения. Да послужит этот труд освящению моей души и благу других людей. Я принимаю все связанные с ним страдания как сопричастие кресту Иисуса. О мой Господь, Твоему Всеблагому Сердцу я препоручаю всех безработных, нищих и несчастных людей. Святая Мария, мой Ангел Хранитель и все святые, молитесь обо мне. Аминь.</p>`,

    eveningPrayerText: `<h4>Вечерние молитвы</h4>
<p><strong>Во имя Отца и Сына и Святого Духа. Аминь.</strong></p>
<p>Царю Небесный, Утешителю, Душе истины, Иже везде сый и вся исполняяй, Сокровище благих и жизни Подателю, прийди и вселися в ны, и очисти ны от всякия скверны, и спаси, Блаже, души наша.</p>
<p>Святый Боже, Святый Крепкий, Святый Безсмертный, помилуй нас. <em>(3 раза)</em></p>
<p class="prayer-rubric">Благодарность и просьба о прощении</p>
<p>О Боже, вот минул ещё один день моей жизни. Каждый миг, прожитый мною, был подарен Тобой: работал ли я или отдыхал, общался с людьми или был один на один с собою, радовался или грустил — всё было Твоим даром.</p>
<p>Благодарю Тебя за всё, что мне довелось узнать и пережить сегодня. Ты один знаешь, сумел ли я исполнить Твою волю. Прости мне всё то, в чём я недосмотрел, о чём забыл, за всё, что не было по воле Твоей. Помилуй меня, грешного. Позволь, пусть ночной отдых приумножит во мне силы, чтобы я мог лучше прожить день завтрашний. Опекай всех спящих и тех, кто трудится этой ночью. Всё будущее моё и моих близких вверяю Твоей милосердной заботе, наш Боже и Отче. Аминь.</p>
<p>Господи Боже наш, всё, чем я согрешил в сей день словом, делом или помышлением, Ты, как Благой и Человеколюбец, прости мне. Мирный и спокойный сон даруй мне. Ангела Твоего Хранителя пошли мне, да заступает и охраняет меня от всякого зла. Аминь.</p>
<p class="prayer-rubric">Славься, Царица (Salve Regina)</p>
<p>Славься, Царица, Матерь милосердия, жизнь, отрада и надежда наша, славься. К Тебе взываем, изгнанные чада Евы. К Тебе воздыхаем, стеная и плача в этой долине слёз. О Заступница наша! К нам устреми Твои милосердные взоры и после этого изгнания яви нам Иисуса, благословенный плод чрева Твоего. О кроткая, о благая, о сладостная Дева Мария.</p>
<p class="prayer-rubric">К Ангелу-Хранителю</p>
<p>Святой Ангел Божий, хранитель и покровитель души моей! Пребудь всегда со мной, утром, вечером, днём и ночью, направляй меня на путь заповедей Божиих и удали от меня все искушения зла. Аминь.</p>
<p class="prayer-rubric">Вспомни, о Всемилостивая Дева Мария (Memorare)</p>
<p>Вспомни, о Всемилостивая Дева Мария, что испокон века никто не слыхал о том, чтобы кто-либо из прибегающих к Тебе, просящих о Твоей помощи, ищущих Твоего заступничества, был Тобою оставлен. Исполненный такого упования, прихожу к Тебе, Дева и Матерь Всевышнего, со смирением и сокрушением о своих грехах. Не презри моих слов, о Мать Предвечного Слова, и благосклонно внемли просьбе моей. Аминь.</p>
<p class="prayer-rubric">Молитва перед сном</p>
<p>Господи, Царь Небесный, Дух истины и душа души моей, поклоняюсь Тебе и молю Тебя: наставь меня, укрепи меня, будь моим руководителем и учителем, научи меня тому, что мне следует делать. Пусть мысли и поступки мои всегда выражают волю Твою. Приими мой сон, моё бдение и каждый миг наступающей ночи. Одного только прошу у Тебя: научи меня всегда творить волю Твою. Аминь.</p>`,
    
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
  // setLanguage перезаписывает data-key="candleLabelOff" текстом "off",
  // но если свеча уже зажжена, нужно показать текст "on" в новом языке.
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
  // Устанавливаем лимиты размера шрифта
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

  // Основной способ — современный Clipboard API (требует HTTPS)
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopied).catch(() => {
      // Fallback — устаревший метод через execCommand
      fallbackCopy(text, showCopied);
    });
  } else {
    // Fallback для браузеров без Clipboard API
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

    // Случайная позиция в верхней части фото (правее центра)
    star.style.left = (35 + Math.random() * 50) + '%';
    star.style.top  = (4  + Math.random() * 28) + '%';

    wrap.appendChild(star);
    setTimeout(() => star.remove(), 1300);
  }

  // Первая зірка з'являється через 6.5с (після розсвіту), далі кожні 20–30с
  function scheduleNext() {
    const delay = 20000 + Math.random() * 10000; // 20–30 секунд
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
  const lightbox       = document.getElementById('lightbox');
  const lightboxImg    = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true'); // BUG FIX: скидаємо aria-hidden
  }

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      lightboxImg.src = item.dataset.src;
      lightboxCaption.innerText = item.dataset[currentLang] || item.querySelector('.gallery-caption').innerText;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
    });

    // Доступность с клавиатуры
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

  // Закрытие по ESC — теперь тоже сбрасывает aria-hidden
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
});