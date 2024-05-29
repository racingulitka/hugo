import React, { useState, useRef, useEffect } from 'react'
import styles from './EngineSound.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import playIcon from './assets/playIcon.svg'
import pauseIcon from './assets/pauseIcon.svg'
import audioRoad from '../assets/audioRoad.svg'
import audioRoadComplete from '../assets/audioRoadComplete.svg'

export default function EngineSound({
    sound,
}: {
    sound: string,
}) {

    const [isPlay, setPlay] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)
    const [progress, setProgress] = useState<number>(0)

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        const progress = currentTime / duration * 100
        setProgress(progress)
    }, [currentTime])

    useEffect(() => {
        if (audioRef.current) {
            const audio = audioRef.current
            const updateCurrentTime = () => setCurrentTime(audio.currentTime);
            const updateDuration = () => setDuration(audio.duration);
            audio.addEventListener('timeupdate', updateCurrentTime);
            audio.addEventListener('ended', () => setPlay(false))
            updateDuration()
            if (isPlay) {
                audio.play()
            } else {
                audio.pause()
            }
            return () => {
                audio.removeEventListener('timeupdate', updateCurrentTime);
                audio.removeEventListener('ended', () => setPlay(false))
            };
        }
    }, [isPlay])

    return (
        <div className={styles.wrapper}>
            <p className={styles.wrapperTitle}>Звук двигателя</p>
            <div className={styles.wrapperSoundMain}>
                <div className={styles.playButton} onClick={() => setPlay(prev => !prev)}>
                    <Image src={isPlay ? pauseIcon : playIcon} alt='play' />
                </div>
                <div className={styles.soundVisualization}>
                    <Image src={audioRoad} alt='audioRoad' className={styles.soundVisualizationImage} fill />
                    <div className={styles.soundVisualizationCompleteContainer} style={{ width: `${progress}%` }}>
                        <div className={styles.audioWrapper}>
                            <Image src={audioRoadComplete} alt='audio road' className={styles.audioWrapperImage} fill />
                        </div>
                    </div>
                    <audio ref={audioRef} src={sound} />
                </div>
                <p className={styles.time}>{formatTime(currentTime)}</p>
            </div>
            <Link href={'/'} className={styles.wrapperLink}>Инструкция по установке</Link>
        </div>
    )
}
