import React, { useState, useEffect, useRef } from 'react'
import styles from './Slider.module.scss'
import { Image as Images } from '@/pages/shop/models/vehicles/product/Product.typings'
import Image, { StaticImageData } from 'next/image'
import arrowLeftIcon from './assets/arrowLeftIcon.svg'
import playIcon from './assets/playIcon.svg'
import cn from 'classnames'
// import ModalVideo from '../ModalVideo/ModalVideo'
// import { AnimatePresence } from 'framer-motion'
import pauseButton from './assets/pauseButton.svg'
import mutedButton from './assets/mutedButton.svg'
import settingsButton from './assets/settingsButton.svg'
import fullScreenButton from './assets/fullScreenButton.svg'
import playControlIcon from './assets/playControlIcon.svg'
import soundIsOnIcon from './assets/soundOnIcon.svg'
import VideoSettings from './VideoSettings/VideoSettings'

export default function Slider({
    images,
    videoCover,
    video,
    isMobile,
}: {
    images: Images[],
    videoCover: StaticImageData,
    video: string,
    isMobile: boolean,
}) {

    const [sliderPosition, setSliderPosition] = useState<number>(0)
    const [isModalVideo, setModalVideo] = useState<boolean>(false)
    const [isPlayVideo, setPlayVideo] = useState<boolean>(true)
    const [isMuted, setIsMuted] = useState<boolean>(true)
    const videoRef = useRef<HTMLVideoElement>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)
    const [isFullscreen, setFullscreen] = useState<boolean>(false)
    const [volumeValue, setVolumeValue] = useState<number>(0)
    const [isSettingsOpen, setSettingsOpen] = useState<boolean>(false)
    const [selectedRate, setSelectedRate] = useState<number>(2)

    useEffect(() => {
        const video = videoRef.current
        if (video) {
            if (isPlayVideo) {
                video.play()
            } else {
                video.pause()
            }
            video.muted = isMuted
        }
    }, [isPlayVideo, isMuted])

    useEffect(() => {
        const video = videoRef.current
        if (video) {
            const handleLoadedMetadata = () => {
                setDuration(video.duration)
            };

            const handleTimeUpdate = () => {
                setCurrentTime(video.currentTime)
            };

            video.addEventListener('loadedmetadata', handleLoadedMetadata);
            video.addEventListener('timeupdate', handleTimeUpdate);

            console.log(video.duration)

            return () => {
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [isModalVideo]);

    const onSlideRight = () => {
        if (isMobile) {
            if (wrapperRef.current) {
                const wrapperWidth = wrapperRef.current.offsetWidth
                if (sliderPosition <= -wrapperWidth * 3) {
                    setSliderPosition(0)
                } else {
                    setSliderPosition(prev => prev - wrapperWidth)
                }
            }
        } else {
            if (sliderPosition <= -2475) {
                setSliderPosition(0)
            } else {
                setSliderPosition(prev => prev - 825)
            }
        }
    }
    const onSlideLeft = () => {
        if (isMobile) {
            if(wrapperRef.current){
                const wrapperWidth = wrapperRef.current.offsetWidth
                if(sliderPosition >= 0){
                    setSliderPosition(- wrapperWidth * 3)
                } else {
                    setSliderPosition(prev => prev + wrapperWidth)
                }
            }
        } else {
            if (sliderPosition >= 0) {
                setSliderPosition(-2475)
            } else {
                setSliderPosition(prev => prev + 825)
            }
        }
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (video) {
            const newTime = parseFloat(event.target.value);
            video.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current
        if (video) {
            const newVolume = parseFloat(event.target.value)
            console.log(newVolume)
            video.volume = newVolume / 100
            setVolumeValue(newVolume)
            if (newVolume === 0) setIsMuted(true)
            else setIsMuted(false)
        }
    }

    const handleFullscreenClick = () => {
        const video = videoRef.current;
        if (!document.fullscreenElement) {
            video?.requestFullscreen().then(() => {
                setFullscreen(true);
            }).catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen().then(() => {
                setFullscreen(false);
            }).catch(err => {
                console.error(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
            });
        }
    };

    const handleChangeRate = (id: number) => {
        const video = videoRef.current
        setSelectedRate(id)
        if (video) {
            switch (id) {
                case 1: {
                    video.playbackRate = 0.5
                    break
                }
                case 2: {
                    video.playbackRate = 1
                    break
                }
                case 3: {
                    video.playbackRate = 1.5
                    break
                }
                case 4: {
                    video.playbackRate = 2
                    break
                }
                default: break
            }
        }
    }

    const getSliderPosition = (gridArea: string) => {
        switch (gridArea) {
            case 'c': {
                if (isMobile) {
                    if (wrapperRef.current) return -(wrapperRef.current.offsetWidth)
                } else {
                    return -825
                }
                break
            }
            case 'd': {
                if (isMobile) {
                    if (wrapperRef.current) return -(wrapperRef.current.offsetWidth * 2)
                } else {
                    return -1650
                }
                break
            }
            case 'e': {
                if (isMobile) {
                    if (wrapperRef.current) return -(wrapperRef.current.offsetWidth * 3)
                } else {
                    return -2475
                }
                break
            }
        }
    }

    const getSliderPositionStyle = (gridArea: string) => {
        switch (gridArea) {
            case 'c': {
                if (isMobile) {
                    if (wrapperRef.current) {
                        if (sliderPosition === wrapperRef.current.offsetWidth) return true
                        else if (sliderPosition === - wrapperRef.current.offsetWidth) return true
                        else return false
                    }
                } else {
                    if (sliderPosition === 825) return true
                    else if (sliderPosition === -825) return true
                    else return false
                }
                break
            }
            case 'd': {
                if (isMobile) {
                    if (wrapperRef.current) {
                        if (sliderPosition === wrapperRef.current.offsetWidth * 2) return true
                        else if (sliderPosition === - wrapperRef.current.offsetWidth * 2) return true
                        else return false
                    }
                } else {
                    if (sliderPosition === 1650) return true
                    else if (sliderPosition === -1650) return true
                    else return false
                }
                break
            }
            case 'e': {
                if (isMobile) {
                    if (wrapperRef.current) {
                        if (sliderPosition === wrapperRef.current.offsetWidth * 3) return true
                        else if (sliderPosition === - wrapperRef.current.offsetWidth * 3) return true
                        else return false
                    }
                } else {
                    if (sliderPosition === 2475) return true
                    else if (sliderPosition === -2475) return true
                    else return false
                }
                break
            }
        }
    }

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <div className={styles.a}>
                <div className={styles.sliderList} style={{ left: `${sliderPosition}px` }}>
                    {
                        images.map(image => {
                            return (
                                <div key={image.id} className={styles.imageContainer}>
                                    <Image src={image.image} alt='image' className={styles.mainImage} fill />
                                </div>
                            )
                        })
                    }
                    <div className={styles.imageContainer}>
                        {
                            !isModalVideo ?
                                <>
                                    <Image src={videoCover} alt='video' className={styles.mainImage} fill />
                                    <Image
                                        src={playIcon}
                                        alt='play'
                                        className={styles.playIcon}
                                        onClick={() => setModalVideo(true)}
                                    />
                                </>
                                : <>
                                    <div className={styles.videoControls}>
                                        <div className={styles.videoControlsTopBlock}>
                                            <input
                                                type="range"
                                                min="0"
                                                max={duration}
                                                value={currentTime}
                                                onChange={handleProgressChange}
                                                style={{ width: '100%' }}
                                            />
                                        </div>
                                        <div className={styles.videoControlsBottomBlock}>
                                            <div className={styles.videoControlsBottomBlockLeft}>
                                                <Image
                                                    src={isPlayVideo ? pauseButton : playControlIcon}
                                                    alt='play pause'
                                                    onClick={() => setPlayVideo(prev => !prev)}
                                                    className={styles.videoControlsBottomBlockLeftItem}
                                                    style={{ marginLeft: '15px' }}
                                                    width={14}
                                                />
                                                <div className={styles.volumeControl}>
                                                    <Image
                                                        src={isMuted ? mutedButton : soundIsOnIcon}
                                                        alt='mute unmute'
                                                        onClick={() => setIsMuted(prev => !prev)}
                                                        className={cn(styles.videoControlsBottomBlockLeftItem, styles.volumeIcon)}
                                                        style={{ marginLeft: '15px' }}
                                                    />
                                                    <input
                                                        type="range"
                                                        className={styles.volume}
                                                        value={volumeValue}
                                                        min={0}
                                                        max={100}
                                                        onChange={handleVolumeChange}
                                                    />
                                                </div>
                                                <p className={styles.videoControlsBottomBlockLeftTime}>{formatTime(currentTime)}<span> / {formatTime(duration)}</span></p>
                                            </div>
                                            <div className={styles.videoControlsBottomBlockRight}>
                                                <Image
                                                    src={settingsButton}
                                                    alt='settings'
                                                    onClick={() => setSettingsOpen(prev => !prev)}
                                                    className={styles.videoControlsBottomBlockLeftItem}
                                                    style={{ marginLeft: '15px' }}
                                                />
                                                <Image
                                                    src={fullScreenButton}
                                                    alt='full screen'
                                                    onClick={() => handleFullscreenClick()}
                                                    className={styles.videoControlsBottomBlockLeftItem}
                                                    style={{ marginLeft: '15px' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <video
                                        ref={videoRef}
                                        src={video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        width={825}
                                        height={400}
                                        className={styles.video}
                                        onClick={() => setPlayVideo(prev => !prev)}
                                    />
                                </>
                        }
                        {
                            isSettingsOpen &&
                            <div className={styles.videoSettings}>
                                <VideoSettings
                                    onChangeRate={handleChangeRate}
                                    selectedRate={selectedRate}
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className={styles.sliderControls}>
                    <div
                        className={styles.button}
                        onClick={() => onSlideLeft()}
                    >
                        <Image src={arrowLeftIcon} alt='arrow left' height={isMobile ? 30 : 45} />
                    </div>
                    <div
                        className={styles.button}
                        onClick={() => onSlideRight()}
                    >
                        <Image src={arrowLeftIcon} alt='arrow left' height={isMobile ? 30 : 45} style={{ rotate: '180deg' }} />
                    </div>
                </div>
            </div>
            <div
                className={cn(styles.b, sliderPosition === 0 && styles.bActive)}
                onClick={() => setSliderPosition(0)}
            >
                <Image src={images[0].image} alt='image 1' fill style={{ objectFit: 'cover' }} />
            </div>
            <div
                className={cn(styles.c, getSliderPositionStyle('c') && styles.cActive)}
                onClick={() => setSliderPosition(getSliderPosition('c') ?? 0)}
            >
                <Image src={images[1].image} alt='image 2' fill style={{ objectFit: 'cover' }} />
            </div>
            <div
                className={cn(styles.d, getSliderPositionStyle('d') && styles.dActive)}
                onClick={() => setSliderPosition(getSliderPosition('d') ?? 0)}
            >
                <Image src={images[2].image} alt='image 3' fill style={{ objectFit: 'cover' }} />
            </div>
            <div
                className={cn(styles.e, getSliderPositionStyle('e') && styles.eActive)}
                onClick={() => setSliderPosition(getSliderPosition('e') ?? 0)}
            >
                <Image src={videoCover} alt='video' fill style={{ objectFit: 'cover' }} />
                <Image
                    src={playIcon}
                    alt='play'
                    className={styles.playIcon}
                />
            </div>
        </div>
    )
}