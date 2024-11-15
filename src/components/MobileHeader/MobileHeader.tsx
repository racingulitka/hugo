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
import { Screens } from '../Account/Account.config'
import { AnimatePresence } from 'framer-motion'
import Solutions from '../Solutions/Solutions'
import { Sheet } from 'react-modal-sheet'
import MobileModalHeader from '../MainContentVehicles/MobileSelectBlock/MobileModalHeader/MobileModalHeader'

export default function MobileHeader() {

    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
    const [language, setLanguage] = useState<string>('Русский')
    const [currency, setCurrency] = useState<string>('RUB')
    const [isSelectorOpen, setSelectorOpen] = useState<string | null>(null)
    const [isSolutionsActive, setSolutionsActive] = useState<boolean>(false)

    const getLoadingScreen = (id: number) => {
        let loadingScreen: Screens = Screens.ChangeProfile
        switch (id) {
            case 1: {
                loadingScreen = Screens.ChangeProfile
                break
            }
            case 2: {
                loadingScreen = Screens.favourites
                break
            }
            case 3: {
                loadingScreen = Screens.cart
                break
            }
            case 4: {
                loadingScreen = Screens.myReviews
                break
            }
            case 5: {
                loadingScreen = Screens.purchases
                break
            }
            case 6: {
                loadingScreen = Screens.questionsAndAnswers
                break
            }
        }
        return loadingScreen
    }

    return (
        <div className={styles.wrapper}>
            <Link href='/'>
                <div className={styles.logoBlock}>
                    <Image src={logo} alt='logo' width={80} />
                    <p className={styles.sublogo}>GTA Production Agency</p>
                </div>
            </Link>
            <div className={styles.rightBlock}>
                <Link href='#' className={styles.leaveOrder}>ОСТАВИТЬ ЗАЯВКУ</Link>
                <Image src={hamburgerIcon} alt='hamburger icon' width={28} onClick={() => setMenuOpen(true)} />
            </div>
            {
                isMenuOpen &&
                <div className={styles.menu}>
                    <Image src={crossIcon} alt='close menu' className={styles.closeButton} onClick={() => setMenuOpen(false)} />
                    <div className={cn(styles.menuBlock, styles.menuBlockTop)}>
                        {
                            topMenu.map(item => {
                                return (
                                    <Link key={item.id} onClick={() => setMenuOpen(false)} href={{ pathname: item.link, query: { loadingScreen: getLoadingScreen(item.id) } }}>
                                        <p className={styles.title} key={item.id}>{item.title}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={styles.splitter}></div>
                    <div className={styles.menuBlock}>
                        {
                            middleMenu.map(item => {
                                return (
                                    <Link key={item.id} href={item.link}>
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
                    {/* {
                        isSelectorOpen &&
                        <MenuSelector
                            selector={isSelectorOpen}
                            setSelectorOpen={setSelectorOpen}
                            setLanguage={setLanguage}
                            setCurrency={setCurrency}
                        />
                    } */}
                    <Sheet
                            isOpen={!!isSelectorOpen}
                            onClose={() => setSelectorOpen(null)}
                            detent='content-height'
                        >
                            <Sheet.Container>
                                <Sheet.Header>
                                    <MobileModalHeader backgroundColor='#161616' />
                                </Sheet.Header>
                                <Sheet.Content>
                                    {
                                        isSelectorOpen &&
                                        <MenuSelector
                                        selector={isSelectorOpen}
                                        setSelectorOpen={setSelectorOpen}
                                        setLanguage={setLanguage}
                                        setCurrency={setCurrency}
                                    />
                                    }
                                </Sheet.Content>
                            </Sheet.Container>
                            <Sheet.Backdrop />
                            
                        </Sheet>
                </div>
            }
            <AnimatePresence>
                {
                    isSolutionsActive &&
                    <Solutions onClose={setSolutionsActive} />
                }
            </AnimatePresence>
        </div>
    )
}