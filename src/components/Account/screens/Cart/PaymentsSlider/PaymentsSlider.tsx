import React, { useRef, useState } from 'react'
import styles from './PaymentsSlider.module.scss'
import cn from 'classnames'
import arrowLeftIcon from './assets/arrowLeftIcon.svg'
import Image from 'next/image'
import { paymentMethods, PaymentMethods } from './PaymentsSlider.config'

export default function PaymentsSlider({
    selectedPaymentMethod,
    setSelectedPaymentMethod,
}: {
    selectedPaymentMethod: number | null,
    setSelectedPaymentMethod: React.Dispatch<React.SetStateAction<number | null>>
}) {

    const sliderListRef = useRef<HTMLDivElement>(null)
    const sliderBodyRef = useRef<HTMLDivElement>(null)
    const [sliderPosition, setSliderPosition] = useState<number>(0)

    const onSlideRight = () => {
        if (sliderBodyRef.current && sliderListRef.current) {
            const sliderBodyWidth = sliderBodyRef.current?.offsetWidth
            const sliderListWidth = sliderListRef.current?.offsetWidth
            const canISlide = sliderListWidth + sliderPosition - 184 >= (sliderBodyWidth - 40)
            canISlide && setSliderPosition(prev => prev - 184)
        }
    }

    const onSlideLeft = () => {
        if (sliderBodyRef.current && sliderListRef.current) {
            const sliderListOffset = sliderListRef.current?.offsetLeft
            const canISlide = sliderListOffset < -183
            canISlide && setSliderPosition(prev => prev + 184)
        }
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.title}>Способ оплаты</p>
                <div className={styles.buttons}>
                    <div
                        className={styles.button}
                        onClick={() => onSlideLeft()}
                    >
                        <Image src={arrowLeftIcon} alt='arrow left' className={styles.buttonIcon} />
                    </div>
                    <div
                        className={styles.button}
                        onClick={() => onSlideRight()}
                    >
                        <Image src={arrowLeftIcon} alt='arrow left' className={styles.buttonIconRight} />
                    </div>
                </div>
            </div>
            <div
                className={styles.sliderBody}
                ref={sliderBodyRef}
            >
                <div
                    className={styles.sliderBodyList}
                    style={{ left: `${sliderPosition}px` }}
                    ref={sliderListRef}
                >
                    {
                        paymentMethods.map(method => {
                            return (
                                <div
                                    key={method.id}
                                    className={cn(styles.sliderBodyListItem, method.id === selectedPaymentMethod && styles.sliderBodyListItemActive)}
                                    onClick={() => setSelectedPaymentMethod(method.id)}
                                >
                                    <method.icon isActive={method.id === selectedPaymentMethod} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}