import React from 'react'
import styles from './MenuSelector.module.scss'
import { langArr, LangArr } from '@/components/Header/LangSelect/LangSelect.config'
import { currencyArr, CurrencyArr } from '@/components/Header/CurrencySelect/CurrencySelect.config'

export default function MenuSelector({
    selector,
    setSelectorOpen,
    setLanguage,
    setCurrency,
}: {
    selector: string,
    setSelectorOpen: React.Dispatch<React.SetStateAction<string | null>>,
    setLanguage: React.Dispatch<React.SetStateAction<string>>,
    setCurrency: React.Dispatch<React.SetStateAction<string>>,
}) {

    const setSelectedArr = () => {
        if (selector === 'language') return langArr
        else if (selector === 'currency') return currencyArr
    }

    const onSelect = (id: number) => {
        if (selector === 'language') {
            setLanguage(langArr.find(item => id === item.id)?.title ?? 'Русский')
            setSelectorOpen(null)
        }
        else if(selector === 'currency'){
            setCurrency(currencyArr.find(item => item.id === id)?.title ?? 'RUB')
            setSelectorOpen(null)
        }
    }

    return (
        <div className={styles.wrapper}>
            {
                setSelectedArr()?.map(item => {
                    return (
                        <div
                            className={styles.title}
                            key={item.id}
                            onClick={() => onSelect(item.id)}
                        >
                            {item.title}
                        </div>
                    )
                })
            }
        </div>
    )
}