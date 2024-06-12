import React from 'react'
import styles from './AdvertisementCompany.module.scss'
import Image from 'next/image'
import heroImage from './assets/heroImage.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'

export default function AdvertisementCompany() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <Image src={heroImage} alt='hero image' className={styles.heroImage} />
                <div className={styles.rightSide}>
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>05</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                    <h2 className={styles.title}>Настройка рекламной<br></br>компании</h2>
                    <p className={styles.text}>Технический момент, в котором мы настраиваем рекламный кабинет и выставляем ценообразование по заранее договорённому бюджету.</p>
                    <div className={styles.button}>
                        <RedBorderButton
                            width={285}
                            height={65}
                            fontSize={22}
                        >
                            РЕЗУЛЬТАТ
                        </RedBorderButton>
                    </div>
                    <p className={styles.anotherText}>рекламная компания<br></br>готова к запуску</p>
                </div>
            </div>
        </div>
    )
}