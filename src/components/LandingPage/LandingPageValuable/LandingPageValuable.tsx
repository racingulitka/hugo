import React, { useState, useEffect } from 'react'
import styles from './LandingPageValuable.module.scss'
import { includesDefault, addingsArr } from './LandingPageValuable.config'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import minusIcon from './assets/minus.svg'
import plusIcon from './assets/plus.svg'
import Image from 'next/image'
import Tooltip from './Tooltip/Tooltip'

interface Addings {
    [key: string]: boolean
}

export default function LandingPageValuable() {

    const [addings, setAddings] = useState<Addings>({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    })

    const defaultCost = 90
    const [total, setTotal] = useState<number>(defaultCost)
    const [hoveredAdding, setHoveredAdding] = useState<number | null>(null)

    const onAddAdding = (id: number, value: boolean) => {
        setAddings({ ...addings, [id]: !value })
    }

    useEffect(() => {
        const totalValue = Object.keys(addings)
            .filter(key => addings[key])
            .map(key => addingsArr.find(value => Number(key) === value.id))
            .reduce((acc, item) => acc + (item ? item.cost : 0), defaultCost)

        setTotal(totalValue)
    }, [addings, addingsArr, defaultCost])

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.titleBlock}>
                    <h3 className={styles.title}>И ДА, ДОРОГО.<br></br>НО ОЧЕНЬ ЭФФЕКТИВНО</h3>
                    <p className={styles.subtitle}>В базовый пакет входит по умолчанию:</p>
                </div>
                <div className={styles.gridContainer}>
                    {
                        includesDefault.map(item => {
                            return (
                                <div className={styles.gridItem} key={item.id}>{item.text}</div>
                            )
                        })
                    }
                </div>
                <div className={styles.bottomBlock}>
                    <div className={styles.addingFunctions}>
                        <p className={styles.blockTitle}>Дополнительные функции по вашему желанию:</p>
                        <div className={styles.bottomFlex}>
                            {
                                addingsArr.map(item => {
                                    return (
                                        <div
                                            className={styles.addingBlock}
                                            key={item.id}
                                            onClick={() => onAddAdding(item.id, addings[item.id])}
                                            >
                                            {
                                                hoveredAdding === item.id &&
                                                <Tooltip
                                                title={item.tooltipTitle}
                                                text={item.tooltipText}
                                                />
                                            }
                                            <Image src={addings[item.id] === true ? plusIcon : minusIcon} alt='plus or minus' width={16} />
                                            <p className={styles.addingText}>{item.text}</p>
                                            <div
                                                className={styles.questionBlock}
                                                onMouseEnter={() => setHoveredAdding(item.id)}
                                                onMouseLeave={() => setHoveredAdding(null)}
                                            >
                                                ?
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.actionBlock}>
                        <p className={styles.totalValue}>Общая стоимость: <span>{total} т.р.</span></p>
                        <RedBorderButton
                            width={435}
                            height={90}
                            fontSize={20}
                        >
                            ЗАКАЗАТЬ ЛЕНДИНГ ПЕЙДЖ
                        </RedBorderButton>
                    </div>
                </div>
            </div>
        </div>
    )
}