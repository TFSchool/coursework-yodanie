import React from 'react'
import styles from './Button.module.css'

const Button = ({ type, onClick, text, size }) => {
  return (
    <div className={size === 'medium' ? styles.buttonWrapperMedium : styles.buttonWrapperBig}>
      <button className={styles.button} type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
