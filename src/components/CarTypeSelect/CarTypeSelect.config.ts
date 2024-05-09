import { CarTypeTypes } from "./CarType.typings"
import sedanWhite from './assets/sedanWhite.png'
import sedanBlack from './assets/sedanBlack.png'
import coupeWhite from './assets/coupeWhite.png'
import coupeBlack from './assets/coupeBlack.png'
import liftbackWhite from './assets/liftbackWhite.png'
import liftbackBlack from './assets/liftbackBlack.png'
import allroadWhite from './assets/allroadWhite.png'
import allroadBlack from './assets/allroadBlack.png'
import crossoverWhite from './assets/crossoverWhite.png'
import crossoverBlack from './assets/crossoverBlack.png'
import cabrioletWhite from './assets/cabrioletWhite.png'
import cabrioletBlack from './assets/cabrioletBlack.png'
import pickupWhite from './assets/pickupWhite.png'
import pickupBlack from './assets/pickupBlack.png'
import minivanWhite from './assets/minivanWhite.png'
import minivanBlack from './assets/minivanBlack.png'

export enum CarType{
    sedan,
    coupe,
    liftback,
    allroad,
    crossover,
    cabriolet,
    pickup,
    minivan,
}

export const carType:CarTypeTypes[] = [
    {
        id:CarType.sedan,
        iconWhite:sedanWhite,
        iconBlack:sedanBlack,
        name:'Седан',
    },
    {
        id:CarType.coupe,
        iconWhite:coupeWhite,
        iconBlack:coupeBlack,
        name:'Купе',
    },
    {
        id:CarType.liftback,
        iconWhite:liftbackWhite,
        iconBlack:liftbackBlack,
        name:'Лифтбэк',
    },
    {
        id:CarType.allroad,
        iconWhite:allroadWhite,
        iconBlack:allroadBlack,
        name:'Внедорожник',
    },
    {
        id:CarType.crossover,
        iconWhite:crossoverWhite,
        iconBlack:crossoverBlack,
        name:'Кроссовер',
    },
    {
        id:CarType.cabriolet,
        iconWhite:cabrioletWhite,
        iconBlack:cabrioletBlack,
        name:'Кабриолет',
    },
    {
        id:CarType.pickup,
        iconWhite:pickupWhite,
        iconBlack:pickupBlack,
        name:'Пикап',
    },
    {
        id:CarType.minivan,
        iconWhite:minivanWhite,
        iconBlack:minivanBlack,
        name:'Минивэн',
    },
]