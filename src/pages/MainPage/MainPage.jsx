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
              type="number"
              placeholder="Введите код доступа"
            />
            <MyLink
              to={`guess-play/${pincode}`}
              text="Присоединиться"
              bgcolor="violet"
              size="big"
            />
          </form>
        </div>
        <div className={styles.auth}>
          <Button onClick={authModalHandler} text="Войти" bgcolor="violet" size="medium" />
          <Button onClick={signupModalHandler} text="Регистрация" bgcolor="green" size="medium" />

          <Link to="magic-link">MagicLink</Link>
          <Link to="create-guess">Создать квиз</Link>
          <Link to="profile">Профиль</Link>
        </div>
      </main>
    </>
  )
}

export default MainPage
