import React from 'react'
import QuestionsListItem from '../QuestionsListItem/QuestionsListItem'
import styles from './QuestionsList.module.css'
import data from '../../mocks/data.json'
import AddNewQuestionButton from './AddNewQuestionButton'

const QuestionsList = ({ activeId }) => {
  // console.log(data)
  const questions = data.guesses[0].questions
  // console.log(questions)

  return (
    <section className={styles.questionsList}>
      {questions.map((question, index) => (
        <QuestionsListItem
          key={question.id}
          id={question.id}
          number={index + 1}
          title={question.questionTitle}
          activeId={activeId}
        />
      ))}

      <AddNewQuestionButton />
    </section>
  )
}

export default QuestionsList
