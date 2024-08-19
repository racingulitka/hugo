import React from 'react'
import styles from './LandingPageImportant.module.scss'
import Image from 'next/image'
import hero from './assets/hero.svg'
import { importantArr } from './LandingPageImportant.config'

export default function LandingPageImportant({
    isMobile,
}:{
    isMobile:boolean,
}){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.leftCard}>
                    <div className={styles.titleBlock}>
                        <h3 className={styles.title}>
                        ДЛЯ ВАС ЭТО{!isMobile && <br></br>}ВАЖНО
                        </h3>
                        <p className={styles.subtitle}>МЫ ЗНАЕМ ЭТО</p>
                    </div>
                    {!isMobile && <Image src={hero} alt='hero' className={styles.heroImage} width={515}/>}
                </div>
                <div className={styles.rightCard}>
                    <div className={styles.container}>
                        {
                            importantArr.map(card => {
                                return(
                                    <div className={styles.card} key={card.id}>
                                        <Image src={card.icon} alt='icon' width={isMobile ? 45 : 90} />
                                        <div className={styles.textBlock}>
                                            <p className={styles.title}>{card.title}</p>
                                            <p className={styles.text}>{card.text}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}