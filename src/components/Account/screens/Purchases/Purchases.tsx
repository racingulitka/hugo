import React, {useState} from 'react'
import styles from './Purchases.module.scss'
import defaultGoodsImage from '../../../../components/MainContentVehicles/assets/defaultGoodsImage.png'
import { CartInfo } from '../Cart/Cart.typings'
import PurchaseCard from './PurchaseCard/PurchaseCard'
import GoodsBlock from '@/components/GoodsBlock/GoodsBlock'
import { CategoryName } from '@/components/MainContentShop/MainContentShop'

export default function Purchases(){

    const [purchasesList] = useState<CartInfo[] | null>([
        {
            id: 2,
            image: defaultGoodsImage,
            price: 44542,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            color: 'Красный',
            isChecked: false,
            isFavourite: false,
        },
        {
            id: 5,
            image: defaultGoodsImage,
            price: 44542,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            color: 'Красный',
            isChecked: false,
            isFavourite: true,
        },
    ])

    const [top, setTop] = useState<CategoryName>(
        {
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
    )

    if(!purchasesList) {
        return(
        <p className={styles.emptyList}>Ваш список покупок пока пуст</p>
    )}

    return(
        <div className={styles.wrapper}>
            <div className={styles.purchasesList}>
                {
                    purchasesList.map(purchase => {
                        return(
                            <PurchaseCard
                                key={purchase.id}
                            />
                        )
                    })
                }
            </div>
            {/* <GoodsBlock
                goodsArray={top}
                setFavourite={()=> console.log('hi')}
                categoryId={'top'}
            /> */}
        </div>
    )
}