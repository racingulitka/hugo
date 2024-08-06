import React, { useEffect } from 'react';
import styles from './Auth.module.scss';
import SocialMediaAuth from '../SocialMediaAuth/SocialMediaAuth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Screens } from '../AuthAndRegister';

export default function Auth({
  setActiveScreen,
  isMobile,
}: {
  setActiveScreen: React.Dispatch<React.SetStateAction<keyof Screens>>,
  isMobile: boolean,
}) {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #191919 inset !important;
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
    isRemember: true,
  };

  const validationSchema = Yup.object({
    login: Yup.string().required('Введите логин'),
    password: Yup.string().required('Введите пароль'),
  });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Авторизация</h2>
      <div className={styles.registerInvitationBlock}>
        <p className={styles.question}>У вас ещё нет аккаунта?</p>
        <p className={styles.toRegister} onClick={() => setActiveScreen('reg')}>
          Зарегистрироваться
        </p>
      </div>
      {
        isMobile &&
        <div className={styles.socialBlock}>
          <p className={styles.socialText}>Войти с помощью</p>
          <SocialMediaAuth />
        </div>
      }
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
            <Field id="login" name="login" placeholder="Ваш логин" className={styles.field} />
            <ErrorMessage name="login" component="div" className={styles.error} />
          </div>
          <div className={styles.fieldContainer}>
            <Field id="password" name="password" placeholder="Ваш пароль" className={styles.field} />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <label className={styles.checkboxLabel}>
            <Field type="checkbox" id="isRemember" name="isRemember" className={styles.checkbox} />
            <span className={styles.customCheckbox}></span>
            Запомнить меня
          </label>
          <button className={styles.button} type="submit">Войти</button>
        </Form>
      </Formik>
      <div className={styles.lostPasswordBlock}>
        <p className={styles.lostText}>Забыли пароль?</p>
        <p
          className={styles.lostLink}
          onClick={() => setActiveScreen('recover')}
        >
          Восстановить
        </p>
      </div>
      {
        !isMobile &&
        <div className={styles.socialBlock}>
          <p className={styles.socialText}>Войти с помощью</p>
          <SocialMediaAuth />
        </div>
      }
    </div>
  );
}
