import React from 'react'
import styles from './LandingPageBrief.module.scss'
import RedBorderButton from '@/components/common/RedBorderButton/RedBorderButton'
import RedBorderButtonMobile from '@/components/common/RedBorderButtonMobile/RedBorderButtonMobile'

export default function LandingPageBrief({
    isMobile,
}: {
    isMobile: boolean,
}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.textFlex}>
                    <div className={styles.titles}>
                        <h2>БРИФУЕМ УСТНО</h2>
                        <p>ЧТОБЫ НИЧЕГО НЕ УПУСТИТЬ</p>
                    </div>
                    <p className={styles.text}>
                        Практический опыт показывает, что курс на социально-ориентированный национальный проект
                        напрямую зависит от ключевых компонентов планируемого обновления!
                        <br></br>Разнообразный и богатый опыт постоянное <br></br>информационно-техническое обеспечение
                    </p>
                </div>
                <p className={styles.questions}>МИНИМУМ<br></br>117 ВОПРОСОВ</p>
                {
                    isMobile ?
                        <RedBorderButtonMobile
                            height={55}
                            fontSize={12}
                        >
                            СДЕЛАТЬ ВСЁ ХОРОШО
                        </RedBorderButtonMobile>
                        :
                        <RedBorderButton
                            width={435}
                            height={90}
                            fontSize={20}
                        >
                            СДЕЛАТЬ ВСЁ ХОРОШО
                        </RedBorderButton>
                }
            </div>
        </div>
    )
}