import React from 'react'
import styles from './AnalysisSource.module.scss'
import { array } from './AnalysisSource.config'

export default function AnalysisSource(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>ИСТОЧНИКИ ИНФОРМАЦИИ</h3>
                <p className={styles.subtitle}>РАЗНОГО ФОРМАТА</p>
                <p className={styles.description}>Для того чтобы данные были максимально точными и актуальными<br></br>Вы получите исследование основанное на нескольких источниках:</p>
                <div className={styles.flexContainer}>
                    {
                        array.map(item => {
                            const number = item.id < 10 ? `0${item.id}` : item.id
                            return(
                                <div className={styles.card} key={item.id}>
                                    <p className={styles.caption}>{number}</p>
                                    {item.text}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}