import React from 'react'
import styles from './RedBorderButtonMobile.module.scss'

interface Props{
    children:string,
    height:number,
    fontSize:number,
}

export const RedBorderButtonMobile = (props:Props) => {
    return(
        <button
            className={styles.button}
            style={{height:props.height, fontSize:`${props.fontSize}px`}}
        >{props.children}</button>
    )
}

export default RedBorderButtonMobile