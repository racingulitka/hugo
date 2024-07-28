import React from 'react'
import styles from './AdvertisementReports.module.scss'
import Image from 'next/image'
import heroImage from './assets/heroImage.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'

export default function AdvertisementReports() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <Image src={heroImage} alt='hero image' className={styles.heroImage} />
                <div className={styles.rightSide}>
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>09</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                    <h2 className={styles.title}>Ведение и ежемесячная<br></br>отчетность</h2>
                    <p className={styles.text} style={{margin:0}}>(по желанию)</p>
                    <p className={styles.text}>При условии жёсткой конкуренции необходимо постоянно менять стратегию и оптимизировать кампанию, так как другие бизнесы тоже &quot;не спят&quot;.</p>
                    <div className={styles.button}>
                        <RedBorderButton
                            width={285}
                            height={65}
                            fontSize={22}
                        >
                            РЕЗУЛЬТАТ
                        </RedBorderButton>
                    </div>
                    <p className={styles.anotherText}>понижение стоимости клика<br></br>и повышение количества заявок</p>
                </div>
            </div>
        </div>
    )
}