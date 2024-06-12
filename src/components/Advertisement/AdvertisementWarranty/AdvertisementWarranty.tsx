import React from 'react'
import styles from './AdvertisementWarranty.module.scss'
import { warrantyArr } from './AdvertisementWarranty.config';

export default function AdvertisementWarranty() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>НУЖНА ГАРАНТИЯ ПРОДАЖ?</h3>
                <p className={styles.subtitle}>БУДЕМ ЧЕСТНЫ С ВАМИ</p>
                <div className={styles.middleBlock}>
                    <div className={styles.leftBlock}>
                        <p className={styles.leftBlockText}>
                            Мы бы с удовольствием прописали гарантию результата в договоре. Но далеко не всё зависит от качества трафика. На конечный результат также влияет множество других факторов не зависящих от нас:
                        </p>
                        <div className={styles.leftBlockUnderline}></div>
                    </div>
                    <ul className={styles.rightBlock}>
                        {
                            warrantyArr.map(item => {
                                return (
                                    <li className={styles.rightBlockItem} key={item.id}>{item.text}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <p className={styles.bottomText}>
                    Помимо всего мы ценим Ваше желание быть уверенными в результате. Поэтому перед стартом проекта Вы обязательно получите прогноз, который с большой долей вероятности будет фактом. Таким образом, никаких ложных обещаний, атолько честное и прозрачное общение.
                </p>
            </div>
        </div>
    )
}