import React from 'react'
import Header from '../../components/Header/Header'
import styles from './CreateGuessPage.module.css'
import QuestionsList from '../../components/QuestionsList/QuestionsList'
import Guess from '../../components/Guess/Guess'

const CreateGuess = () => {
  return (
    <>
      <Header pageName="Создание квиза">
        <div className={styles.buttons}>
          <button>Сохранить квиз</button>
          <button>Профиль</button>
        </div>
      </Header>
      <main className={styles.main}>
        <QuestionsList activeId={3} />
        <Guess creation={true} />
      </main>
    </>
  )
}

export default CreateGuess
