import React from 'react'
import styles from './CheckBox.module.scss'
import Image from 'next/image'
import checkIcon from './assets/checkIcon.svg'

export default function CheckBox({
    width = 20,
    isChecked,
    setChecked,
}: {
    width?: number,
    color?: string,
    isChecked: boolean,
    setChecked: (value: boolean) => void,
}) {

    return (
        <div
            className={styles.wrapper}
            style={{ width: `${width}px`, border: `${isChecked ? 'none' : '1px solid #4E4E4E'}` }}
            onClick={() => setChecked(!isChecked)}
        >
            {
                isChecked &&
                <Image
                    src={checkIcon}
                    alt='check icon'
                    className={styles.checkIcon}
                    fill
                />
            }
        </div>
    )
}