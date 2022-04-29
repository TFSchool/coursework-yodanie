import React from 'react'
import Button from '../Buttons/Button'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = ({ pageName, children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link to="/" className={styles.logo}>
          Guessy
        </Link>
        <h1 className={styles.pageName}>{pageName}</h1>
        {children}
      </div>
    </header>
  )
}

export default Header
