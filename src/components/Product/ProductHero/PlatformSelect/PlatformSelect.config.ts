import { StaticImageData } from 'next/image'
import fiveMLogo from './assets/fiveMLogo.png'
import greenLogo from './assets/greenLogo.png'
import rageLogo from './assets/rageLogo.png'

export interface Platforms{
    id:number,
    logo:StaticImageData,
}

export const platforms:Platforms[] = [
    {
        id:1,
        logo:fiveMLogo,
    },
    {
        id:2,
        logo:greenLogo,
    },
    {
        id:3,
        logo:rageLogo,
    },
]