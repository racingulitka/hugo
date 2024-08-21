import React from 'react'
import styles from './WhyAreTheyTrustUs.module.scss'
import decoration from './assets/decoration.svg'
import Image from 'next/image'
import { advantagesArr, sliderArr } from './WhyAreTheyTrustUs.config';
import arrowRight from './assets/arrowRight.svg'
import Link from 'next/link';
import Slider from './Slider/Slider';

export default function WhyAreTheyTrustUs() {
    return (
        <div className={styles.mainWrapper}>
            <Image src={decoration} alt='decoration' className={styles.decoration} />
            <div className={styles.wrapper}>
                <div className={styles.mainInfo}>
                    <div className={styles.header}>
                        <h2>Почему нам доверяют свои проекты?</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>
                    </div>
                    <div className={styles.advantages}>
                        {
                            advantagesArr.map(adv => {
                                return (
                                    <div key={adv.id} className={styles.advCard}>
                                        <div className={styles.iconContainer}></div>
                                        <p className={styles.advTitle}>{adv.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.blogBlock}>
                    <h2>Наш блог, в котором мы делимся своей экспертизой по GTA сфере</h2>
                    <div className={styles.descriptionBlock}>
                        <p className={styles.description}>В нем вы сможете найти много полезной информации, аналитику, сервисы тенденции рынка, советы. Изучайте, внедряйте. И конечно же оставляйте комментарии.</p>
                        <Link href='/'>
                            <button className={styles.goToBlogButton}>
                                <span>ЧИТАТЬ БЛОГ</span>
                                <Image
                                    src={arrowRight}
                                    alt='arrowRight'
                                    className={styles.arrowRight}
                                />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={styles.sliderBlock}>
                    <Slider sliderArr={sliderArr} />
                </div>
            </div>
        </div>
    )
}