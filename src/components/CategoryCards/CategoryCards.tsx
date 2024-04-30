import React from 'react'
import styles from './CategoryCards.module.scss'
import { cardsArr } from '../Shop/Shop.config'
import Link from 'next/link'
import Image from 'next/image'

export default function CategoryCards(){
    return(
        <div className={styles.wrapper}>
            {
                cardsArr.map(card => {
                    return(
                        <div className={styles.card} key={card.id}>
                            <div className={styles.linksBlock}>
                                <h3>{card.title}</h3>
                                <div className={styles.links}>
                                    {
                                        card.links.map(link => {
                                            return(
                                                <Link key={link.id} href={link.link} className={styles.link}>{link.title}</Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <Image src={card.icon} alt='cardIcon' className={styles.image} />
                        </div>
                    )
                })
            }
        </div>
    )
}