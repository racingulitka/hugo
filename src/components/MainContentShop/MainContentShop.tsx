import React, { useState, useEffect } from 'react'
import styles from './MainContentShop.module.scss'
import GoodsBlock from '../GoodsBlock/GoodsBlock'
import defaultGoodsImage from './assets/defaultGoodsImage.png'
import { StaticImageData } from 'next/image'
import defaultAdverticement from './assets/defaultAdverticement.png'
import Image from 'next/image'

export interface Card {
    id: number,
    slug: string,
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


export default function MainContentShop() {

    const [activeCategory, setActiveCategory] = useState<number | null>(null)

    useEffect(() => {
        const newArr = goodsArray.find(item => item.id === activeCategory)
        if (newArr) setGoodsArray([newArr])
    }, [activeCategory])

    const [goodsArray, setGoodsArray] = useState<CategoryName[]>([
        {
            id: 1,
            title: 'Топ по покупкам',
            cards: [
                {
                    id: 1,
                    slug: 'renault-duster1',
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
                    id: 2,
                    slug: 'renault-duster2',
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
                    id: 3,
                    slug: 'renault-duster3',
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
                    id: 4,
                    slug: 'renault-duster4',
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
                    id: 5,
                    slug: 'renault-duster5',
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
                    id: 6,
                    slug: 'renault-duster6',
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
                    id: 7,
                    slug: 'renault-duster7',
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
        {
            id: 2,
            title: '3D моделлинг',
            cards: [
                {
                    id: 1,
                    slug: 'renault-duster8',
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
                    id: 2,
                    slug: 'renault-duster9',
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
                    id: 3,
                    slug: 'renault-duster10',
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
                    id: 4,
                    slug: 'renault-duster11',
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
                    id: 5,
                    slug: 'renault-duster12',
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
                    id: 6,
                    slug: 'renault-duster13',
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
                    id: 7,
                    slug: 'renault-duster14',
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
        {
            id: 3,
            title: 'Готовые системы',
            cards: [
                {
                    id: 1,
                    slug: 'renault-duster15',
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
                    id: 2,
                    slug: 'renault-duster16',
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
                    id: 3,
                    slug: 'renault-duster17',
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
                    id: 4,
                    slug: 'renault-duster18',
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
                    id: 5,
                    slug: 'renault-duster19',
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
                    id: 6,
                    slug: 'renault-duster20',
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
                    id: 7,
                    slug: 'renault-duster21',
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
        {
            id: 4,
            title: 'Дизайн',
            cards: [
                {
                    id: 1,
                    slug: 'renault-duster22',
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
                    id: 2,
                    slug: 'renault-duster23',
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
                    id: 3,
                    slug: 'renault-duster24',
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
                    id: 4,
                    slug: 'renault-duster25',
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
                    id: 5,
                    slug: 'renault-duster26',
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
                    id: 6,
                    slug: 'renault-duster27',
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
                    id: 7,
                    slug: 'renault-duster28',
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
    ])

    const setFavourite = (categoryId: string, cardId: number) => {
        const category = goodsArray.findIndex(item => item.id === Number(categoryId))
        const card = goodsArray[category].cards.findIndex(item => item.id === cardId)
        const array = [...goodsArray]
        const prevState = array[category].cards[card].isFavourite
        array[category].cards[card].isFavourite = !prevState
        setGoodsArray([...array])
    }

    const [sortStatus, setSortStatus] = useState<number>(1)


    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.leftColumn}>
                    {/* <Image src={defaultAdverticement} alt='defaultAdverticement' className={styles.adverticement} />
                    <Image src={defaultAdverticement} alt='defaultAdverticement' className={styles.adverticement} /> */}
                </div>
                <div className={styles.rightColumn}>
                    {
                        goodsArray.map(category => {
                            return (
                                <GoodsBlock
                                    key={category.id}
                                    categoryId={String(category.id)}
                                    goodsArray={category}
                                    setFavourite={setFavourite}
                                    setActiveCategory={setActiveCategory}
                                    sortStatus={sortStatus}
                                    setSortStatus={setSortStatus}
                                    activeCategory={null}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}