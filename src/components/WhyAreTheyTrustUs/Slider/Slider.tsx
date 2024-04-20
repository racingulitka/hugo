import React, { useState } from 'react'
import styles from './Slider.module.scss'
import { SliderArr } from './Slider.typings'
import Image from 'next/image'
import arrow from './assets/arrow.svg'
import commentIcon from './assets/commentIcon.svg'

export default function Slider({
    sliderArr,
}: {
    sliderArr: SliderArr[],
}) {

    const [sliderX, setSliderX] = useState<number>(0)

    const onSlideLeft = () => {
        const listWidth = sliderArr.length
        if ((listWidth + sliderX / 390) > 4) {
            setSliderX(prev => prev - 390)
        }
    }
    const onSlideRight = () => {
        if (sliderX < 0) {
            setSliderX(prev => prev + 390)
        }
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.navBlock}>
                <button
                    className={styles.navButton}
                    onClick={() => onSlideRight()}
                >
                    <Image src={arrow} alt='arrow' className={styles.arrow} />
                </button>
                <button
                    className={styles.navButton}
                    onClick={() => onSlideLeft()}
                >
                    <Image src={arrow} alt='arrow' className={styles.arrow} />
                </button>
            </div>
            <div className={styles.slides}>
                <div className={styles.slidesList} style={{ left: `${sliderX}px` }}>
                    {
                        sliderArr.map(slide => {
                            return (
                                <div
                                    key={slide.id}
                                    className={styles.slide}
                                >
                                    <div className={styles.imageContainer}>
                                        <Image src={slide.image} alt='slideImage' className={styles.slideImage} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}