import React, { useState } from 'react'
import styles from './Account.module.scss'
import AccountNav from './components/AccountNav/AccountNav'
import { Screens, screens } from './Account.config'
import Cart from './screens/Cart/Cart'

export default function Account() {

    const navArr = screens.map(screen => {
        const { id, title } = screen
        return {
            id,
            title
        }
    })

    const [user] = useState<string>('GermachMallboro')
    const [activeScreen, setActiveScreen] = useState<Screens>(Screens.cart)

    const accountScreens = {
        [Screens.ChangeProfile]: <Cart />,
        [Screens.cart]: <Cart />,
        [Screens.purchases]: <Cart />,
        [Screens.favourites]: <Cart />,
        [Screens.myReviews]: <Cart />,
        [Screens.questionsAndAnswers]: <Cart />,
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <div className={styles.nav}>
                        <AccountNav navArr={navArr} user={user} activeItemId={activeScreen} setActiveScreen={setActiveScreen} />
                    </div>
                    <h1 className={styles.title}>{screens.find(item => item.id === activeScreen)?.title}</h1>
                    <div className={styles.screens}>
                        {
                            accountScreens[activeScreen]
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}