import React, {useState} from 'react'
import styles from './CarTypeSelect.module.scss'
import { carType, CarType } from './CarTypeSelect.config'
import Image from 'next/image'
import cn from 'classnames'

export default function CarTypeSelect(){

    const [selected, setSelected] = useState<CarType | null>(null)

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
                                onClick={() => setSelected(type.id)}
                            >
                                <div className={cn(styles.iconContainer, selected === type.id && styles.iconContainerSelected)}>
                                    <Image src={selected === type.id ? type.iconBlack : type.iconWhite} alt='icon' className={styles.icon} />
                                </div>
                                <p className={styles.name}>{type.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}