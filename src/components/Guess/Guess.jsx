import React, { useState } from 'react'
import Answers from '../Answers/Answers'
import AddNewImageButton from './AddNewImageButton'
import styles from './Guess.module.css'
import testImage from '../../images/london.jpg'

const Guess = ({ creation, gameplay }) => {
  const questionData = {
    id: 11,
    questionTitle: 'Capital of Britain',
    answers: ['Berlin', 'Moscow', 'London', 'Rome'],
    correctAnswer: 'London',
  }

  const [inputsData, setInputsData] = useState({
    guessTitle: '',
    answerA: '',
    answerB: '',
    answerC: '',
    answerD: '',
  })

  const [selectedAnswer, setSelectedAnswer] = useState(false)

  const handleInputChange = e => {
    console.log(inputsData)
    setInputsData({
      ...inputsData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelect = e => {
    e.preventDefault()
    setSelectedAnswer(e.currentTarget.name)
  }

  return (
    <>
      {creation && (
        <form className={`${styles.guess} ${styles.guessCreation}`}>
          <input
            className={`${styles.guessTitle} ${styles.guessTitleInput}`}
            name="guessTitle"
            type="text"
            placeholder="Ваш вопрос..."
            value={inputsData.guessTitle}
            onChange={handleInputChange}
          />

          <div className={`${styles.guessImageWrapper} ${styles.guessImageEditing}`}>
            <p className={styles.imageText}>Вставьте картинку</p>
            <AddNewImageButton />
          </div>

          <Answers
            creation={true}
            handleInputChange={handleInputChange}
            handleSelect={handleSelect}
            inputsData={inputsData}
            selectedAnswer={selectedAnswer}
          />
        </form>
      )}
      {gameplay && (
        <div className={`${styles.guess} ${styles.guessGameplay}`}>
          <h1 className={styles.guessTitle}>{questionData.questionTitle}</h1>
          <div className={styles.guessImageWrapper}>
            <img className={styles.guessPicture} src={testImage} alt={questionData.questionTitle} />
          </div>

          <Answers
            gameplay={true}
            handleSelect={handleSelect}
            questionData={questionData}
            selectedAnswer={selectedAnswer}
          />
        </div>
      )}
    </>
  )
}

export default Guess
