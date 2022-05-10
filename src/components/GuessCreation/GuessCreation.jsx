import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { supabase } from '../../supabaseClient'
import { validateError } from '../../utils/validators'
import Answers from '../Answers/Answers'
import Button from '../UI/Buttons/Button'
import styles from './GuessCreation.module.css'

const GuessCreation = ({
  initLoadCompleted,
  savedQuestions,
  setSavedQuestions,
  indexOfDeletedQuestion,
}) => {
  const [questionTitle, setQuestionTitle] = useState('')
  const [answersData, setAnswersData] = useState({
    answerA: '',
    answerB: '',
    answerC: '',
    answerD: '',
  })
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [questionImageFile, setQuestionImageFile] = useState(null)
  const [questionImagePreview, setQuestionImagePreview] = useState(null)
  const [validationError, setValidationError] = useState(null)
  const urlParams = useParams()
  const navigate = useNavigate()

  const clearUserMessages = () => setValidationError(null)

  const clearQuestiondata = () => {
    // Очистка полей
    setQuestionTitle('')
    setAnswersData({
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
    })
    setSelectedAnswer(null)
    setQuestionImagePreview(null)
  }

  useEffect(() => {
    clearUserMessages()
    clearQuestiondata()

    if (urlParams.id) {
      const activeQuestion = savedQuestions.find(q => q.id === urlParams.id)
      if (activeQuestion) {
        setQuestionTitle(activeQuestion.questionTitle)
        setAnswersData(activeQuestion.answersData)
        setSelectedAnswer(activeQuestion.correctAnswer)
        setQuestionImagePreview(activeQuestion.questionImagePreview)
      }
      if (initLoadCompleted && savedQuestions.length === 0) {
        navigate(`/create-guess`)
        return
      }
      if (initLoadCompleted && !savedQuestions.some(q => q.id === urlParams.id)) {
        const nextId = savedQuestions[indexOfDeletedQuestion]
          ? savedQuestions[indexOfDeletedQuestion].id
          : savedQuestions[savedQuestions.length - 1].id
        navigate(`/create-guess/question/${nextId}`)
      }
    }
  }, [urlParams.id, savedQuestions])

  useEffect(() => {
    if (questionImageFile) {
      const reader = new FileReader()
      reader.onloadend = () => setQuestionImagePreview(reader.result)
      reader.readAsDataURL(questionImageFile)
    } else {
      setQuestionImagePreview(null)
    }
  }, [questionImageFile])

  const handleTitleInput = e => (setQuestionTitle(e.target.value), clearUserMessages())
  const handleImageInput = e => (setQuestionImageFile(e.target.files[0]), clearUserMessages())
  const deleteImageHandler = () => (
    setQuestionImageFile(null), setQuestionImagePreview(null), clearUserMessages()
  )

  const handleAnswerInput = e => {
    clearUserMessages()
    setAnswersData({
      ...answersData,
      [e.target.name]: e.target.value,
    })
  }
  const selectAnswerHandler = e => {
    clearUserMessages()
    e.currentTarget.name === selectedAnswer
      ? setSelectedAnswer(null)
      : setSelectedAnswer(e.currentTarget.name)
  }

  const newQuestionHandler = e => {
    e.preventDefault()

    const trimmedTitle = questionTitle.trim()
    const trimmedAnswerValues = Object.values(answersData).map(a => a.trim())
    const trimmedAnswers = {
      answerA: trimmedAnswerValues[0],
      answerB: trimmedAnswerValues[1],
      answerC: trimmedAnswerValues[2],
      answerD: trimmedAnswerValues[3],
    }
    const error = validateError(trimmedTitle, trimmedAnswerValues, selectedAnswer)
    if (error) {
      setQuestionTitle(trimmedTitle)
      setAnswersData(trimmedAnswers)
      setValidationError(error)
      return
    }
    const newQuestion = {
      questionTitle: trimmedTitle,
      answersData: trimmedAnswers,
      correctAnswer: selectedAnswer,
      questionImagePreview,
      questionImageName: questionImagePreview && `${uuid()}-${questionImageFile.name}`,
    }
    if (urlParams.id) {
      newQuestion.id = urlParams.id
      const editingIndex = savedQuestions.findIndex(q => q.id === urlParams.id)
      const newData = [...savedQuestions]
      newData[editingIndex] = newQuestion
      setSavedQuestions(newData)
      localStorage.setItem('savedQuestions', JSON.stringify(newData))
    } else {
      newQuestion.id = uuid()
      setSavedQuestions([...savedQuestions, newQuestion])
      localStorage.setItem('savedQuestions', JSON.stringify([...savedQuestions, newQuestion]))
      navigate(`question/${newQuestion.id}`)
    }
  }

  return (
    <>
      <form className={cn(styles.guess, styles.guessCreation)} onSubmit={newQuestionHandler}>
        <input
          className={cn(styles.questionTitle, styles.questionTitleInput)}
          name="questionTitle"
          type="text"
          placeholder="Ваш вопрос..."
          value={questionTitle}
          onChange={handleTitleInput}
        />

        <div className={styles.actionButtons}>
          <Button type="submit" text="Сохранить вопрос" size="small" bgcolor="violet" />
        </div>

        {questionImagePreview ? (
          <>
            <div className={styles.guessImageWrapper}>
              <div className={styles.guessPictureButtons}>
                <label className={cn(styles.pictureButton, styles.editButton)}>
                  <input
                    className="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageInput}
                  />
                </label>
                <button
                  type="button"
                  className={cn(styles.pictureButton, styles.deleteButton)}
                  onClick={deleteImageHandler}
                ></button>
              </div>
              <div className={styles.guessPicture}>
                <img src={questionImagePreview} alt="картинка вопроса" />
              </div>
            </div>
          </>
        ) : (
          <div className={cn(styles.guessImageWrapper, styles.guessImageEditing)}>
            <p className={styles.imageText}>Вставьте картинку</p>
            <label className={styles.uploadImageButton}>
              <input
                className="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageInput}
              />
            </label>
          </div>
        )}

        <div className={cn(styles.userMessage, validationError && styles.errorActive)}>
          {validationError}
        </div>

        <Answers
          creation={true}
          handleAnswerInput={handleAnswerInput}
          selectAnswerHandler={selectAnswerHandler}
          answersData={answersData}
          selectedAnswer={selectedAnswer}
        />
      </form>
    </>
  )
}

export default GuessCreation
