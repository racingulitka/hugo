import React from 'react'
import styles from './RedButton.module.scss'

interface Props{
    children:string,
    width:number,
    height:number,
    fontSize:number,
}

export default function RedButton(props:Props){
    return(
        <div
            className={styles.wrapper}
            style={{
                width:`${props.width}px`,
                height:`${props.height}px`,
                fontSize:`${props.fontSize}px`,
            }}
        >
            {props.children}
        </div>
    )
}