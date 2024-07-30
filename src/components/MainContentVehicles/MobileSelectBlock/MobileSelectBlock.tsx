import React, {useState} from 'react'
import styles from './MobileSelectBlock.module.scss'
import arrowDown from './assets/arrowDown.svg'
import Image from 'next/image'
import cn from 'classnames'
import { sortArr } from './MobileSelectBlock.config'

export default function MobileSelectBlock({
    isCarBrandSelectActive,
    setCarBrandSelectActive,
}:{
    isCarBrandSelectActive:boolean,
    setCarBrandSelectActive:React.Dispatch<React.SetStateAction<boolean>>
}){

    const [isSortOpen, setSortOpen] = useState<boolean>(false)
    console.log(isCarBrandSelectActive)

    return(
        <div className={styles.wrapper}>
            <div
                className={styles.carBrandOpen}
                onClick={() => setCarBrandSelectActive(!isCarBrandSelectActive)}
            >
                Автомобиль
                <Image src={arrowDown} alt='arrow down' className={cn(styles.arrow, isCarBrandSelectActive && styles.arrowRotate)} />
            </div>
            <div
                className={styles.carBrandOpen}
                onClick={() => setSortOpen(prev => !prev)}
            >
                Популярное
                <Image src={arrowDown} alt='arrow down' className={cn(styles.arrow, isSortOpen && styles.arrowRotate)} />
                <div className={cn(styles.list, isSortOpen && styles.listActive)}>
                    {
                        sortArr.map(item => {
                            return(
                                <div className={styles.selectItem} key={item.id}>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}