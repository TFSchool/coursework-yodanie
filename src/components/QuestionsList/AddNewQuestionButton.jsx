import React from 'react'
import styles from './AddNewQuestionButton.module.css'

const AddNewQuestionButton = () => {
  return (
    <button className={styles['button-add']} type="button">
      <svg
        className={styles['icon-add']}
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="#3E3D78"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="18" width="40" height="4" rx="2" />
        <rect x="22" width="40" height="4" rx="2" transform="rotate(90 22 0)" />
      </svg>
    </button>
  )
}

export default AddNewQuestionButton
