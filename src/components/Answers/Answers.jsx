import React from 'react'
import styles from './Answers.module.css'
import { ReactComponent as CheckMark } from './checkMark.svg'
import cn from 'classnames'

const ANSWER_A = 'answerA'
const ANSWER_B = 'answerB'
const ANSWER_C = 'answerC'
const ANSWER_D = 'answerD'
const INPUT_PLACEHOLDER = 'Вариант ответа'

const Answers = ({
  gameplay,
  creation,
  handleAnswerInput,
  handleSelectAnswer,
  answersData,
  selectedAnswer,
  questionData,
}) => {
  const selectionClassName = selectOption =>
    selectedAnswer === selectOption
      ? `${styles.selectedAnswer} ${styles.checkMark}`
      : styles.checkMark

  return (
    <>
      {creation && (
        <div className={styles.guessAnswers}>
          <div className={cn(styles.answer, styles[ANSWER_A])}>
            <div className={styles.answerLabel}>a</div>
            <input
              name={ANSWER_A}
              value={answersData.answerA}
              onChange={handleAnswerInput}
              className={styles.answerInput}
              type="text"
              placeholder={INPUT_PLACEHOLDER}
            />
            <button
              name={ANSWER_A}
              className={styles.answerButton}
              type="button"
              onClick={handleSelectAnswer}
            >
              <CheckMark className={selectionClassName(ANSWER_A)} />
            </button>
          </div>

          <div className={cn(styles.answer, styles[ANSWER_B])}>
            <div className={styles.answerLabel}>b</div>
            <input
              name={ANSWER_B}
              value={answersData.answerB}
              className={styles.answerInput}
              onChange={handleAnswerInput}
              type="text"
              placeholder={INPUT_PLACEHOLDER}
            />
            <button
              name={ANSWER_B}
              className={styles.answerButton}
              type="button"
              onClick={handleSelectAnswer}
            >
              <CheckMark className={selectionClassName(ANSWER_B)} />
            </button>
          </div>

          <div className={cn(styles.answer, styles[ANSWER_C])}>
            <div className={styles.answerLabel}>c</div>
            <input
              name={ANSWER_C}
              value={answersData.answerC}
              className={styles.answerInput}
              onChange={handleAnswerInput}
              type="text"
              placeholder={INPUT_PLACEHOLDER}
            />
            <button
              name={ANSWER_C}
              className={styles.answerButton}
              type="button"
              onClick={handleSelectAnswer}
            >
              <CheckMark className={selectionClassName(ANSWER_C)} />
            </button>
          </div>

          <div className={cn(styles.answer, styles[ANSWER_D])}>
            <div className={styles.answerLabel}>d</div>
            <input
              name={ANSWER_D}
              value={answersData.answerD}
              className={styles.answerInput}
              onChange={handleAnswerInput}
              type="text"
              placeholder={INPUT_PLACEHOLDER}
            />
            <button
              name={ANSWER_D}
              className={styles.answerButton}
              type="button"
              onClick={handleSelectAnswer}
            >
              <CheckMark className={selectionClassName(ANSWER_D)} />
            </button>
          </div>
        </div>
      )}

      {gameplay && (
        <div className={styles.guessAnswers}>
          <div className={cn(styles.answer, styles[ANSWER_A])}>
            <div className={styles.answerLabel}>a</div>
            <div className={styles.answerOption}>{questionData.answers[0]}</div>
            <button
              name={ANSWER_A}
              className={styles.answerButton}
              type="button"
              onClick={handleSelectAnswer}
            >
              <CheckMark className={selectionClassName(ANSWER_A)} />
            </button>
          </div>

          <div className={cn(styles.answer, styles[ANSWER_B])}>
            <div className={styles.answerLabel}>b</div>
            <div className={styles.answerOption}>{questionData.answers[1]}</div>
            <button
              name={ANSWER_B}
              className={styles.answerButton}
              type="button"
              onClick={handleSelectAnswer}
            >
              <CheckMark className={selectionClassName(ANSWER_B)} />
            </button>
          </div>

          <div className={cn(styles.answer, styles[ANSWER_C])}>
            <div className={styles.answerLabel}>c</div>
            <div className={styles.answerOption}>{questionData.answers[2]}</div>
            <button
              name={ANSWER_C}
              className={styles.answerButton}
              type="button"
              onClick={handleSelectAnswer}
            >
              <CheckMark className={selectionClassName(ANSWER_C)} />
            </button>
          </div>

          <div className={cn(styles.answer, styles[ANSWER_D])}>
            <div className={styles.answerLabel}>d</div>
            <div className={styles.answerOption}>{questionData.answers[3]}</div>
            <button
              name={ANSWER_D}
              className={styles.answerButton}
              type="button"
              onClick={handleSelectAnswer}
            >
              <CheckMark className={selectionClassName(ANSWER_D)} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Answers
