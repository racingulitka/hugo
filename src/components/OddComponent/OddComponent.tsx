import React from 'react'
import styles from './OddComponent.module.scss'
import Image, { StaticImageData } from 'next/image'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'
import { Props } from './OddComponent.typings'

export default function OddComponent({
    isMobile,
    params,
}:
    Props) {
        const {background, heroImage, isOdd, stepNumber, title, subtitle, description, anotherText} = params
    return (
        <div
            className={styles.mainWrapper}
            style={{
                background:
                    typeof (background) === 'string' ?
                        background :
                        `url(${background.src}) center/cover no-repeat`,
            }}
        >
            <div className={styles.wrapper} style={{ flexDirection: isOdd ? 'row' : 'row-reverse' }}>
                <div className={styles.imageBlock}>
                    <Image src={heroImage} alt='hero image' className={styles.heroImage} layout='fill' />
                </div>
                <div className={styles.infoBlock} style={{ flexDirection: isOdd ? 'row' : 'row-reverse' }}>
                    {
                        isMobile &&
                        <div className={styles.stepNumber}>
                            <p className={styles.number}>{stepNumber}</p>
                            <p className={styles.step}>ШАГ</p>
                        </div>
                    }
                    <div className={styles.rightSide}>
                        {
                            !isMobile &&
                            <div className={styles.stepNumber}>
                                <p className={styles.number}>{stepNumber}</p>
                                <p className={styles.step}>ШАГ</p>
                            </div>
                        }
                        <h2 className={styles.title}>
                            {title}
                        </h2>
                        {subtitle && <p className={styles.text} style={{ margin: 0 }}>(по желанию)</p>}
                        <p className={styles.text}>{description}</p>
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
                        <p className={styles.anotherText}>{anotherText}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}