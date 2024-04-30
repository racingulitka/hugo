import React, { useMemo } from 'react'
import styles from './GoodsBlock.module.scss'
import Link from 'next/link'
import GoodsCard from './GoodsCard/GoodsCard'
import { CategoryName } from '../MainContentShop/MainContentShop'

export default function GoodsBlock({
    goodsArray,
}:{
    goodsArray:CategoryName,
}) {
    return useMemo(() => (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link href='/' className={styles.leftSide}>
                    <h3 className={styles.categoryTitle}>{goodsArray.title}</h3>
                </Link>
            </div>
            <div className={styles.cards}>
                <GoodsCard />
            </div>
        </div>
    ), [])
}