import React from 'react'
import styles from './TargetPerson.module.scss'
import Image from 'next/image'
import heroImage from './assets/image.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'

export default function TargetPerson() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <Image src={heroImage} alt='hero image' width={674} className={styles.heroImage} />
                <div className={styles.rightSide}>
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>05</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                    <h2 className={styles.title}>Определение персон ЦА и<br></br>JTBD</h2>
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
                    <p className={styles.anotherText}>рекламная компания готова к запуску</p>
                </div>
            </div>
        </div>
    )
}