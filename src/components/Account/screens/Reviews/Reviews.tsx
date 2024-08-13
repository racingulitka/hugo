import React, { useState } from 'react'
import styles from './Reviews.module.scss'
import ReviewItem from './ReviewItem/ReviewItem'

export interface Review{
    id:number,
    name:string,
    mainReviewText:string,
    advantagesText:string,
    flawsText:string,
    reviewDate:Date,
    rate:number,
}

export default function Reviews({
    isMobile,
}:{
    isMobile:boolean,
}) {

    const [reviewsArr] = useState<Review[]>([
        {
            id:1,
            name:'Александр К.',
            mainReviewText:'Всё круто! Впечатлили ',
            advantagesText:'4K quality. 483K poly',
            flawsText:'Не выявлено',
            reviewDate: new Date('2024-04-01'),
            rate:5,
        },
        {
            id:2,
            name:'Александр К.',
            mainReviewText:'Всё круто! Впечатлили ',
            advantagesText:'4K quality. 483K poly',
            flawsText:'Не выявлено',
            reviewDate: new Date('2024-04-01'),
            rate:4,
        },
        {
            id:3,
            name:'Александр К.',
            mainReviewText:'Всё круто! Впечатлили ',
            advantagesText:'4K quality. 483K poly',
            flawsText:'Не выявлено',
            reviewDate: new Date('2024-04-01'),
            rate:4,
        },
        {
            id:4,
            name:'Александр К.',
            mainReviewText:'Всё круто! Впечатлили ',
            advantagesText:'4K quality. 483K poly',
            flawsText:'Не выявлено',
            reviewDate: new Date('2024-04-01'),
            rate:5,
        },
    ])

    if (reviewsArr.length === 0) {
        return (
            <div className={styles.emptyList}>
                Отзывов пока нет
            </div>
        )
    }
    return (
        <div className={styles.wrapper}>
            {
                reviewsArr.map(review => {
                    return(
                        <ReviewItem
                            key={review.id}
                            params={review}
                            isMobile={isMobile}
                            reviewsSumm={reviewsArr.length}
                        />
                    )
                })
            }
        </div>
    )
}