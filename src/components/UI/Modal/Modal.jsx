import React from 'react'
import styles from './Modal.module.css'
import cn from 'classnames'

const Modal = ({ title, modalActive, setModalActive, children, submitHandler, design }) => (
  <div
    className={cn(styles.modalWrapper, modalActive && styles.active)}
    onClick={() => setModalActive(false)}
  >
    <div
      className={cn(styles.modal, design ? styles[design] : styles.grey)}
      onClick={e => e.stopPropagation()}
    >
      <button className={styles.closeModal} onClick={() => setModalActive(false)}></button>
      <h1 className={styles.title}>{title}</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        {children}
      </form>
    </div>
  </div>
)

export default Modal
