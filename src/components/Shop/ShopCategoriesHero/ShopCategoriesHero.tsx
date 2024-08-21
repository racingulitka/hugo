import React, { useEffect, useState } from 'react';
import styles from './ShopCategoriesHero.module.scss';
import rightArrow from './assets/rightArrow.svg';
import Image from 'next/image';
import {sliderArr } from './ShopCategoriesHero.config';
import Link from 'next/link';
import HeroBottomLinks from '../../common/HeroBottomLinks/HeroBottomLinks';
import { motion, useAnimation } from 'framer-motion';
import { Props } from './ShopCategoriesHero.typings';
import MenuBlock from './MenuBlock/MenuBlock';

export default function ShopCategoriesHero(props:Props) {

    const [activeText, setActiveText] = useState<number>(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveText(prev => (prev + 1) % 10)
        }, 2000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper} id='hero'>
                <h1 className={styles.h1}>{props.h1}</h1>
                <div className={styles.breefBlock}>
                    <div className={styles.description}>
                        Агентство, которое знает, что нужно каждому
                        <div className={styles.sliderBlock}>
                            <div className={styles.gtaProjectText}>GTA проекту:&nbsp;</div>
                            <div className={styles.sliderText}>
                                {
                                    sliderArr.map((item, index) => {
                                        return (
                                            <motion.div
                                                className={styles.sliderItem}
                                                key={index}
                                                
                                                initial={{ top: activeText === index ? 0 : index===9 ? '-100%' : '100%' }}
                                                animate={{ top: activeText === index ? 0 : activeText === index+1 ? '-100%' : (activeText===0 && index===activeText+9) ? '-100%' : '100%' }}
                                                transition={{ duration: index === activeText ? 0.5 : index === activeText-1 ? 0.5 :(activeText===0 && index===activeText+9) ? 0.5 : 0, type: 'spring', bounce: 0.8, mass: 0.7}}
                                            >
                                                {item}
                                            </motion.div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <Link href='#'>
                        <button className={styles.breefButton}>
                            <span>Перейти к брифу</span>
                            <Image src={rightArrow} alt='rightArrow' className={styles.rightArrow} />
                        </button>
                    </Link>
                </div>
                <nav className={styles.menuBlock}>
                    {props.menuBlockArr.map(block => (
                        <Link key={block.id} href={block.link}>
                        <MenuBlock
                            text={block.title}
                        />
                        </Link>
                    ))}
                </nav>
                <HeroBottomLinks />
            </div>
        </div>
    );
}








// без лага движения фона
// import React, { useEffect, useRef } from 'react'
// import styles from './Hero.module.scss'
// import rightArrow from './assets/rightArrow.svg'
// import Image from 'next/image'
// import { menuBlockArr/*, socialMediaLinksArr*/ } from './Hero.config'
// import MenuBlock from './MenuBlock/MenuBlock'
// import Link from 'next/link'
// import HeroBottomLinks from '../common/HeroBottomLinks/HeroBottomLinks'

// export default function Hero() {

//     const h1Ref = useRef<HTMLDivElement | null>(null)

//     const backgroundMove = (e: MouseEvent) => {
//         const shift = {x:25, y:50}
//         const newCoords = { x: e.clientX, y: e.clientY }
//         const h1 = h1Ref.current
//         if (h1) {
//             h1.style.backgroundPosition = `${newCoords.x - h1.getBoundingClientRect().width - shift.x}px ${newCoords.y - h1.getBoundingClientRect().height - shift.y}px, 0%, 0%`
//         }
//     }

//     useEffect(() => {
//         const h1 = h1Ref.current
//         if (h1) {
//             h1.addEventListener('mousemove', backgroundMove)
//             return () => h1.removeEventListener('mousemove', backgroundMove)
//         }
//     }, [])

//     return (
//         <div className={styles.mainWrapper}>
//             <div className={styles.wrapper} id='hero'>
//                 <h1 className={styles.h1} ref={h1Ref}>HUGO</h1>
//                 <div className={styles.breefBlock}>
//                     <div className={styles.description}>Агентство, которое знает, что нужно каждому <span>GTA проекту:</span> продуктовый менеджмент</div>
//                     <Link href='#'>
//                         <button className={styles.breefButton}>
//                             <span>Перейти к брифу</span>
//                             <Image src={rightArrow} alt='rightArrow' className={styles.rightArrow} />
//                         </button>
//                     </Link>
//                 </div>
//                 <nav className={styles.menuBlock}>
//                     {
//                         menuBlockArr.map(block => {
//                             return (
//                                 <MenuBlock
//                                     key={block.id}
//                                     text={block.title}
//                                 />
//                             )
//                         })
//                     }
//                 </nav>
//                 <HeroBottomLinks />
//             </div>
//         </div>
//     )
// }