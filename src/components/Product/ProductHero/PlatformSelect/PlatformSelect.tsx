import React from 'react'
import styles from './PlatformSelect.module.scss'
import { platforms, Platforms } from './PlatformSelect.config'
import cn from 'classnames'
import Image from 'next/image'

interface Props{
    selectedPlatform:number | null,
    setSelectedPlatform:React.Dispatch<React.SetStateAction<number | null>>,
}

export default function PlatformSelect({
    selectedPlatform,
    setSelectedPlatform,
}:Props) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Выберите платформу</p>
            <div className={styles.iconsBlock}>
                {
                    platforms.map(platform => {
                        return (
                            <div
                                key={platform.id}
                                className={cn(styles.platform, selectedPlatform === platform.id && styles.platformActive)}
                                onClick={() => setSelectedPlatform(platform.id)}
                            >
                                <Image src={platform.logo} alt='logo' className={styles.icon} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}