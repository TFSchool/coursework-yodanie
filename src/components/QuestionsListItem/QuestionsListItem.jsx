import cn from 'classnames'
import { ReactComponent as ImagePlaceHolder } from '../../assets/icons/picture.svg'
import styles from './QuestionsListItem.module.css'

const QuestionsListItem = ({
  gameId,
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
    if (!gameId) {
      localStorage.setItem(
        'savedQuestions',
        JSON.stringify([...savedQuestions.filter(question => question.id !== id)])
      )
    }
  }

  return (
    <div className={styles.item}>
      <button className={styles.deleteIcon} type="button" onClick={deleteQuestionHandler}></button>
      <div className={styles.number}>Вопрос №{number}</div>
      <div className={styles.card}>
        <h4 className={styles.title}>{title}</h4>
        {image ? (
          <img className={styles.image} src={image} alt="Картинка" />
        ) : (
          <ImagePlaceHolder className={cn(styles.image, styles.placeholder)} />
        )}
      </div>
    </div>
  )
}

export default QuestionsListItem
