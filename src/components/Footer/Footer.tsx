import React from 'react'
import styles from './Footer.module.scss'
import { footerLinks, paymentSystemIconsArr, documentLinksArr } from './Footer.config'
import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'

export default function Footer(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.upperBlock}>
                    <nav>
                        {
                            footerLinks.map(block => {
                                return(
                                    <div key={block.id} className={styles.linksBlock}>
                                        <h3 className={styles.blockTitle}>{block.title}</h3>
                                        <div className={cn(styles.links, block.id === 4 && styles.linksIcons)}>
                                            {
                                                block.id !== 4 ?
                                                block.links.map(link => {
                                                    return(
                                                        <Link key={link.id} href={link.link} className={styles.link}>{typeof(link.title) === 'string' && link.title}</Link>
                                                    )
                                                })
                                                : block.links.map(link => {
                                                    return(
                                                        <Link key={link.id} href={link.link} className={styles.icon}>
                                                            <link.title />
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </nav>
                    <div className={styles.otherInfo}>
                        <p>2024 © Агенство  Hugo&copy;ИНН 12454355647 | ОГРН 51235546775455</p>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                    </div>
                </div>
                <div className={styles.bottomBlock}>
                    <div className={styles.paymentSystems}>
                        {
                            paymentSystemIconsArr.map((paymentSystem, index) => {
                                return(
                                    <Image key={index} src={paymentSystem} alt='paymentSystemIcon' className={styles.paymentSystem} />
                                )
                            })
                        }
                    </div>
                    <div className={styles.documents}>
                        {
                            documentLinksArr.map(document => {
                                return(
                                    <Link key={document.id} href={document.link} className={styles.link}>{document.title}</Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}