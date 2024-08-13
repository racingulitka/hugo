import React from 'react'
import styles from './AdvertisementAgreement.module.scss'
import Image from 'next/image'
import heroImage from './assets/image.png'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function AdvertisementAgreement({
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
                        <p className={styles.number}>03</p>
                        <p className={styles.step}>ШАГ</p>
                    </div>
                }
                <div className={styles.rightSide}>
                    {
                        !isMobile &&
                        <div className={styles.stepNumber}>
                            <p className={styles.number}>03</p>
                            <p className={styles.step}>ШАГ</p>
                        </div>
                    }
                    <h2 className={styles.title}>Заключение договора</h2>
                    <p className={styles.text}>Работа без договора ведёт к недопониманию. Поэтому, мы фиксирую все наши обязательства на бумаге для полной прозрачности действий.</p>
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
                    <p className={styles.anotherText}>подписанный договор<br></br>со всеми обязательствами</p>
                </div>
            </div>
        </div>
    )
}