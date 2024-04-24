import React, { useState } from 'react'
import styles from './Reviews.module.scss'
import { reviewsArr, ReviewsArr, Cards } from './Reviews.config';
import ReviewCard from './ReviewCard/ReviewCard'

export default function Reviews() {

    const [openedCard, setOpenedCard] = useState<number[] | null>(null)

    const onCardSelect = (columnId: number, cardId: number) => {
        if (openedCard) {
            if (columnId === openedCard[0] && cardId === openedCard[1]) setOpenedCard(null)
            else setOpenedCard([columnId, cardId])
        } else {
            setOpenedCard([columnId, cardId])
        }
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h2>Отзывы</h2>
                <div className={styles.reviewBlock}>
                    {
                        reviewsArr.map(column => {
                            return (
                                <div
                                    key={column.id}
                                    className={styles.column}
                                >
                                    {
                                        column.cards.map(card => {
                                            const isOpened = openedCard && (column.id === openedCard[0] && card.id === openedCard[1])
                                            return (
                                                <div
                                                    key={card.id}
                                                >
                                                    <ReviewCard {...card} isOpened={isOpened} setIsOpened={onCardSelect} columnId={column.id} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}