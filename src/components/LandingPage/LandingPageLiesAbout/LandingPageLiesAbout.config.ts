import paper from './assets/paper.svg'
import eye from './assets/eye.svg'
import browser from './assets/browser.svg'
import { StaticImageData } from 'next/image'

export interface LiesCard{
    id:number,
    icon:StaticImageData,
    title:string,
    text:string,
    question:string,
}

export const liesCardsArr:LiesCard[] = [
    {
        id:1,
        icon:paper,
        title:'Хитрый договор',
        text:'Который считается выполненным, если достигается результат в любой из дней работы сайта',
        question:'ЗАЧЕМ ВАМ ИМИТАЦИЯ РЕЗУЛЬТАТА?',
    },
    {
        id:2,
        icon:eye,
        title:'Ненастоящие заявки',
        text:'Которые временно оставляют сами разработчики, чтобы выполнить обещания по договору',
        question:'ЗАЧЕМ ВАМ ИМИТАЦИЯ РЕЗУЛЬТАТА?',
    },
    {
        id:3,
        icon:browser,
        title:'Громкие призывы',
        text:'Которые приводят псевдоклиентов. Например, “Скидка 90%” или “Проект бесплатно”',
        question:'ЗАЧЕМ ВАМ ИМИТАЦИЯ РЕЗУЛЬТАТА?',
    },
]