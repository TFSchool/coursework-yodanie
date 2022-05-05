import { useState } from 'react'
import Answers from '../Answers/Answers'
import cn from 'classnames'
import styles from './GuessGameplay.module.css'

const GuessGameplay = ({ gameData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(false)

  const handleSelect = e => {
    e.preventDefault()
    setSelectedAnswer(e.currentTarget.name)
  }

  const questionData = gameData[1]

  return (
    <div className={styles.guessGameplay}>
      <h1 className={styles.questionTitle}>{questionData.questionTitle}</h1>
      <div className={styles.guessImageWrapper}>
        <img
          className={styles.guessPicture}
          src={questionData.imagePath}
          alt={questionData.questionTitle}
        />
      </div>

      <Answers
        gameplay={true}
        handleSelect={handleSelect}
        questionData={questionData}
        selectedAnswer={selectedAnswer}
      />
    </div>
  )
}

export default GuessGameplay
