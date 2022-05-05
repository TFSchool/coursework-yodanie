import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = ({ pageTitle, children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link to="/" className={styles.logo}>
          Guessy
        </Link>
        <h1 className={styles.pageTitle}>{pageTitle}</h1>
        {children}
      </div>
    </header>
  )
}

export default Header
