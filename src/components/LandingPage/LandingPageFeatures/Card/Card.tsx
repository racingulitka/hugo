import React from 'react'
import styles from './Card.module.scss'
import Image, { StaticImageData } from 'next/image'
import cn from 'classnames'


interface Props{
    image:StaticImageData,
    title:string,
    text:string,
    position:'left' | 'right',
    classname?:string,
}

export default function Card({
    image,
    title,
    text,
    position,
    classname
}:Props){
    return(
        <div className={cn(styles.wrapper, classname)} style={{flexDirection:position === 'right' ? 'row-reverse':'row'}}>
            <div className={styles.textBlock} style={{alignItems:position === 'right' ? 'flex-start' : 'flex-end'}}>
                <h3 style={{textAlign:position === 'right' ? 'left' : 'right', width:'100%'}}>{title}</h3>
                <p className={styles.text} style={{textAlign:position === 'right' ? 'left' : 'right'}}>{text}</p>
            </div>
            <Image src={image} alt='image' className={styles.image} />
        </div>
    )
}