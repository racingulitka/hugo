import React from 'react'
import styles from './TargetCompetitor.module.scss'
import Image from 'next/image'
import image from './assets/image.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function TargetCompetitor({
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
                    <h2 className={styles.title}>Анализ конкурентов и<br></br>целевой аудитории</h2>
                    <p className={styles.text}>Один из самых важных этапов, где Ваше участие просто необходимо. Здесь мы подбираем группы и ключевые запросы для будущей рекламной кампании.</p>
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
                <Image src={image} alt='image' width={567} className={styles.image} />
            </div>
        </div>
    )
}