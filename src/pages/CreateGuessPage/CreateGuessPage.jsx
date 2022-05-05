import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import styles from './CreateGuessPage.module.css'
import QuestionsList from '../../components/QuestionsList/QuestionsList'
import GuessCreation from '../../components/GuessCreation/GuessCreation'
import Button from '../../components/UI/Buttons/Button'
import cn from 'classnames'
import ModalNewGuess from '../../components/ModalNewGuess'
import { useParams } from 'react-router-dom'

const CreateGuessPage = () => {
  const [savedQuestions, setSavedQuestions] = useState([])
  const [initLoadCompleted, setInitLoadCompleted] = useState(false)
  const [modalNewGuessActive, setModalNewGuessActive] = useState(false)
  const [indexOfDeletedQuestion, setIndexOfDeletedQuestion] = useState(null)

  useEffect(() => {
    if (savedQuestions.length === 0) {
      const storageData = JSON.parse(localStorage.getItem('savedQuestions'))
      if (storageData) {
        setSavedQuestions(storageData)
      }
    }
    setInitLoadCompleted(true)
  }, [])

  const func = () => {}
  const newGuessModalHandler = () => setModalNewGuessActive(true)

  return (
    <>
      <ModalNewGuess
        modalNewGuessActive={modalNewGuessActive}
        setModalNewGuessActive={setModalNewGuessActive}
      />

      <Header pageTitle="Создание квиза">
        <div className={styles.headerButtons}>
          <Button onClick={func} type="button" text="Сохранить игру" size="small" bgcolor="green" />
          <Button type="button" text="Профиль" size="small" bgcolor="white" />
        </div>
      </Header>
      <main className={cn(styles.main, modalNewGuessActive && styles.blurred)}>
        <QuestionsList
          savedQuestions={savedQuestions}
          setSavedQuestions={setSavedQuestions}
          setIndexOfDeletedQuestion={setIndexOfDeletedQuestion}
        />
        <GuessCreation
          initLoadCompleted={initLoadCompleted}
          savedQuestions={savedQuestions}
          setSavedQuestions={setSavedQuestions}
          indexOfDeletedQuestion={indexOfDeletedQuestion}
        />
      </main>
    </>
  )
}

export default CreateGuessPage
