import React, { useState } from 'react'
import styles from './VideoSettings.module.scss'
import { mainMenuArr, qualityArr, playbackRageArr } from './VideoSettings.config'
import checkIcon from './assets/checkIcon.svg'
import backIcon from './assets/backIcon.svg'
import Image from 'next/image'

export default function VideoSettings({
    onChangeRate,
    selectedRate
}: {
    onChangeRate: (id: number) => void,
    selectedRate: number,
}) {

    const [isQuality, setQuality] = useState<boolean>(false)
    const [selectedQuality, setSelectedQuality] = useState<number>(1)
    const [isRate, setRate] = useState<boolean>(false)


    const onMainMenuSelect = (id: number) => {
        switch (id) {
            case 1: {
                setQuality(true)
                break
            }
            case 2: {
                setRate(true)
                break
            }
            default: break
        }
    }

    return (
        <div className={styles.wrapper}>
            {
                !isQuality && !isRate &&
                mainMenuArr.map(item => {
                    return (
                        <div
                            className={styles.mainMenuItem}
                            key={item.id}
                            onClick={() => onMainMenuSelect(item.id)}
                        >
                            {item.title}
                        </div>
                    )
                })
            }
            {
                (isQuality || isRate) &&
                <div className={styles.back} onClick={() => { setQuality(false); setRate(false) }}>
                    <Image src={backIcon} alt='back icon' width={7} />
                    <p>{isQuality ? 'Качество' : 'Скорость воспроизведения'}</p>
                </div>
            }
            {
                isQuality &&
                qualityArr.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={styles.mainMenuItem}
                            onClick={() => {
                                setSelectedQuality(item.id)
                                setQuality(false)
                            }
                            }
                        >
                            <p>{item.title}</p>
                            {
                                selectedQuality === item.id &&
                                <Image src={checkIcon} alt='selected' width={14} />
                            }
                        </div>
                    )
                })
            }
            {
                isRate &&
                playbackRageArr.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={styles.mainMenuItem}
                            onClick={() => {
                                onChangeRate(item.id)
                                setRate(false)
                            }
                            }
                        >
                            <p>{item.title}</p>
                            {
                                selectedRate === item.id &&
                                <Image src={checkIcon} alt='selected' width={14} />
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}