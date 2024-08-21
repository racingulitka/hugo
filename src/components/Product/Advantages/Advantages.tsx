import React from 'react'
import styles from './Advantages.module.scss'
import { Advantages as AdvantagesType } from '@/components/Product/pagesFiles/Product.typings'
import Image from 'next/image'

export default function Advantages({
    advArr,
}:{
    advArr:AdvantagesType[],
}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h3 className={styles.headerTitle}>Преимущества</h3>
                <p className={styles.headerAdvice}>Листайте ниже чтобы увидеть фото</p>
            </div>
            <div className={styles.advantages}>
                {
                    advArr.map((advantage, index) => {
                        const isOdd = index%2 === 0
                        return(
                            <div
                            key={advantage.id}
                            className={styles.advantagesItem}
                            style={{flexDirection: isOdd ? 'row' : 'row-reverse'}}
                            >
                                <div className={styles.imageContainer}>
                                    <Image src={advantage.image} alt='advantage image' fill style={{objectFit:'cover'}} />
                                </div>
                                <div className={styles.textContainer}>
                                    <div className={styles.text}>{advantage.text}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}