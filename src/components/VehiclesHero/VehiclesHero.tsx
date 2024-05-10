import React from 'react'
import styles from './VehiclesHero.module.scss'
import heroBanner from './assets/heroBanner.png'
import Image from 'next/image'
import arrowRight from './assets/arrowRight.svg'

export default function VehiclesHero() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <Image src={heroBanner} alt='heroBanner' className={styles.image} />
                <div className={styles.bannerGradient}></div>
                <div className={styles.content}>
                    <p className={styles.meet}>ВСТРЕЧАЙТЕ</p>
                    <h2>НОВЫЙ FORD MUSTANG 2024</h2>
                    <div className={styles.priceContainer}>
                        <p className={styles.actualPrice}>$30 000</p>
                        <p className={styles.price}>$60 000</p>
                    </div>
                    <button>
                        <p>КУПИТЬ</p>
                        <Image src={arrowRight} alt='arrowRight' className={styles.arrow} />
                    </button>
                </div>
            </div>
        </div>
    )
}