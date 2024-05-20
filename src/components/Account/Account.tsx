import React, { useState } from 'react'
import styles from './Account.module.scss'
import AccountNav from './components/AccountNav/AccountNav'
import { Screens, screens } from './Account.config'
import Cart from './screens/Cart/Cart'
import Purchases from './screens/Purchases/Purchases'
import Favourites from './screens/Favourites/Favourites'
import Reviews from './screens/Reviews/Reviews';
import QuestionsAndAnswers from './screens/QuestionsAndAnswers/QuestionsAndAnswers';
import cn from 'classnames'

export default function Account() {

    const navArr = screens.map(screen => {
        const { id, title } = screen
        return {
            id,
            title
        }
    })

    const [isQuestionsSelected, setQuestionsSelected] = useState<boolean>(true)
    const [questionsCount, setQuestionsCount] = useState<number[]>([0, 0])

    const [user] = useState<string>('GermachMallboro')
    const [isGoToPlacingAnOrder, setGoToPlacingAnOrder] = useState<boolean>(false)
    const [activeScreen, setActiveScreen] = useState<Screens>(Screens.cart)

    const accountScreens = {
        [Screens.ChangeProfile]: <Cart isGoToPlacingAnOrder={isGoToPlacingAnOrder} setGoToPlacingAnOrder={setGoToPlacingAnOrder}/>,
        [Screens.cart]: <Cart isGoToPlacingAnOrder={isGoToPlacingAnOrder} setGoToPlacingAnOrder={setGoToPlacingAnOrder}/>,
        [Screens.purchases]: <Purchases/>,
        [Screens.favourites]: <Favourites/>,
        [Screens.myReviews]: <Reviews />,
        [Screens.questionsAndAnswers]: <QuestionsAndAnswers isQuestions={isQuestionsSelected} setQuestionsCount={setQuestionsCount}/>,
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <div className={styles.nav}>
                        <AccountNav navArr={navArr} user={user} activeItemId={activeScreen} setActiveScreen={setActiveScreen} setGoToPlacingAnOrder={setGoToPlacingAnOrder} />
                    </div>
                    <div className={styles.title}>
                        {
                            isGoToPlacingAnOrder &&
                            <p
                                className={styles.returnToCart}
                                onClick={() => setGoToPlacingAnOrder(false)}
                            >Вернуться к магазину</p>
                        }
                        {
                            activeScreen !== Screens.questionsAndAnswers &&
                            <h1>{isGoToPlacingAnOrder ? 'Оформление заказа' : screens.find(item => item.id === activeScreen)?.title}</h1>
                        }
                        {
                            activeScreen === Screens.questionsAndAnswers &&
                            <div className={styles.questionsAndAnswersTitle}>
                                <div
                                    className={cn(styles.questionsAndAnswersTitleBlock, isQuestionsSelected && styles.questionsAndAnswersTitleBlockActive)}
                                    onClick={() => setQuestionsSelected(true)}
                                >
                                    <div className={styles.questionsAndAnswersTitleBlockCount}>{questionsCount[0]}</div>
                                    <div className={cn(styles.questionsAndAnswersTitleBlockText, isQuestionsSelected && styles.questionsAndAnswersTitleBlockTextActive)}>Мои вопросы и ответы</div>
                                </div>
                                <div
                                    className={cn(styles.questionsAndAnswersTitleBlock, !isQuestionsSelected && styles.questionsAndAnswersTitleBlockActive)}
                                    onClick={() => setQuestionsSelected(false)}
                                >
                                    <div className={styles.questionsAndAnswersTitleBlockCount}>{questionsCount[1]}</div>
                                    <div className={cn(styles.questionsAndAnswersTitleBlockText, !isQuestionsSelected && styles.questionsAndAnswersTitleBlockTextActive)}>Вопросы, ожидающие ответа</div>
                                </div>
                            </div>
                        }
                        </div>
                    <div className={styles.screens}>
                        {
                            accountScreens[activeScreen]
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}