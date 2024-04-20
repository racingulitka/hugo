import React from 'react'
import styles from './Hero.module.scss'
import rightArrow from './assets/rightArrow.svg'
import Image from 'next/image'
import { menuBlockArr, socialMediaLinksArr } from './Hero.config'
import MenuBlock from './MenuBlock/MenuBlock'
import Link from 'next/link'

export default function Hero() {

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper} id='hero'>
                <h1 className={styles.h1}>HUGO</h1>
                <div className={styles.breefBlock}>
                    <div className={styles.description}>Агентство, которое знает, что нужно каждому <span>GTA проекту:</span> продуктовый менеджмент</div>
                    <Link href='#'>
                        <button className={styles.breefButton}>
                            <span>Перейти к брифу</span>
                            <Image src={rightArrow} alt='rightArrow' className={styles.rightArrow} />
                        </button>
                    </Link>
                </div>
                <nav className={styles.menuBlock}>
                    {
                        menuBlockArr.map(block => {
                            return (
                                <MenuBlock
                                    key={block.id}
                                    text={block.title}
                                />
                            )
                        })
                    }
                </nav>
                <div className={styles.bottomLinks}>
                    <Link href='#'><span>Канал Hugo</span></Link>
                    <Link href='#'><span>Полезные материалы</span></Link>
                    <div className={styles.socialMediaLinks}>
                        {
                            socialMediaLinksArr.map(link => {
                                return (
                                    <Link
                                        key={link.id}
                                        href={link.link}
                                    >
                                        <link.icon />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}