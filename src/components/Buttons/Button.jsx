import React from 'react'
import styles from './Button.module.css'

const Button = ({ children }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button} type="button">
        {children}
      </button>
    </div>
  )
}

export default Button
