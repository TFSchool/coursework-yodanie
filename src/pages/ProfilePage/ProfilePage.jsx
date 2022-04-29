import React from 'react'
import GuessList from '../../components/GuessList/GuessList'
import Header from '../../components/Header/Header'
import styles from './ProfilePage.module.css'
import QuestionMark from './questionMark.png'

const ProfilePage = () => {
  return (
    <>
      <Header pageName="Привет, юзер!">
        <div className={styles.buttons}>
          <button>Создать квиз</button>
          <button>Выход</button>
        </div>
      </Header>
      <main className={styles.mainPage}>
        <div className={`${styles.circle} ${styles.circlePink}`}></div>
        <div className={`${styles.circle} ${styles.circleGreen}`}>
          <img className={styles.questionMark} src={QuestionMark} alt="question mark" />
        </div>

        <GuessList />
      </main>
    </>
  )
}

export default ProfilePage
