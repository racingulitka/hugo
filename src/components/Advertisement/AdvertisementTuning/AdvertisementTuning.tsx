import React, { useState, useEffect } from 'react'
import styles from './AdvertisementTuning.module.scss'
import { defaultOptionsArr, buttonArr, contextTypesArr } from './AdvertisementTuning.config'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import CheckBox from '@/components/CheckBox/CheckBox'
import { SelectedParams } from './AdvertisementTuning.typings'
import { ChangeEvent } from 'react'
import cn from 'classnames'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function AdvertisementTuning({
    advType,
    isMobile,
}: {
    advType: string,
    isMobile: boolean,
}) {

    const [selectedParams, setSelectedParams] = useState<SelectedParams>({
        isYandex: false,
        isGoogle: false,
        yandexKeys: '',
        googleKeys: '',
        set: 0,
        yandexDays: '',
        googleDays: '',
        totalValue: 100,
    })

    const onYandexSelect = (value: boolean) => {
        setSelectedParams({ ...selectedParams, isYandex: value })
        if (!value) setSelectedParams(prev => ({ ...prev, yandexKeys: '' }))
    }
    const onGoogleSelect = (value: boolean) => {
        setSelectedParams({ ...selectedParams, isGoogle: value })
        if (!value) setSelectedParams(prev => ({ ...prev, googleKeys: '' }))
    }

    const onKeysEdit = (id: number, e: ChangeEvent<HTMLInputElement>) => {
        const match = e.target.value.match(/^\d+$/)
        const value = match ? match[0] : null
        if (id === 1 && value) {
            setSelectedParams(prev => ({ ...prev, yandexKeys: value }))
        } else if (value) {
            setSelectedParams(prev => ({ ...prev, googleKeys: value }))
        }
    }

    const onSetSelect = (id: number) => {
        setSelectedParams(prev => ({ ...prev, set: id }))
        switch (id) {
            case 1: {
                setSelectedParams(prev => ({ ...prev, yandexKeys: '50', googleKeys: '50', isYandex: true, isGoogle: true }))
                break
            }
            case 2: {
                setSelectedParams(prev => ({ ...prev, yandexKeys: '500', googleKeys: '500', isYandex: true, isGoogle: true }))
                break
            }
            case 3: {
                setSelectedParams(prev => ({ ...prev, yandexKeys: '1000', googleKeys: '1000', isYandex: true, isGoogle: true }))
                break
            }
            default: break
        }
    }

    useEffect(() => {
        const sumOfKeys = Number(selectedParams.yandexKeys) + Number(selectedParams.googleKeys)
        const prevValue = selectedParams.totalValue
        if (sumOfKeys === 0) setSelectedParams(prev => ({ ...prev, totalValue: 100 }))
        else if (sumOfKeys <= 100) setSelectedParams(prev => ({ ...prev, totalValue: 110, yandexDays: '3', googleDays: '3' }))
        else if (sumOfKeys <= 1000) setSelectedParams(prev => ({ ...prev, totalValue: 150 }))
        else setSelectedParams(prev => ({ ...prev, totalValue: 250 }))

        if (+selectedParams.yandexKeys === 0) setSelectedParams(prev => ({ ...prev, yandexDays: '0' }))
        else if (+selectedParams.yandexKeys <= 50) setSelectedParams(prev => ({ ...prev, yandexDays: '3' }))
        else if (+selectedParams.yandexKeys <= 500) setSelectedParams(prev => ({ ...prev, yandexDays: '5' }))
        else if (+selectedParams.yandexKeys > 500) setSelectedParams(prev => ({ ...prev, yandexDays: '10' }))

        if (+selectedParams.googleKeys === 0) setSelectedParams(prev => ({ ...prev, googleDays: '0' }))
        else if (+selectedParams.googleKeys <= 50) setSelectedParams(prev => ({ ...prev, googleDays: '3' }))
        else if (+selectedParams.googleKeys <= 500) setSelectedParams(prev => ({ ...prev, googleDays: '5' }))
        else if (+selectedParams.googleKeys > 500) setSelectedParams(prev => ({ ...prev, googleDays: '10' }))
    }, [selectedParams.yandexKeys, selectedParams.googleKeys])

    useEffect(() => {
        if (selectedParams.yandexKeys === '0') setSelectedParams(prev => ({ ...prev, yandexKeys: '' }))
        if (selectedParams.googleKeys === '0') setSelectedParams(prev => ({ ...prev, googleKeys: '' }))
        if (Number(selectedParams.yandexKeys) > 0) setSelectedParams(prev => ({ ...prev, isYandex: true }))
        if (Number(selectedParams.googleKeys) > 0) setSelectedParams(prev => ({ ...prev, isGoogle: true }))
    }, [selectedParams.yandexKeys, selectedParams.googleKeys])

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>НАСТРОЙКА {advType} РЕКЛАМЫ</h3>
                <p className={styles.subtitle}>ВЫБЕРИТЕ ТРЕБУЕМЫЕ ОПЦИИ</p>
                <div className={styles.splitter}></div>
                <p className={styles.optionsTitle}>Опции по умолчанию</p>
                <ul className={styles.optionsFlex}>
                    {
                        defaultOptionsArr.map(item => {
                            return (
                                <li className={styles.card} key={item.id}>
                                    {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
                <p className={styles.bottomBlockTitle}>Выберите формат или определите самостоятельно</p>
                <div className={styles.bottomFlex}>
                    <div className={styles.buttonBlock}>
                        {
                            buttonArr.map(button => {
                                return (
                                    <div
                                        className={cn(styles.button, selectedParams.set === button.id && styles.buttonSelected)}
                                        key={button.id}
                                        onClick={() => onSetSelect(button.id)}
                                    >
                                        {button.title}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.bottomSplitter}></div>
                    <div className={styles.bottomRightBlock}>
                        <div className={styles.bottomRightTopBlock}>
                            {
                                contextTypesArr.map(item => {
                                    return (
                                        <div className={styles.contextType} key={item.id}>
                                            <div className={styles.contextTitle}>
                                                <CheckBox
                                                    width={isMobile ? 31 : 35}
                                                    isChecked={item.id === 1 ? selectedParams.isYandex : selectedParams.isGoogle}
                                                    setChecked={item.id === 1 ? onYandexSelect : onGoogleSelect}
                                                />
                                                {item.title}
                                            </div>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                placeholder='Кол-во ключей'
                                                value={item.id === 1 ? selectedParams.yandexKeys : selectedParams.googleKeys}
                                                onChange={(e) => onKeysEdit(item.id, e)}
                                            />
                                            <p className={styles.timeOfRealization}>Время реализации</p>
                                            <p className={styles.timeOfRealizationValue}>до <span>{item.id === 1 ? selectedParams.yandexDays : selectedParams.googleDays}</span> дней</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.bottomRightBottomBlock}>
                            <p className={styles.totalValue}>Стоимость - <span>{selectedParams.totalValue} р.</span></p>
                            {
                                isMobile ?
                                    <RedBorderButtonMobile
                                        height={48}
                                        fontSize={12}
                                    >
                                        ЗАКАЗАТЬ НАСТРОЙКУ КОНТЕКСТНОЙ РЕКЛАМЫ
                                    </RedBorderButtonMobile>
                                    :
                                    <RedBorderButton
                                        width={498}
                                        height={65}
                                        fontSize={18}
                                    >
                                        ЗАКАЗАТЬ НАСТРОЙКУ КОНТЕКСТНОЙ РЕКЛАМЫ
                                    </RedBorderButton>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}