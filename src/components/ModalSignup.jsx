import { useState } from 'react'
import Button from './UI/Buttons/Button'
import Modal from './UI/Modal/Modal'

const ModalSignup = ({ modalSignupActive, setModalSignupActive }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const emailHandler = e => setEmail(e.target.value)
  const passwordHandler = e => setPassword(e.target.value)
  const passwordConfirmHandler = e => setPasswordConfirm(e.target.value)

  const handleSignupSubmit = e => {
    e.preventDefault()
  }

  return (
    <Modal
      submitHandler={handleSignupSubmit}
      modalActive={modalSignupActive}
      setModalActive={setModalSignupActive}
      title="Регистрация"
      design="yellow"
    >
      <label>
        Email
        <input
          placeholder="player@mail.com"
          type="email"
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
  )
}

export default ModalSignup
