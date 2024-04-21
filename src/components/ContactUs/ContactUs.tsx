import React from 'react'
import styles from './ContactUs.module.scss'
import { contactUsArr } from './ContactUs.config'
import Link from 'next/link'

export default function ContactUs() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2>Свяжитесь с нами, чтобы:</h2>
                    <nav>
                        {
                            contactUsArr.map(button => {
                                return (
                                    <Link
                                        key={button.id}
                                        href={button.link}
                                        className={styles.link}
                                    >
                                        <button
                                            className={styles.button}
                                        >
                                            {button.title}
                                        </button>
                                    </Link>
                                )
                            })
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}