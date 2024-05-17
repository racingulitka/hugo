import React, { useState } from 'react'
import styles from './Account.module.scss'
import AccountNav from './components/AccountNav/AccountNav'
import { Screens, screens } from './Account.config'
import Cart from './screens/Cart/Cart'
import Purchases from './screens/Purchases/Purchases'

export default function Account() {

    const navArr = screens.map(screen => {
        const { id, title } = screen
        return {
            id,
            title
        }
    })

    const [user] = useState<string>('GermachMallboro')
    const [isGoToPlacingAnOrder, setGoToPlacingAnOrder] = useState<boolean>(false)
    const [activeScreen, setActiveScreen] = useState<Screens>(Screens.cart)

    const accountScreens = {
        [Screens.ChangeProfile]: <Cart isGoToPlacingAnOrder={isGoToPlacingAnOrder} setGoToPlacingAnOrder={setGoToPlacingAnOrder}/>,
        [Screens.cart]: <Cart isGoToPlacingAnOrder={isGoToPlacingAnOrder} setGoToPlacingAnOrder={setGoToPlacingAnOrder}/>,
        [Screens.purchases]: <Purchases/>,
        [Screens.favourites]: <Cart isGoToPlacingAnOrder={isGoToPlacingAnOrder} setGoToPlacingAnOrder={setGoToPlacingAnOrder}/>,
        [Screens.myReviews]: <Cart isGoToPlacingAnOrder={isGoToPlacingAnOrder} setGoToPlacingAnOrder={setGoToPlacingAnOrder}/>,
        [Screens.questionsAndAnswers]: <Cart isGoToPlacingAnOrder={isGoToPlacingAnOrder} setGoToPlacingAnOrder={setGoToPlacingAnOrder}/>,
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <div className={styles.nav}>
                        <AccountNav navArr={navArr} user={user} activeItemId={activeScreen} setActiveScreen={setActiveScreen} />
                    </div>
                    <div className={styles.title}>
                        <h1>{isGoToPlacingAnOrder ? 'Оформление заказа' : screens.find(item => item.id === activeScreen)?.title}</h1>
                        {
                            isGoToPlacingAnOrder &&
                            <p
                                className={styles.returnToCart}
                                onClick={() => setGoToPlacingAnOrder(false)}
                            >Вернуться к магазину</p>
                        }
                        </div>
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