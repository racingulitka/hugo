import React, {useState} from 'react'
import styles from './PurchaseCard.module.scss'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import DownloadIcon from '../assets/DownloadIcon'

export default function PurchaseCard({
    image,
    name,
    color,
}: {
    image: StaticImageData,
    name: string,
    color: string,
}) {

    const [isDownloadIconHovered, setDownloadIconHovered] = useState<boolean>(false)

    return (
        <div className={styles.wrapper}>
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
            <div className={styles.rightSide}>
                <div
                    className={styles.downloadIcon}
                    onMouseEnter={() => setDownloadIconHovered(true)}
                    onMouseLeave={() => setDownloadIconHovered(false)}
                    onClick={() => console.log('download')}
                >
                    <DownloadIcon isActive={isDownloadIconHovered} />
                </div>
                <p className={styles.rateGoods}>Оценить товар</p>
                <p className={styles.makeReview}>Оставить отзыв</p>
            </div>
        </div>
    )
}