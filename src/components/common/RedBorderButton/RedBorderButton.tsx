import React from 'react'
import styles from './RedBorderButton.module.scss'

interface Props{
    children:string,
    width:number,
    height:number,
    fontSize:number,
}

export const RedBorderButton = (props:Props) => {
    return(
        <button
            className={styles.button}
            style={{width:props.width, height:props.height, fontSize:`${props.fontSize}px`}}
        >{props.children}</button>
    )
}

export default RedBorderButton