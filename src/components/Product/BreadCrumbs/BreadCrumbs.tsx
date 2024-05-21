import React from 'react'
import styles from './BreadCrumbs.module.scss'
import Image from 'next/image'
import arrowRightIcon from './assets/arrowRightIcon.svg'
import Link from 'next/link'

export default function BreadCrumbs({
    categoryTitle,
    categoryLink,
    subcategoryTitle,
    subcategoryLink,
    productName,
}:{
    categoryTitle:string,
    categoryLink:string,
    subcategoryTitle:string,
    subcategoryLink:string,
    productName:string,
}){
    return(
        <div className={styles.wrapper}>
            <Link href={'/shop'} className={styles.link}>Магазин</Link>
            <Image
                src={arrowRightIcon}
                alt='arrow right'
                width={6}
                className={styles.arrow}
            />
            <Link href={categoryLink} className={styles.link}>{categoryTitle}</Link>
            <Image
                src={arrowRightIcon}
                alt='arrow right'
                width={6}
                className={styles.arrow}
            />
            <Link href={subcategoryLink} className={styles.link}>{subcategoryTitle}</Link>
            <Image
                src={arrowRightIcon}
                alt='arrow right'
                width={6}
                className={styles.arrow}
            />
            <span className={styles.slug}>{productName}</span>
        </div>
    )
}