import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import styles from './CreateGuessPage.module.css'
import QuestionsList from '../../components/QuestionsList/QuestionsList'
import GuessCreation from '../../components/GuessCreation/GuessCreation'
import Button from '../../components/UI/Buttons/Button'
import cn from 'classnames'
import ModalNewGuess from '../../components/ModalNewGuess'
import { v4 as uuid } from 'uuid'
import Loader from '../../components/UI/Loader/Loader'
import { isTitleValid } from '../../utils/validators'

const CreateGuessPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [savedQuestions, setSavedQuestions] = useState([])
  const [initLoadCompleted, setInitLoadCompleted] = useState(false)
  const [indexOfDeletedQuestion, setIndexOfDeletedQuestion] = useState(null)
  const [gameTitle, setGameTitle] = useState('')

  // Modals
  const [modalNewGuessActive, setModalNewGuessActive] = useState(false)
  const [modalValidError, setModalValidError] = useState(null)

  useEffect(() => {
    if (savedQuestions.length === 0) {
      const storageData = JSON.parse(localStorage.getItem('savedQuestions'))
      if (storageData) {
        setSavedQuestions(storageData)
      }
    }
    setInitLoadCompleted(true)
  }, [])

  const newGuessModalHandler = () => setModalNewGuessActive(true)

  const createNewGuessHandler = async e => {
    e.preventDefault()

    if (isTitleValid(gameTitle) === false) {
      setModalValidError('Введите название (минимум 5 символов)')
      return
    }

    console.log(savedQuestions)

    // setIsLoading(true)
    // const result = {
    //   id: uuid(),
    //   gameTitle,
    //   answers: [...answersData],
    //   correctAnswer: selectedAnswer,
    //   imagePath: null,
    // }
    // try {
    //   if (questionImageFile) {
    //     const questionImagePath = `${uuid()}-${questionImageFile.name}`
    //     await supabase.storage.from('images').upload(questionImagePath, questionImageFile)
    //     result.imagePath = questionImagePath
    //     console.log('Image saved in supabase')
    //   }
    //   await supabase.storage.from('quizes').upload(result)
    // } catch (error) {
    //   console.log(error)
    // } finally {
    //   setIsLoading(false)
    // }
  }

  return (
    <>
      {isLoading && <Loader />}

      <ModalNewGuess
        modalNewGuessActive={modalNewGuessActive}
        setModalNewGuessActive={setModalNewGuessActive}
        savedQuestions={savedQuestions}
        gameTitle={gameTitle}
        setGameTitle={setGameTitle}
        createNewGuessHandler={createNewGuessHandler}
        modalValidError={modalValidError}
        setModalValidError={setModalValidError}
      />

      <Header pageTitle="Создание квиза">
        <div className={styles.headerButtons}>
          <Button
            onClick={newGuessModalHandler}
            type="button"
            text="Сохранить игру"
            size="small"
            bgcolor="green"
          />
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
