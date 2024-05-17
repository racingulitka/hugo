import React, { useState, useEffect } from 'react'
import styles from './Cart.module.scss'
import defaultGoodsImage from '../../../../components/MainContentVehicles/assets/defaultGoodsImage.png'
import Image from 'next/image'
import saleIcon from './assets/saleIcon.svg'
import CheckBox from '@/components/CheckBox/CheckBox'
import CartItem from './CartItem/CartItem'
import { CartInfo } from './Cart.typings'
import { priceFormat } from '@/utils/priceFormat'

export default function Cart({
    isGoToPlacingAnOrder,
    setGoToPlacingAnOrder,
}:{
    isGoToPlacingAnOrder:boolean,
    setGoToPlacingAnOrder:React.Dispatch<React.SetStateAction<boolean>>
}) {

    console.log(isGoToPlacingAnOrder)

    const [cartInfo, setCartInfo] = useState<CartInfo[]>([
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

    const onSelectAll = (value: boolean) => {
        setSelectAll(value)
        const newCartInfo = cartInfo.map(cartItem => {
            cartItem.isChecked = value
            return cartItem
        })
        setCartInfo(newCartInfo)
    }

    const onSelect = (id: number, value: boolean, key: keyof CartInfo) => {
        const newCartInfo = cartInfo.map(cartItem => {
            if (cartItem.id === id) {
                return { ...cartItem, [key]: value }
            }
            return cartItem
        })
        setCartInfo(newCartInfo)
    }

    const onDeleteSelected = () =>{
        const newCartInfo = [...cartInfo].filter(item => !item.isChecked)
        setCartInfo(newCartInfo)
    }

    const onDelete = (id: number) => {
        const newCartInfo = [...cartInfo].filter(item => item.id !== id)
        setCartInfo(newCartInfo)
    }

    const [isSelectAll, setSelectAll] = useState<boolean>(false)

    useEffect(() => {
        const isAllSelected = cartInfo.reduce((acc, value) => acc + (value.isChecked ? 1 : 0), 0) === cartInfo.length
        setSelectAll(isAllSelected)
        return () => setGoToPlacingAnOrder(false)
    }, [cartInfo])

    const getGoodsPrice = () => {
        const selectedGoods = [...cartInfo].filter(item => item.isChecked)
        const priceOfSelected = selectedGoods.reduce((acc, price) => acc + price.price, 0)
        return priceOfSelected
    }

    const getDiscountValue = () => {
        const selectedGoods = [...cartInfo].filter(item => item.isChecked)
        const priceOfSelected = selectedGoods.reduce((acc, price) => acc + price.price, 0)
        const actualPriceOfSelected = selectedGoods.reduce((acc, price) => acc + price.actualPrice, 0)
        const discount = priceOfSelected - actualPriceOfSelected
        return discount
    }

    const getFullValue = () => {
        const selectedGoods = [...cartInfo].filter(item => item.isChecked)
        const actualPriceOfSelected = selectedGoods.reduce((acc, price) => acc + price.actualPrice, 0)
        return actualPriceOfSelected
    }

    if(cartInfo.length === 0){
        return(
            <p className={styles.emptyCart}>В корзине пока ничего нет</p>
        )
    }

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
                        onClick={() => onDeleteSelected()}
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
            <div className={styles.goToOrder}>
                <div className={styles.buttonBlock}>
                    <button
                        className={styles.button}
                        onClick={() => setGoToPlacingAnOrder(true)}
                    >
                        ПЕРЕЙТИ К ОФОРМЛЕНИЮ
                    </button>
                    <p className={styles.buttonBlockInfo}>Доступные способы и время доставки можно выбрать при оформлении</p>
                </div>
                <div className={styles.splitter1}></div>
                <div className={styles.details}>
                    <h3>Ваша корзина</h3>
                    <div className={styles.goods}>
                        <p className={styles.goodsNumber}>Товары({cartInfo.length})</p>
                        <p className={styles.goodsPrice}>${priceFormat(getGoodsPrice())}</p>
                    </div>
                    <div className={styles.discount}>
                        <div className={styles.discountText}>
                            <p className={styles.discountTextGrey}>Скидка</p>
                        </div>
                        <div className={styles.discountValue}>{getDiscountValue() ? '-':''}${priceFormat(Math.abs(getDiscountValue()))}</div>
                    </div>
                </div>
                <div className={styles.splitter2}></div>
                <div className={styles.fullValue}>
                    <div className={styles.fullValueText}>Общая стоимость</div>
                    <div className={styles.fullValueText}>${priceFormat(getFullValue())}</div>
                </div>
            </div>
        </div>
    )
}