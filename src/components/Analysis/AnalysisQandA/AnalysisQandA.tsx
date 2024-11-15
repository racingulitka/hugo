import React from 'react'
import styles from './AnalysisQandA.module.scss'
import { qAndAArr } from './AnalysisQandA.config'
import questionIcon from './assets/question.svg'
import Image from 'next/image'

export default function AnalysisQandA({
    isMobile,
}:{
    isMobile:boolean,
}){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>ВАШ ВОПРОС - НАШ ОТВЕТ</h3>
                <div className={styles.flexContainer}>
                    {
                        qAndAArr.map(item =>{
                            return(
                                <div className={styles.card} key={item.id}>
                                    <Image src={questionIcon} alt='question icon' width={isMobile ? 30 : 70} />
                                    <div className={styles.textBlock}>
                                        <p className={styles.cardTitle}>{item.title}</p>
                                        <p className={styles.cardDescription}>{item.description}</p>
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