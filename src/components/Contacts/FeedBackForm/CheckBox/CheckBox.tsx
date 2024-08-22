import React from 'react'
import styles from './CheckBox.module.scss'
import check from './assets/check.svg'
import Image from 'next/image'
import cn from 'classnames'

export default function CheckBox({
    children,
    id,
    isChecked,
    setChecked,
}: {
    children: string,
    id: number,
    isChecked: boolean,
    setChecked: (id: number) => void,
}) {
    return (
        <div className={styles.wrapper}
            onClick={() => setChecked(id)}
        >
            <div
                className={cn(styles.checkBox, isChecked && styles.checkBoxChecked)}
            >
                {
                    isChecked &&
                    <Image src={check} alt='check' className={styles.check} />
                }
            </div>
            {children}
        </div>
    )
}