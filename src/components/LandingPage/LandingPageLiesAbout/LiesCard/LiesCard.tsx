import React from 'react'
import styles from './LiesCard.module.scss'
import { LiesCard as LiesCardType } from '../LandingPageLiesAbout.config'
import backgroundSVG from './assets/backgroundSVG.svg'
import Image from 'next/image'

interface LiesCardProps {
    params: LiesCardType
}

const LiesCard: React.FC<LiesCardProps> = ({ params }) =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Image src={params.icon} alt='icon' className={styles.icon} />
            </div>
            <p className={styles.title}>{params.title}</p>
            <p className={styles.text}>{params.text}</p>
            <div className={styles.question}>{params.question}</div>
            <Image src={backgroundSVG} alt='background' className={styles.background} />
        </div>
    )
}

export default LiesCard