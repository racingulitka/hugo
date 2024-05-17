import React, {useState} from 'react'
import styles from './Favourites.modules.scss'

export default function Favourites(){

    const [favouritesList, setFavouritesList] = useState<number[]>([])

    if(favouritesList.length === 0){
        return(
            <p className={styles.emptyList}>В избранное пока ничего не добавлено</p>
        )
    }
    return(
        <div className={styles.wrapper}>lll</div>
    )
}