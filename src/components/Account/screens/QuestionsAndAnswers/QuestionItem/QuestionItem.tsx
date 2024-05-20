import React from 'react'
import styles from './QuestionItem.module.scss'
import Image from 'next/image'
import { QuestionType } from '../QuestionsAndAnswers.typings'
import likeIcon from '../assets/likeIcon.svg'
import adminIcon from '../assets/adminIcon.svg'
import { getFormattedDate } from '../../Reviews/ReviewItem/utils/getFormattedDate'

export default function QuestItem(props: QuestionType) {

    const { id, image, question, name, title, likes, answer, yesCount, noCount, date } = props

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <div className={styles.iconBlock}>
                    <Image
                        src={image}
                        alt='image'
                        style={{ objectFit: 'cover' }}
                        fill
                    />
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.infoBlockTop}>
                        <div className={styles.question}>
                            <p>{question}</p>
                            <p>{name}</p>
                        </div>
                        <p className={styles.title}>{title}</p>
                        <div className={styles.likesBlock}>
                            <Image
                                src={likeIcon}
                                alt='like icon'
                                width={17}
                            />
                            <p>{likes}</p>
                        </div>
                    </div>
                    <div className={styles.infoBlockBottom}>
                        <div className={styles.adminAnswer}>
                            <div className={styles.adminAnswerName}>
                                <p>HUGO</p>
                                <Image
                                    src={adminIcon}
                                    alt='admin icon'
                                    width={12}
                                    style={{marginBottom:'2px'}}
                                />
                            </div>
                            <div className={styles.adminAnswerText}>{answer}</div>
                        </div>
                        <div className={styles.isHelpful}>
                            <p>Вам помог этот отзыв?</p>
                            <div className={styles.isHelpfulSelect}>
                                <div className={styles.yes}>Да {yesCount}</div>
                                <div className={styles.no}>Нет {noCount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>{getFormattedDate(date)}</div>
        </div>
    )
}