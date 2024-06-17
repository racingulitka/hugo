import React from 'react'
import styles from './AnalysisHero.module.scss'
import RedButton from '@/components/common/RedButton/RedButton'

export default function AnalysisHero() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h3 className={styles.title}>МАРКЕТИНГОВЫЙ<br></br>АНАЛИЗ</h3>
                    <p className={styles.subtitle}>Всё о конкурентах, рынке, клиентах и Вас</p>
                    <RedButton
                        width={700}
                        height={90}
                        fontSize={20}
                    >
                        ПОЛУЧИТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
                    </RedButton>
                </div>
            </div>
        </div>
    )
}