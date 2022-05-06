import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './MainPage.module.css'
import QuestionMark from './questionMark.png'
import quoteImage from './quote.png'
import MyLink from '../../components/UI/Buttons/MyLink'
import Button from '../../components/UI/Buttons/Button'
import cn from 'classnames'

import ModalAuth from '../../components/ModalAuth'
import ModalSignup from '../../components/ModalSignup'

const MainPage = () => {
  const [pincode, setPincode] = useState('')
  const [modalAuthActive, setModalAuthActive] = useState(false)
  const [modalSignupActive, setModalSignupActive] = useState(false)

  const pincodeHandler = e => setPincode(e.target.value)
  const authModalHandler = () => setModalAuthActive(true)
  const signupModalHandler = () => setModalSignupActive(true)

  return (
    <>
      <ModalAuth modalAuthActive={modalAuthActive} setModalAuthActive={setModalAuthActive} />
      <ModalSignup
        modalSignupActive={modalSignupActive}
        setModalSignupActive={setModalSignupActive}
      />

      <main
        className={cn(
          styles.mainPage,
          (modalAuthActive || modalSignupActive) && styles.mainPageBlurred
        )}
      >
        <div className={cn(styles.circle, styles.circleYellow)}></div>
        <div className={cn(styles.circle, styles.circlePink)}>
          <img className={styles.questionMark} src={QuestionMark} alt="question mark" />
        </div>

        <nav className={styles.nav}>
          <Button
            onClick={authModalHandler}
            text="Войти"
            bgcolor="violet"
            size="small"
            customStyle="spacing"
          />
          <Button
            onClick={signupModalHandler}
            text="Регистрация"
            bgcolor="violet"
            size="small"
            customStyle="spacing"
          />
          <MyLink
            to="magic-link"
            bgcolor="violet"
            size="small"
            text="MagicLink"
            customStyle="spacing"
          />
          <MyLink
            to="create-guess"
            bgcolor="green"
            size="small"
            text="Создать квиз"
            customStyle="spacing"
          />

          <MyLink to="profile" bgcolor="yellow" size="small" text="Профиль" customStyle="spacing" />
        </nav>

        <div className={styles.menu}>
          <img
            className={styles.quote}
            src={quoteImage}
            alt="Guess it easy!"
            width="327"
            height="181"
          />
          <div className={styles.logo}>Guessy</div>
          <form className={styles.form}>
            <input
              value={pincode}
              onChange={pincodeHandler}
              className={styles.pincode}
              type="text"
              placeholder="Введите код доступа"
            />
            <MyLink
              to={`guess-play/${pincode}`}
              text="Присоединиться"
              bgcolor="violet"
              size="medium"
              customStyle="center"
            />
          </form>
        </div>

        <footer>made by Dan</footer>
      </main>
    </>
  )
}

export default MainPage
