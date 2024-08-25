import analizeBackground from './assets/analizeBackground.png'
import analizeHeroImage from './assets/analizeHeroImage.png'
import strategyHeroImage from './assets/strategyHeroImage.png'
import agreementBackground from './assets/agreementBackground.png'
import agreementHeroImage from './assets/agreementHeroImage.png'
import searchHeroImage from './assets/searchHeroImage.png'
import companyBackground from './assets/companyBackground.png'
import companyHeroImage from './assets/companyHeroImage.png'
import testHeroImage from './assets/testHeroImage.png'
import fixBackground from './assets/fixBackground.png'
import fixHeroImage from './assets/fixHeroImage.png'
import finalHeroImage from './assets/finalHeroImage.png'
import reportsBackground from './assets/reportsBackground.png'
import reportsHeroImage from './assets/reportsHeroImage.png'

export const stepNumberParams = {
    analize:{
        isOdd:true,
        background:analizeBackground,
        heroImage:analizeHeroImage,
        stepNumber:'01',
        title:'Анализ потенциала',
        description:'К сожалению, не всем подходит контекстная реклама, поэтому перед заказом нстройки Яндекс.Директа и Google.Adwords, вы получите предварительный прогноз (показы, клики, заказы и их стоимость).',
        anotherText:'понимание необходимости, результатов и инвестиций'
    },
    strategy:{
        isOdd:false,
        background:'none',
        heroImage:strategyHeroImage,
        stepNumber:'02',
        title:'Определение стратегии и целей',
        description:'В зависимости от ваших ресурсов и конкурентов мы определяем подходящую для вас стратегию оптимального пути для достижения цели.',
        anotherText:'базовая стратегия и поставленные цели'
    },
    agreement:{
        isOdd:true,
        background:agreementBackground,
        heroImage:agreementHeroImage,
        stepNumber:'03',
        title:'Заключение договора',
        description:'Работа без договора ведёт к недопониманию. Поэтому, мы фиксирую все наши обязательства на бумаге для полной прозрачности действий.',
        anotherText:'подписанный договор со всеми обязательствами'
    },
    search:{
        isOdd:false,
        background:'none',
        heroImage:searchHeroImage,
        stepNumber:'04',
        title:'Подбор поисковых запросов',
        description:'Один из самых важных этапов, где Ваше участие просто необходимо. Здесь мы подбираем группы и ключевые запросы для будущей рекламной кампании.',
        anotherText:'собранный и отфильтрованный список ключевых запросов'
    },
    company:{
        isOdd:true,
        background:companyBackground,
        heroImage:companyHeroImage,
        stepNumber:'05',
        title:'Настройка рекламной компании',
        description:'Технический момент, в котором мы настраиваем рекламный кабинет и выставляем ценообразование по заранее договорённому бюджету.',
        anotherText:'рекламная компания готова к запуску'
    },
    test:{
        isOdd:false,
        background:'none',
        heroImage:testHeroImage,
        stepNumber:'06',
        title:'Тестовый запуск',
        description:'Вся рекламная компания запускается на 2 недели для оценки динамики и результатов во избежание “слива” бюджета.',
        anotherText:'определение успешности выбранной стратегии'
    },
    fix:{
        isOdd:true,
        background:fixBackground,
        heroImage:fixHeroImage,
        stepNumber:'07',
        title:'Корректировка',
        description:'Создать успешную компанию сразу - это удача. Поэтому после тестового запуска мы корректируем или даже полностью переделываем контекстную рекламу.',
        anotherText:'убираем нерентабельные ключевые запросы'
    },
    final:{
        isOdd:false,
        background:'none',
        heroImage:finalHeroImage,
        stepNumber:'08',
        title:'Финальный запуск',
        description:'После всех корректировок Вы получаете работающую по-максимуму рекламу, которая стабильно приносит заявки в Вашу компанию.',
        anotherText:'заявки на ваши продукты'
    },
    reports:{
        isOdd:true,
        background:reportsBackground,
        heroImage:reportsHeroImage,
        stepNumber:'09',
        title:'Ведение и ежемесячная отчетность',
        subtitle:'(по желанию)',
        description:'При условии жёсткой конкуренции необходимо постоянно менять стратегию и оптимизировать кампанию, так как другие бизнесы тоже "не спят"',
        anotherText:'понижение стоимости клика и повышение количества заявок'
    },
    1:{
        isOdd:true,
        background:fixBackground,
        heroImage:fixHeroImage,
        stepNumber:'07',
        title:'',
        description:'',
        anotherText:''
    },

}