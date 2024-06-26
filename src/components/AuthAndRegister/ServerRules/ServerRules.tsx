import React from 'react'
import styles from './ServerRules.module.scss'
import { Screens } from '../AuthAndRegister'
import guardIcon from './assets/guardIcon.png'
import Image from 'next/image'

export default function ServerRules({
    setActiveScreen,
}: {
    setActiveScreen: React.Dispatch<React.SetStateAction<keyof Screens>>
}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftBlock}>
                <h3 className={styles.title}>Конфиденциальность и Условия использования </h3>
                <div className={styles.scrollerContainer}>
                    <div className={styles.scroller}>
                        <p className={styles.text}>Таким образом, курс на социально-ориентированный национальный проект обеспечивает актуальность форм воздействия? Равным образом новая модель организационной деятельности способствует повышению актуальности дальнейших направлений развитая системы массового участия? Не следует, однако, забывать о том, что новая модель организационной деятельности требует от нас системного анализа всесторонне сбалансированных нововведений.</p>
                        <p className={styles.subtitle}>Контроль над данными</p>
                        <p className={styles.text}>Не следует, однако, забывать о том, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки экономической целесообразности принимаемых решений? Практический опыт показывает, что курс на социально-ориентированный.Не следует, однако, забывать о том, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки экономической целесообразности принимаемых решений? Практический опыт показывает, что курс на социально-ориентированный.</p>
                    </div>
                </div>
                <div className={styles.buttonBlock}>
                    <p
                        className={styles.cancel}
                        onClick={() => setActiveScreen('reg')}
                    >
                        Отмена
                    </p>
                    <button
                        className={styles.accept}
                    >
                        Принимаю
                    </button>
                </div>
            </div>
            <div className={styles.rightBlock}>
                <Image src={guardIcon} alt='shield image' style={{ width: '231px', height: 'auto' }} />
                <p className={styles.shieldText}>Вы сами решаете какие данные отправляются в Hugo и как они используются.</p>
            </div>
        </div>
    )
}