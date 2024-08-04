import React, { useState, useEffect } from 'react'
import styles from './MobileSelectBlock.module.scss'
import arrowDown from './assets/arrowDown.svg'
import Image from 'next/image'
import cn from 'classnames'
import { sortArr } from './MobileSelectBlock.config'
import { Sheet } from 'react-modal-sheet'
import MobileModalHeader from './MobileModalHeader/MobileModalHeader'

export default function MobileSelectBlock({
    isCarBrandSelectActive,
    setCarBrandSelectActive,
}: {
    isCarBrandSelectActive: boolean,
    setCarBrandSelectActive: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const [isSortOpen, setSortOpen] = useState<boolean>(false)
    const [sortSelect, setSortSelect] = useState<number>(1)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Element;
            if (!target.closest(`.${styles.list}`)) {
                setSortOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSortOpen]);

    return (
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
                {sortArr.find(item => item.id === sortSelect)?.title}
                <Image src={arrowDown} alt='arrow down' className={cn(styles.arrow, isSortOpen && styles.arrowRotate)} />
                <Sheet
                    isOpen={isSortOpen}
                    onClose={() => setSortOpen(false)}
                    detent='content-height'
                >
                    <Sheet.Container>
                        <Sheet.Header>
                            <MobileModalHeader backgroundColor='#252525' />
                        </Sheet.Header>
                        <Sheet.Content>
                            {
                                <div className={cn(styles.list, styles.listActive)}>
                                    {
                                        sortArr.map(item => {
                                            return (
                                                <div className={styles.selectItem} key={item.id} onClick={() => setSortSelect(item.id)}>
                                                    {item.title}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </Sheet.Content>
                    </Sheet.Container>
                </Sheet>
            </div>
            {
                isSortOpen && <div className={styles.overlay}></div>
            }
        </div>
    )
}