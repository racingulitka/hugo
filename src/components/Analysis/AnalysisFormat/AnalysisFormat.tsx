import React, { useState, useEffect } from 'react'
import styles from './AnalysisFormat.module.scss'
import { includesArr, addingsArr } from './AnalysisFormat.config'
import checkIcon from './assets/check.svg'
import plusIcon from './assets/plus.svg'
import minusIcon from './assets/minus.svg'
import Image from 'next/image'
import Tooltip from '@/components/LandingPage/LandingPageValuable/Tooltip/Tooltip'
import RedButton from '@/components/common/RedButton/RedButton'
import RedButtonMobile from '@/components/common/RedButtonMobile/RedButtonMobile'

interface Addings {
    [key: string]: boolean
}

export default function AnalysisFormat({
    isMobile,
}: {
    isMobile: boolean,
}) {

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

    const defaultCost = 69000
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
                <div className={styles.topContainer}>
                    <div className={styles.topContainerBlock}>
                        <div className={styles.topContainerRightBlock}>Когда Вы заказываете маркетинговое исследование, Вы получаете не просто факты, а итог с маркетинговыми рекомендациями. У Вас в руках будет план действий для самостоятельного внедрения и получения заветного результата.</div>
                        <div className={styles.topContainerLeftBlock}>РЕКОМЕНДАЦИИ НА КАЖДЫЙ ШАГ</div>
                    </div>
                </div>
                <div className={styles.titleBlock}>
                    <h3 className={styles.titleBlockTitle}>ВЫБЕРИ СВОЙ ФОРМАТ АНАЛИЗА</h3>
                    <p className={styles.baseValue}>Базовая Стоимость:<span>69 000 руб.</span></p>
                </div>
                <div className={styles.firstFlex}>
                    <div className={styles.firstFlexTitle}>В НЕЁ ВХОДИТ</div>
                    <div className={styles.subflex}>
                        {
                            includesArr.map(item => {
                                return (
                                    <div className={styles.include} key={item.id}>
                                        <Image src={checkIcon} alt='check icon' width={18} />
                                        <p className={styles.includeText}>
                                            {item.text.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    {index !== item.text.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <h3 className={styles.addingsTitle}>{isMobile ? (<>Дополнительные функции<br></br>по вашему желанию:</>) : 'Дополнительные опции:'}</h3>
                <div className={styles.addingsFlex}>
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
                                    <Image src={addings[item.id] === true ? plusIcon : minusIcon} alt='plus or minus' width={isMobile ? 7 : 16} />
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
                <div className={styles.bottomContainer}>
                    <div className={styles.bottomContainerLeft}>
                        <p className={styles.bottomContainerLeftText}>Итоговая стоимость (базовая + функции):</p>
                        <p className={styles.bottomContainerLeftValue}>{total} руб.</p>
                    </div>
                    {
                        isMobile ?
                            <RedButtonMobile
                                height={35}
                                fontSize={10}
                            >
                                ЗАКАЗАТЬ АНАЛИЗ
                            </RedButtonMobile>
                            :
                            <RedButton
                                width={193}
                                height={50}
                                fontSize={16}
                            >
                                ЗАКАЗАТЬ АНАЛИЗ
                            </RedButton>
                    }
                </div>
            </div>
        </div>
    )
}