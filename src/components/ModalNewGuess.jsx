import Button from './UI/Buttons/Button'
import Modal from './UI/Modal/Modal'

const ModalNewGuess = ({
  modalNewGuessActive,
  setModalNewGuessActive,
  gameTitle,
  setGameTitle,
  createNewGuessHandler,
  modalValidError,
  setModalValidError,
}) => {
  const titleInputHandler = e => (setGameTitle(e.target.value), setModalValidError(null))

  return (
    <>
      <Modal
        design="grey"
        modalActive={modalNewGuessActive}
        setModalActive={setModalNewGuessActive}
        title="Сохранить игру"
        submitHandler={createNewGuessHandler}
        errorMessage={modalValidError}
      >
        <label>
          Название игры
          <input
            placeholder="Название"
            type="text"
            value={gameTitle}
            onChange={titleInputHandler}
          />
        </label>

        <Button type="submit" size="medium" text="Сохранить" customStyle="center" />
      </Modal>
    </>
  )
}

export default ModalNewGuess
