import React from 'react'
import styles from './Card.module.scss'
import Image, { StaticImageData } from 'next/image'

interface Props{
    image:StaticImageData,
    title:string,
    text:string,
    position:'left' | 'right'
}

export default function Card({
    image,
    title,
    text,
    position
}:Props){
    return(
        <div className={styles.wrapper} style={{flexDirection:position === 'right' ? 'row-reverse':'row'}}>
            <div className={styles.textBlock} style={{alignItems:position === 'right' ? 'flex-start' : 'flex-end'}}>
                <h3 style={{textAlign:position === 'right' ? 'left' : 'right', width:'100%'}}>{title}</h3>
                <p className={styles.text} style={{textAlign:position === 'right' ? 'left' : 'right'}}>{text}</p>
            </div>
            <Image src={image} alt='image' className={styles.image} />
        </div>
    )
}