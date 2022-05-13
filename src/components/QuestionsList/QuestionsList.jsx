import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import QuestionsListItem from '../QuestionsListItem/QuestionsListItem'
import styles from './QuestionsList.module.css'
import btnStyles from '../../components/UI/Buttons/AddNew.module.css'

const QuestionsList = ({
  gameId,
  savedQuestions,
  setSavedQuestions,
  setIndexOfDeletedQuestion,
}) => {
  return (
    <>
      <section className={styles.questionsList}>
        {savedQuestions.length > 0 ? (
          savedQuestions.map((question, index) => (
            <NavLink
              to={
                gameId
                  ? `/edit-guess/${gameId}/question/${question.id}`
                  : `/create-guess/question/${question.id}`
              }
              key={question.id}
              className={({ isActive }) => cn(styles.navlink, isActive && styles.activeLink)}
            >
              <QuestionsListItem
                gameId={gameId}
                key={question.id}
                id={question.id}
                number={index + 1}
                title={question.questionTitle}
                image={question.imagePreview || question.imageUrl}
                savedQuestions={savedQuestions}
                setSavedQuestions={setSavedQuestions}
                setIndexOfDeletedQuestion={setIndexOfDeletedQuestion}
              />
            </NavLink>
          ))
        ) : (
          <div className={styles.info}>Список вопросов пуст</div>
        )}

        <NavLink
          to={gameId ? `/edit-guess/${gameId}` : '/create-guess'}
          className={btnStyles.addNewButton}
        ></NavLink>
      </section>
    </>
  )
}

export default QuestionsList
