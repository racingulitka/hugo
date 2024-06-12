import React from 'react'
import styles from './AdvertisementTest.module.scss'
import Image from 'next/image'
import heroImage from './assets/heroImage.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'

export default function AdvertisementTest() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.leftSide}>
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>06</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                    <h2 className={styles.title}>Тестовый запуск</h2>
                    <p className={styles.text}>Вся рекламная компания запускается на 2 недели для оценки динамики и результатов во избежание “слива” бюджета.</p>
                    <div className={styles.button}>
                        <RedBorderButton
                            width={285}
                            height={65}
                            fontSize={22}
                        >
                            РЕЗУЛЬТАТ
                        </RedBorderButton>
                    </div>
                    <p className={styles.anotherText}>определение успешности выбранной стратегии</p>
                </div>
                <Image src={heroImage} alt='image' width={713} className={styles.image} />
            </div>
        </div>
    )
}