import cn from 'classnames'
import { useEffect, useState } from 'react'
import GuessCreation from '../../components/GuessCreation/GuessCreation'
import Header from '../../components/Header/Header'
import ModalNewGuess from '../../components/ModalNewGuess'
import Nav from '../../components/Nav/Nav'
import QuestionsList from '../../components/QuestionsList/QuestionsList'
import Button from '../../components/UI/Buttons/Button'
import Loader from '../../components/UI/Loader/Loader'
import { supabase } from '../../supabaseClient'
import styles from './CreateGuessPage.module.css'

const SUPABASE_IMAGES_STORAGE_URL =
  'https://cryqluuukumkkiztlbng.supabase.co/storage/v1/object/public/images'

const CreateGuessPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [savedQuestions, setSavedQuestions] = useState([])
  const [initLoadCompleted, setInitLoadCompleted] = useState(false)
  const [indexOfDeletedQuestion, setIndexOfDeletedQuestion] = useState(null)
  const [gameTitle, setGameTitle] = useState('')
  const [modalNewGuessActive, setModalNewGuessActive] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const user = supabase.auth.user()

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

    const trimmedTitle = gameTitle.trim()
    if (trimmedTitle.length === 0) {
      setErrorMessage('Введите название')
      setGameTitle(trimmedTitle)
      return
    }
    if (savedQuestions.length === 0) {
      setErrorMessage('Вы должны создать хотя бы один вопрос')
      return
    }

    const questionsData = savedQuestions.reduce((acc, question) => {
      const result = {
        id: question.id,
        answersData: question.answersData,
        correctAnswer: question.correctAnswer,
        questionTitle: question.questionTitle,
        imageUrl:
          question.questionImageName &&
          `${SUPABASE_IMAGES_STORAGE_URL}/${question.questionImageName}`,
        imageName: question.questionImageName,
      }
      acc.push(result)
      return acc
    }, [])

    const gameData = {
      gameTitle: trimmedTitle,
      questions: questionsData,
      userId: user.id,
    }

    setIsLoading(true)
    try {
      for (const question of savedQuestions) {
        if (question.questionImageName) {
          const imgName = question.questionImageName
          const image64 = await fetch(question.questionImagePreview)
          const blob = await image64.blob()
          const imageFile = new File([blob], imgName, { type: 'image' })
          await supabase.storage.from('images').upload(imgName, imageFile)
        }
      }
      await supabase.from('games').insert(gameData)
    } catch (err) {
      console.log(err)
    } finally {
      localStorage.removeItem('savedQuestions')
      setSavedQuestions([])
      setGameTitle('')
      setSuccessMessage('Вы успешно создали игру!')
      setIsLoading(false)
    }
  }

  const modalNewGuessHandler = () => {
    setModalNewGuessActive(true)
    setErrorMessage(null)
    setSuccessMessage(null)
  }

  return (
    <>
      {isLoading && <Loader />}

      <ModalNewGuess
        modalNewGuessActive={modalNewGuessActive}
        setModalNewGuessActive={setModalNewGuessActive}
        gameTitle={gameTitle}
        setGameTitle={setGameTitle}
        createNewGuessHandler={createNewGuessHandler}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        successMessage={successMessage}
      />

      <Header pageTitle="Создание квиза">
        <Nav currentPage="create-guess">
          <Button
            onClick={modalNewGuessHandler}
            text="Сохранить квиз"
            size="small"
            customStyle="spacing"
            bgcolor="green"
            type="button"
          />
        </Nav>
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
