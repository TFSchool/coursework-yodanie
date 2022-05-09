import { useState } from 'react'
import Answers from '../Answers/Answers'
import cn from 'classnames'
import styles from './GuessGameplay.module.css'
import Button from '../UI/Buttons/Button'
import Surrender from './Surrender'
import Spinner from '../UI/Loader/cube-loader.svg'
import ImagePlaceHolder from '../../assets/icons/picture3.svg'

const GuessGameplay = ({
  isBlurred,
  gameData,
  totalQuestions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  setCorrectCounter,
}) => {
  const [imageIsLoading, setImageIsLoading] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isSurrender, setIsSurrender] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const questionData = gameData.questions[currentQuestionIndex]

  const selectAnswerHandler = e => {
    e.preventDefault()
    setErrorMessage(null)
    e.currentTarget.name === selectedAnswer
      ? setSelectedAnswer(null)
      : setSelectedAnswer(e.currentTarget.name)
  }
  const surrenderHandler = () => {
    setIsSurrender(true)
    setTimeout(() => {
      setIsSurrender(false)
    }, 2000)
  }
  const imgOnloadHandler = () => {
    setImageIsLoading(false)
  }

  const submitAnswerHandler = () => {
    if (selectedAnswer === null) {
      setErrorMessage('Выберите вариант ответа')
      return
    }
    if (questionData.correctAnswer === selectedAnswer) {
      setCorrectCounter(prev => prev + 1)
    }
    setSelectedAnswer(null)
    setCurrentQuestionIndex(prev => prev + 1)
    setImageIsLoading(true)
  }

  return (
    <>
      <main className={cn(styles.guessGameplay, isBlurred && styles.blurred)}>
        {isSurrender && <Surrender />}
        <div className={styles.info}>
          <div className={styles.totalQuestions}>{`${
            currentQuestionIndex + 1
          }/${totalQuestions}`}</div>
          <Button
            text="Сдаться"
            onClick={surrenderHandler}
            size="small"
            bgcolor="white"
            customStyle="spacing"
          />
        </div>

        <h1 className={styles.questionTitle}>{questionData.questionTitle}</h1>
        <div className={styles.guessImageWrapper}>
          {questionData.imageUrl ? (
            <>
              {imageIsLoading && <img src={Spinner} alt="sdd" className={styles.guessPicture} />}
              <img
                onLoad={imgOnloadHandler}
                className={styles.guessPicture}
                src={questionData.imageUrl}
                alt={questionData.questionTitle}
              />
            </>
          ) : (
            <img src={ImagePlaceHolder} className={styles.guessPicture} alt="картинка" />
          )}
        </div>

        <div className={styles.actions}>
          <div className={cn(styles.error, errorMessage && styles.errorActive)}>{errorMessage}</div>
          <Button
            text="Ответить"
            onClick={submitAnswerHandler}
            size="small"
            bgcolor="green"
            customStyle="margin-left"
          />
        </div>

        <Answers
          gameplay={true}
          selectAnswerHandler={selectAnswerHandler}
          questionData={questionData}
          selectedAnswer={selectedAnswer}
        />
      </main>
    </>
  )
}

export default GuessGameplay
