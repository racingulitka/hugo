import React, { useState } from 'react'
import styles from './MobileReviews.module.scss'
import { ReviewsArr } from '@/pages/shop/models/vehicles/Product.typings'
import exitCross from './assets/exitCross.svg'
import Image from 'next/image'
import star from '../../Reviews/ReviewCard/assets/star.svg'
import starUnfilled from '../../Account/screens/Reviews/ReviewItem/assets/starUnfilledIcon.svg'
import arrowDown from './assets/arrowDown.svg'
import { getFormattedDate } from '@/components/Account/screens/Reviews/ReviewItem/utils/getFormattedDate'
import { Sheet } from 'react-modal-sheet'
import MobileModalHeader from '@/components/MainContentVehicles/MobileSelectBlock/MobileModalHeader/MobileModalHeader'

export default function MobileReviews({
    reviewsArr,
    setReviewsActive,
}: {
    reviewsArr: ReviewsArr[],
    setReviewsActive: React.Dispatch<React.SetStateAction<boolean>>,
}) {

    const rateArr = [1, 2, 3, 4, 5]

    const sortArr = [
        {
            id: 1,
            title: 'Новые и полезные',
        },
        {
            id: 2,
            title: 'С высокой оценкой',
        },
        {
            id: 3,
            title: 'С низкой оценкой',
        },
    ]

    const [sortSelect, setSortSelect] = useState<number>(1)
    const [isSortOpen, setSortOpen] = useState<boolean>(false)
    const [sortedArr, setSortedArr] = useState<ReviewsArr[]>(reviewsArr)

    const getMainRate = () => {
        return reviewsArr.map(item => item.rate).reduce((acc, item) => acc + item, 0) / reviewsArr.length
    }

    console.log(reviewsArr)

    const sortFunc = (sortId:number) => {
        switch(sortId){
            case 1:{
                setSortedArr(reviewsArr.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()))
                break
            }
            case 2:{
                setSortedArr(reviewsArr.sort((a, b) => a.rate - b.rate).reverse())
                break
            }
            case 3:{
                setSortedArr(reviewsArr.sort((a, b) => a.rate - b.rate))
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>Отзывы</div>
                    <div className={styles.titleValue}>{reviewsArr.length}</div>
                    <div className={styles.exitCrossButton} onClick={() => setReviewsActive(false)}>
                        <Image src={exitCross} alt='exit' className={styles.exitCross} />
                    </div>
                </div>
                <div className={styles.mainRateBlock}>
                    <div className={styles.rate}>
                        {
                            rateArr.map(starItem => {
                                const isFilled = starItem < getMainRate()
                                return (
                                    isFilled ? <Image key={starItem} src={star} alt='star' className={styles.star} /> : <Image key={starItem} src={starUnfilled} alt='unfilled star' className={styles.star} />
                                )
                            })
                        }
                    </div>
                    <div className={styles.divider}>---------------------------------------------------------------------------</div>
                    <div className={styles.rateChar}>{Math.round(getMainRate())} / 5</div>
                </div>
                <div className={styles.note}>Рейтинг формируется на основе актуальных отзывов</div>
            </div>
            <div className={styles.sort} onClick={() => setSortOpen(true)}>
                {sortArr.find(item => item.id === sortSelect)?.title}
                <Image src={arrowDown} alt='arrow down' className={styles.arrowDown} />
            </div>
            <Sheet
                isOpen={isSortOpen}
                onClose={() => setSortOpen(false)}
                detent='content-height'
            >
                <Sheet.Container>
                    <Sheet.Header>
                        <MobileModalHeader backgroundColor='#252525' />
                    </Sheet.Header>
                    <Sheet.Content>
                        {
                            <div className={styles.sortSelect}>
                                {
                                    sortArr.map(item => {
                                        return (
                                            <div
                                                className={styles.sortItem}
                                                key={item.id}
                                                onClick={() => {setSortSelect(item.id); setSortOpen(false); sortFunc(item.id)}}
                                            >
                                                {item.title}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </Sheet.Content>
                </Sheet.Container>
            </Sheet>
            <div className={styles.reviewsBlock}>
                {
                    sortedArr.map(review => {
                        return (
                            <div
                                key={review.id}
                                className={styles.review}
                            >
                                <div className={styles.reviewHeader}>
                                    <div className={styles.reviewInfo}>
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
                                        <p className={styles.reviewDate}>{getFormattedDate(review.date)}</p>
                                    </div>
                                    <h4 className={styles.reviewHeaderName}>{review.name}</h4>
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
                }
            </div>
        </div>
    )
}