import React from 'react'
import styles from './ProductHero.module.scss'
import Slider from './Slider/Slider'

export default function ProductHero(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.leftColumn}>
                <Slider />
            </div>
            <div className={styles.rightColumn}></div>
        </div>
    )
}