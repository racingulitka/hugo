import React, { useState } from 'react'
import styles from './AuthAndRegister.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'
import Auth from './Auth/Auth'
import Register from './Register/Register'
import CodeModal from '../CodeModal/CodeModal'
import ServerRules from './ServerRules/ServerRules'

export interface Screens {
    [key: string]: React.ReactNode
}

export default function AuthAndRegister() {

    const [activeScreen, setActiveScreen] = useState<keyof Screens>('auth')

    const screens: Screens = {
        auth: <Auth setActiveScreen={setActiveScreen} />,
        reg: <Register setActiveScreen={setActiveScreen} />,
        recover: <CodeModal />,
        serverRules: <ServerRules setActiveScreen={setActiveScreen} />
    }


    return (
        <div className={styles.wrapper}>
            <main
                className={styles.main}
                style={{
                    width: activeScreen === 'serverRules' ? '745px' : '620px',
                    alignItems:activeScreen === 'serverRules' ? 'flex-end' : 'center',
                    justifyContent:activeScreen === 'serverRules' ? 'flex-end' : 'center',
                }}
            >
                <div className={styles.logoContainer}>
                    <Image src={logo} alt='logo' className={styles.logo} />
                    <p>ID</p>
                </div>
                {screens[activeScreen]}
            </main>
        </div>
    )
}