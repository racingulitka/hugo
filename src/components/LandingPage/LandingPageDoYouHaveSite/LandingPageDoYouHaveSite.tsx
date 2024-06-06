import React from 'react'
import styles from './LandingPageDoYouHaveSite.module.scss'

export default function LandingPageDoYouHaveSite(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.titleBlock}>У ВАС ЕСТЬ САЙТ,<br></br><span>КОТОРЫЙ НЕ ПРОДАЕТ?</span><div></div></div>
                <div className={styles.footer}>
                    <p>Как говорится<br></br>“Хватит это терпеть!”</p>
                    <button>ПОРА МЕНЯТЬ САЙТ</button>
                </div>
            </div>
        </div>
    )
}