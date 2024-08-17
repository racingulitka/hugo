import React from 'react'
import styles from './AnalysisActuality.module.scss'
import RedButton from '@/components/common/RedButton/RedButton'
import heroImage from './assets/heroImage.svg'
import doubleArrow from './assets/doubleArrow.svg'
import Image from 'next/image'
import { cardsArr } from './AnalysisActuality.config'
import leftBorderBlock from './assets/leftBorderBlock.svg'
import rightBorderBlock from './assets/rightBorderBlock.svg'

export default function AnalysisActuality({
    isMobile,
}: {
    isMobile: boolean,
}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.topContainer}>
                    <div className={styles.topLeftBlock}>
                        <p className={styles.firstText}>Не уверены в необходимости?</p>
                        <h3 className={styles.title}>Узнайте актуальность{isMobile && <br></br>} анализа для Вас</h3>
                        {
                            isMobile &&
                            <Image src={heroImage} alt='hero image' className={styles.heroImage} />
                        }
                        <p className={styles.secondText}>Просто оставьте свои данные и мы перезвоним Вам и расскажем всё подробнее.</p>
                        {
                            !isMobile &&
                            <RedButton
                                width={400}
                                height={70}
                                fontSize={20}
                            >
                                УЗНАТЬ ПРО МОЮ СФЕРУ
                            </RedButton>
                        }
                    </div>
                    {
                        !isMobile &&
                        <Image src={heroImage} alt='hero image' width={335} />
                    }
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.container}>
                        <h3 className={styles.bottomTitle}>ОГРОМНЫЙ ОБЪЁМ РАБОТЫ</h3>
                        <p className={styles.bottomSubtitle}>НО ДЛЯ ВАС ЭТО ВЫГЛЯДИТ ТАК</p>
                        <div className={styles.schemeFlex}>
                            {
                                !isMobile &&
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
                            {
                                isMobile &&
                                cardsArr.map((item, index) => {
                                    return(
                                        <div
                                            className={styles.mobileCard}
                                            key={item.id}
                                            style={{alignSelf: index >= 3 ? 'flex-end' : 'flex-start'}}
                                        >
                                            <p
                                                className={styles.mobileStep}
                                                style={{
                                                    alignSelf: index >= 3 ? 'flex-end' : 'flex-start',
                                                    translate: index >= 3 ? '2px 0' : '-2px 0'
                                                }}
                                            >
                                                {index+1}
                                            </p>
                                            <div
                                                className={styles.mobileCardMain}
                                                style={{
                                                    borderLeft: index < 3 ? '2px solid #fff' : 'none',
                                                    borderRight: index >= 3 ? '2px solid #fff' : 'none',
                                                    padding: index >= 3 ? '0 13px 0 0' : '0 0 0 13px',
                                                    alignSelf: index >= 3 ? 'flex-end' : 'flex-start',
                                                }}
                                            >
                                                {item.text}
                                            </div>
                                            {
                                                item.id !== 3 && item.id !== 6 &&
                                                <Image
                                                    src={doubleArrow}
                                                    alt='double arrow'
                                                    className={styles.doubleArrow}
                                                    style={{alignSelf: index >= 3 ? 'flex-end' : 'flex-start'}}
                                                />
                                            }
                                            {
                                                index === 2 &&
                                                <div className={styles.mobileMiddleBlock}>
                                                    <div className={styles.mobileLeftBlock}></div>
                                                    <div className={styles.mobileMiddleCenterBlock}>
                                                        <div className={styles.mobileTitle}>Анализ начался</div>
                                                        <div className={styles.mobileSubTitle}>Средняя продолжительность анализа: 30 дней</div>
                                                    </div>
                                                    <div className={styles.mobileRightBlock}></div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })
                            }
                            {
                                !isMobile &&
                                <div className={styles.bottomCenterBlock}>
                                    <div className={styles.bottomCenterBlockTitle}>
                                        Анализ начался
                                        <p className={styles.titleNumber}>4</p>
                                    </div>
                                    <p className={styles.bottomCenterBlockSubtitle}>Средняя продолжительность анализа: 30 дней</p>
                                </div>
                            }
                            {!isMobile && <Image src={leftBorderBlock} alt='left border block' width={136} className={styles.leftBorderBlock} />}
                            {!isMobile && <Image src={rightBorderBlock} alt='right border block' width={67} className={styles.rightBorderBlock} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}