import React, { useEffect } from 'react'
import styles from './Register.module.scss'
import SocialMediaAuth from '../SocialMediaAuth/SocialMediaAuth'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Screens } from '../AuthAndRegister'
import * as Yup from 'yup'

export default function Register({
    setActiveScreen,
}: {
    setActiveScreen: React.Dispatch<React.SetStateAction<keyof Screens>>
}) {

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #191919 inset !important;
            box-shadow: 0 0 0 30px #191919 inset !important;
            -webkit-text-fill-color: #fff !important;
          }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const initialValues = {
        login: '',
        password: '',
        confirmPassword: '',
        email: '',
        isInfoLetters: false,
        isServerRules: false,
    }

    const validationSchema = Yup.object({
        login: Yup.string()
            .required('Логин обязателен'),
        password: Yup.string()
            .required('Пароль обязателен'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Пароли должны совпадать')
            .required('Подтверждение пароля обязательно'),
        email: Yup.string()
            .email('Неверный формат email')
            .required('Email обязателен'),
        isInfoLetters: Yup.boolean(),
        isServerRules: Yup.boolean()
            .oneOf([true], 'Вы должны принять правила сервера'),
    })

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Регистрация</h2>
            <div className={styles.registerInvitationBlock}>
                <p className={styles.question}>У вас уже есть аккаунт?</p>
                <p
                    className={styles.toRegister}
                    onClick={() => setActiveScreen('auth')}
                >
                    Авторизоваться
                </p>
            </div>
            <div className={styles.socialBlock}>
                <p className={styles.socialText}>Зарегистрироваться с помощью</p>
                <SocialMediaAuth />
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form className={styles.form}>
                    <div className={styles.fieldContainer}>
                        <Field id="login" name="login" placeholder="Логин" className={styles.field} />
                        <ErrorMessage name="login" component="div" className={styles.error} />
                    </div>
                    <div className={styles.fieldContainer}>
                        <Field id="password" name="password" placeholder="Пароль" className={styles.field} />
                        <ErrorMessage name="password" component="div" className={styles.error} />
                    </div>
                    <div className={styles.fieldContainer}>
                        <Field id="confirmPassword" name="confirmPassword" placeholder="Подтвердите пароль" className={styles.field} />
                        <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
                    </div>
                    <div className={styles.fieldContainer}>
                        <Field id="email" name="email" type="email" placeholder="E-mail" className={styles.field} />
                        <ErrorMessage name="email" component="div" className={styles.error} />
                    </div>
                    <label className={styles.checkboxLabel} style={{ margin: '20px 0 0 0' }}>
                        <Field type="checkbox" id="isInfoLetters" name="isInfoLetters" className={styles.checkbox} />
                        <span className={styles.customCheckbox}></span>
                        Согласен принимать информационные рассылки
                    </label>
                    <label className={styles.checkboxLabel}>
                        <Field type="checkbox" id="isServerRules" name="isServerRules" className={styles.checkbox} />
                        <span className={styles.customCheckbox}></span>
                        Я ознакомился с правилами сервера и принимаю их
                        <ErrorMessage name="isServerRules" component="div" className={styles.error} />
                    </label>
                    <div className={styles.buttonBlock}>
                        <div
                            className={styles.toServerRules}
                            onClick={() => setActiveScreen('serverRules')}
                        >
                            Правила сервера
                        </div>
                        <button className={styles.button} type="submit">Войти</button>
                    </div>
                </Form>
            </Formik>
            {/* <div className={styles.lostPasswordBlock}>
                <p className={styles.lostText}>Забыли пароль?</p>
                <p
                    className={styles.lostLink}
                    onClick={() => setActiveScreen('recover')}
                >
                    Восстановить
                </p>
            </div> */}
        </div>
    )
}
