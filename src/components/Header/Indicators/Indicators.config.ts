import profileIcon from './assets/profileIcon.svg'
import favouriteIcon from './assets/favouritesIcon.svg'
import bagIcon from './assets/bagIcon.svg'

export interface IndicatorsArr{
    id:number,
    icon:string,
    title:string,
    link:string,
}

export const indicatorsArr:IndicatorsArr[] = [
    {
        id:1,
        icon:profileIcon,
        title:'Профиль',
        link:'/account',
    },
    {
        id:2,
        icon:favouriteIcon,
        title:'Избранное',
        link:'/',
    },
    {
        id:3,
        icon:bagIcon,
        title:'Корзина',
        link:'/',
    },
]