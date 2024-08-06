import React, { useState } from 'react'
import styles from './Favourites.module.scss'
import { Card } from '@/components/MainContentShop/MainContentShop'
import defaultGoodsImage from '../../../MainContentShop/assets/defaultGoodsImage.png'
import GoodsBlock from '@/components/GoodsBlock/GoodsBlock'
import GoodsCard from '@/components/GoodsBlock/GoodsCard/GoodsCard'

export default function Favourites() {

    const [favouritesList, setFavouritesList] = useState<Card[]>([
        {
            id: 1,
            image: defaultGoodsImage,
            isFavourite: true,
            price: 44542,
            discount: 50,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            rate: 5,
            reviews: 0,
            slug:'renault1',
        },
        {
            id: 2,
            image: defaultGoodsImage,
            isFavourite: true,
            price: 44542,
            discount: 50,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            rate: 5,
            reviews: 5,
            slug:'renault2',
        },
        {
            id: 3,
            image: defaultGoodsImage,
            isFavourite: true,
            price: 44542,
            discount: 50,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            rate: 5,
            reviews: 1,
            slug:'renault3',
        },
        {
            id: 4,
            image: defaultGoodsImage,
            isFavourite: true,
            price: 44542,
            discount: 50,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            rate: 5,
            reviews: 31,
            slug:'renault4',
        },
        {
            id: 5,
            image: defaultGoodsImage,
            isFavourite: true,
            price: 44542,
            discount: 50,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            rate: 5,
            reviews: 3,
            slug:'renault5',
        },
        {
            id: 6,
            image: defaultGoodsImage,
            isFavourite: true,
            price: 44542,
            discount: 50,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            rate: 5,
            reviews: 31,
            slug:'renault6',
        },
        {
            id: 7,
            image: defaultGoodsImage,
            isFavourite: true,
            price: 44542,
            discount: 50,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            rate: 5,
            reviews: 3,
            slug:'renault7',
        },
    ])

    if (favouritesList.length === 0) {
        return (
            <p className={styles.emptyList}>В избранное пока ничего не добавлено</p>
        )
    }
    return (
        <div className={styles.wrapper}>
            {
                favouritesList.map(item => {
                    return (
                        <GoodsCard
                            key={item.id}
                            setFavourite={() => console.log(item.id, item.id)}
                            categoryId={'1'}
                            {...item}
                        />
                    )
                })
            }
        </div>
    )
}