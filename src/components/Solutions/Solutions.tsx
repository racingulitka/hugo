import React from 'react'
import styles from './Solutions.module.scss'
import Image from 'next/image'
import closeButtonIcon from './assets/closeButtonIcon.svg'
import { solutionsArr } from './Solutions.config'
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function Solutions({
    onClose,
}:{
    onClose:React.Dispatch<React.SetStateAction<boolean>>
}){
    return(
        <motion.div
            initial={{opacity:0, left:'-100%'}}
            animate={{opacity:1, left:0}}
            exit={{opacity:0, left:'100%'}}
            transition={{duration:0.5, ease:'easeInOut'}}
            className={styles.wrapper}
        >
            <div
                className={styles.closeButtonContainer}
                onClick={() => onClose(prev => !prev)}
            >
                <Image src={closeButtonIcon} alt='close button icon' className={styles.image} />
            </div>
            <div className={styles.links}>
                {
                    solutionsArr.map(block => {
                        return(
                            <div key={block.id} className={styles.block}>
                                <h3 className={styles.title}>{block.title}</h3>
                                <div className={styles.links}>
                                    {
                                        block.links.map(link => {
                                            return(
                                                <Link key={link.id} href={link.link} className={styles.link}>{link.title}</Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}