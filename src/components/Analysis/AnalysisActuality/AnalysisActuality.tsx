import React from 'react'
import styles from './AnalysisActuality.module.scss'
import RedButton from '@/components/common/RedButton/RedButton'
import heroImage from './assets/heroImage.svg'
import doubleArrow from './assets/doubleArrow.svg'
import Image from 'next/image'
import { cardsArr } from './AnalysisActuality.config'
import leftBorderBlock from './assets/leftBorderBlock.svg'
import rightBorderBlock from './assets/rightBorderBlock.svg'

export default function AnalysisActuality() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.topContainer}>
                    <div className={styles.topLeftBlock}>
                        <p className={styles.firstText}>Не уверены в необходимости?</p>
                        <h3 className={styles.title}>Узнайте актуальность анализа для Вас</h3>
                        <p className={styles.secondText}>Просто оставьте свои данные и мы перезвоним Вам и расскажем всё подробнее.</p>
                        <RedButton
                            width={400}
                            height={70}
                            fontSize={20}
                        >
                            УЗНАТЬ ПРО МОЮ СФЕРУ
                        </RedButton>
                    </div>
                    <Image src={heroImage} alt='hero image' width={335} />
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.container}>
                        <h3 className={styles.bottomTitle}>ОГРОМНЫЙ ОБЪЁМ РАБОТЫ</h3>
                        <p className={styles.bottomSubtitle}>НО ДЛЯ ВАС ЭТО ВЫГЛЯДИТ ТАК</p>
                        <div className={styles.schemeFlex}>
                            {
                                cardsArr.map(item => {
                                    return (
                                        <div className={styles.card} key={item.id} style={{ marginLeft: `${item.id === 5 && '90px'}` }}>
                                            <div className={styles.numberBlock}>
                                                <p className={styles.number}>{item.id}</p>
                                                <div className={styles.verticalLine}></div>
                                            </div>
                                            <div className={styles.rightBlock}>
                                                <p className={styles.rightBlockText} style={{ width: `${item.textWidth}px` }}>{item.text}</p>
                                                {
                                                    item.isDoubleArrow &&
                                                    <Image src={doubleArrow} alt='double arrow' width={30} />
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className={styles.bottomCenterBlock}>
                                <div className={styles.bottomCenterBlockTitle}>
                                    Анализ начался
                                    <p className={styles.titleNumber}>4</p>
                                </div>
                                <p className={styles.bottomCenterBlockSubtitle}>Средняя продолжительность анализа: 30 дней</p>
                            </div>
                            <Image src={leftBorderBlock} alt='left border block' width={136} className={styles.leftBorderBlock} />
                            <Image src={rightBorderBlock} alt='right border block' width={67} className={styles.rightBorderBlock} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}