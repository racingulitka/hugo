import React from 'react'
import styles from './AdvertisementWeAreNotTheBest.module.scss'
import { theBestArr } from './AdvertisementWeAreNotTheBest.config'
import Image from 'next/image'

export default function AdvertisementWeAreNotTheBest({
    isMobile,
}:{
    isMobile:boolean,
}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>НЕТ, МЫ НЕ ЛУЧШЕ</h3>
                <p className={styles.subtitle}>ПРОСТО ХОРОШО ДЕЛАЕМ</p>
                <div className={styles.flexContainer}>
                    {
                        theBestArr.map(item => {
                            return(
                                <div className={styles.card} key={item.id}>
                                    <Image src={item.icon} alt='icon' width={isMobile ? 45 : 100} />
                                    <p className={styles.text}>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}