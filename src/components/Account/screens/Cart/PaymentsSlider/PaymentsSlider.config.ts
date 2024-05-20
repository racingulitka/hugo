import ApplePayIcon from "./assets/ApplePayIcon"
import GooglePayIcon from './assets/GooglePayIcon'
import MastercardPayIcon from './assets/MastercardPayIcon'
import MirPayIcon from './assets/MirPayIcon'
import SbpPayIcon from './assets/SbpPayIcon'
import YoolaPayIcon from './assets/YoolaPayIcon'


export interface PaymentMethods{
    id:number,
    icon:React.ElementType,
}

export const paymentMethods:PaymentMethods[] = [
    {
        id:1,
        icon:ApplePayIcon,
    },
    {
        id:2,
        icon:GooglePayIcon,
    },
    {
        id:3,
        icon:MirPayIcon,
    },
    {
        id:4,
        icon:MastercardPayIcon,
    },
    {
        id:5,
        icon:SbpPayIcon,
    },
    {
        id:6,
        icon:YoolaPayIcon,
    },
    {
        id:7,
        icon:YoolaPayIcon,
    },
    {
        id:8,
        icon:YoolaPayIcon,
    },

]