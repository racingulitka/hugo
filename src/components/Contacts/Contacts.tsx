import React from 'react'
import styles from './Contacts.module.scss'
import Image from 'next/image'
import circle from './assets/circle.svg'
import rightDecoration from './assets/rightDecoration.svg'
import leftDecoration from './assets/leftDecoration.svg'
import { socialMediaLinksArr } from './Contacts.config'
import Link from 'next/link'
import FeedBackForm from './FeedBackForm/FeedBackForm'

export default function Contacts() {
    return (
        <div className={styles.mainWrapper}>
            <Image src={circle} alt='circleImage' className={styles.circle} />
            <Image src={rightDecoration} alt='rightDecoration' className={styles.rightDecoration} />
            <Image src={leftDecoration} alt='leftDecoration' className={styles.leftDecoration} />
            <div className={styles.wrapper}>
                <div className={styles.mainContainer}>
                    <div className={styles.content}>
                        <nav className={styles.leftBlock}>
                            <h2>Контакты</h2>
                            <div className={styles.socialMedia}>
                                {
                                    socialMediaLinksArr.map(link => {
                                        return(
                                            <Link key={link.id} href={link.link} className={styles.socialMediaLink}>{link.title}</Link>
                                        )
                                    })
                                }
                            <Link href='mailto:info@impact.ru' className={styles.mail}>info@impact.ru</Link>
                            </div>
                        </nav>
                        <div>
                            <FeedBackForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}