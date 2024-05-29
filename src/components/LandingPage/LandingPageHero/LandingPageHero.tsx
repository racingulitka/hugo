import React from 'react'
import styles from './LandingPageHero.module.scss'
import HeroBottomLinks from '@/components/common/HeroBottomLinks/HeroBottomLinks'

export default function LandingPageHero(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <HeroBottomLinks />
            </div>
        </div>
    )
}