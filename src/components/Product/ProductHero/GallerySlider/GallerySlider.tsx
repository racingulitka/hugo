import React, { useState, useEffect, useRef } from 'react'
import styles from './GallerySlider.module.scss'
import { Image as Images } from '@/pages/shop/product/Product.typings'
import Image, { StaticImageData } from 'next/image'
import arrowLeftIcon from './assets/arrowLeftIcon.svg'
import cn from 'classnames'

export default function GallerySlider({
    images,
    isMobile,
}: {
    images: Images[],
    isMobile: boolean,
}) {

    const [sliderPosition, setSliderPosition] = useState<number>(0)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

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
            if (wrapperRef.current) {
                const wrapperWidth = wrapperRef.current.offsetWidth
                if (sliderPosition >= 0) {
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
                    </div>
                </div>
                <div className={styles.sliderControls}>
                    <div
                        className={styles.button}
                        onClick={() => onSlideLeft()}
                    >
                        <Image src={arrowLeftIcon} alt='arrow left' height={30} />
                    </div>
                    <div
                        className={styles.button}
                        onClick={() => onSlideRight()}
                    >
                        <Image src={arrowLeftIcon} alt='arrow left' height={30} style={{ rotate: '180deg' }} />
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
                <Image src={images[3].image} alt='image 4' fill style={{ objectFit: 'cover' }} />
            </div>
        </div>
    )
}