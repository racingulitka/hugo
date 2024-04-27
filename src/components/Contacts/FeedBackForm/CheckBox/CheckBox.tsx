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
}:{
    children:string,
    id:number,
    isChecked:boolean,
    setChecked:(id:number) => void,
}){
    return(
        <div className={styles.wrapper}>
            <div
                className={cn(styles.checkBox, isChecked && styles.checkBoxChecked)}
                onClick={() => setChecked(id)}
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