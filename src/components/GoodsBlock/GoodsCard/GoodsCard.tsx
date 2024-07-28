import React from 'react'
import styles from './GoodsCard.module.scss'
import { Card } from '@/components/MainContentShop/MainContentShop'
import Image from 'next/image'
import HeartIcon from './assets/HeartIcon'
import starIcon from './assets/starIcon.svg'
import reviewIcon from './assets/reviewIcon.svg'
import Link from 'next/link'

export default function GoodsCard(props: Card & { setFavourite: (categoryId: string, cardId: number) => void } & { categoryId: string }) {

    const getReviewText = (value: number) => {
        if (String(value)[String(value).length - 1] === '0' || [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].includes(value)) {
            return 'отзывов'
        } else if (value === 1 || String(value)[String(value).length - 1] === '1') {
            return 'отзыв'
        } else {
            return 'отзыва'
        }
    }

    const reviewText = getReviewText(props.reviews)

    return (
        <Link href={`/shop/product/${props.slug}`} className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Image src={props.image} alt='image' className={styles.goodImage} />
                <div
                    className={styles.heartIconContainer}
                    onClick={() => props.setFavourite(props.categoryId, props.id)}
                >
                    <HeartIcon isActive={props.isFavourite} />
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.priceContainer}>
                    <div className={styles.actualPrice}>$ {props.actualPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</div>
                    {
                        props.price &&
                        <div className={styles.price}>$ {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</div>
                    }
                    {
                        props.discount &&
                        <div className={styles.discount}>{props.discount}%</div>
                    }
                </div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.otherContainer}>
                    <div className={styles.rating}>
                        <Image src={starIcon} alt='starIcon' className={styles.star} />
                        <div className={styles.ratingValue}>{props.rate.toFixed(1)}</div>
                    </div>
                    <div className={styles.reviews}>
                        <Image src={reviewIcon} alt='reviewIcon' className={styles.reviewIcon} />
                        <div className={styles.text}>{props.reviews} {reviewText}</div>
                    </div>
                </div>
                <div className={styles.button}>Подробнее</div>
            </div>
        </Link>
    )
}