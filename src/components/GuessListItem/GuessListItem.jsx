import styles from './GuessListItem.module.css'
import { useState } from 'react'
import { getDeclension } from '../../utils/getWordDeclension'
import { ReactComponent as CopyIcon } from '../../assets/icons/Vector.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete-icon.svg'
import { supabase } from '../../supabaseClient'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Buttons/Button'

const GuessListItem = ({
  id,
  title,
  totalQuestions,
  profileData,
  setProfileData,
  setIsLoading,
}) => {
  const [modalDeleteGameActive, setModalDeleteGameActive] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const deleteGameHandler = async () => {
    setIsLoading(true)
    try {
      await supabase.from('games').delete().match({ id: id })
      setProfileData([...profileData].filter(game => game.id !== id))
      setSuccessMessage('Игра успешно удалена!')
    } catch (error) {
      setErrorMessage(`${error}`)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const pincodeCopyHandler = () => navigator.clipboard.writeText(id)

  const modalHandler = () => setModalDeleteGameActive(prev => !prev)

  return (
    <>
      {modalDeleteGameActive && (
        <Modal
          title="Вы уверены что хотите удалить квиз?"
          modalActive={modalDeleteGameActive}
          setModalActive={setModalDeleteGameActive}
          errorMessage={errorMessage}
          successMessage={successMessage}
        >
          <div className={styles.modalButtons}>
            <Button onClick={deleteGameHandler} text="Удалить" size="small" />
            <Button onClick={modalHandler} text="Отмена" size="small" />
          </div>
        </Modal>
      )}

      <div className={styles.guessListItem}>
        <button onClick={modalHandler} className={styles.deleteButton}>
          <DeleteIcon className={styles.icon} />
        </button>
        <div className={styles.guessTitle}>{title}</div>
        <div className={styles.info}>
          <div className="questionsCount">
            <span className={styles.counter}>{totalQuestions}</span>{' '}
            {getDeclension('вопрос', 'вопроса', 'вопросов')(totalQuestions)}
          </div>
          <div className={styles.actions}>
            <button onClick={pincodeCopyHandler} className={styles.copy}>
              <span className={styles.copyText}>Код доступа</span>
              <CopyIcon className={styles.copyIcon} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuessListItem
