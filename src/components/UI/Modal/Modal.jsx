import React from 'react'
import styles from './Modal.module.css'
import cn from 'classnames'

const Modal = ({
  title,
  modalActive,
  setModalActive,
  children,
  submitHandler,
  design,
  errorMessage,
}) => {
  const hideModalHandler = () => setModalActive(false)
  const disableBackgroundEvens = e => e.stopPropagation()

  return (
    <>
      <div
        className={cn(styles.modalWrapper, modalActive && styles.active)}
        onClick={hideModalHandler}
      >
        <div
          className={cn(styles.modal, design ? styles[design] : styles.grey)}
          onClick={disableBackgroundEvens}
        >
          <button className={styles.closeModal} onClick={hideModalHandler}></button>
          <h1 className={styles.title}>{title}</h1>
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={cn(styles.userMessage, errorMessage && styles.errorActive)}>
              {errorMessage}
            </div>
            {children}
          </form>
        </div>
      </div>
    </>
  )
}

export default Modal
