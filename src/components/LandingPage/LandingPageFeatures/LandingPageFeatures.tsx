import React from 'react'
import styles from './LandingPageFeatures.module.scss'
import { leftBlocksArr, rightBlocksArr } from './LandingPageFeatures.config'
import Image from 'next/image'
import lampImage from './assets/lampImage.png'
import Card from './Card/Card'

export default function LandingPageFeatures() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h2>НУЖНЫ НОВЫЕ ФИШКИ?</h2>
                <p>ОНИ ЕСТЬ, ЗНАКОМЬТЕСЬ</p>
                <div className={styles.flexContainer}>
                    <div className={styles.textBlocks}>
                        {
                            leftBlocksArr.map(item => {
                                return (
                                    <Card
                                        key={item.id}
                                        title={item.title}
                                        text={item.text}
                                        image={item.icon}
                                        position='left'
                                    />
                                )
                            })
                        }
                    </div>
                    <Image src={lampImage} alt='lamp' className={styles.image} />
                    <div className={styles.textBlocks} style={{alignItems:'flex-start'}}>
                        {
                            rightBlocksArr.map(item => {
                                return (
                                    <Card
                                        key={item.id}
                                        title={item.title}
                                        text={item.text}
                                        image={item.icon}
                                        position='right'
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}