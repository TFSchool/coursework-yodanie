import React from 'react'
import styles from './ProfilePage.module.css'
import Header from '../../components/Header/Header'
import QuestionMark from './questionMark.png'
import GuessList from '../../components/GuessList/GuessList'

const ProfilePage = () => {
  return (
    <>
      <Header pageName="Привет, ${юзер}">
        <div className={styles.buttons}>
          <button>Создать квиз</button>
          <button>Выход</button>
        </div>
      </Header>
      <main className={styles.mainPage}>
        <div className={`${styles.circle} ${styles.circlePink}`}></div>
        <div className={`${styles.circle} ${styles.circleGreen}`}>
          <img className={styles.questionMark} src={QuestionMark} />
        </div>

        <GuessList />
      </main>
    </>
  )
}

export default ProfilePage
