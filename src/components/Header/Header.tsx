import React, {useState} from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from './assets/logo.svg'
import { headerLinksHome, headerLinksShop } from './Header.config'
import CurrencySelect from './CurrencySelect/CurrencySelect'
import LangSelect from './LangSelect/LangSelect'
import { Page } from './Header.config'
import Indicators from './Indicators/Indicators'
import Solutions from '../Solutions/Solutions'
import { AnimatePresence } from 'framer-motion'

export default function Header({
    page,
}: {
    page: Page
}) {

    const [isSolutionsActive, setSolutionsActive] = useState<boolean>(false)

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
                                const isSolution = link.id === 1
                                return (
                                    <Link
                                        key={link.id}
                                        className={styles.headerLink}
                                        href={link.link}
                                        onClick={() => {isSolution && setSolutionsActive(prev => !prev)}}
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
                <AnimatePresence>
                {
                    isSolutionsActive &&
                    <Solutions onClose={setSolutionsActive}/>
                }
                </AnimatePresence>
            </div>
        </div>
    )
}