import React from 'react'
import styles from './AdvertisementFinal.module.scss'
import Image from 'next/image'
import heroImage from './assets/heroImage.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function AdvertisementFinal({
    isMobile,
}: {
    isMobile: boolean,
}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.leftSide}>
                    {
                        !isMobile &&
                        <div className={styles.stepNumber}>
                            <p className={styles.number}>08</p>
                            <p className={styles.step}>ШАГ</p>
                        </div>
                    }
                    <h2 className={styles.title}>Финальный запуск</h2>
                    <p className={styles.text}>После всех корректировок Вы получаете работающую по-максимуму рекламу, которая стабильно приносит заявки в Вашу компанию.</p>
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
                    <p className={styles.anotherText}>заявки<br></br>на ваши продукты</p>
                </div>
                {
                    isMobile &&
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>08</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                }
                <Image src={heroImage} alt='image' width={538} className={styles.image} />
            </div>
        </div>
    )
}