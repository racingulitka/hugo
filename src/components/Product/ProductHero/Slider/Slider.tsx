import React, { useState, useEffect, useRef } from 'react'
import styles from './Slider.module.scss'
import { Image as Images } from '@/pages/shop/product/Product.typings'
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

export default function Slider({
    images,
    videoCover,
    video,
}: {
    images: Images[],
    videoCover: StaticImageData,
    video: string,
}) {

    const [sliderPosition, setSliderPosition] = useState<number>(0)
    const [isModalVideo, setModalVideo] = useState<boolean>(false)
    const [isPlayVideo, setPlayVideo] = useState<boolean>(true)
    const [isMuted, setIsMuted] = useState<boolean>(true)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)
    const [isFullscreen, setFullscreen] = useState<boolean>(false)

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
        if (sliderPosition <= -2475) {
            setSliderPosition(0)
        } else {
            setSliderPosition(prev => prev - 825)
        }
    }
    const onSlideLeft = () => {
        if (sliderPosition >= 0) {
            setSliderPosition(-2475)
        } else {
            setSliderPosition(prev => prev + 825)
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

    return (
        <div className={styles.wrapper}>
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
                                                    src={isPlayVideo ? pauseButton : pauseButton}
                                                    alt='play pause'
                                                    onClick={() => setPlayVideo(prev => !prev)}
                                                    className={styles.videoControlsBottomBlockLeftItem}
                                                    style={{ marginLeft: '15px' }}
                                                />
                                                <Image
                                                    src={isMuted ? mutedButton : mutedButton}
                                                    alt='mute unmute'
                                                    onClick={() => setIsMuted(prev => !prev)}
                                                    className={styles.videoControlsBottomBlockLeftItem}
                                                    style={{ marginLeft: '15px' }}
                                                />
                                                <p className={styles.videoControlsBottomBlockLeftTime}>{formatTime(currentTime)}<span> / {formatTime(duration)}</span></p>
                                            </div>
                                            <div className={styles.videoControlsBottomBlockRight}>
                                            <Image
                                                    src={settingsButton}
                                                    alt='settings'
                                                    onClick={() => console.log('settings')}
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
                    </div>
                </div>
                <div className={styles.sliderControls}>
                    <div
                        className={styles.button}
                        onClick={() => onSlideLeft()}
                    >
                        <Image src={arrowLeftIcon} alt='arrow left' height={45} />
                    </div>
                    <div
                        className={styles.button}
                        onClick={() => onSlideRight()}
                    >
                        <Image src={arrowLeftIcon} alt='arrow left' height={45} style={{ rotate: '180deg' }} />
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
                className={cn(styles.c, (sliderPosition === -825 || sliderPosition === 825) && styles.cActive)}
                onClick={() => setSliderPosition(-825)}
            >
                <Image src={images[1].image} alt='image 2' fill style={{ objectFit: 'cover' }} />
            </div>
            <div
                className={cn(styles.d, (sliderPosition === -1650 || sliderPosition === 1650) && styles.dActive)}
                onClick={() => setSliderPosition(-1650)}
            >
                <Image src={images[2].image} alt='image 3' fill style={{ objectFit: 'cover' }} />
            </div>
            <div
                className={cn(styles.e, (sliderPosition === -2475 || sliderPosition === 2475) && styles.eActive)}
                onClick={() => setSliderPosition(-2475)}
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


//   const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const video = videoRef.current;
//     if (video) {
//       const newTime = parseFloat(event.target.value);
//       video.currentTime = newTime;
//       setCurrentTime(newTime);
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <video
//         ref={videoRef}
//         src={sampleVideo}
//         autoPlay
//         loop
//         muted={isMuted}
//         playsInline
//         width="600"
//         height="400"
//         style={{ display: 'block', margin: '0 auto' }}
//       />
//       <div>
//         <button onClick={handlePlayPause}>
//           {isPlaying ? 'Pause' : 'Play'}
//         </button>
//         <button onClick={handleMuteUnmute}>
//           {isMuted ? 'Unmute' : 'Mute'}
//         </button>
//       </div>
//       <div>
//         <input
//           type="range"
//           min="0"
//           max={duration}
//           value={currentTime}
//           onChange={handleProgressChange}
//           style={{ width: '100%' }}
//         />
//       </div>
//       <div>
//         {Math.floor(currentTime)} / {Math.floor(duration)} seconds
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;