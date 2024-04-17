import React from 'react'
import styles from './MenuBlock.module.scss'
import mini from './assets/mini.svg'
import Image from 'next/image'

export default function MenuBlock({
    text,
}:{
    text:string,
}){
    return(
        <div className={styles.wrapper}>
            <Image src={mini} alt='miniIcon' className={styles.mini} />
            <p>{text}</p>
        </div>
    )
}