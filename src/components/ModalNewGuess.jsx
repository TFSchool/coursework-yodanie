import { useState } from 'react'
import Button from './UI/Buttons/Button'
import Modal from './UI/Modal/Modal'

const ModalNewGuess = ({ modalNewGuessActive, setModalNewGuessActive }) => {
  const [gameName, setGameName] = useState('')

  const gameNameHandler = e => setGameName(e.target.value)

  const newGuessHandler = async e => {
    e.preventDefault()

    // setIsLoading(true)

    // const result = {
    //   id: uuid(),
    //   questionTitle,
    //   answers: [...answersData],
    //   correctAnswer: selectedAnswer,
    //   imagePath: null,
    // }
    // try {
    //   if (questionImageFile) {
    //     const questionImagePath = `${uuid()}-${questionImageFile.name}`
    //     await supabase.storage.from('images').upload(questionImagePath, questionImageFile)
    //     result.imagePath = questionImagePath
    //     console.log('Image saved in supabase')
    //   }
    //   await supabase.storage.from('quizes').upload(result)
    // } catch (error) {
    //   console.log(error)
    //   setFetchError(true)
    // } finally {
    //   setIsLoading(false)
    // }
  }

  return (
    <Modal
      design="grey"
      modalActive={modalNewGuessActive}
      setModalActive={setModalNewGuessActive}
      title="Сохранить игру"
    >
      <label>
        Название игры
        <input placeholder="Название" type="text" value={gameName} onChange={gameNameHandler} />
      </label>

      <Button
        onClick={newGuessHandler}
        type="button"
        size="medium"
        text="Сохранить"
        customStyle="center"
      />
    </Modal>
  )
}

export default ModalNewGuess
