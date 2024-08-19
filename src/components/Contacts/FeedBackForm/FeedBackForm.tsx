import React, { ChangeEvent, useState } from 'react'
import styles from './FeedBackForm.module.scss'
import PhoneNumberInput from './PhoneNumberInput/PhoneNumberInput'
import { checkBoxesArr } from './FeedBackForm.config'
import CheckBox from './CheckBox/CheckBox';
import Link from 'next/link'
import {sendData} from './utils/sendData'

export interface Info {
    name: string,
    project: string,
    phoneNumber:string,
    checkBoxesActive:number[],
}

export default function FeedBackForm({
    isMobile,
}:{
    isMobile:boolean,
}) {

    const [info, setInfo] = useState<Info>({
        name: '',
        project: '',
        phoneNumber:'',
        checkBoxesActive:[],
    })

    const onNameInput = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const filteredValue = value.replace(/[^a-zA-Zа-яА-Я]/g, '')
        const prevInfo = { ...info }
        setInfo({ ...prevInfo, name: filteredValue })
    }
    const onProjectInput = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const filteredValue = value.replace(/[^a-zA-Zа-яА-Я]/g, '')
        const prevInfo = { ...info }
        setInfo({ ...prevInfo, project: filteredValue })
    }

    const onPhoneInput = (value:string) => {
        const prevInfo = {...info}
        setInfo({...prevInfo, phoneNumber:value})
    }

    const onCheckBoxClick = (id:number) => {
        const checkToActive = info.checkBoxesActive.find(item => item === id)
        if(checkToActive){
            const checkBoxesActive = info.checkBoxesActive.filter(item => item !== id)
            setInfo({...info, checkBoxesActive})
        } else {
            const checkBoxesActive = [...info.checkBoxesActive, id]
            setInfo({...info, checkBoxesActive})
        }
    }

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Вы всегда можете связаться с нами по вопросам сотрудничества</h3>
            <div className={styles.contactsBlock}>
                <p className={styles.aboutPerson}>Расскажите подробнее о себе и о том, чем вы занимаетесь</p>
                <div className={styles.nameAndProject}>
                    <input
                        type='text'
                        placeholder='Ваше имя'
                        className={styles.name}
                        max={30}
                        value={info.name}
                        onChange={(event) => onNameInput(event)}
                    />
                    <input
                        type='text'
                        placeholder='Название проекта'
                        className={styles.name}
                        max={30}
                        value={info.project}
                        onChange={(event) => onProjectInput(event)}
                    />
                </div>
                <PhoneNumberInput value={info.phoneNumber} onChange={onPhoneInput}/>
            </div>
            <div className={styles.howCanWeHelpYou}>
                <h4>Чем мы сможем вам помочь?</h4>
                <div className={styles.checkBoxesBlock}>
                    {
                        checkBoxesArr.map(checkBox => {
                            return(
                                <CheckBox
                                    key={checkBox.id}
                                    isChecked={info.checkBoxesActive.includes(checkBox.id)}
                                    setChecked={onCheckBoxClick}
                                    id={checkBox.id}
                                >{checkBox.title}</CheckBox>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.footer}>
                <button
                    onClick={() => sendData(info)}
                >
                    Связаться
                </button>
                <p>Нажимая на кнопку, вы соглашаетесь с {isMobile && <br></br>}<Link href='/' className={styles.link}>политикой конфиденциальности</Link></p>
            </div>
        </div>
    )
}