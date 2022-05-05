import React from 'react'
import QuestionsListItem from '../QuestionsListItem/QuestionsListItem'
import styles from './QuestionsList.module.css'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

const QuestionsList = ({ savedQuestions, setSavedQuestions, setIndexOfDeletedQuestion }) => {
  return (
    <>
      <section className={styles.questionsList}>
        {savedQuestions.length > 0 ? (
          savedQuestions.map((question, index) => (
            <NavLink
              to={`/create-guess/question/${question.id}`}
              key={question.id}
              className={({ isActive }) => cn(styles.navlink, isActive && styles.activeLink)}
            >
              <QuestionsListItem
                key={question.id}
                id={question.id}
                number={index + 1}
                title={question.questionTitle}
                image={question.questionImagePreview}
                savedQuestions={savedQuestions}
                setSavedQuestions={setSavedQuestions}
                setIndexOfDeletedQuestion={setIndexOfDeletedQuestion}
              />
            </NavLink>
          ))
        ) : (
          <div className={styles.info}>Список вопросов пуст</div>
        )}

        <NavLink to="/create-guess" className={cn(styles.navlink, styles.addNewButton)}></NavLink>
      </section>
    </>
  )
}

export default QuestionsList
