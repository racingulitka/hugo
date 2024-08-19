import React from 'react'
import styles from './LandingPageMainIdea.module.scss'
import { mainIdeaArr } from './LandingPageMainIdea.config'

export default function LandingPageMainIdea({
    isMobile,
}:{
    isMobile:boolean,
}){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                {
                    mainIdeaArr.map(item => {
                        return(
                            <div className={styles.container} key={item.id} style={{border: isMobile ? `2px solid ${item.borderColor}` : `4px solid ${item.borderColor}`}}>
                                <p className={styles.text}>{item.text}</p>
                                <div className={styles.title}>{item.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}