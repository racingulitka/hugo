import React from 'react'
import styles from './SocialMediaAuth.module.scss'
import { smArr } from './SocialMediaAuth.config'

export default function SocialMediaAuth(){
    return(
        <div className={styles.wrapper}>
            {
                smArr.map(item => {
                    return(
                        <item.icon key={item.id}/>
                    )
                })
            }
        </div>
    )
}