import React, { useRef, useEffect } from 'react'
import styles from './LandingPageLiesAbout.module.scss'
import { liesCardsArr, LiesCard as LiesCardType } from './LandingPageLiesAbout.config'
import LiesCard from './LiesCard/LiesCard'
import arrow from './assets/arrow.svg'
import Image from 'next/image'
import tooltip from './assets/tooltip.svg'

export default function LandingPageLiesAbout() {

    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = 855 / 2 - scrollRef.current.clientWidth / 2
        }
    }, [])

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.tooltip}>
                    <Image src={tooltip} alt='tooltip' className={styles.tooltipBackground} fill />
                    <div className={styles.tooltipTitle}>БУДЕМ ЧЕСТНЫ С ВАМИ</div>
                    <div className={styles.tooltipText}>Гарантии конверсии, результата или сделки не существует</div>
                </div>
                <div className={styles.greyBlock}>
                    <div className={styles.title}>
                        <h2 className={styles.titleH2}>ПРОСТО ЕЁ ИСКУСТВЕННО СОЗДАЮТ</h2>
                        <p className={styles.continues}>ИЗ МНИМЫХ ОБЕЩАНИЙ</p>
                    </div>
                    <div className={styles.cardsArr} ref={scrollRef}>
                        {
                            liesCardsArr.map((card: LiesCardType) => {
                                return (
                                    <LiesCard
                                        key={card.id}
                                        params={card}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={styles.footer}>
                        <p className={styles.toKnowTruth}>УЗНАТЬ ВСЮ ПРАВДУ О ГАРАНТИИ РЕЗУЛЬТАТА</p>
                        <div className={styles.arrow}>
                            <Image src={arrow} alt='arrow' className={styles.image} />
                        </div>
                        <button className={styles.button}>УЗНАТЬ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}