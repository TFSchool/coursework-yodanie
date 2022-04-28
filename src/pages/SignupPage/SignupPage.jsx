import React, { useState } from 'react'
import Button from '../../components/Buttons/Button'
import styles from './SignupPage.module.css'

// import { useAuth } from '../contexts/AuthContext'

const SignupPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSignupSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.signup}>
          <h1 className={styles.title}>Создание аккаунта</h1>

          <form className={styles.form} onSubmit={handleSignupSubmit}>
            <div className={styles.inputLabel}>Email</div>
            <input
              className={styles.input}
              placeholder="player@mail.com"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className={styles.inputLabel}>Пароль</div>
            <input
              className={styles.input}
              placeholder="Супер-секретный"
              autocomplete="off"
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className={styles.inputLabel}>Подтвердите пароль</div>
            <input
              className={styles.input}
              placeholder="И еще раз"
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={e => setPasswordConfirm(e.target.value)}
            />
            <Button type="submit" text="Зарегестрироваться" size="medium" />
          </form>
        </div>
      </div>
    </>
  )
}

export default SignupPage
