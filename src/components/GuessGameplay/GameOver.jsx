import { useState } from 'react'
import Button from '../UI/Buttons/Button'
import MyLink from '../UI/Buttons/MyLink'
import styles from './GameOver.module.css'

const GameOver = () => {
  const [isWin, setIsWin] = useState(false)

  const func = () => setIsWin(prev => !prev)

  return (
    <>
      <div className={styles.gameover}>
        <div className={styles.star}>
          {isWin ? (
            <span className={styles.super}>Супер!</span>
          ) : (
            <span className={styles.super}>Неплохо!</span>
          )}
        </div>
        <p className={styles.text}>Вы ответили правильно на все вопросы!</p>
        <nav className={styles.nav}>
          <Button
            onClick={func}
            bgcolor="violet"
            size="small"
            text="Сыграть заново"
            customStyle="spacing"
          />
          <MyLink to="/" bgcolor="violet" size="small" text="На главную" customStyle="spacing" />
        </nav>
      </div>
    </>
  )
}

export default GameOver
