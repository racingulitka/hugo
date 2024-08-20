import React from 'react'
import styles from './TargetTest.module.scss'
import Image from 'next/image'
import heroImage from './assets/heroImage.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function TargetTest({
    isMobile,
}: {
    isMobile: boolean,
}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <Image src={heroImage} alt='hero image' width={713} className={styles.heroImage} />
                {
                    isMobile &&
                    <div className={styles.stepNumber}>
                        <p className={styles.number}>09</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                }
                <div className={styles.rightSide}>
                    {
                        !isMobile &&
                        <div className={styles.stepNumber}>
                            <p className={styles.number}>09</p>
                            <p className={styles.step}>ШАГ</p>
                        </div>
                    }
                    <h2 className={styles.title}>Тестовый запуск</h2>
                    <p className={styles.text}>Вся рекламная компания запускается на 2 недели<br></br>для оценки динамики и результатов во избежание<br></br>“слива” бюджета.</p>
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
                    <p className={styles.anotherText}>определение успешности<br></br>выбранной стратегии</p>
                </div>
            </div>
        </div>
    )
}