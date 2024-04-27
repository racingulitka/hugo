import React from 'react'
import styles from './ReviewCard.module.scss'
import Link from 'next/link'
import Arrow from './assets/Arrow'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

export default function ReviewCard({
    id,
    title,
    categoryTitle,
    categoryLink,
    grade,
    review,
    task,
    pointA,
    pointB,
    author,
    isOpened,
    setIsOpened,
    columnId,
}: {
    id: number,
    title: string,
    categoryTitle: string,
    categoryLink: string,
    grade: number,
    review: string,
    task: string,
    pointA: number,
    pointB: number,
    author: string,
    isOpened: boolean | null,
    setIsOpened: (columnId: number, cardId: number) => void,
    columnId: number,
}) {

    return (
        <motion.div
            className={cn(styles.wrapper, isOpened && styles.wrapperOpened)}
        >
            <div className={styles.header}>
                <div className={styles.titleBlock}>
                    <h3>{title}</h3>
                    <Link href={categoryLink} className={styles.categoryLink}>{categoryTitle}</Link>
                </div>
                <div className={styles.gradeBlock}>
                    <div className={styles.grade}>{grade.toFixed(1)}</div>
                    <div className={styles.stars}>
                        {
                            Array.from({ length: 5 }, (_, index) => {
                                const fillPercentage = (grade - index)*100;

                                return (
                                    <svg key={index} className={styles.star} width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#F7C412', stopOpacity: 1 }} />
                                            <stop offset={`${fillPercentage}%`} style={{ stopColor: '#F7C412', stopOpacity: 1 }} />
                                            <stop offset={`${fillPercentage}%`} style={{ stopColor: '#fff', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 1 }} />
                                        </linearGradient>
                                        <path d="M6 0.491455L7.34708 4.63735H11.7063L8.17963 7.19966L9.52671 11.3456L6 8.78325L2.47329 11.3456L3.82037 7.19966L0.293661 4.63735H4.65292L6 0.491455Z" fill={`url(#grad-${index})`} />
                                    </svg>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.splitter}></div>
            <div className={styles.reviewBlock}>
                <AnimatePresence>
                    {
                        isOpened &&
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            layout
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <h4>Отзыв</h4>
                        </motion.div>
                    }
                </AnimatePresence>
                <p>{review}</p>
            </div>
            <AnimatePresence>
                {
                    isOpened &&
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        layout
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={styles.taskBlock}
                    >
                        <h4>Задача</h4>
                        <p>{task}</p>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    isOpened &&
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        layout
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={styles.points}
                    >
                        {
                            [1, 2].map(item => {
                                return (
                                    <div className={styles.pointWrapper}>
                                        <div>{item === 1 ? 'Точка А' : 'Точка В'}</div>
                                        <div>{item === 1 ? pointA : pointB}</div>
                                    </div>
                                )
                            })
                        }
                    </motion.div>
                }
            </AnimatePresence>
            <div className={styles.footer}>
                <p className={styles.author}>{author}</p>
                <div
                    className={cn(styles.result, isOpened && styles.resultOpened)}
                    onClick={() => setIsOpened(columnId, id)}
                >
                    <p>РЕЗУЛЬТАТ</p>
                    <div className={cn(styles.arrow, isOpened && styles.arrowOpened)}>
                        <Arrow isOpened={isOpened} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}