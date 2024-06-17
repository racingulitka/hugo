import React from 'react'
import styles from './TargetCompetitor.module.scss'
import Image from 'next/image'
import image from './assets/image.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'

export default function TargetCompetitor() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.leftSide}>
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>04</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                    <h2 className={styles.title}>Анализ конкурентов и<br></br>целевой аудитории</h2>
                    <p className={styles.text}>Один из самых важных этапов, где Ваше участие просто необходимо. Здесь мы подбираем группы и ключевые запросы для будущей рекламной кампании.</p>
                    <div className={styles.button}>
                        <RedBorderButton
                            width={285}
                            height={65}
                            fontSize={22}
                        >
                            РЕЗУЛЬТАТ
                        </RedBorderButton>
                    </div>
                    <p className={styles.anotherText}>собранный и отфильтрованный список ключевых запросов</p>
                </div>
                <Image src={image} alt='image' width={567} className={styles.image} />
            </div>
        </div>
    )
}