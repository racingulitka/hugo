import React from 'react'
import styles from './RedButtonMobile.module.scss'

interface Props{
    children:string,
    height:number,
    fontSize:number,
}

export default function RedButtonMobile(props:Props){
    return(
        <div
            className={styles.wrapper}
            style={{
                height:`${props.height}px`,
                fontSize:`${props.fontSize}px`,
            }}
        >
            {props.children}
        </div>
    )
}