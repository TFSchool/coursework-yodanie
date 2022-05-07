import React, { useState } from 'react'
import Modal from './UI/Modal/Modal'
import Button from './UI/Buttons/Button'
import { validateSignIn } from '../utils/validators'
import { supabase } from '../supabaseClient'
import Loader from './UI/Loader/Loader'

const ModalSignIn = ({ modalSignInActive, setModalSignInActive }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const emailHandler = e => (setEmail(e.target.value), setErrorMessage(null))
  const passwordHandler = e => (setPassword(e.target.value), setErrorMessage(null))

  const signInHandler = async e => {
    e.preventDefault()

    const validationError = validateSignIn(email, password)
    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    try {
      setIsLoading(true)
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      })
      if (error) {
        setErrorMessage(error.error_description || error.message)
      } else {
        setModalSignInActive(false)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loader />}

      <Modal
        submitHandler={signInHandler}
        modalActive={modalSignInActive}
        setModalActive={setModalSignInActive}
        design="grey"
        title="Авторизация"
        errorMessage={errorMessage}
        successMessage={successMessage}
      >
        <label>
          Введите Email
          <input
            placeholder="Ваш Email"
            type="text"
            name="email"
            value={email}
            onChange={emailHandler}
          />
        </label>

        <label>
          Введите пароль
          <input
            placeholder="Ваш пароль"
            type="password"
            name="password"
            value={password}
            onChange={passwordHandler}
          />
        </label>

        <Button type="submit" size="small" text="Войти" customStyle="center" />
      </Modal>
    </>
  )
}

export default ModalSignIn