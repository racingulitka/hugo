import React from 'react'
import styles from './AnalysisMainQuestions.module.scss'
import { questionsArr } from './AnalysisMainQuestions.config'

export default function AnalysisMainQuestions(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>ГЛАВНЫЕ ВОПРОСЫ</h3>
                <p className={styles.subtitle}>ЛЮБОЙ КОМПАНИИ</p>
                <div className={styles.flexContainer}>
                    {
                        questionsArr.map(item => {
                            return(
                                <div
                                    className={styles.card}
                                    key={item.id}
                                >
                                    <div className={styles.cardWrapper}>
                                        <p className={styles.cardTitle}>{item.title}</p>
                                        <div className={styles.questions}>
                                            {
                                                item.questions.map(question =>{
                                                    return(
                                                        <div className={styles.question} key={question.id}>{question.text}</div>
                                                    )
                                                })
                                            }
                                        </div>
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