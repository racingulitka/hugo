import React from 'react'
import styles from './TargetTools.module.scss'
import Image from 'next/image'
import heroImage from './assets/heroImage.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function TargetTools({
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
                    <h2 className={styles.title}>Формирование связок<br></br>из инструментов</h2>
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
                    <p className={styles.anotherText}>собранный и отфильтрованный<br></br>список ключевых запросов</p>
                </div>
                {
                    isMobile &&
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>08</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                }
                <Image src={heroImage} alt='image' width={689} className={styles.image} />
            </div>
        </div>
    )
}