import React from 'react'
import styles from './Gallery.module.scss'
import {Gallery as GalleryType} from '../../../pages/shop/models/vehicles/product/Product.typings'
import Image from 'next/image'

export default function Gallery({
    galArr,
}:{
    galArr:GalleryType[],
}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h4 className={styles.headerTitle}>Галерея фотографий</h4>
            </div>
            <div className={styles.gallery}>
                {
                    galArr.map(item => {
                        return(
                            <div key={item.id} className={styles.imageContainer}>
                                <Image src={item.image} alt='gallery image' fill style={{objectFit:'cover'}} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}