import React from 'react'
import styles from './AdvertisementSearch.module.scss'
import Image from 'next/image'
import image from './assets/image.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function AdvertisementSearch({
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
                            <p className={styles.number}>04</p>
                            <p className={styles.step}>ШАГ</p>
                        </div>
                    }
                    <h2 className={styles.title}>Подбор поисковых<br></br>запросов</h2>
                    <p className={styles.text}>Один из самых важных этапов, где Ваше участие{!isMobile && <br></br>}просто необходимо. Здесь мы подбираем группы{!isMobile &&<br></br>}и ключевые запросы для будущей рекламной кампании.</p>
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
                    <p className={styles.anotherText}>собранный и отфильтрованный список ключевых запросов</p>
                </div>
                {
                    isMobile &&
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>04</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                }
                <Image src={image} alt='image' width={577} className={styles.image} />
            </div>
        </div>
    )
}