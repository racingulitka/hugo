import React from 'react'
import styles from './LandingPageHero.module.scss'
import HeroBottomLinks from '@/components/common/HeroBottomLinks/HeroBottomLinks'
import Image from 'next/image'
import heroImage from './assets/heroImage.png'

export default function LandingPageHero() {

    const mainTitleText = 'РАЗРАБОТКА\nLANDING PAGE'

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.mainFlex}>
                    <div className={styles.actionBlock}>
                        <div className={styles.mainInfo}>
                            <h1 className={styles.mainTitle}>{mainTitleText}</h1>
                            <p className={styles.slogan}>Долго, дорого и <span>эффективно</span></p>
                        </div>
                        <button className={styles.button}>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ С ЦЕНАМИ</button>
                    </div>
                    <Image src={heroImage} alt='laptop image' className={styles.heroImage} />
                </div>
                <HeroBottomLinks />
            </div>
        </div>
    )
}