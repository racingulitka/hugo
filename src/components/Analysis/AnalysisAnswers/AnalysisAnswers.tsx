import React from 'react'
import styles from './AnalysisAnswers.module.scss'
import { goalsArr } from './AnalysisAnswers.config'
import cn from 'classnames'
import Image from 'next/image'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'

export default function AnalysisAnswers(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>ОТВЕТЫ НА ВСЕ ВАШИ ВОПРОСЫ</h3>
                <p className={styles.subtitle}>ВЫ НАЙДЁТЕ В АНАЛИЗЕ</p>
                <p className={styles.description}>Маркетинговый анализ - изучение всех сторон вашего бизнеса и рынка с резюмированием по каждому направлению итоговых действий для достижения цели.</p>
                <p className={styles.flexTitle}>Типовые цели анализа</p>
                <div className={styles.flexContainer}>
                    {
                        goalsArr.map(item => {
                            const isOdd = item.id%2 === 0
                            return(
                                <div className={cn(styles.card, isOdd && styles.cardOdd)} key={item.id}>
                                    <Image src={item.icon} alt='icon' width={40} />
                                    <p className={styles.text}>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.bottomBlock}>
                    <p className={styles.bottomText}>Нужна другая цель? Расскажите нам</p>
                    <RedBorderButton
                        width={435}
                        height={90}
                        fontSize={20}
                    >
                        СВЯЗАТЬСЯ С МЕНЕДЖЕРОМ
                    </RedBorderButton>
                </div>
            </div>
        </div>
    )
}