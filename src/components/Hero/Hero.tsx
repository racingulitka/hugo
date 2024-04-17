import React from 'react'
import styles from './Hero.module.scss'
import rightArrow from './assets/rightArrow.svg'
import Image from 'next/image'
import { menuBlockArr } from './Hero.config'
import MenuBlock from './MenuBlock/MenuBlock'

export default function Hero(){
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>HUGO</h1>
            <div className={styles.breefBlock}>
                <div className={styles.description}>Агентство, которое знает, что нужно каждому <span>GTA проекту:</span> продуктовый менеджмент</div>
                <button className={styles.breefButton}>
                    <span>Перейти к брифу</span>
                    <Image src={rightArrow} alt='rightArrow' className={styles.rightArrow}/>
                </button>
            </div>
            <section className={styles.menuBlock}>
                {
                    menuBlockArr.map(block => {
                        return(
                            <MenuBlock
                                key={block.id}
                                text={block.title}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}