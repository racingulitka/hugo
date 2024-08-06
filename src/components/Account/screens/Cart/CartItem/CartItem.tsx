import React from 'react'
import styles from './CartItem.module.scss'
import CheckBox from '@/components/CheckBox/CheckBox'
import { CartInfo } from '../Cart.typings'
import Image from 'next/image'
import HeartIcon from '@/components/GoodsBlock/GoodsCard/assets/HeartIcon'
import trashIcon from './assets/trashIcon.svg'
import { priceFormat } from '@/utils/priceFormat'

export default function CartItem({
    cartInfo,
    onSelect,
    onDelete,
    isMobile,
}: {
    cartInfo: CartInfo,
    onSelect: (id: number, value: boolean, key: keyof CartInfo) => void,
    onDelete: (id: number) => void,
    isMobile: boolean,
}) {

    const onChange = (value: boolean, key: keyof CartInfo) => {
        onSelect(cartInfo.id, value, key)
    }

    const onCheck = (value: boolean) => {
        onChange(value, 'isChecked')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <CheckBox
                    isChecked={cartInfo.isChecked}
                    setChecked={onCheck}
                />
                <div className={styles.itemIfo}>
                    <div className={styles.image}>
                        <Image
                            src={cartInfo.image}
                            alt='image'
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.itemParams}>
                        <div className={styles.textBlock}>
                            <p className={styles.itemName}>{cartInfo.title}</p>
                            <p className={styles.itemColor}>Цвет {cartInfo.color}</p>
                        </div>
                        {
                            isMobile &&
                            <div className={styles.priceAndIcons}>
                                <div className={styles.priceBlock}>
                                    <p className={styles.actualPrice}>$ {priceFormat(cartInfo.actualPrice)}</p>
                                    <p className={styles.price}>$ {priceFormat(cartInfo.price)}</p>
                                </div>
                                <div className={styles.iconsBlock}>
                                    <div
                                        className={styles.heartIcon}
                                        onClick={() => onChange(!cartInfo.isFavourite, 'isFavourite')}
                                    >
                                        <HeartIcon isActive={cartInfo.isFavourite} width={isMobile ? 15 : 19} height={isMobile ? 14 : 17} />
                                    </div>
                                    <div
                                        className={styles.trash}
                                        onClick={() => onDelete(cartInfo.id)}
                                    >
                                        <Image
                                            src={trashIcon}
                                            alt='trash'
                                            className={styles.trashIcon}
                                        />
                                    </div>
                                </div>
                            </div>

                        }
                        {
                            !isMobile &&
                            <div className={styles.iconsBlock}>
                                <div
                                    className={styles.heartIcon}
                                    onClick={() => onChange(!cartInfo.isFavourite, 'isFavourite')}
                                >
                                    <HeartIcon isActive={cartInfo.isFavourite} /*width={isMobile ? 15 : 19}*/ height={isMobile ? 14 : 17} />
                                </div>
                                <div
                                    className={styles.trash}
                                    onClick={() => onDelete(cartInfo.id)}
                                >
                                    <Image
                                        src={trashIcon}
                                        alt='trash'
                                        className={styles.trashIcon}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {
                !isMobile &&
                <div className={styles.rightSide}>
                    <div className={styles.priceBlock}>
                        <p className={styles.actualPrice}>$ {priceFormat(cartInfo.actualPrice)}</p>
                        <p className={styles.price}>$ {priceFormat(cartInfo.price)}</p>
                    </div>
                </div>
            }
        </div>
    )
}