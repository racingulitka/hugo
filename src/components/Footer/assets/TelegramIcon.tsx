import React, {useState} from 'react'
import styles from '../Hero.module.scss'

export default function TelegramIcon() {
    const [color, setColor] = useState<string>('#8D8D8D')
    return (
        <svg
        onMouseEnter={() => setColor('#9c3131')}
        onMouseLeave={() => setColor('#8D8D8D')}
        width="31" height="27" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M15.5 0C6.944 0 0 6.944 0 15.5C0 24.056 6.944 31 15.5 31C24.056 31 31 24.056 31 15.5C31 6.944 24.056 0 15.5 0ZM22.692 10.54C22.4595 12.989 21.452 18.941 20.9405 21.6845C20.7235 22.847 20.2895 23.2345 19.8865 23.281C18.9875 23.3585 18.3055 22.692 17.4375 22.1185C16.0735 21.2195 15.2985 20.6615 13.981 19.7935C12.4465 18.786 13.4385 18.228 14.322 17.329C14.5545 17.0965 18.5225 13.485 18.6 13.1595C18.6108 13.1102 18.6093 13.059 18.5958 13.0104C18.5823 12.9618 18.5571 12.9172 18.5225 12.8805C18.4295 12.803 18.3055 12.834 18.197 12.8495C18.0575 12.8805 15.8875 14.322 11.656 17.174C11.036 17.5925 10.478 17.8095 9.982 17.794C9.424 17.7785 8.37 17.484 7.5795 17.2205C6.603 16.9105 5.8435 16.74 5.9055 16.1975C5.9365 15.9185 6.324 15.6395 7.0525 15.345C11.5785 13.3765 14.5855 12.0745 16.089 11.4545C20.398 9.6565 21.2815 9.3465 21.8705 9.3465C21.9945 9.3465 22.289 9.3775 22.475 9.5325C22.63 9.6565 22.6765 9.827 22.692 9.951C22.6765 10.044 22.7075 10.323 22.692 10.54Z" fill={color} />
        </svg>
    )
}