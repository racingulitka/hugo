import React, {ChangeEvent, useState, useEffect} from 'react'
import styles from './CarBrendSelect.module.scss'
import Image from 'next/image'
import MBIcon from './assets/MBIcon.png' //delete
import alfaRomeoIcon from './assets/alfaRomeoIcon.png' //delete
import audiIcon from './assets/audiIcon.png' //delete
import bentleyIcon from './assets/bentleyIcon.png' //delete
import bmwIcon from './assets/bmwIcon.png' //delete
import { CarsBrandArr } from './CarBrandSelect.typings'
import cn from 'classnames'

export default function CarBrandSelect(){

    const carsBrandArr:CarsBrandArr[] = [ //delete
        {
            id:1,
            icon:MBIcon,
            name:'MERCEDES-BENZ',
        },
        {
            id:2,
            icon:alfaRomeoIcon,
            name:'Alfa Romeo',
        },
        {
            id:3,
            icon:audiIcon,
            name:'Audi',
        },
        {
            id:4,
            icon:bentleyIcon,
            name:'Bentley',
        },
        {
            id:5,
            icon:bmwIcon,
            name:'bmw',
        },
        {
            id:6,
            icon:MBIcon,
            name:'MERCEDES-BENZ',
        },
        {
            id:7,
            icon:alfaRomeoIcon,
            name:'Alfa Romeo',
        },
        {
            id:8,
            icon:audiIcon,
            name:'Audi',
        },
        {
            id:9,
            icon:bentleyIcon,
            name:'Bentley',
        },
        {
            id:10,
            icon:bmwIcon,
            name:'bmw',
        },
        {
            id:11,
            icon:MBIcon,
            name:'MERCEDES-BENZ',
        },
        {
            id:12,
            icon:alfaRomeoIcon,
            name:'Alfa Romeo',
        },
        {
            id:13,
            icon:audiIcon,
            name:'Audi',
        },
        {
            id:14,
            icon:bentleyIcon,
            name:'Bentley',
        },
        {
            id:15,
            icon:bmwIcon,
            name:'bmw',
        },
    ]

    const [brandsArr, setBrandsArr] = useState<CarsBrandArr[]>([...carsBrandArr])

    const [isScrolled, setScrolled] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    const onInput = (event:ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[^a-zA-Z]/g, '')
        setInputValue(value)
    }

    useEffect(() => {
        const filteredArr = carsBrandArr.filter(item => {
            return(
                item.name.toLowerCase().includes(inputValue.toLowerCase())
            )
        })
        setBrandsArr([...filteredArr])
        inputValue.length > 0 && setScrolled(true)
        inputValue.length === 0 && setScrolled(false)
    }, [inputValue])

    return(
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Найдите нужный вам автомобиль</h3>
            <input
                type='text'
                placeholder='Найти продукт'
                onChange={(event) => onInput(event)}
                value={inputValue}
                maxLength={15}
            />
            <h4 className={styles.description}>Выберите бренд автомобиля</h4>
            <div className={cn(styles.brandsWindow, isScrolled && styles.brandsWindowScrolled)}>
                {
                    brandsArr.map(brand => {
                        return(
                            <div
                                key={brand.id}
                                className={styles.card}
                            >
                                <div className={styles.iconContainer}>
                                    <Image src={brand.icon} alt='brandIcon' className={styles.icon} />
                                </div>
                                <p className={styles.name}>{brand.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <p
                className={styles.showAll}
                onClick={() => setScrolled(prev => !prev)}
            >
                Показать все
            </p>
        </div>
    )
}