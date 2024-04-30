import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from './assets/logo.svg'
import { headerLinksHome, headerLinksShop } from './Header.config'
import CurrencySelect from './CurrencySelect/CurrencySelect'
import LangSelect from './LangSelect/LangSelect'
import { Page } from './Header.config'
import Indicators from './Indicators/Indicators'

export default function Header({
    page,
}: {
    page: Page
}) {
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
                            (page === Page.home ? headerLinksHome : headerLinksShop).map(link => {
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
                    {
                        page === Page.home &&
                        <Link
                            href='/'
                            className={styles.putOrder}
                        >
                            ОСТАВИТЬ ЗАЯВКУ
                        </Link>
                    }
                    {
                        page === Page.shop &&
                        <Indicators />
                    }
                    <CurrencySelect />
                    <LangSelect />
                </div>
            </div>
        </div>
    )
}