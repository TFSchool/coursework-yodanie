import React from 'react'
import styles from './GuessList.module.css'

const GuessList = () => {
  return (
    <>
      <div className={styles.guessListTitle}>Мои квизы</div>
      <div className={styles.guessList}>
        <div className={styles.guessListItem}>
          <div className={styles.guessTitle}>Столицы мира</div>
          <div className={styles.guessBottom}>
            <div className="questionsCount">
              <span className={styles.counter}>15</span> вопросов
            </div>
            <div>buttons</div>
          </div>
        </div>

        <div className={styles.guessListItem}>
          <div className={styles.guessTitle}>Столицы мира</div>
          <div className={styles.guessBottom}>
            <div className="questionsCount">
              <span className={styles.counter}>15</span> вопросов
            </div>
            <div>buttons</div>
          </div>
        </div>

        <div className={styles.guessListItem}>
          <div className={styles.guessTitle}>Столицы мира</div>
          <div className={styles.guessBottom}>
            <div className="questionsCount">
              <span className={styles.counter}>15</span> вопросов
            </div>
            <div>buttons</div>
          </div>
        </div>

        <div className={styles.guessListItem}>
          <div className={styles.guessTitle}>Столицы мира</div>
          <div className={styles.guessBottom}>
            <div className="questionsCount">
              <span className={styles.counter}>15</span> вопросов
            </div>
            <div>buttons</div>
          </div>
        </div>

        <div className={styles.guessListItem}>
          <div className={styles.guessTitle}>Столицы мира</div>
          <div className={styles.guessBottom}>
            <div className="questionsCount">
              <span className={styles.counter}>15</span> вопросов
            </div>
            <div>buttons</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuessList
