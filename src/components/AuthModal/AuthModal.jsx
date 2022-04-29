import React, { useState } from 'react'
import styles from './AuthModal.module.css'

const AuthModal = ({ authModalActive, setAuthModalActive }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuthSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <div
        className={
          authModalActive ? `${styles.modalWrapper} ${styles.active}` : styles.modalWrapper
        }
        onClick={() => setAuthModalActive(false)}
      >
        <div className={styles.auth} onClick={e => e.stopPropagation()}>
          <button className={styles.closeModal} onClick={() => setAuthModalActive(false)}></button>
          <h1 className={styles.title}>Вход в личный кабинет</h1>

          <form autoComplete="false" className={styles.form} onSubmit={handleAuthSubmit}>
            <div className={styles.inputLabel}>Введите Email</div>
            <input
              className={styles.input}
              placeholder="Ваш Email"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className={styles.inputLabel}>Введите пароль</div>
            <input
              className={styles.input}
              placeholder="Ваш пароль"
              type="password"
              name="password"
              autocomplete="new-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <div className={styles.authButtonWrapper}>
              <button className={styles.authButton} type="submit">
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AuthModal
