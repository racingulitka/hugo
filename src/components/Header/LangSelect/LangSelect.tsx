import React, { useState } from 'react'
import styles from './LangSelect.module.scss'
import { langArr, LangArr } from './LangSelect.config'
import arrow from './assets/arrow.svg'
import Image from 'next/image'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

export default function LangSelect() {

    const [selectedLang, setSelectedLang] = useState<LangArr>(langArr[0])
    const [isListOpened, setListOpened] = useState<boolean>(false)

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.selectedLang}
                onClick={() => setListOpened(prev => !prev)}
            >
                <div>{selectedLang.title}</div>
                <Image
                    src={arrow}
                    alt='arrow'
                    className={cn(styles.arrow, isListOpened && styles.arrowOpened)}
                />
            </div>
            <AnimatePresence>
                {
                    isListOpened &&
                    langArr.map(lang => {
                        const isSelected = selectedLang.id === lang.id
                        return (
                            <motion.div
                                key={lang.id}
                                className={cn(styles.langList, isSelected && styles.langListSelected)}
                                initial={{ opacity: 0, top: 0 }}
                                animate={{ opacity: 1, top: 40 + (lang.id - 1) * 26 }}
                                exit={{ opacity: 0, top: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => {
                                    setSelectedLang(lang)
                                    setListOpened(false)
                                }
                                }
                            >
                                {lang.title}
                            </motion.div>
                        )
                    })
                }
            </AnimatePresence>
        </div>
    )
}