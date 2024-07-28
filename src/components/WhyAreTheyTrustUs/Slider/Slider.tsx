import React, { useState } from 'react'
import styles from './Slider.module.scss'
import { SliderArr } from './Slider.typings'
import Image from 'next/image'
import arrow from './assets/arrow.svg'
import commentIcon from './assets/commentIcon.svg'
import Link from 'next/link'

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
                                        <Image src={slide.image} alt='slideImage' className={styles.slideImage}/>
                                    </div>
                                    <div className={styles.textContainer}>
                                        <div className={styles.slideHeader}>
                                            <h3>{slide.title}</h3>
                                            <Link
                                                className={styles.articleLink}
                                                href={slide.link}
                                            >
                                                Статья
                                            </Link>
                                        </div>
                                        <p className={styles.text}>
                                            Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremqu laudantium illo inventore veritatiset quas
                                        </p>
                                    </div>
                                    <div className={styles.commentsBlock}>
                                        <Image src={commentIcon} className={styles.commentIcon} alt='commentIcon' />
                                        <span>{slide.numberOfComments}</span>
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