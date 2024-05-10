import React from 'react'
import styles from './GoodsBlock.module.scss'
import Link from 'next/link'
import GoodsCard from './GoodsCard/GoodsCard'
import { CategoryName } from '../MainContentShop/MainContentShop'
import ArrowRight from './assets/ArrowRight'
import { CarType } from '../CarTypeSelect/CarTypeSelect.config'

export default function GoodsBlock({
    goodsArray,
    setFavourite,
    categoryId,
    setActiveCategory,
}: {
    goodsArray: CategoryName,
    setFavourite: (categoryId: string, cardId: number) => void,
    categoryId: string,
    setActiveCategory: React.Dispatch<React.SetStateAction<CarType | null>>
}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div
                    className={styles.leftSide}
                    onClick={() => setActiveCategory(goodsArray.id)
                }>
                    <h3 className={styles.categoryTitle}>{goodsArray.title}</h3>
                    <div className={styles.arrowRightContainer}><ArrowRight /></div>
                </div>
                <Link href='/' className={styles.rightSide}>Показать еще</Link>
            </div>
            <div className={styles.cards}>
                {
                    goodsArray.cards.map((good, index) => {
                        if (index <= 5)
                            return (
                                <GoodsCard
                                    key={good.id}
                                    setFavourite={setFavourite}
                                    categoryId={categoryId}
                                    {...good}
                                />
                            )
                    })
                }
            </div>
        </div>
    )
}