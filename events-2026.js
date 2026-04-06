/**
 * ПАСТЫРСКАЯ ПРОГРАММА 2026
 * Приход Успения Пресвятой Богородицы, Кишинёв
 * Источник: ПАСТЫРСКАЯ ПРОГРАММА 2026.xlsx
 *
 * Категории (category):
 *   'liturgy'     — Богослужения и молитва
 *   'lent'        — Великий пост / покаяние
 *   'feast'       — Главные праздники
 *   'formation'   — Катехизация и формация
 *   'youth'       — Молодёжь и дети
 *   'mission'     — Миссия и социальное служение
 *   'family'      — Семья
 *   'community'   — Приходские встречи
 *   'memorial'    — Дни памяти
 *
 * Тип (type):
 *   'dated'     — событие с конкретной датой
 *   'recurring' — регулярное событие
 *   'period'    — период / диапазон дат
 *
 * highlight: true — главное событие года (выделяется визуально)
 */

const PLANNER_EVENTS_2026 = [

  // ──────────────────────────────────────────────
  //  ЯНВАРЬ
  // ──────────────────────────────────────────────
  {
    id: 1,
    month: 1,
    title: { ru: "Богоявление Господне (Йордан)", uk: "Богоявлення Господнє (Йордан)" },
    date: "6 января 2026",
    dateISO: "2026-01-06",
    time: "09:00",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Освящение воды, торжество Богоявления" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Вторник. Торжественная Литургия, освящение воды." }
  },
  {
    id: 2,
    month: 1,
    title: { ru: "Ежедневная Божественная Литургия", uk: "Щоденна Божественна Літургія" },
    date: "Ежедневно",
    dateISO: null,
    time: "09:00 (будни); 09:00 и 10:30 (воскресенье)",
    category: "liturgy",
    type: "recurring",
    highlight: false,
    goal: { ru: "Евхаристический центр прихода" },
    responsible: { ru: "Настоятель" },
    note: { ru: "По воскресеньям — на двух языках." }
  },
  {
    id: 3,
    month: 1,
    title: { ru: "Молитвенные встречи (пн и пт)", uk: "Молитовні зустрічі (пн і пт)" },
    date: "Еженедельно",
    dateISO: null,
    time: null,
    category: "liturgy",
    type: "recurring",
    highlight: false,
    goal: { ru: "Усиление молитвенной жизни прихода" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Перенесено и продолжено из программы 2025." }
  },

  // ──────────────────────────────────────────────
  //  ФЕВРАЛЬ
  // ──────────────────────────────────────────────
  {
    id: 4,
    month: 2,
    title: { ru: "Сретение Господне", uk: "Стрітення Господнє" },
    date: "2 февраля 2026",
    dateISO: "2026-02-02",
    time: "09:00",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Свечи, крестный ход" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Понедельник. Освящение свечей, праздничная Литургия." }
  },
  {
    id: 5,
    month: 2,
    title: { ru: "Заседание Пастырского совета", uk: "Засідання Пасторської ради" },
    date: "Февраль 2026",
    dateISO: null,
    time: null,
    category: "community",
    type: "dated",
    highlight: false,
    goal: { ru: "Общая ответственность за жизнь прихода" },
    responsible: { ru: "Пастырский совет" },
    note: { ru: "2 раза в год: февраль и сентябрь." }
  },
  {
    id: 6,
    month: 2,
    title: { ru: "Покаянные встречи перед постом", uk: "Покаянні зустрічі перед постом" },
    date: "Февраль 2026",
    dateISO: "2026-02-01",
    time: null,
    category: "lent",
    type: "dated",
    highlight: true,
    goal: { ru: "Исповедь, примирение, подготовка к посту" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Неделя перед началом Великого поста." }
  },
  {
    id: 7,
    month: 2,
    title: { ru: "Катехизация детей", uk: "Катехиза дітей" },
    date: "Каждое воскресенье",
    dateISO: null,
    time: "После Литургии",
    category: "youth",
    type: "recurring",
    highlight: false,
    goal: { ru: "Основы веры, духовный рост детей" },
    responsible: { ru: "Катехиты" },
    note: { ru: "Игры, Священное Писание, молитва." }
  },

  // ──────────────────────────────────────────────
  //  МАРТ
  // ──────────────────────────────────────────────
  {
    id: 8,
    month: 3,
    title: { ru: "Прощёное воскресенье", uk: "Прощена неділя" },
    date: "1 марта 2026",
    dateISO: "2026-03-01",
    time: "После Литургии",
    category: "lent",
    type: "dated",
    highlight: true,
    goal: { ru: "Примирение прихода, подготовка к Великому посту" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Обряд взаимного прощения. Великий пост начинается 2 марта." }
  },
  {
    id: 9,
    month: 3,
    title: { ru: "Начало Великого поста", uk: "Початок Великого посту" },
    date: "2 марта 2026",
    dateISO: "2026-03-02",
    time: "09:00",
    category: "lent",
    type: "dated",
    highlight: true,
    goal: { ru: "Вступление в постный период" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Великий пост продолжается до Пасхи 12 апреля." }
  },
  {
    id: 10,
    month: 3,
    title: { ru: "Великопостные реколлекции", uk: "Великопосні реколекції" },
    date: "9–14 марта 2026",
    dateISO: "2026-03-09",
    dateEndISO: "2026-03-14",
    time: null,
    category: "lent",
    type: "period",
    highlight: true,
    goal: { ru: "Духовное обновление и углубление веры" },
    responsible: { ru: "Настоятель" },
    note: { ru: "6 дней духовных упражнений. Возможен приглашённый гость. До Пасхи (5 апреля по н.с. / 12 по в.с.)." }
  },
  {
    id: 11,
    month: 3,
    title: { ru: "Благовещение Пресвятой Богородицы", uk: "Благовіщення Пресвятої Богородиці" },
    date: "25 марта 2026",
    dateISO: "2026-03-25",
    time: "09:00",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Праздничная Литургия" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Среда. Один из главных Богородичных праздников." }
  },
  {
    id: 12,
    month: 3,
    title: { ru: "Час адорации", uk: "Година адорації" },
    date: "1 раз в месяц (четверг)",
    dateISO: null,
    time: null,
    category: "liturgy",
    type: "recurring",
    highlight: false,
    goal: { ru: "Молитва, тишина, слушание Духа Святого" },
    responsible: { ru: "Настоятель + молодёжь" },
    note: { ru: "Рекомендуется проводить в четверг — День адорации." }
  },
  {
    id: 13,
    month: 3,
    title: { ru: "Крестный Путь", uk: "Хресна Дорога" },
    date: "Март–апрель 2026 (пятницы поста)",
    dateISO: null,
    time: null,
    category: "lent",
    type: "recurring",
    highlight: false,
    goal: { ru: "Созерцание Страстей Христовых" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Каждую пятницу Великого поста." }
  },
  {
    id: 14,
    month: 3,
    title: { ru: "Экономический совет", uk: "Економічна рада" },
    date: "Март 2026",
    dateISO: null,
    time: null,
    category: "community",
    type: "dated",
    highlight: false,
    goal: { ru: "Прозрачность и бюджет прихода" },
    responsible: { ru: "Экономический совет" },
    note: { ru: "2 раза в год: март и октябрь." }
  },

  // ──────────────────────────────────────────────
  //  АПРЕЛЬ
  // ──────────────────────────────────────────────
  {
    id: 15,
    month: 4,
    title: { ru: "Страстная неделя", uk: "Страсний тиждень" },
    date: "6–11 апреля 2026",
    dateISO: "2026-04-06",
    dateEndISO: "2026-04-11",
    time: null,
    category: "lent",
    type: "period",
    highlight: true,
    goal: { ru: "Созерцание Страстей Господних" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Вход Господень в Иерусалим — 6 апреля. Страстная Пятница — 10 апреля. Великая Суббота — 11 апреля." }
  },
  {
    id: 16,
    month: 4,
    title: { ru: "ПАСХА — Воскресение Христово", uk: "ПАСХА — Воскресіння Христове" },
    date: "12 апреля 2026",
    dateISO: "2026-04-12",
    time: "Торжественная Литургия",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Радость Воскресения — главное событие церковного года" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Воскресенье. Главное событие года. Торжественная ночная и утренняя Литургия." }
  },
  {
    id: 17,
    month: 4,
    title: { ru: "Светлая седмица", uk: "Світла седмиця" },
    date: "13–18 апреля 2026",
    dateISO: "2026-04-13",
    dateEndISO: "2026-04-18",
    time: null,
    category: "feast",
    type: "period",
    highlight: true,
    goal: { ru: "Пасхальная радость всей недели" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Праздничные Литургии на протяжении всей недели после Пасхи." }
  },
  {
    id: 18,
    month: 4,
    title: { ru: "Приходское собрание (весна)", uk: "Парафіяльні збори (весна)" },
    date: "Весна 2026",
    dateISO: null,
    time: null,
    category: "community",
    type: "dated",
    highlight: false,
    goal: { ru: "Оценка пути, общее планирование" },
    responsible: { ru: "Настоятель" },
    note: { ru: "2 раза в год: весна и осень." }
  },

  // ──────────────────────────────────────────────
  //  МАЙ
  // ──────────────────────────────────────────────
  {
    id: 19,
    month: 5,
    title: { ru: "Вознесение Господне", uk: "Вознесіння Господнє" },
    date: "21 мая 2026",
    dateISO: "2026-05-21",
    time: "09:00",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Торжество Вознесения" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Четверг. Торжественная Литургия." }
  },
  {
    id: 20,
    month: 5,
    title: { ru: "Пятидесятница (Сошествие Святого Духа)", uk: "П'ятидесятниця (Зіслання Святого Духа)" },
    date: "31 мая 2026",
    dateISO: "2026-05-31",
    time: "09:00 и 10:30",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Праздник Святого Духа — рождение Церкви" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Воскресенье. Торжество. На следующий день — День Святого Духа (1 июня)." }
  },
  {
    id: 21,
    month: 5,
    title: { ru: "Духовные вечера / Lectio Divina", uk: "Духовні вечори / Lectio Divina" },
    date: "1 раз в месяц",
    dateISO: null,
    time: null,
    category: "formation",
    type: "recurring",
    highlight: false,
    goal: { ru: "Духовный рост через молитву и Священное Писание" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Темы: Писание, молитва, семья, Таинства." }
  },
  {
    id: 22,
    month: 5,
    title: { ru: "Молодёжные выезды / паломничества", uk: "Молодіжні виїзди / паломництва" },
    date: "1–2 раза в год (весна/осень)",
    dateISO: null,
    time: null,
    category: "youth",
    type: "recurring",
    highlight: false,
    goal: { ru: "Единство, опыт Церкви, паломничество" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Весенние и осенние выезды." }
  },

  // ──────────────────────────────────────────────
  //  ИЮНЬ
  // ──────────────────────────────────────────────
  {
    id: 23,
    month: 6,
    title: { ru: "День Святого Духа", uk: "День Святого Духа" },
    date: "1 июня 2026",
    dateISO: "2026-06-01",
    time: "09:00",
    category: "feast",
    type: "dated",
    highlight: false,
    goal: { ru: "Продолжение торжества Пятидесятницы" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Понедельник." }
  },
  {
    id: 24,
    month: 6,
    title: { ru: "Всех Святых", uk: "Всіх Святих" },
    date: "14 июня 2026",
    dateISO: "2026-06-14",
    time: "09:00",
    category: "feast",
    type: "dated",
    highlight: false,
    goal: { ru: "Память и прославление всех святых" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Воскресенье." }
  },
  {
    id: 25,
    month: 6,
    title: { ru: "Посещение больных", uk: "Відвідання хворих" },
    date: "Еженедельно",
    dateISO: null,
    time: null,
    category: "mission",
    type: "recurring",
    highlight: false,
    goal: { ru: "Причастие, молитва, пастырская опека" },
    responsible: { ru: "Миряне" },
    note: null
  },
  {
    id: 26,
    month: 6,
    title: { ru: "Волонтёрский центр / благотворительная работа", uk: "Волонтерський центр / благодійність" },
    date: "Постоянно",
    dateISO: null,
    time: null,
    category: "mission",
    type: "recurring",
    highlight: false,
    goal: { ru: "Помощь нуждающимся" },
    responsible: { ru: "Миряне" },
    note: { ru: "Сотрудничество с Optima Fide. Сбор одежды, продуктов." }
  },

  // ──────────────────────────────────────────────
  //  ИЮЛЬ
  // ──────────────────────────────────────────────
  {
    id: 27,
    month: 7,
    title: { ru: "Летний молодёжный / детский день", uk: "Літній молодіжний / дитячий день" },
    date: "Июль 2026",
    dateISO: "2026-07-01",
    time: null,
    category: "youth",
    type: "dated",
    highlight: true,
    goal: { ru: "Единство молодёжи и детей, совместная молитва и игры" },
    responsible: { ru: "Миряне" },
    note: { ru: "Игры, молитва, общение на природе." }
  },
  {
    id: 28,
    month: 7,
    title: { ru: "Творческие мастерские", uk: "Творчі майстерні" },
    date: "1 раз в месяц",
    dateISO: null,
    time: null,
    category: "youth",
    type: "recurring",
    highlight: false,
    goal: { ru: "Раскрытие талантов, духовное и творческое развитие" },
    responsible: { ru: "Миряне" },
    note: { ru: "Иконопись, музыка, рукоделие." }
  },
  {
    id: 29,
    month: 7,
    title: { ru: "Приходские поездки, пикники", uk: "Парафіяльні поїздки, пікніки" },
    date: "Сезонно (лето)",
    dateISO: null,
    time: null,
    category: "community",
    type: "recurring",
    highlight: false,
    goal: { ru: "Приходское единство, дружеское общение" },
    responsible: { ru: "Миряне" },
    note: null
  },

  // ──────────────────────────────────────────────
  //  АВГУСТ
  // ──────────────────────────────────────────────
  {
    id: 30,
    month: 8,
    title: { ru: "Преображение Господне", uk: "Преображення Господнє" },
    date: "6 августа 2026",
    dateISO: "2026-08-06",
    time: "09:00",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Освящение плодов, Литургия" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Четверг. Освящение овощей и плодов." }
  },
  {
    id: 31,
    month: 8,
    title: { ru: "Храмовый праздник Успения Пресвятой Богородицы", uk: "Храмове свято Успіння Пресвятої Богородиці" },
    date: "16 августа 2026",
    dateISO: "2026-08-16",
    time: "09:00 и 10:30",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Храмовый праздник — единство всего прихода" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Воскресенье. Главный приходской праздник года. Торжественная Литургия, крестный ход, праздничный стол." }
  },

  // ──────────────────────────────────────────────
  //  СЕНТЯБРЬ
  // ──────────────────────────────────────────────
  {
    id: 32,
    month: 9,
    title: { ru: "Рождество Пресвятой Богородицы", uk: "Різдво Пресвятої Богородиці" },
    date: "8 сентября 2026",
    dateISO: "2026-09-08",
    time: "09:00",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Марийный праздник" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Вторник. Праздник Рождества Богородицы." }
  },
  {
    id: 33,
    month: 9,
    title: { ru: "Воздвижение Честного и Животворящего Креста", uk: "Воздвиження Чесного і Животворящого Хреста" },
    date: "14 сентября 2026",
    dateISO: "2026-09-14",
    time: "09:00",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Поклонение Кресту, постный день" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Понедельник. Строгий пост." }
  },
  {
    id: 34,
    month: 9,
    title: { ru: "Заседание Пастырского совета (осень)", uk: "Засідання Пасторської ради (осінь)" },
    date: "Сентябрь 2026",
    dateISO: null,
    time: null,
    category: "community",
    type: "dated",
    highlight: false,
    goal: { ru: "Общая ответственность за жизнь прихода" },
    responsible: { ru: "Пастырский совет" },
    note: null
  },
  {
    id: 35,
    month: 9,
    title: { ru: "Курс «Новая жизнь» RNSS (осенний цикл)", uk: "Курс «Нове життя» RNSS (осінній цикл)" },
    date: "Осень 2026",
    dateISO: null,
    time: null,
    category: "formation",
    type: "recurring",
    highlight: false,
    goal: { ru: "Обновление веры, 8–10 встреч" },
    responsible: { ru: "Настоятель, RNSS" },
    note: { ru: "2 цикла в год: весна и осень. По 8–10 встреч." }
  },
  {
    id: 36,
    month: 9,
    title: { ru: "Подростковая группа «Школа ученичества»", uk: "Підліткова група «Школа учнівства»" },
    date: "2 раза в месяц",
    dateISO: null,
    time: null,
    category: "youth",
    type: "recurring",
    highlight: false,
    goal: { ru: "Характер, вера, дружба" },
    responsible: { ru: "Молодёжные лидеры" },
    note: { ru: "Темы: чистота, служение, ответственность." }
  },

  // ──────────────────────────────────────────────
  //  ОКТЯБРЬ
  // ──────────────────────────────────────────────
  {
    id: 37,
    month: 10,
    title: { ru: "Экономический совет (осень)", uk: "Економічна рада (осінь)" },
    date: "Октябрь 2026",
    dateISO: null,
    time: null,
    category: "community",
    type: "dated",
    highlight: false,
    goal: { ru: "Бюджет и прозрачность" },
    responsible: { ru: "Экономический совет" },
    note: null
  },
  {
    id: 38,
    month: 10,
    title: { ru: "Приходское собрание (осень)", uk: "Парафіяльні збори (осінь)" },
    date: "Осень 2026",
    dateISO: null,
    time: null,
    category: "community",
    type: "dated",
    highlight: false,
    goal: { ru: "Оценка года, планирование следующего" },
    responsible: { ru: "Настоятель" },
    note: null
  },
  {
    id: 39,
    month: 10,
    title: { ru: "Формация лидеров", uk: "Формація лідерів" },
    date: "1 раз в квартал",
    dateISO: null,
    time: null,
    category: "formation",
    type: "recurring",
    highlight: false,
    goal: { ru: "Подготовка мирян к служению и руководству" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Темы: организация, служение, лидерство." }
  },

  // ──────────────────────────────────────────────
  //  НОЯБРЬ
  // ──────────────────────────────────────────────
  {
    id: 40,
    month: 11,
    title: { ru: "Введение во Храм Пресвятой Богородицы", uk: "Введення у Храм Пресвятої Богородиці" },
    date: "21 ноября 2026",
    dateISO: "2026-11-21",
    time: "09:00",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Марийный праздник" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Суббота. Отдание чести Богородице." }
  },
  {
    id: 41,
    month: 11,
    title: { ru: "Дни памяти — Голодомор", uk: "Дні пам'яті — Голодомор" },
    date: "28 ноября 2026",
    dateISO: "2026-11-28",
    time: null,
    category: "memorial",
    type: "dated",
    highlight: true,
    goal: { ru: "Панихида, память о жертвах Голодомора" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Суббота. Заупокойное богослужение." }
  },
  {
    id: 42,
    month: 11,
    title: { ru: "Начало Адвента", uk: "Початок Адвенту" },
    date: "29 ноября 2026",
    dateISO: "2026-11-29",
    time: null,
    category: "lent",
    type: "dated",
    highlight: true,
    goal: { ru: "Вступление в адвентовое время ожидания" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Воскресенье. Начало периода духовного ожидания и подготовки к Рождеству." }
  },

  // ──────────────────────────────────────────────
  //  ДЕКАБРЬ
  // ──────────────────────────────────────────────
  {
    id: 43,
    month: 12,
    title: { ru: "День Святого Николая для детей", uk: "День Святого Миколая для дітей" },
    date: "6 декабря 2026",
    dateISO: "2026-12-06",
    time: "После Литургии",
    category: "youth",
    type: "dated",
    highlight: true,
    goal: { ru: "Радость милосердия, дары детям" },
    responsible: { ru: "Молодёжь, миряне" },
    note: { ru: "Воскресенье. Праздник для детей прихода." }
  },
  {
    id: 44,
    month: 12,
    title: { ru: "Адвентовые реколлекции", uk: "Адвентові реколекції" },
    date: "7–8 декабря 2026",
    dateISO: "2026-12-07",
    dateEndISO: "2026-12-08",
    time: null,
    category: "lent",
    type: "period",
    highlight: true,
    goal: { ru: "Духовная подготовка к Рождеству Христову" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Понедельник–вторник. Возможен приглашённый гость." }
  },
  {
    id: 45,
    month: 12,
    title: { ru: "Рождественский вечер", uk: "Різдвяний вечір" },
    date: "24 декабря 2026",
    dateISO: "2026-12-24",
    time: "Вечер",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Единство прихода в канун Рождества" },
    responsible: { ru: "Настоятель, приход" },
    note: { ru: "Четверг. Сочельник, рождественские колядки, совместный вечер." }
  },
  {
    id: 46,
    month: 12,
    title: { ru: "Рождество Христово", uk: "Різдво Христове" },
    date: "25 декабря 2026",
    dateISO: "2026-12-25",
    time: "09:00 и 10:30",
    category: "feast",
    type: "dated",
    highlight: true,
    goal: { ru: "Торжество Рождества Христова" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Пятница. Торжественная Литургия. Слава Богу!" }
  },

  // ──────────────────────────────────────────────
  //  РЕГУЛЯРНЫЕ СОБЫТИЯ (все месяцы)
  // ──────────────────────────────────────────────
  {
    id: 50,
    month: null, // все месяцы
    title: { ru: "Индивидуальное духовное сопровождение", uk: "Індивідуальний духовний супровід" },
    date: "По записи",
    dateISO: null,
    time: "По договорённости",
    category: "formation",
    type: "recurring",
    highlight: false,
    goal: { ru: "Поддержка и сопровождение верующих" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Особенно — молодёжь и семьи." }
  },
  {
    id: 51,
    month: null,
    title: { ru: "Курс основ веры (взрослые)", uk: "Курс основ віри (дорослі)" },
    date: "1 раз в месяц",
    dateISO: null,
    time: null,
    category: "formation",
    type: "recurring",
    highlight: false,
    goal: { ru: "Подготовка к Таинствам" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Темы: Литургика, нравственное богословие." }
  },
  {
    id: 52,
    month: null,
    title: { ru: "Обучение чтецов и министрантов", uk: "Навчання читців і міністрантів" },
    date: "1 раз в месяц",
    dateISO: null,
    time: null,
    category: "formation",
    type: "recurring",
    highlight: false,
    goal: { ru: "Литургическое служение" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Чтение, практика, подготовка к службе." }
  },
  {
    id: 53,
    month: null,
    title: { ru: "Встречи для родителей", uk: "Зустрічі для батьків" },
    date: "4–6 раз в год",
    dateISO: null,
    time: null,
    category: "family",
    type: "recurring",
    highlight: false,
    goal: { ru: "Поддержка семей, воспитание детей" },
    responsible: { ru: "Настоятель" },
    note: { ru: "Темы: воспитание, гаджеты, семейная молитва." }
  },
  {
    id: 54,
    month: null,
    title: { ru: "День слушания «забытых»", uk: "День слухання «забутих»" },
    date: "1 раз в месяц",
    dateISO: null,
    time: null,
    category: "mission",
    type: "recurring",
    highlight: false,
    goal: { ru: "Участие слабых и уязвимых голосов" },
    responsible: { ru: "Волонтёры" },
    note: { ru: "Одинокие, больные, бедные." }
  },
  {
    id: 55,
    month: null,
    title: { ru: "Курс румынского языка", uk: "Курс румунської мови" },
    date: "2 раза в неделю (6 месяцев)",
    dateISO: null,
    time: null,
    category: "formation",
    type: "recurring",
    highlight: false,
    goal: { ru: "Интеграция, изучение местного языка" },
    responsible: { ru: "Преподаватель" },
    note: { ru: "Из программы 2025, продолжение." }
  },
  {
    id: 56,
    month: null,
    title: { ru: "Социальные акции / День добрых дел", uk: "Соціальні акції / День добрих справ" },
    date: "По необходимости",
    dateISO: null,
    time: null,
    category: "mission",
    type: "recurring",
    highlight: false,
    goal: { ru: "Культура милосердия" },
    responsible: { ru: "Миряне" },
    note: null
  },
  {
    id: 57,
    month: null,
    title: { ru: "Участие в епархиальных мероприятиях", uk: "Участь у єпархіальних заходах" },
    date: "По церковному календарю",
    dateISO: null,
    time: null,
    category: "community",
    type: "recurring",
    highlight: false,
    goal: { ru: "Единство с Церковью" },
    responsible: { ru: "Настоятель" },
    note: null
  }
];

// Цвета и метки категорий
const EVENT_CATEGORIES = {
  liturgy:   { label: { ru: "Богослужение",      uk: "Богослужіння"       }, color: "#5a7a8f", bg: "#edf3f7" },
  lent:      { label: { ru: "Пост / Покаяние",   uk: "Піст / Покаяння"    }, color: "#7a6a8f", bg: "#f0edf7" },
  feast:     { label: { ru: "Праздник",           uk: "Свято"              }, color: "#b99252", bg: "#fdf6ea" },
  formation: { label: { ru: "Формация",           uk: "Формація"           }, color: "#4a8a6a", bg: "#edf7f2" },
  youth:     { label: { ru: "Молодёжь и дети",    uk: "Молодь і діти"      }, color: "#7a8a4a", bg: "#f5f7ed" },
  mission:   { label: { ru: "Служение",           uk: "Служіння"           }, color: "#8a5a4a", bg: "#f7eeec" },
  family:    { label: { ru: "Семья",              uk: "Сім'я"              }, color: "#6a7a8a", bg: "#edf2f7" },
  community: { label: { ru: "Приход",             uk: "Парафія"            }, color: "#4a7a8a", bg: "#edf6f7" },
  memorial:  { label: { ru: "Память",             uk: "Пам'ять"            }, color: "#6a6a6a", bg: "#f2f2f2" }
};

const MONTH_NAMES = {
  ru: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
  uk: ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"]
};
