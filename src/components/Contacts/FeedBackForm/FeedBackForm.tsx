import React, { ChangeEvent, useState } from 'react'
import styles from './FeedBackForm.module.scss'
import PhoneNumberInput from './PhoneNumberInput/PhoneNumberInput'

interface Info {
    name: string,
    project: string,
    phoneNumber:string,
}

export default function FeedBackForm() {

    const [info, setInfo] = useState<Info>({
        name: '',
        project: '',
        phoneNumber:'',
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
        </div>
    )
}