import React from 'react'
import styles from './Shop.module.scss'
import Link from 'next/link'
import { cardsArr } from './Shop.config'
import Image from 'next/image'

export default function Shop() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h2>Магазин</h2>
                        <Link
                            href='/'
                            className={styles.goToShop}
                        >
                            Перейти в магазин
                        </Link>
                    </div>
                    <div className={styles.flexContainer}>
                        {
                            cardsArr.map(card => {
                                return (
                                    <div
                                        key={card.id}
                                        className={styles.card}
                                    >
                                        <div className={styles.topBlock}>
                                            <Image
                                            src={card.icon}
                                            alt='icon'
                                            className={styles.image}
                                            />
                                        </div>
                                        <div className={styles.bottomBlock}>
                                            <div className={styles.title}>{card.title}</div>
                                            <div className={styles.links}>
                                                {
                                                    card.links.map(link => {
                                                        return (
                                                            <Link
                                                                key={link.id}
                                                                className={styles.link}
                                                                href={link.link}
                                                            >
                                                                {link.title}
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}