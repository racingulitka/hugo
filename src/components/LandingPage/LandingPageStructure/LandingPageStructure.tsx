import React from 'react'
import styles from './LandingPageStructure.module.scss'
import Image from 'next/image'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'

export default function LandingPageStructure(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h2>САМОЕ ГЛАВНОЕ - ПРОДАЮЩАЯ СТРУКТУРА</h2>
                    <p>А УЖЕ ПОТОМ ДИЗАЙН И ФИШКИ</p>
                </div>
                <div className={styles.images}>
                    <Image src={image1} alt='image1' className={styles.image} />
                    <Image src={image2} alt='image2' className={styles.image} />
                </div>
            </div>
        </div>
    )
}