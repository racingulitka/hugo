import React from 'react'
import styles from './HeroBottomLinks.module.scss'
import Link from 'next/link'
import { socialMediaLinksArr } from './HeroBottomLinks.config'

export default function HeroBottomLinks(){
    return(
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
    )
}