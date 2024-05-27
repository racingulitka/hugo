import React, {useState} from 'react'
import styles from './QandA.module.scss'
import { selectorsArr } from './QandA.config'
import cn from 'classnames'

export default function QandA(){

    const [selectedSelector, setSelectedSelector] = useState<number>(1)

    return(
        <div className={styles.wrapper}>
            <div className={styles.selectors}>
                {
                    selectorsArr.map(selector => {
                        return(
                            <div
                            key={selector.id}
                            className={cn(styles.selector, selector.id === selectedSelector && styles.selectorActive)}
                            onClick={() => setSelectedSelector(selector.id)}
                            >
                                <div className={styles.selectorInfoBlock}>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}