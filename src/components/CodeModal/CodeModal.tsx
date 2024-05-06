import React, { useState, useEffect } from 'react'
import styles from './CodeModal.module.scss'
import logo from './assets/logo.svg'
import Image from 'next/image'
import cn from 'classnames'

interface Code {
    [id: number]: number | null
}

const CodeModal = React.memo(({
    email = 'mex83011@gmail.com',
}: {
    email?: string,
}) => {
    const startIndexCrop = 5
    const endIndexCrop = email.split('').findIndex(item => item === '@')
    const emailMask = email.substring(0, startIndexCrop) + '***' + email.substring(endIndexCrop)

    const [timerValue, setTimerValue] = useState<number>(12)
    const [code, setCode] = useState<Code>({
        1: null,
        2: null,
        3: null,
        4: null,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            timerValue > 0 && setTimerValue(prev => prev - 1)
        }, 1000)
            return () => clearInterval(interval)
    })

    const codeFill = () => {
        const filledArr = Object.keys(code).filter(item => {
            const index = parseInt(item)
            if (code[index]) return item
        })
        return (filledArr.length)
    }

    const onInputCode = (event: KeyboardEvent) => {
        const value = event.key
        const isNumber = !isNaN(Number(value))
        const nextChar = codeFill() + 1
        if (value === 'Backspace' && nextChar - 1 > 0) {
            setCode({ ...code, [nextChar - 1]: null })
        } else if (nextChar < 5 && isNumber) {
            setCode({ ...code, [nextChar]: Number(value) })
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onInputCode)
        return () => window.removeEventListener('keydown', onInputCode)
    }, [code])

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoContainer}>
                <Image src={logo} alt='logo' className={styles.logo} />
                <p>ID</p>
            </div>
            <div className={styles.container}>
                <h2>Введите код</h2>
                <p className={styles.comment}>Мы отправили его на email {emailMask}</p>
                <div className={styles.inputBlock}>
                    {
                        Object.keys(code).map(char => {
                            const index = parseInt(char)
                            return (
                                <div
                                    key={char}
                                    className={cn(styles.char, code[index] !== null && styles.charFilled)}
                                >
                                    {code[index]}
                                </div>
                            )
                        })
                    }
                </div>
                <p className={styles.getNewCode}>Получить новый код можно через 00:{timerValue < 10 ? `0${timerValue}` : timerValue}</p>
                <p className={styles.enterWithAnotherEmail}>Войти под другим email</p>
                <button
                    onClick={() => console.log('button pressed')}
                >
                    ДАЛЕЕ
                </button>
            </div>
        </div>
    )
},
() => true
);

export default CodeModal