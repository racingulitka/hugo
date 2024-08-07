import React from 'react'
import styles from './AccountNav.module.scss'
import cn from 'classnames'
import { Screens } from '../../Account.config'

export default function AccountNav({
    navArr,
    user,
    activeItemId,
    setActiveScreen,
    setGoToPlacingAnOrder
}: {
    navArr: { id: Screens, title: string }[],
    user: string,
    activeItemId: Screens,
    setActiveScreen: React.Dispatch<React.SetStateAction<Screens>>,
    setGoToPlacingAnOrder: React.Dispatch<React.SetStateAction<boolean>>
}) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.profile}>
                <div className={styles.name}>{user}</div>
                <div className={styles.changeProfile} onClick={() => setActiveScreen(Screens.ChangeProfile)}>{navArr[0].title}</div>
            </div>
            <div className={styles.menuContainer}>
                {
                    navArr.map(menuItem => {
                        if (menuItem.id === Screens.ChangeProfile) return null
                        else return (
                            <div
                                key={menuItem.id}
                                className={cn(styles.menuItem, menuItem.id === activeItemId && styles.menuItemActive)}
                                onClick={() => {
                                    setActiveScreen(menuItem.id)
                                    setGoToPlacingAnOrder(false)
                                }
                                }
                            >
                                {menuItem.title}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}