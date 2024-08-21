import React, { useState } from 'react'
import styles from './QandA.module.scss'
import { selectorsArr } from './QandA.config'
import cn from 'classnames'
import { ReviewsArr } from '@/components/Product/pagesFiles/Product.typings'
import { getFormattedDate } from '@/components/Account/screens/Reviews/ReviewItem/utils/getFormattedDate'
import starUnfilled from '../../Account/screens/Reviews/ReviewItem/assets/starUnfilledIcon.svg'
import star from '../../Reviews/ReviewCard/assets/star.svg'
import Image from 'next/image'
import reviewEmptyIcon from './assets/reviewEmptyIcon.svg'

export default function QandA({
    reviewsArr,
}: {
    reviewsArr: ReviewsArr[],
}) {

    const [selectedSelector, setSelectedSelector] = useState<number>(1)
    const rateArr = [1, 2, 3, 4, 5]

    return (
        <div className={styles.wrapper}>
            <div className={styles.selectors}>
                {
                    selectorsArr.map(selector => {
                        return (
                            <div
                                key={selector.id}
                                className={cn(styles.selector, selector.id === selectedSelector && styles.selectorActive)}
                                onClick={() => setSelectedSelector(selector.id)}
                            >
                                <div className={styles.selectorInfoBlock}>
                                    <div className={styles.selectorInfoBlockCount}>
                                        23
                                    </div>
                                    <div
                                        className={cn(styles.selectorInfoBlockTitle, selector.id === selectedSelector && styles.selectorInfoBlockTitleActive)}
                                    >
                                        {selector.title}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                selectedSelector === 1 &&
                <div className={styles.reviews}>
                    {
                        reviewsArr.length !== 0 ?
                            reviewsArr.map(review => {
                                return (
                                    <div
                                        key={review.id}
                                        className={styles.review}
                                    >
                                        <div className={styles.reviewHeader}>
                                            <h4 className={styles.reviewHeaderName}>{review.name}</h4>
                                            <div className={styles.reviewInfo}>
                                                <p className={styles.reviewDate}>{getFormattedDate(review.date)}</p>
                                                <div className={styles.rate}>
                                                    {
                                                        rateArr.map(starItem => {
                                                            const isFilled = starItem < review.rate
                                                            return (
                                                                isFilled ? <Image key={starItem} src={star} alt='star' className={styles.star} /> : <Image key={starItem} src={starUnfilled} alt='unfilled star' className={styles.star} />
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <p className={styles.reviewText}>{review.text}</p>
                                        <div className={styles.reviewAdvantages}>
                                            <h4>Достоинства</h4>
                                            <p>{review.advantage}</p>
                                        </div>
                                        <div className={styles.reviewFlaw}>
                                            <h4>Недостатки</h4>
                                            <p>{review.flaw}</p>
                                        </div>
                                        <div className={styles.reviewIsHelpful}>
                                            <p>Вам помог этот отзыв?</p>
                                            <div className={styles.reviewIsHelpfulFlex}>
                                                <div className={styles.reviewIsHelpfulFlexYes}>Да {review.yes}</div>
                                                <div className={styles.reviewIsHelpfulFlexNo}>Нет {review.no}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        :
                            selectedSelector === 1 && reviewsArr.length === 0 &&
                            <div className={styles.emptyList}>
                                <Image src={reviewEmptyIcon} alt='nothing' className={styles.emptyIcon} />
                                <div className={styles.emptyTextBlock}>
                                    <p>Отзывов пока нет</p>
                                    <p>Здесь будут отображаться ваши отзывы на товары</p>
                                </div>
                            </div>
                    }
                </div>
            }
        </div>
    )
}