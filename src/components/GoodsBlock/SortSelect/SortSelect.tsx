import React, { useState } from 'react'
import styles from './SortSelect.module.scss'
import { sortArr } from '@/components/MainContentVehicles/MobileSelectBlock/MobileSelectBlock.config'
import Image from 'next/image'
import arrow from './assets/arrow.svg'
import cn from 'classnames'

export default function SortSelect({
    sortStatus,
    setSortStatus,
}: {
    sortStatus: number,
    setSortStatus: React.Dispatch<React.SetStateAction<number>>,
}) {

    const [isOpen, setOpen] = useState<boolean>(false)
    const activeTitle = sortArr.find(item => item.id === Number(sortStatus))?.title

    return (
        <div
            className={styles.wrapper}
            onClick={() => setOpen(prev => !prev)}
        >
            {activeTitle}
            <Image src={arrow} alt='arrow' className={cn(styles.image, isOpen && styles.imageOpen)} />
            {
                isOpen &&
                <div className={styles.sortList}>
                    {
                        sortArr.map(item => {
                            return (
                                <div
                                    className={styles.sortItem}
                                    key={item.id}
                                    onClick={() => setSortStatus(item.id)}
                                >
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}