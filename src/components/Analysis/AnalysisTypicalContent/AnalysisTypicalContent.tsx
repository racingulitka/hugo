import React from 'react'
import styles from './AnalysisTypicalContent.module.scss'
import Image from 'next/image'
import mainBook from './assets/mainBook.png'
import book from './assets/book.png'
import { bottomArr } from './AnalysisTypicalContent.config'

export default function AnalysisTypicalContent({
    isMobile,
}:{
    isMobile:boolean,
}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>ТИПОВОЕ СОДЕРЖАНИЕ</h3>
                <p className={styles.subtitle}>С ПРИМЕРАМИ РАЗНЫХ СТРАНИЦ</p>
                <div className={styles.middleBlock}>
                    <Image src={mainBook} alt='main book' style={{ height: '100%', width: 'auto' }} />
                    <div className={styles.middleText}>
                        73
                        <p className={styles.middleTextText}>Средний {isMobile && <br></br>}объём анализа: 73 страницы</p>
                    </div>
                </div>
                <div className={styles.bottomFlex}>
                    {
                        bottomArr.map(item => {
                            return (
                                <div className={styles.card} key={item.id}>
                                    <div className={styles.cardTitle}>
                                        <p className={styles.boldText}>Сфера:</p>
                                        <p className={styles.thinText}>{item.title}</p>
                                    </div>
                                    <Image src={book} alt='book icon' width={isMobile ? 72 : 150} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}