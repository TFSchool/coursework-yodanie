import React from 'react'
import Button from '../Buttons/Button'
import styles from './Header.module.css'

const Header = ({ pageName, containsNumeration, containsButton }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.logo}>Guessy</div>
        <h1 className={styles.pageName}>{pageName}</h1>
        {containsButton && <Button>Сохранить квиз</Button>}
        {containsNumeration && <div className={styles.questionsNumeration}>1/15</div>}
      </div>
    </header>
  )
}

export default Header
