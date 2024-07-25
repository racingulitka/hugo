import React, { useEffect, useRef } from 'react'
import styles from './Hero.module.scss'
import rightArrow from './assets/rightArrow.svg'
import Image from 'next/image'
import { menuBlockArr/*, socialMediaLinksArr*/ } from './Hero.config'
import MenuBlock from './MenuBlock/MenuBlock'
import Link from 'next/link'
import HeroBottomLinks from '../common/HeroBottomLinks/HeroBottomLinks'

export default function Hero() {

    const h1Ref = useRef<HTMLDivElement | null>(null)
    //const pointerRef = useRef<HTMLDivElement | null>(null)

    const backgroundMove = (e: MouseEvent) => {
        const shift = {x:25, y:50}
        const newCoords = { x: e.clientX, y: e.clientY }
        const h1 = h1Ref.current
        if (h1) {
            h1.style.backgroundPosition = `${newCoords.x - h1.getBoundingClientRect().width - shift.x}px ${newCoords.y - h1.getBoundingClientRect().height - shift.y}px`
        }
        // const pointer = pointerRef.current
        // if(pointer){
        //     pointer.style.top = newCoords.y + 'px'
        //     pointer.style.left = newCoords.x + 'px'
        // }
    }

    useEffect(() => {
        const h1 = h1Ref.current
        if (h1) {
            h1.addEventListener('mousemove', backgroundMove)
            return () => h1.removeEventListener('mousemove', backgroundMove)
        }
    }, [])

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper} id='hero'>
                {/* <div className={styles.pointer} ref={pointerRef}></div> */}
                <h1 className={styles.h1} ref={h1Ref}>HUGO</h1>
                <div className={styles.breefBlock}>
                    <div className={styles.description}>Агентство, которое знает, что нужно каждому <span>GTA проекту:</span> продуктовый менеджмент</div>
                    <Link href='#'>
                        <button className={styles.breefButton}>
                            <span>Перейти к брифу</span>
                            <Image src={rightArrow} alt='rightArrow' className={styles.rightArrow} />
                        </button>
                    </Link>
                </div>
                <nav className={styles.menuBlock}>
                    {
                        menuBlockArr.map(block => {
                            return (
                                <MenuBlock
                                    key={block.id}
                                    text={block.title}
                                />
                            )
                        })
                    }
                </nav>
                <HeroBottomLinks />
            </div>
        </div>
    )
}