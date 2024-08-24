import React/*, {useState}*/ from 'react'
import styles from './CarTypeSelect.module.scss'
import { carType, CarType } from './CarTypeSelect.config'
import Image from 'next/image'
import cn from 'classnames'

export default function CarTypeSelect({
    activeCategory,
    setActiveCategory
}:{
    activeCategory:CarType | null,
    setActiveCategory:(id: CarType) => void,
}){

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h3>Транспорт</h3>
                <p>5 000 000 товаров</p>
            </div>
            <div className={styles.selectBlock}>
                {
                    carType.map(type => {
                        return(
                            <div
                                key={type.id}
                                className={styles.card}
                                onClick={() => setActiveCategory(type.id)}
                            >
                                <div className={cn(styles.iconContainer, activeCategory === type.id && styles.iconContainerSelected)}>
                                    <Image src={activeCategory === type.id ? type.iconBlack : type.iconWhite} alt='icon' className={styles.icon} />
                                </div>
                                <p className={cn(styles.name, activeCategory === type.id && styles.nameSelected)}>{type.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}