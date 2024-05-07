import React, { useState } from 'react'
import styles from './MainContentShop.module.scss'
import GoodsBlock from '../GoodsBlock/GoodsBlock'
import defaultGoodsImage from './assets/defaultGoodsImage.png'
import { StaticImageData } from 'next/image'
import defaultAdverticement from './assets/defaultAdverticement.png'
import Image from 'next/image'

export interface Card {
    id:number,
    image: StaticImageData,
    isFavourite: boolean,
    price: number,
    discount: number,
    actualPrice: number,
    title: string,
    rate: number,
    reviews: number,
}
export interface CategoryName {
    id: number,
    title: string,
    cards: Card[],
}

export interface GoodsArray {
    [key: string]: CategoryName,
}

export default function MainContentShop() {

    const [goodsArray, setGoodsArray] = useState<GoodsArray>({
        top: {
            id: 1,
            title: 'Топ по покупкам',
            cards: [
                {
                    id:1,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 0,
                },
                {
                    id:2,
                    image: defaultGoodsImage,
                    isFavourite: true,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 5,
                },
                {
                    id:3,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 1,
                },
                {
                    id:4,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 31,
                },
                {
                    id:5,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:6,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 31,
                },
                {
                    id:7,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
            ]
        },
        d3: {
            id: 2,
            title: '3D моделлинг',
            cards: [
                {
                    id:1,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 2,
                },
                {
                    id:2,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 32,
                },
                {
                    id:3,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:4,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:5,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:6,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:7,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
            ]
        },
        completeSystems: {
            id: 3,
            title: 'Готовые системы',
            cards: [
                {
                    id:1,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 2,
                },
                {
                    id:2,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 32,
                },
                {
                    id:3,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:4,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:5,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:6,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:7,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
            ]
        },
        design: {
            id: 4,
            title: 'Дизайн',
            cards: [
                {
                    id:1,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 2,
                },
                {
                    id:2,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 32,
                },
                {
                    id:3,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:4,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:5,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:6,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
                {
                    id:7,
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: 3,
                },
            ]
        },
    })

    const setFavourite = (categoryId:keyof GoodsArray, cardId:number) => {
        const category = goodsArray[categoryId]
        const card = category.cards.findIndex(card => card.id === cardId)
        const array = {...goodsArray}
        const prevState = array[categoryId].cards[card].isFavourite
        array[categoryId].cards[card].isFavourite = !prevState
        setGoodsArray({...array})
        console.log(array)
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.leftColumn}>
                    <Image src={defaultAdverticement} alt='defaultAdverticement' className={styles.adverticement} />
                    <Image src={defaultAdverticement} alt='defaultAdverticement' className={styles.adverticement} />
                </div>
                <div className={styles.rightColumn}>
                    {
                        Object.keys(goodsArray).map(category => {
                            return (
                                <GoodsBlock key={goodsArray[category].id} categoryId={category} goodsArray={goodsArray[category]} setFavourite={setFavourite}/>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}