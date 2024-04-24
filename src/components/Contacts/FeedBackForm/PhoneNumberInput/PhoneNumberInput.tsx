import React from 'react'
import styles from './PhoneNumberInput.module.scss'

export default function PhoneNumberInput({
    value,
    onChange,
}:{
    value:string,
    onChange:(maskedValue:string) => void,
}){

    const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    }

    return(
        <div className={styles.wrapper}>
            <input
                className={styles.textInput}
                type='text'
                placeholder='Номер телефона'
                onChange={(event) => onInput(event)}
                value={value}
            />
        </div>
    )
}