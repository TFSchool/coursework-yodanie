import { useState } from 'react'
import Answers from '../Answers/Answers'
import cn from 'classnames'
import styles from './GuessGameplay.module.css'
import Button from '../UI/Buttons/Button'
import Surrender from './Surrender'

const GuessGameplay = ({ gameData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isSurrender, setIsSurrender] = useState(false)

  const selectAnswerHandler = e => {
    e.preventDefault()
    e.currentTarget.name === selectedAnswer
      ? setSelectedAnswer(null)
      : setSelectedAnswer(e.currentTarget.name)
  }

  const surrenderHandler = () => {
    setIsSurrender(true)
    setTimeout(() => {
      setIsSurrender(false)
    }, 5000)
  }

  const questionData = gameData.questions[0]

  return (
    <>
      {isSurrender && <Surrender />}

      <div className={styles.guessGameplay}>
        <h1 className={styles.questionTitle}>{questionData.questionTitle}</h1>
        <div className={styles.guessImageWrapper}>
          <img
            className={styles.guessPicture}
            src={questionData.imageUrl}
            alt={questionData.questionTitle}
          />
        </div>

        <div className={styles.actions}>
          <Button
            text="Сдаться"
            onClick={surrenderHandler}
            size="small"
            bgcolor="white"
            customStyle="spacing"
          />
          <Button
            text="Ответить"
            onClick={surrenderHandler}
            size="small"
            bgcolor="green"
            customStyle="spacing"
          />
        </div>

        <Answers
          gameplay={true}
          selectAnswerHandler={selectAnswerHandler}
          questionData={questionData}
          selectedAnswer={selectedAnswer}
        />
      </div>
    </>
  )
}

export default GuessGameplay
