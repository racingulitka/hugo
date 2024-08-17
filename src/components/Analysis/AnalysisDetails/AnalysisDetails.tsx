import React from 'react'
import styles from './AnalysisDetails.module.scss'
import { theBestArr } from './AnalysisDetails.config'
import Image from 'next/image'

export default function AnalysisDetails({
    isMobile,
}:{
    isMobile:boolean,
}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>ДЕТАЛИ РАБОТЫ</h3>
                <p className={styles.subtitle}>ПРИЯТНОЕ ДОПОЛНЕНИЕ К ИТОГУ</p>
                <div className={styles.flexContainer}>
                    {
                        theBestArr.map(item => {
                            return (
                                <div className={styles.card} key={item.id}>
                                    <Image src={item.icon} alt='icon' width={isMobile ? 50 : 100} />
                                    <div className={styles.textBlock}>
                                        <p className={styles.textBlockTitle}>{item.title}</p>
                                        <p className={styles.text}>{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}