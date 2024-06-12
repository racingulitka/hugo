import React from 'react'
import styles from './AdvertisementAreYouAgree.module.scss'
import RedButton from '@/components/common/RedButton/RedButton'

export default function AdvertisementAreYouAgree() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.titleBlock}>
                    <h3 className={styles.title}>ВЫ УЖЕ СОГЛАСНЫ?</h3>
                    <p className={styles.subtitle}>НАЖМИТЕ НА КНОПКУ НИЖЕ</p>
                </div>
                <RedButton
                    width={435}
                    height={90}
                    fontSize={20}
                >
                    Я СОГЛАСЕН
                </RedButton>
            </div>
        </div>
    )
}