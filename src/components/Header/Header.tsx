import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from './assets/logo.svg'
import { headerLinks } from './Header.config'
import LangSelect from './LangSelect/LangSelect'

export default function Header() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.leftBlock}>
                    <Link className={styles.logo} href='/'>
                        <Image className={styles.logoImage} src={logo} alt='logo' />
                        <p className={styles.logoText}>GTA Production Agency</p>
                    </Link>
                    <nav className={styles.navigation}>
                        {
                            headerLinks.map(link => {
                                return (
                                    <Link
                                        key={link.id}
                                        className={styles.headerLink}
                                        href={link.link}
                                    >
                                        {link.title}
                                    </Link>
                                )
                            })
                        }
                    </nav>
                </div>
                <div className={styles.rightBlock}>
                    <Link
                        href='/'
                        className={styles.putOrder}
                    >
                        ОСТАВИТЬ ЗАЯВКУ
                    </Link>
                    <LangSelect />
                </div>
            </div>
        </div>
    )
}