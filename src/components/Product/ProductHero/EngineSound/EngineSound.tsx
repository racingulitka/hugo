import React, {useState} from 'react'
import styles from './EngineSound.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { WaveformVisualizer, WaveformVisualizerTheme } from 'react-audio-visualizers'
import playIcon from './assets/playIcon.svg'
import pauseIcon from './assets/pauseIcon.svg'

export default function EngineSound({
    sound,
}: {
    sound: string,
}) {

const [isPlay, setPlay] = useState<boolean>(false)

    return (
        <div className={styles.wrapper}>
            <p className={styles.wrapperTitle}>Звук двигателя</p>
            <div className={styles.wrapperSoundMain}>
                <div onClick={() => setPlay(prev => !prev)}>
                    <Image src={isPlay ? pauseIcon : playIcon} alt='play' />
                </div>
                <div className={styles.soundVisualization}>
                    <WaveformVisualizer
                        audio={sound}
                        theme={WaveformVisualizerTheme.squaredBars}
                        colors={['#9C3131', '#9C3131']}
                        iconsColor="#26a69a"
                        backgroundColor="none"
                        showLoaderIcon
                        barWidth={2}
                    />
                </div>
                <p className={styles.time}>00:00</p>
            </div>
            <Link href={'/'} className={styles.wrapperLink}>Инструкция по установке</Link>
        </div>
    )
}