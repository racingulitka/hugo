import phoneIcon from './assets/phoneIcon.svg'
import discordIcon from './assets/discordIcon.svg'
import telegramIcon from './assets/telegramIcon.svg'

export interface Selectors{
    id:number,
    icon:string,
    placeholder:string,
}

export const selectors:Selectors[] = [
    {
        id:1,
        icon:phoneIcon,
        placeholder:'Номер телефона',
    },
    {
        id:2,
        icon:discordIcon,
        placeholder:'discordId',
    },
    {
        id:3,
        icon:telegramIcon,
        placeholder:'telegramId',
    },
]