import React from 'react'
import styles from './Indicators.module.scss'
import { indicatorsArr } from './Indicators.config'
import Image from 'next/image'
import Link from 'next/link'

export default function Indicators(){

    const indicatorsValue = [
        {
            id:1,
            value:2,
        },
        {
            id:2,
            value:12,
        },
        {
            id:3,
            value:112,
        },
    ]

    return(
        <div className={styles.wrapper}>
            {
                indicatorsArr.map(indicator => {
                    const value = indicatorsValue.find(item => item.id === indicator.id)
                    return(
                        <Link key={indicator.id} href={indicator.link} className={styles.indicator}>
                            <div className={styles.value}>{value?.value}</div>
                            <Image src={indicator.icon} alt='indicatorIcon' className={styles.icon} />
                            <p className={styles.title}>{indicator.title}</p>
                        </Link>
                    )
                })
            }
        </div>
    )
}