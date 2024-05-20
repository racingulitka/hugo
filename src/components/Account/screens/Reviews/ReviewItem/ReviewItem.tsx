import React from 'react'
import styles from './ReviewItem.module.scss'
import { Review } from '../Reviews'
import { getFormattedDate } from './utils/getFormattedDate'
import star from '../../../../Reviews/ReviewCard/assets/star.svg'
import starUnfilledIcon from './assets/starUnfilledIcon.svg'
import Image from 'next/image'

export default function ReviewItem({
    params,
}:{
    params:Review
}){

    const rateArr = [1, 2, 3, 4, 5]

    return(
        <div className={styles.wrapper}>
            <div className={styles.mainBlock}>
                <div className={styles.mainBlockTop}>
                    <p className={styles.name}>{params.name}</p>
                    <div className={styles.reviewInfo}>
                        <p className={styles.reviewDate}>{getFormattedDate(params.reviewDate)}</p>
                        <div className={styles.rate}>
                            {
                                rateArr.map(starItem => {
                                    const isFilled = starItem < params.rate
                                    return(
                                        isFilled ? <Image key={starItem} src={star} alt='star' className={styles.star} /> : <Image key={starItem} src={starUnfilledIcon} alt='unfilled star' className={styles.star} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <p className={styles.mainReviewText}>{params.mainReviewText}</p>
            </div>
            <div className={styles.advantagesBlock}>
                <p className={styles.advantagesBlockTitle}>Достоинства</p>
                <p className={styles.advantagesBlockText}>{params.advantagesText}</p>
            </div>
            <div className={styles.advantagesBlock}>
                <p className={styles.advantagesBlockTitle}>Недостатки</p>
                <p className={styles.advantagesBlockText}>{params.flawsText}</p>
            </div>
        </div>
    )
}