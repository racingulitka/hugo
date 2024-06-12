import React from 'react'
import styles from './AdvertisementNotForAll.module.scss'

export default function AdvertisementNotForAll(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.upperBlock}>
                    <div className={styles.titleBlock}>
                        <h2 className={styles.title}>РАБОТАЕМ НЕ СО ВСЕМИ</h2>
                        <p className={styles.subtitle}>НЕ ВСЕМ ПОЛЕЗНЫ</p>
                    </div>
                    <div className={styles.upperBlockText}>Наша основная направленность - GTA проекты.<br></br>Поэтому если Вы относитесь к ним, то скорее всего у нас уже был опыт в Вашей сфере и Вы можете быть уверены в результате.</div>
                </div>
                <div className={styles.redBlock}>
                    <div className={styles.container}>
                        <p className={styles.bigText}>ДЕЙСТВИЯ ДЛЯ ПОЛУЧЕНИЯ<br></br>ОТ 5 ДО 94 РЕГИСТРАЦИЙ ЕЖЕДНЕВНО</p>
                        <p className={styles.smallText}>Мы понимаем, что Вам всё равно что именно мы будем делать, главное привлечь игроков, много и дёшево. Но у Вас должно быть понимание, что Вы получите.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}