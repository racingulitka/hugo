import React, { useState } from 'react'
import styles from './ProductHero.module.scss'
import Slider from './Slider/Slider'
import { ProductPage } from '@/pages/shop/models/vehicles/Product.typings'
import QuestionsIcon from './assets/QuestionsIcon'
import ShareIcon from './assets/ShareIcon'
import PlatformSelect from './PlatformSelect/PlatformSelect'
import HeartIcon from './assets/HeartIcon'
import cartIcon from './assets/cartIcon.svg'
import Image from 'next/image'
import Link from 'next/link'
import EngineSound from './EngineSound/EngineSound'

export default function ProductHero({
    productInfo,
    isMobile,
}: {
    productInfo: ProductPage,
    isMobile:boolean,
}) {

    const [isQuestionsIconActive, setQuestionsIconActive] = useState<boolean>(false)
    const [isShareIconActive, setShareIconActive] = useState<boolean>(false)
    const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null)

    const gradientArr = [1, 2, 3, 4, 5]
    const gradientArrValue = gradientArr.map(item => {
        return (
            productInfo.rate - item > 1 ? 100 : (productInfo.rate - item + 1) * 100
        )
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftColumn}>
                <Slider
                    images={productInfo.images}
                    videoCover={productInfo.videoCover}
                    video={productInfo.video}
                    isMobile={isMobile}
                />
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.mainCharacteristics}>
                    <div className={styles.main}>
                        <div className={styles.titleAndRate}>
                            <h1 className={styles.title}>{productInfo.productName}</h1>
                            <div className={styles.infoBar}>
                                <div className={styles.rateBlock}>
                                    <div className={styles.stars}>
                                        {
                                            [1, 2, 3, 4, 5].map(star => {
                                                return (
                                                    <div key={star} className={styles.starWrapper}>
                                                        <svg key={star} className={styles.star} width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <defs>
                                                                <linearGradient id={`gradient${star}`}>
                                                                    <stop stopColor="rgba(246, 196, 18, 1)" offset={`${gradientArrValue[star - 1] * 100}%`} />
                                                                    <stop stopColor="transparent" offset="50%" />
                                                                </linearGradient>
                                                            </defs>
                                                            <path id={`Star${star}`} d="M6 0.491455L7.34708 4.63735H11.7063L8.17963 7.19966L9.52671 11.3456L6 8.78325L2.47329 11.3456L3.82037 7.19966L0.293661 4.63735H4.65292L6 0.491455Z" fill={`url(#gradient${star})`} />
                                                        </svg>
                                                        <div style={{ background: `linear-gradient(to right, transparent 0% ${gradientArrValue[star - 1]}%, #111 ${gradientArrValue[star - 1]}% 100%)`, position: 'absolute', top: 0, left: 0, zIndex: 10, width: '100%', height: '100%' }}></div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className={styles.indicatorsBlock}>
                                        <div className={styles.reviewsNumber}>{productInfo.reviews} отзывов</div>
                                        <div
                                            className={styles.questions}
                                            onMouseEnter={() => setQuestionsIconActive(true)}
                                            onMouseLeave={() => setQuestionsIconActive(false)}
                                        >
                                            <QuestionsIcon isActive={isQuestionsIconActive} isMobile={false}/>
                                            <div className={styles.questionsText}>{productInfo.questions} вопроса</div>
                                        </div>
                                        <div
                                            className={styles.share}
                                            onMouseEnter={() => setShareIconActive(true)}
                                            onMouseLeave={() => setShareIconActive(false)}
                                        >
                                            <ShareIcon isActive={isShareIconActive} isMobile={false}/>
                                            <div className={styles.shareText}>Поделиться</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PlatformSelect
                            selectedPlatform={selectedPlatform}
                            setSelectedPlatform={setSelectedPlatform}
                        />
                    </div>
                    <div className={styles.characteristics}>
                        <h3 className={styles.characteristicsTitle}>Характеристики:</h3>
                        {
                            productInfo.characteristics.map(characteristic => {
                                return (
                                    <div key={characteristic.id} className={styles.characteristicsItem}>
                                        <p className={styles.characteristicsItemTitle}>{characteristic.title}</p>
                                        <div className={styles.characteristicsItemUnderline}></div>
                                        <p className={styles.characteristicsItemValue}>{characteristic.value}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.toCart}>
                        <div
                            className={styles.isFavourite}
                            onClick={() => console.log('add to favourite')} 
                        >
                            <HeartIcon isActive={productInfo.isFavourite} />
                        </div>
                        <div className={styles.priceBlock}>
                            <p className={styles.actualPrice}>$ {productInfo.actualPrice}</p>
                            <p className={styles.price}>$ {productInfo.price}</p>
                        </div>
                        <div className={styles.cartBlock}>
                            <button
                                className={styles.addToCartButton}
                                onClick={() => console.log('add to cart')}
                            >
                                Добавить в корзину
                            </button>
                            <div className={styles.cartIconContainer}>
                                <Image src={cartIcon} alt='cart icon' />
                            </div>
                        </div>
                        <div className={styles.favouritesBlock}>
                            <HeartIcon isActive />
                            <p className={styles.favouritesBlockText}>{productInfo.numberOfAddingToFavourites} человек добавили в избранное</p>
                        </div>
                    </div>
                    <div className={styles.engineSound}>
                        <EngineSound sound={productInfo.engineSound}/>
                    </div>
                    <div className={styles.descriptionBlock}>
                        <h4 className={styles.descriptionBlockTitle}>Описание</h4>
                        <p className={styles.descriptionBlockText}>{productInfo.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}