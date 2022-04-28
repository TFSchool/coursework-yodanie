import React from 'react'
import circleQuestionImage from './question.png'
import quoteImage from './quote.png'

import styles from './MainPage.module.css'
import Button from '../../components/Buttons/Button'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <div className={`${styles.circle} ${styles.circleYellow}`}></div>
      <div className={`${styles.circle} ${styles.circlePink}`}>
        <img className={styles.circleQuestion} src={circleQuestionImage} width="220" height="270" />
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
          <Button>Присоединиться</Button>
        </form>
      </div>

      <div className={styles.auth}>
        <Link to="create-guess">Создать квиз</Link>
        <Link to="guess-play">Поиграть в квиз</Link>
        <button>Войти</button>
        <button>Зарегестрироваться</button>
      </div>
    </main>
  )
}

export default MainPage
