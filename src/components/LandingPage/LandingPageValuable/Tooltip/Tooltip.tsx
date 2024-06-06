import React from 'react'
import styles from './Tooltip.module.scss'

export default function Tooltip({
    title,
    text,
}:{
    title:string,
    text:string,
}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}