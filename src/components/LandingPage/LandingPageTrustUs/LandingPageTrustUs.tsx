import React from 'react'
import styles from './LandingPageTrustUs.module.scss'
import { cardsArr } from './LandingPageTrustUs.config'
import Image from 'next/image'

export default function LandingPageTrustUs(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.title}>МЫ КРУПНАЯ КОМПАНИЯ<br></br><span>И ВЫ МОЖЕТЕ НАМ ДОВЕРЯТЬ</span></div>
                <div className={styles.cardBlock}>
                    {
                        cardsArr.map(card => {
                            return(
                                <div className={styles.card} key={card.id}>
                                    <div className={styles.imageBlock}>
                                        <Image src={card.icon} alt='icon' className={styles.image} />
                                    </div>
                                    <p className={styles.text}>{card.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}