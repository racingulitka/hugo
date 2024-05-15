import React, { useState, useEffect } from 'react'
import styles from './Cart.module.scss'
import defaultGoodsImage from '../../../../components/MainContentVehicles/assets/defaultGoodsImage.png'
import Image from 'next/image'
import saleIcon from './assets/saleIcon.svg'
import CheckBox from '@/components/CheckBox/CheckBox'
import CartItem from './CartItem/CartItem'
import { CartInfo } from './Cart.typings'

export default function Cart() {

    const [cartInfo, setCartInfo] = useState<CartInfo[]>([
        {
            id: 2,
            image: defaultGoodsImage,
            price: 44542,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            color: 'Красный',
            isChecked: false,
            isFavourite:false,
        },
        {
            id: 5,
            image: defaultGoodsImage,
            price: 44542,
            actualPrice: 22271,
            title: '3D моделинг автомобиля Maerati',
            color: 'Красный',
            isChecked: false,
            isFavourite:true,
        },
    ])

    const onSelectAll = (value: boolean) => {
        setSelectAll(value)
        const newCartInfo = cartInfo.map(cartItem => {
            cartItem.isChecked = value
            return cartItem
        })
        setCartInfo(newCartInfo)
    }

    const onSelect = (id:number, value:boolean, key:keyof CartInfo) => {
        const newCartInfo = cartInfo.map(cartItem => {
            if(cartItem.id === id){
                return {...cartItem, [key]: value}
            }
            return cartItem
        })
        setCartInfo(newCartInfo)
    }

    const onDelete = (id:number) => {
        console.log(id)
        const newCartInfo = [...cartInfo].filter(item => item.id !== id)
        setCartInfo(newCartInfo)
    }

    const [isSelectAll, setSelectAll] = useState<boolean>(false)

    useEffect(() => {
        const isAllSelected = cartInfo.reduce((acc, value) => acc + (value.isChecked ? 1 : 0), 0) === cartInfo.length
        setSelectAll(isAllSelected)
    }, [cartInfo])

    return (
        <div className={styles.wrapper}>
            <div className={styles.mainInfo}>
                <div className={styles.sale}>
                    <div className={styles.advertising}>
                        <Image src={saleIcon} alt='sale icon' className={styles.saleIcon} />
                        <div className={styles.saleInfo}>
                            <p className={styles.boldText}>Не упустите распродажу</p>
                            <p className={styles.thinText}>1 товар скоро подоражает</p>
                        </div>
                    </div>
                    <p className={styles.saleCount}>Осталось 10 дней</p>
                </div>
                <div className={styles.selectAll}>
                    <CheckBox
                        isChecked={isSelectAll}
                        setChecked={onSelectAll}
                    />
                    <div className={styles.chooseAll}>Выбрать все</div>
                    <div
                        className={styles.deleteSelected}
                        onClick={() => console.log('deleteSelected')}
                    >
                        Удалить выбранное
                    </div>
                </div>
                <div className={styles.cartItems}>
                    <div className={styles.title}>Доставка партнёров</div>
                    {
                        cartInfo.map(cartItem => {
                            return (
                                <CartItem
                                    key={cartItem.id}
                                    cartInfo={cartItem}
                                    onSelect={onSelect}
                                    onDelete={onDelete}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.goToOrder}></div>
        </div>
    )
}