import React, { useEffect, useState } from 'react'
import Answers from '../Answers/Answers'
import Button from '../UI/Buttons/Button'
import styles from './GuessCreation.module.css'
import cn from 'classnames'
import { v4 as uuid } from 'uuid'
import validateError from './validation'
import { useNavigate, useParams } from 'react-router-dom'

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
  const [successMessage, setSuccessMessage] = useState(null)
  const urlParams = useParams()
  const navigate = useNavigate()

  const clearUserMessages = () => (setValidationError(null), setSuccessMessage(null))

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

  const func = () => console.log(urlParams.id)

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
  const handleSelectAnswer = e => {
    clearUserMessages()
    e.currentTarget.name === selectedAnswer
      ? setSelectedAnswer(null)
      : setSelectedAnswer(e.currentTarget.name)
  }

  const newQuestionHandler = e => {
    e.preventDefault()

    const error = validateError(questionTitle, answersData, selectedAnswer)
    if (error) {
      setValidationError(error)
      return
    }
    const newQuestion = {
      questionTitle,
      answersData,
      correctAnswer: selectedAnswer,
      questionImagePreview,
    }
    if (urlParams.id) {
      newQuestion.id = urlParams.id
      const editingIndex = savedQuestions.findIndex(q => q.id === urlParams.id)
      const newData = [...savedQuestions]
      newData[editingIndex] = newQuestion
      setSavedQuestions(newData)
      localStorage.setItem('savedQuestions', JSON.stringify(newData))
      setSuccessMessage('Изменения успешно сохранены!')
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
          <Button type="submit" text="Сохранить вопрос" size="small" bgcolor="yellow" />
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
              <img className={styles.guessPicture} src={questionImagePreview} alt="" />
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

        <div
          className={cn(
            styles.userMessage,
            validationError && styles.errorActive,
            successMessage && styles.successActive
          )}
        >
          {validationError || successMessage || 'исправляем'}
        </div>

        <Answers
          creation={true}
          handleAnswerInput={handleAnswerInput}
          handleSelectAnswer={handleSelectAnswer}
          answersData={answersData}
          selectedAnswer={selectedAnswer}
        />
      </form>
    </>
  )
}

export default GuessCreation
