import React, {useState} from 'react'
import styles from './LangSelect.module.scss'
import { langArr, LangArr } from './LangSelect.config'
import arrow from './assets/arrow.svg'
import Image from 'next/image'

export default function LangSelect(){

    const [selectedLang/*, setSelectedLang*/] = useState<LangArr>(langArr[0])

    return(
        <div className={styles.wrapper}>
            <div className={styles.selectedLang}>
                <p>{selectedLang.title}</p>
                <Image src={arrow} alt='arrow' />
            </div>
        </div>
    )
}