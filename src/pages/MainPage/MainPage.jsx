import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthModal from '../../components/AuthModal/AuthModal'
import LinkButton from '../../components/LinkButton/LinkButton'
import styles from './MainPage.module.css'
import QuestionMark from './questionMark.png'
import quoteImage from './quote.png'

const MainPage = () => {
  const [authModalActive, setAuthModalActive] = useState(false)

  return (
    <>
      <AuthModal authModalActive={authModalActive} setAuthModalActive={setAuthModalActive} />

      <main
        className={
          authModalActive ? `${styles.mainPageBlurred} ${styles.mainPage}` : styles.mainPage
        }
      >
        <div className={`${styles.circle} ${styles.circleYellow}`}></div>
        <div className={`${styles.circle} ${styles.circlePink}`}>
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
          <form className={styles.form} action="post">
            <input className={styles.pincode} type="number" placeholder="Введите код доступа" />
            <LinkButton to="guess-play" text="Присоединиться" />
          </form>
        </div>
        <div className={styles.auth}>
          <button onClick={() => setAuthModalActive(true)}>Войти</button>
          <Link to="magic-link">MagicLink</Link>
          <Link to="signup">Регистрация</Link>
          <Link to="guess-play">Поиграть</Link>
          <Link to="create-new-guess">Создать квиз</Link>
          <Link to="profile">Профиль</Link>
        </div>
      </main>
    </>
  )
}

export default MainPage
