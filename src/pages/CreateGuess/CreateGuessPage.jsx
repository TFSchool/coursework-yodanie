import React from 'react'
import Header from '../../components/Header/Header'
import styles from './CreateGuessPage.module.css'
import QuestionsList from '../../components/QuestionsList/QuestionsList'
import Guess from '../../components/Guess/Guess'

const CreateGuess = ({ id }) => {
  return (
    <>
      <Header pageName="Создание квиза" containsButton={true} />
      <main className={styles.main}>
        <QuestionsList activeId={id} />
        <Guess creation={true} />
      </main>
    </>
  )
}

export default CreateGuess
