import React from 'react'
import styles from './LandingPageLongDev.module.scss'
import { longDevArr } from './LandingPageLongDev.config'

export default function LandingPageLongDev(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>РАЗРАБАТЫВАЕМ ДОЛГО - 21 ДЕНЬ</h3>
                <p className={styles.subtitle}>НЕЛЬЗЯ СДЕЛАТЬ ХОРОШО ЗА КОРОТКОЕ ВРЕМЯ</p>
                <div className={styles.flexContainer}>
                    {
                        longDevArr.map(item => {
                            return(
                                <div key={item.id} className={styles.container}>
                                    <div className={styles.numberBlock}>{item.id}</div>
                                    <p className={styles.text}>{item.text}</p>
                                </div>
                            )
                        })
                    }
                    <div className={styles.total}><span>ИТОГ</span>: 21 ДЕНЬ НА ПОЛНУЮ РАЗРАБОТКУ LANDING PAGE</div>
                </div>
            </div>
        </div>
    )
}