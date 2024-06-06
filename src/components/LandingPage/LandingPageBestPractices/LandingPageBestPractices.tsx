import React from 'react'
import styles from './LandingPageBestPractices.module.scss'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'

export default function LandingPageBestPractices(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>ЛУЧШЕЕ ИЗ НАШЕЙ ПРАКТИКИ</h2>
                <p className={styles.adding}>ПОЛНОЕ ВОВЛЕЧЕНИЕ КЛИЕНТА И НАС В ПРОЦЕСС</p>
                <div className={styles.slider}></div>
                <RedBorderButton
                    width={435}
                    height={90}
                    fontSize={20}
                >ХОЧУ РАБОТАТЬ С ВАМИ</RedBorderButton>
            </div>
        </div>
    )
}