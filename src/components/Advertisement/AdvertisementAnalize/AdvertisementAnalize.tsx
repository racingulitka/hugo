import React from 'react'
import styles from './AdvertisementAnalize.module.scss'
import Image from 'next/image'
import heroImage from './assets/heroImage.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function AdvertisementAnalize({
    isMobile,
}: {
    isMobile: boolean,
}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <Image src={heroImage} alt='hero image' className={styles.heroImage}/>
                {
                    isMobile &&
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>01</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                }
                <div className={styles.rightSide}>
                    {
                        !isMobile &&
                        <div className={styles.stepNumber}>
                            <p className={styles.number}>01</p>
                            <p className={styles.step}>ШАГ</p>
                        </div>
                    }
                    <h2 className={styles.title}>Анализ потенциала</h2>
                    <p className={styles.text}>К сожалению, не всем подходит контекстная реклама, поэтому перед заказом нстройки Яндекс.Директа и Google.Adwords, вы получите предварительный прогноз (показы, клики, заказы и их стоимость).</p>
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
                    <p className={styles.anotherText}>понимание необходимости, результатов и инвестиций</p>
                </div>
            </div>
        </div>
    )
}