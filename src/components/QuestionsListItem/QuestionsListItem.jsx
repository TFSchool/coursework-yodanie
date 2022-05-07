import cn from 'classnames'
import ImagePlaceHolder from './picture-icon.svg'
import styles from './QuestionsListItem.module.css'

const QuestionsListItem = ({
  id,
  title,
  number,
  image,
  savedQuestions,
  setSavedQuestions,
  setIndexOfDeletedQuestion,
}) => {
  const deleteQuestionHandler = e => {
    e.preventDefault()
    setIndexOfDeletedQuestion(savedQuestions.findIndex(q => q.id === id))
    setSavedQuestions([...savedQuestions.filter(q => q.id !== id)])
    localStorage.setItem(
      'savedQuestions',
      JSON.stringify([...savedQuestions.filter(question => question.id !== id)])
    )
  }

  return (
    <div className={styles.item}>
      <div className={styles.number}>
        Вопрос №{number}
        <button
          className={styles.deleteIcon}
          type="button"
          onClick={deleteQuestionHandler}
        ></button>
      </div>
      <div className={styles.card}>
        <h4 className={styles.title}>{title}</h4>
        <img
          className={cn(styles.image, !image && styles.placeholder)}
          src={image || ImagePlaceHolder}
          alt="Выбранная пользователем картинка."
          width="60"
          height="50"
        />
      </div>
    </div>
  )
}

export default QuestionsListItem
