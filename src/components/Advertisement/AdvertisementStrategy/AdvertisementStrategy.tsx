import React from 'react'
import styles from './AdvertisementStrategy.module.scss'
import Image from 'next/image'
import image from './assets/image.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'

export default function AdvertisementStrategy() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.leftSide}>
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>02</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                    <h2 className={styles.title}>Определение стратегии<br></br>и целей</h2>
                    <p className={styles.text}>В зависимости от ваших ресурсов и конкурентов мы определяем подходящую для вас стратегию оптимального пути для достижения цели.</p>
                    <div className={styles.button}>
                        <RedBorderButton
                            width={285}
                            height={65}
                            fontSize={22}
                        >
                            РЕЗУЛЬТАТ
                        </RedBorderButton>
                    </div>
                    <p className={styles.anotherText}>базовая стратегия<br></br>и поставленные цели</p>
                </div>
                <Image src={image} alt='image' width={521} className={styles.image} />
            </div>
        </div>
    )
}