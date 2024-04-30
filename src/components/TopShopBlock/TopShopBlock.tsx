import React from 'react'
import styles from './TopShopBlock.module.scss'
import banner from './assets/banner.png'
import Image from 'next/image'

export default function TopShopBlock(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <Image src={banner} alt='banner' className={styles.banner} />
            </div>
        </div>
    )
}