import React from 'react'
import styles from './QuestionsListItem.module.css'
import imagePlaceholder from './picture.png'

const QuestionsListItem = ({ number, title, id, activeId }) => {
  // ${styles.activeItem}
  return (
    <div className={id === activeId ? `${styles.activeItem} ${styles.item}` : styles.item}>
      <h3 className={styles.number}>Вопрос №{number}</h3>
      <div className={styles.card}>
        <h4 className={styles.title}>{title}</h4>
        <img
          className={styles.imagePlaceholder}
          src={imagePlaceholder}
          alt="Выбранная пользователем картинка."
          width="60"
          height="50"
        />
      </div>
    </div>
  )
}

export default QuestionsListItem
