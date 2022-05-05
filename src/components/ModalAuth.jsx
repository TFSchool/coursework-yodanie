import React, { useState } from 'react'
import Modal from './UI/Modal/Modal'
import Button from './UI/Buttons/Button'

const ModalAuth = ({ modalAuthActive, setModalAuthActive }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = e => setEmail(e.target.value)
  const passwordHandler = e => setPassword(e.target.value)

  const handleAuthSubmit = e => {
    e.preventDefault()
  }

  return (
    <Modal
      submitHandler={handleAuthSubmit}
      modalActive={modalAuthActive}
      setModalActive={setModalAuthActive}
      design="grey"
      title="Вход в личный кабинет"
    >
      <label>
        Введите Email
        <input
          placeholder="Ваш Email"
          type="email"
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
  )
}

export default ModalAuth
