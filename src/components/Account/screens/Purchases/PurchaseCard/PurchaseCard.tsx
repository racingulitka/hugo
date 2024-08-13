import React, { useState } from 'react'
import styles from './PurchaseCard.module.scss'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import DownloadIcon from '../assets/DownloadIcon'

export default function PurchaseCard({
    image,
    name,
    color,
    isMobile,
}: {
    image: StaticImageData,
    name: string,
    color: string,
    isMobile: boolean,
}) {

    const [isDownloadIconHovered, setDownloadIconHovered] = useState<boolean>(false)

    return (
        <div className={styles.wrapper}>
            {
                !isMobile ?
                    <div className={styles.leftSide}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={image}
                                alt='image'
                                className={styles.image}
                                fill
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.name}>{name}</p>
                            <p className={styles.color}>{color}</p>
                        </div>
                    </div>
                    :
                    <div className={styles.leftSide}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={image}
                                alt='image'
                                className={styles.image}
                                fill
                            />
                        </div>
                    </div>
            }
            {
                !isMobile ?
                    <div className={styles.rightSide}>
                        <div className={styles.bottomElements}>
                            <div
                                className={styles.downloadIcon}
                                onMouseEnter={() => setDownloadIconHovered(true)}
                                onMouseLeave={() => setDownloadIconHovered(false)}
                                onClick={() => console.log('download')}
                            >
                                <DownloadIcon isActive={isDownloadIconHovered} size={isMobile ? 10 : 20} />
                            </div>
                            <div className={styles.bottomElementsLinks}>
                                <p className={styles.rateGoods}>Оценить товар</p>
                                <p className={styles.makeReview}>Оставить отзыв</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={styles.rightSide}>
                        <div className={styles.textContainer}>
                            <p className={styles.name}>{name}</p>
                            <p className={styles.color}>{color}</p>
                        </div>
                        <div className={styles.bottomElements}>
                            <div className={styles.bottomElementsLinks}>
                                <p className={styles.rateGoods}>Оценить товар</p>
                                <p className={styles.makeReview}>Оставить отзыв</p>
                            </div>
                            <div
                                className={styles.downloadIcon}
                                onMouseEnter={() => setDownloadIconHovered(true)}
                                onMouseLeave={() => setDownloadIconHovered(false)}
                                onClick={() => console.log('download')}
                            >
                                <DownloadIcon isActive={isDownloadIconHovered} size={isMobile ? 10 : 20} />
                            </div>
                        </div>
                    </div>

            }
        </div>
    )
}