import React, { useState } from 'react'
import styles from './MagicLinkPage.module.css'
import Button from '../../components/Buttons/Button'

const MagicLinkPage = () => {
  const [email, setEmail] = useState('')

  const handleMagicLinkSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.signup}>
          <h1 className={styles.title}>MagicLink</h1>
          <div>*Авторизация по ссылке, которая придет на указанную электронную почту</div>
          <form className={styles.form} onSubmit={handleMagicLinkSubmit}>
            <div className={styles.inputLabel}>Email</div>
            <input
              className={styles.input}
              placeholder="player@mail.com"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Button type="submit" text="Отправить" size="medium" />
          </form>
        </div>
      </div>
    </>
  )
}

export default MagicLinkPage
