import React, { useState, useEffect } from 'react'
import styles from './QuestionsAndAnswers.module.scss'
import emptyIcon from './assets/emptyIcon.svg'
import Image from 'next/image'
import QuestItem from './QuestionItem/QuestionItem'
import defaultImage from '../../../MainContentShop/assets/defaultGoodsImage.png'
import { QuestionType } from './QuestionsAndAnswers.typings'

export default function QuestionsAndAnswers({
    isQuestions,
    setQuestionsCount,
    isMobile,
}: {
    isQuestions: boolean,
    setQuestionsCount: React.Dispatch<React.SetStateAction<number[]>>,
    isMobile: boolean,
}) {

    const [questions] = useState<QuestionType[]>([
        {
            id: 1,
            image: defaultImage,
            question: 'Какая ширина молнии?',
            name: 'Александр К.',
            title: '3D моделинг автомобиля Maserati',
            likes: 3,
            answer: 'Всё круто! Впечатлили',
            yesCount: 3,
            noCount: 0,
            date: new Date('2024-03-04'),
        },
        {
            id: 2,
            image: defaultImage,
            question: 'Какая ширина молнии?',
            name: 'Александр К.',
            title: '3D моделинг автомобиля Maserati',
            likes: 3,
            answer: 'Всё круто! Впечатлили',
            yesCount: 3,
            noCount: 0,
            date: new Date('2024-03-12'),
        },
        {
            id: 3,
            image: defaultImage,
            question: 'Какая ширина молнии?',
            name: 'Александр К.',
            title: '3D моделинг автомобиля Maserati',
            likes: 3,
            answer: '',
            yesCount: 0,
            noCount: 0,
            date: new Date('2024-03-11'),
        },
    ])
    const [answered] = useState<QuestionType[]>(questions.filter(item => item.answer !== '').sort((a, b) => a.date.getTime() - b.date.getTime()).reverse())
    const [unAnswered] = useState<QuestionType[]>(questions.filter(item => item.answer === '').sort((a, b) => a.date.getTime() - b.date.getTime()).reverse())

    useEffect(() => {
        setQuestionsCount([questions.length, 0])
    }, [questions, unAnswered])

    if (isQuestions && questions.length === 0 || !isQuestions && unAnswered.length === 0) {
        return (
            <div className={styles.emptyList}>
                <Image src={emptyIcon} alt='nothing' className={styles.emptyIcon} />
                <div className={styles.emptyTextBlock}>
                    <p>{isQuestions ? 'Вопросов пока нет' : 'Вопросов, ожидающих ответа пока нет'}</p>
                    <p>Здесь будут отображаться ваши отзывы на товары</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {
                !isMobile && isQuestions &&
                answered.map(question => {
                    return (
                        <QuestItem
                            key={question.id}
                            {...question}
                            isMobile={isMobile}
                        />
                    )
                })
            }
            {
                !isMobile && !isQuestions &&
                unAnswered.map(item => {
                    return (
                        <QuestItem
                            key={item.id}
                            {...item}
                            isMobile={isMobile}
                        />
                    )
                })
            }
            {
                isMobile &&
                questions.sort((a, b) => a.date.getTime() - b.date.getTime()).reverse().map(item => {
                    return (
                        <QuestItem
                            key={item.id}
                            {...item}
                            isMobile={isMobile}
                        />
                    )
                })
            }
        </div>
    )
}