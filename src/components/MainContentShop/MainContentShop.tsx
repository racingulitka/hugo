import React, { useState } from 'react'
import styles from './MainContentShop.module.scss'
import GoodsBlock from '../GoodsBlock/GoodsBlock'
import defaultGoodsImage from './assets/defaultGoodsImage.png'
import { StaticImageData } from 'next/image'

export interface Reviews {
    [key: number]: string,
}

export interface Card {
    image: StaticImageData,
    isFavourite: boolean,
    price: number,
    discount: number,
    actualPrice: number,
    title: string,
    rate: number,
    reviews: Reviews,
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

    const [goodsArray] = useState<GoodsArray>({
        top: {
            id: 1,
            title: 'Топ по покупкам',
            cards: [
                {
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: {
                        1: 'ldsgwleg',
                        2: 'dlgklshg',
                        3: 'dgfsahgoh',
                    }
                },
                {
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: {
                        1: 'ldsgwleg',
                        2: 'dlgklshg',
                        3: 'dgfsahgoh',
                    }
                },
                {
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: {
                        1: 'ldsgwleg',
                        2: 'dlgklshg',
                        3: 'dgfsahgoh',
                    }
                },
                {
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: {
                        1: 'ldsgwleg',
                        2: 'dlgklshg',
                        3: 'dgfsahgoh',
                    }
                },
                {
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: {
                        1: 'ldsgwleg',
                        2: 'dlgklshg',
                        3: 'dgfsahgoh',
                    }
                },
            ]
        },
        d3: {
            id: 1,
            title: '3D моделлинг',
            cards: [
                {
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: {
                        1: 'ldsgwleg',
                        2: 'dlgklshg',
                        3: 'dgfsahgoh',
                    }
                },
                {
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: {
                        1: 'ldsgwleg',
                        2: 'dlgklshg',
                        3: 'dgfsahgoh',
                    }
                },
                {
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: {
                        1: 'ldsgwleg',
                        2: 'dlgklshg',
                        3: 'dgfsahgoh',
                    }
                },
                {
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: {
                        1: 'ldsgwleg',
                        2: 'dlgklshg',
                        3: 'dgfsahgoh',
                    }
                },
                {
                    image: defaultGoodsImage,
                    isFavourite: false,
                    price: 44542,
                    discount: 50,
                    actualPrice: 22271,
                    title: '3D моделинг автомобиля Maerati',
                    rate: 5,
                    reviews: {
                        1: 'ldsgwleg',
                        2: 'dlgklshg',
                        3: 'dgfsahgoh',
                    }
                },
            ]
        }
    })

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.leftColumn}></div>
                <div className={styles.rightColumn}>
                    {
                        Object.keys(goodsArray).map(category => {
                            return (
                                <GoodsBlock key={goodsArray[category].id} goodsArray={goodsArray[category]} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}