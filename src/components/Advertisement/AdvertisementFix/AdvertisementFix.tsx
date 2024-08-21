import React from 'react'
import styles from './AdvertisementFix.module.scss'
import Image from 'next/image'
import heroImage from './assets/heroImage.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function AdvertisementFix({
    isMobile,
}: {
    isMobile: boolean,
}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <Image src={heroImage} alt='hero image' className={styles.heroImage} />
                {
                    isMobile &&
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>07</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                }
                <div className={styles.rightSide}>
                    {
                        !isMobile &&
                        <div className={styles.stepNumber}>
                            <p className={styles.number}>07</p>
                            <p className={styles.step}>ШАГ</p>
                        </div>
                    }
                    <h2 className={styles.title}>Корректировка</h2>
                    <p className={styles.text}>Создать успешную компанию сразу - это удача.<br></br>Поэтому после тестового запуска мы корректируем<br></br>или даже полностью переделываем контекстную рекламу.</p>
                    <div className={styles.button}>
                        {
                            isMobile ?
                                <RedBorderButtonMobile
                                    height={45}
                                    fontSize={12}
                                >
                                    РЕЗУЛЬТАТ
                                </RedBorderButtonMobile>
                                :
                                <RedBorderButton
                                    width={285}
                                    height={65}
                                    fontSize={22}
                                >
                                    РЕЗУЛЬТАТ
                                </RedBorderButton>
                        }
                    </div>
                    <p className={styles.anotherText}>убираем нерентабельные ключевые запросы</p>
                </div>
            </div>
        </div>
    )
}