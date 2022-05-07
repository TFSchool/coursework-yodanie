import cn from 'classnames'
import { useEffect, useState } from 'react'
import GuessCreation from '../../components/GuessCreation/GuessCreation'
import Header from '../../components/Header/Header'
import ModalNewGuess from '../../components/ModalNewGuess'
import Nav from '../../components/Nav/Nav'
import QuestionsList from '../../components/QuestionsList/QuestionsList'
import Loader from '../../components/UI/Loader/Loader'
import { supabase } from '../../supabaseClient'
import styles from './CreateGuessPage.module.css'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

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

  const createNewGuessHandler = async e => {
    e.preventDefault()

    if (gameTitle.length === 0) {
      setModalValidError('Введите название')
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
        <Nav currentPage="create-guess" />
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
