import React from 'react'
import styles from './GoodsBlock.module.scss'
import Link from 'next/link'
import GoodsCard from './GoodsCard/GoodsCard'
import { CategoryName } from '../MainContentShop/MainContentShop'
import ArrowRight from './assets/ArrowRight'

export default function GoodsBlock({
    goodsArray,
    setFavourite,
    categoryId,
}:{
    goodsArray:CategoryName,
    setFavourite:(categoryId:string, cardId:number) => void,
    categoryId:string,
}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link href='/' className={styles.leftSide}>
                    <h3 className={styles.categoryTitle}>{goodsArray.title}</h3>
                    <div className={styles.arrowRightContainer}><ArrowRight /></div>
                </Link>
                <Link href='/' className={styles.rightSide}>Показать еще</Link>
            </div>
            <div className={styles.cards}>
                {
                    goodsArray.cards.map((good, index) => {
                        if(index <= 5)
                        return(
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