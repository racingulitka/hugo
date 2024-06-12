import React, {useState} from 'react'
import styles from './AdvertisementHero.module.scss'
import Link from 'next/link'
import { phoneMask } from '@/utils/phoneMask'

export default function AdvertisementHero() {

    const [name, setName] =  useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const onPhoneInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const inputValue = event.target.value.replace(/[^\d]/g, '').slice(0, 11)
        setPhone(phoneMask(inputValue))
    }

    const onNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const filteredValue = value.replace(/[^a-zA-Zа-яА-Я]/g, '')
        setName(filteredValue)
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.titleBlock}>
                    <h2 className={styles.title}>
                        НАСТРОЙКА
                        <br></br>
                        КОНТЕКСТНОЙ РЕКЛАМЫ
                        <br></br>
                        ОТ СЕРТИФИЦИРОВАННОГО
                        <br></br>
                        АГЕНСТВА
                    </h2>
                    <p className={styles.subtitle}>с детальной проработкой стратегии</p>
                </div>
                <div className={styles.connectionBlock}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder='Ваше имя'
                        onChange={(e) => onNameInput(e)}
                        value={name}
                    />
                    <input
                        type="text"
                        className={styles.input}
                        placeholder='Ваш телефон'
                        onChange={(e)=> onPhoneInput(e)}
                        value={phone}
                    />
                    <Link href='#' className={styles.callMe}>ПОЗВОНИТЕ МНЕ</Link>
                </div>
            </div>
        </div>
    )
}