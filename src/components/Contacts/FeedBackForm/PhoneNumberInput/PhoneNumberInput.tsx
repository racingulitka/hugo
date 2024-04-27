import React, { useState } from 'react'
import styles from './PhoneNumberInput.module.scss'
import { selectors, Selectors } from './PhoneNumberInput.config'
import Image from 'next/image'
import arrow from './assets/arrow.svg'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

export default function PhoneNumberInput({
    value,
    onChange,
}: {
    value: string,
    onChange: (maskedValue: string) => void,
}) {

    const [selectedSelector, setSelectedSelector] = useState<Selectors>(selectors[0])
    const [isListOpened, setListOpened] = useState<boolean>(false)

    const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (selectedSelector.id === 1) {
            const inputValue = event.target.value.replace(/[^\d]/g, '').slice(0, 11)
            let maskedValue = ''
            if (inputValue.length <= 1) {
                maskedValue = `+${inputValue}`;
            } else if (inputValue.length <= 4) {
                maskedValue = `+${inputValue.slice(0, 1)}(${inputValue.slice(1, 4)}`;
            } else if (inputValue.length <= 7) {
                maskedValue = `+${inputValue.slice(0, 1)}(${inputValue.slice(1, 4)}) ${inputValue.slice(4, 7)}`;
            } else if (inputValue.length <= 9) {
                maskedValue = `+${inputValue.slice(0, 1)}(${inputValue.slice(1, 4)}) ${inputValue.slice(4, 7)}-${inputValue.slice(7, 9)}`;
            } else if (inputValue.length <= 11) {
                maskedValue = `+${inputValue.slice(0, 1)}(${inputValue.slice(1, 4)}) ${inputValue.slice(4, 7)}-${inputValue.slice(7, 9)}-${inputValue.slice(9, 11)}`;
            } else if (inputValue.length <= 12) {
                maskedValue = `+${inputValue.slice(0, 1)}(${inputValue.slice(1, 4)}) ${inputValue.slice(4, 7)}-${inputValue.slice(7, 9)}-${inputValue.slice(9, 11)}-${inputValue.slice(11)}`;
            }

            onChange(maskedValue);
        } else {
            const maskedValue = event.target.value
            onChange(maskedValue)
        }
    }

    const onListClick = () => {
        setListOpened(prev => !prev)
    }

    const onSelectorSelect = (id: number) => {
        const selectedSelector = selectors.find(selector => selector.id === id)
        setSelectedSelector(selectedSelector ?? selectors[0])
        setListOpened(false)

    }

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.textInput}
                type='text'
                placeholder={selectedSelector.placeholder}
                onChange={(event) => onInput(event)}
                value={value}
            />
            <div className={styles.selectorWrapper}>
                <div
                    className={styles.selectedSelectorBlock}
                    onClick={() => onListClick()}
                >
                    <Image className={styles.selectedSelector} src={selectedSelector.icon} alt='selectedSelector' />
                    <Image src={arrow} alt='arrow' className={cn(styles.arrow, isListOpened && styles.arrowOpened)} />
                </div>
                <AnimatePresence>
                    {
                        isListOpened &&
                        selectors.map(selector => {
                            return (
                                <motion.div
                                    initial={{ left: -300, opacity: 0 }}
                                    animate={{ left: 0, opacity: 1 }}
                                    exit={{ left: 300, opacity: 0 }}
                                    transition={{ duration: 0.3, delay: selector.id * 0.1 }}
                                    key={selector.id}
                                    className={styles.selector}
                                    onClick={() => onSelectorSelect(selector.id)}
                                >
                                    <Image src={selector.icon} alt='selectorIcon' className={styles.icon} />
                                </motion.div>
                            )
                        })
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}