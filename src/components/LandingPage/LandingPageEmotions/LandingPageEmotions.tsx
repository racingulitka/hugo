import React from 'react'
import styles from './LandingPageEmotions.module.scss'
import woman from './assets/woman.png'
import Image from 'next/image'

export default function LandingPageEmotions(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <p className={styles.adding}>ВАШ САЙТ БУДЕТ ДЕЙСТВИТЕЛЬНО</p>
                <h2 className={styles.title}>ВЫЗЫВАТЬ ЭМОЦИИ И ПРОДАВАТЬ</h2>
                <div className={styles.bottomImage}>
                    <p className={styles.redText}>Я в шоке</p>
                    <Image src={woman} alt='woman' className={styles.image} />
                    <p className={styles.redText}>Это<br></br>великолепно!</p>
                </div>
            </div>
        </div>
    )
}