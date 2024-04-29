import React, { useState } from 'react'
import styles from './CurrencySelect.module.scss'
import { CurrencyArr, currencyArr } from './CurrencySelect.config'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

export default function CurrencySelect() {

    const [selectedLang, setSelectedLang] = useState<CurrencyArr>(currencyArr[0])
    const [isListOpened, setListOpened] = useState<boolean>(false)

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.selectedLang}
                onClick={() => setListOpened(prev => !prev)}
            >
                <div>{selectedLang.title}</div>
            </div>
            <AnimatePresence>
                {
                    isListOpened &&
                    currencyArr.map(currency => {
                        const isSelected = selectedLang.id === currency.id
                        return (
                            <motion.div
                                key={currency.id}
                                className={cn(styles.langList, isSelected && styles.langListSelected)}
                                initial={{ opacity: 0, top: 0 }}
                                animate={{ opacity: 1, top: 40 + (currency.id - 1) * 26 }}
                                exit={{ opacity: 0, top: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => {
                                    setSelectedLang(currency)
                                    setListOpened(false)
                                }
                                }
                            >
                                {currency.title}
                            </motion.div>
                        )
                    })
                }
            </AnimatePresence>
        </div>
    )
}