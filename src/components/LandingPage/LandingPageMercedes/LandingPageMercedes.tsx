import React from 'react'
import styles from './LandingPageMercedes.module.scss'
import { mercedesArr } from './LandingPageMercedes.config'
import Image from 'next/image'
import hugoLogo from './assets/hugo.svg'

export default function LandingPageMercedes() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.upperBlock}>
                    <h3 className={styles.title}>MERCEDES СРЕДИ LANDING PAGE</h3>
                    <p className={styles.subtitle}>ИЛИ ПОЧЕМУ МЫ ДЕЛАЕМ ДОЛГО</p>
                    <div className={styles.textFlex}>
                        <p className={styles.text}>
                            Уже 5 лет мы разрабатываем одностраничные сайты, и до сих пор слышим фразу, “Ого, как у вас дорого! Я сам сделаю или закажу у другой компании за 20 000 р.”
                        </p>
                        <p className={styles.text}>
                            Мы не отрицаем, что всегда можно сделать дешевле. Но когда вы осмысленно  принимаете такое решение, вы так же должны взять ответственность за последствия.
                        </p>
                    </div>
                </div>
                <div className={styles.middleBlock}>
                    {
                        mercedesArr.map(item => {
                            return(
                                <div className={styles.flexBlock} key={item.id}>
                                    <Image src={item.icon} alt='icon' width={70} />
                                    <div className={styles.textContainer}>
                                        <p className={styles.textTitle}>{item.title}</p>
                                        <p className={styles.textText}>{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.bottomBlock}>
                    <Image src={hugoLogo} alt='logo' width={210} />
                    <div className={styles.bottomTextBlock}>
                        <p className={styles.bottomTextBlockTitle}>Наша компания</p>
                        <p className={styles.bottomTextBlockText}>В работе задейтсвовано 5+ разных специалистов с глубоким уровнем знаний своей задачи. Каждый проект разрабатывается индивидуально и без шаблонов.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}