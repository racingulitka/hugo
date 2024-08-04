import React from 'react'
import styles from './MobileModalHeader.module.scss'

export default function MobileModalHeader({
    backgroundColor,
}:{
    backgroundColor:string,
}){
    return(
        <div className={styles.wrapper} style={{background:backgroundColor}}>
            <div className={styles.item}></div>
        </div>
    )
}