import React, { useState } from 'react'
import styles from './MobileHeader.module.scss'
import logo from '../Header/assets/logo.svg'
import hamburgerIcon from './assets/hamburgerIcon.svg'
import crossIcon from './assets/crossIcon.svg'
import Image from 'next/image'
import Link from 'next/link'
import { topMenu, middleMenu } from './MobileHeader.config'
import cn from 'classnames'
import MenuSelector from './MenuSelector/MenuSelector'

export default function MobileHeader() {

    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
    const [language, setLanguage] = useState<string>('Русский')
    const [currency, setCurrency] = useState<string>('RUB')
    const [isSelectorOpen, setSelectorOpen] = useState<string | null>(null)

    return (
        <div className={styles.wrapper}>
            <Link href='/'>
                <div className={styles.logoBlock}>
                    <Image src={logo} alt='logo' width={44} />
                    <p className={styles.sublogo}>GTA Production Agency</p>
                </div>
            </Link>
            <div className={styles.rightBlock}>
                <Link href='#' className={styles.leaveOrder}>ОСТАВИТЬ ЗАЯВКУ</Link>
                <Image src={hamburgerIcon} alt='hamburger icon' width={14} onClick={() => setMenuOpen(true)} />
            </div>
            {
                isMenuOpen &&
                <div className={styles.menu}>
                    <Image src={crossIcon} alt='close menu' className={styles.closeButton} onClick={() => setMenuOpen(false)} />
                    <div className={cn(styles.menuBlock, styles.menuBlockTop)}>
                        {
                            topMenu.map(item => {
                                return (
                                    <p className={styles.title} key={item.id}>{item.title}</p>
                                )
                            })
                        }
                    </div>
                    <div className={styles.splitter}></div>
                    <div className={styles.menuBlock}>
                        {
                            middleMenu.map(item => {
                                return (
                                    <Link href={item.link}>
                                        <p className={styles.title} key={item.id}>{item.title}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={cn(styles.menuBlock, styles.menuBlockBottom)}>
                        <p className={styles.title} onClick={() => setSelectorOpen('language')}>{language}</p>
                        <p className={styles.title} onClick={() => setSelectorOpen('currency')}>{currency}</p>
                    </div>
                    {
                        isSelectorOpen &&
                        <MenuSelector
                            selector={isSelectorOpen}
                            setSelectorOpen={setSelectorOpen}
                            setLanguage={setLanguage}
                            setCurrency={setCurrency}
                        />
                    }
                </div>
            }
        </div>
    )
}