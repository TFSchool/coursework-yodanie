import { useState } from 'react'
import Button from './UI/Buttons/Button'
import Modal from './UI/Modal/Modal'
import { supabase } from '../supabaseClient'
import Loader from './UI/Loader/Loader'
import { validateSignUp } from '../utils/validators'

const ModalSignUp = ({ modalSignUpActive, setModalSignUpActive }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const emailHandler = e => (setEmail(e.target.value), setErrorMessage(null))
  const passwordHandler = e => (setPassword(e.target.value), setErrorMessage(null))
  const passwordConfirmHandler = e => (setPasswordConfirm(e.target.value), setErrorMessage(null))

  const clearInputs = () => (setEmail(''), setPassword(''), setPasswordConfirm(''))

  const signUpHandler = async e => {
    e.preventDefault()

    const validationError = validateSignUp(email, password, passwordConfirm)
    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    try {
      setIsLoading(true)
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
      if (error) {
        setErrorMessage(error)
      }
      setSuccessMessage('Регистрация прошла успешно! Проверьте почту для подтверждения.')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loader />}

      <Modal
        submitHandler={signUpHandler}
        modalActive={modalSignUpActive}
        setModalActive={setModalSignUpActive}
        title="Регистрация"
        design="yellow"
        errorMessage={errorMessage}
        successMessage={successMessage}
      >
        <label>
          Email
          <input
            placeholder="player@mail.com"
            type="text"
            name="email"
            value={email}
            onChange={emailHandler}
          />
        </label>
        <label>
          Пароль
          <input
            placeholder="Супер-секретный"
            type="password"
            name="password"
            value={password}
            onChange={passwordHandler}
          />
        </label>
        <label>
          Подтвердите пароль
          <input
            placeholder="И еще раз"
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={passwordConfirmHandler}
          />
        </label>

        <Button type="submit" text="Зарегистрироваться" size="small" customStyle="center" />
      </Modal>
    </>
  )
}

export default ModalSignUp
