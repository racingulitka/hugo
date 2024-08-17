import React from 'react'
import styles from './LandingPageMoreThan.module.scss'
import { moreThanArr } from './LandingPageMoreThan.config'
import Image from 'next/image'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function LandingPageMoreThan({
    isMobile,
}: {
    isMobile: boolean,
}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>РАЗРАБОТКА LANDING PAGE<br></br>ОТ HUGO</h2>
                <p className={styles.adding}>ЭТО БОЛЬШЕ, ЧЕМ ПРОСТО САЙТ</p>
                <div className={styles.flexWrapper}>
                    {
                        moreThanArr.map(item => {
                            return (
                                <div key={item.id} className={styles.card}>
                                    <Image src={item.icon} alt='icon' className={styles.icon} />
                                    <div className={styles.info}>
                                        <h3 className={styles.title}>{item.title}</h3>
                                        <p className={styles.text}>{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    isMobile ?
                        <RedBorderButtonMobile
                            height={55}
                            fontSize={12}
                        >
                            СДЕЛАТЬ ВСЁ ХОРОШО
                        </RedBorderButtonMobile>
                        :
                        <RedBorderButton
                            width={435}
                            height={90}
                            fontSize={20}
                        >
                            СДЕЛАТЬ ВСЁ ХОРОШО
                        </RedBorderButton>
                }
            </div>
        </div>
    )
}