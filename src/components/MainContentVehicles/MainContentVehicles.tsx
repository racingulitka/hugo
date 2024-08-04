import React, { useState, useEffect, useRef } from 'react'
import styles from './MainContentVehicles.module.scss'
import GoodsBlock from '../GoodsBlock/GoodsBlock'
import defaultGoodsImage from './assets/defaultGoodsImage.png'
import { StaticImageData } from 'next/image'
import defaultAdverticement from './assets/defaultAdverticement.png'
import Image from 'next/image'
import CarBrandSelect from '../CarBrandSelect/CarBrandSelect'
import { CarType } from '../CarTypeSelect/CarTypeSelect.config'
import MobileSelectBlock from './MobileSelectBlock/MobileSelectBlock'
import { Sheet } from 'react-modal-sheet';
import MobileModalHeader from './MobileSelectBlock/MobileModalHeader/MobileModalHeader'

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

export interface GoodsArray {
    [key: string]: CategoryName,
}

export default function MainContentVehicles({
    isMobile,
    activeCategory,
    setActiveCategory,
}: {
    isMobile: boolean,
    activeCategory: CarType | null,
    setActiveCategory: React.Dispatch<React.SetStateAction<CarType | null>>
}) {

    const goodsArrayDefault: GoodsArray = {
        sedan: {
            id: CarType.sedan,
            title: 'Седан',
            cards: [
                {
                    id: 1,
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
        coupe: {
            id: CarType.coupe,
            title: 'Купе',
            cards: [
                {
                    id: 1,
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
        liftback: {
            id: CarType.liftback,
            title: 'Лифтбэк',
            cards: [
                {
                    id: 1,
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
        allroad: {
            id: CarType.allroad,
            title: 'Внедорожник',
            cards: [
                {
                    id: 1,
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
                    slug: 'shop/product/renault-duster',
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
    }

    const [goodsArray, setGoodsArray] = useState<GoodsArray>({ ...goodsArrayDefault })
    const [isCarBrandSelectActive, setCarBrandSelectActive] = useState<boolean>(false)

    const setFavourite = (categoryId: keyof GoodsArray, cardId: number) => {
        const category = goodsArray[categoryId]
        const card = category.cards.findIndex(card => card.id === cardId)
        const array = { ...goodsArray }
        const prevState = array[categoryId].cards[card].isFavourite
        array[categoryId].cards[card].isFavourite = !prevState
        setGoodsArray({ ...array })
    }

    useEffect(() => {
        for (const key in goodsArrayDefault) {
            const currentCategory = goodsArrayDefault[key]
            if (currentCategory.id === activeCategory) {
                setGoodsArray({ [key]: currentCategory })
                return
            }
        }
    }, [activeCategory])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Element;
            if (!target.closest(`.${styles.list}`)) {
                setCarBrandSelectActive(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCarBrandSelectActive]);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.leftColumn}>
                    {
                        isMobile &&
                        <MobileSelectBlock
                            isCarBrandSelectActive={isCarBrandSelectActive}
                            setCarBrandSelectActive={setCarBrandSelectActive}
                        />
                    }
                    {
                        isMobile &&
                        <Sheet
                            isOpen={isCarBrandSelectActive}
                            onClose={() => setCarBrandSelectActive(false)}
                            detent='content-height'
                        >
                            <Sheet.Container>
                                <Sheet.Header>
                                    <MobileModalHeader backgroundColor='#161616' />
                                </Sheet.Header>
                                <Sheet.Content>
                                    {
                                        <CarBrandSelect isActive={isCarBrandSelectActive} onSelect={setCarBrandSelectActive} />
                                    }
                                </Sheet.Content>
                            </Sheet.Container>
                            <Sheet.Backdrop />
                            
                        </Sheet>
                    }
                    <Image src={defaultAdverticement} alt='defaultAdverticement' className={styles.adverticement} />
                </div>
                <div className={styles.rightColumn}>
                    {
                        Object.keys(goodsArray).map(category => {
                            return (
                                <GoodsBlock key={goodsArray[category].id} categoryId={category} goodsArray={goodsArray[category]} setFavourite={setFavourite} /*setSelectedCategory={onSelectCategory}*/ setActiveCategory={setActiveCategory} />
                            )
                        })
                    }

                </div>
            </div>
            {
                isCarBrandSelectActive && <div className={styles.overlay}></div>
            }
        </div>
    )
}