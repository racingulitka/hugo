import React from 'react'
import styles from './LandingPageQandA.module.scss'
import { qAndAArr } from './LandingPageQandA.config'
import Image from 'next/image'
import questionIcon from './assets/question.svg'

export default function LandingPageQandA(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                    <h2 className={styles.title}>ВАШ ВОПРОС - НАШ ОТВЕТ</h2>
                    <div className={styles.flexContainer}>
                        {
                            qAndAArr.map(card =>{
                                return(
                                    <div className={styles.card} key={card.id}>
                                        <Image src={questionIcon} alt='icon' width={70} />
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
    )
}