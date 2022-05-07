import cn from 'classnames'
import { useState } from 'react'
import ModalSignIn from '../../components/ModalSignIn'
import ModalSignUp from '../../components/ModalSignUp.jsx'
import Nav from '../../components/Nav/Nav'
import MyLink from '../../components/UI/Buttons/MyLink'
import styles from './MainPage.module.css'
import QuestionMark from './questionMark.png'
import quoteImage from './quote.png'

const MainPage = () => {
  const [pincode, setPincode] = useState('')
  const [modalSignInActive, setModalSignInActive] = useState(false)
  const [modalSignUpActive, setModalSignUpActive] = useState(false)
  const pincodeHandler = e => setPincode(e.target.value)
  const signInHandler = () => setModalSignInActive(true)
  const signUpHandler = () => setModalSignUpActive(true)

  return (
    <>
      <ModalSignIn
        modalSignInActive={modalSignInActive}
        setModalSignInActive={setModalSignInActive}
      />
      <ModalSignUp
        modalSignUpActive={modalSignUpActive}
        setModalSignUpActive={setModalSignUpActive}
      />

      <main
        className={cn(
          styles.mainPage,
          (modalSignInActive || modalSignUpActive) && styles.mainPageBlurred
        )}
      >
        <div className={cn(styles.circle, styles.circleYellow)}></div>
        <div className={cn(styles.circle, styles.circlePink)}>
          <img className={styles.questionMark} src={QuestionMark} alt="question mark" />
        </div>

        <Nav currentPage="main" signInHandler={signInHandler} signUpHandler={signUpHandler} />

        <div className={styles.menu}>
          <img
            className={styles.quote}
            src={quoteImage}
            alt="Guess it easy!"
            width="327"
            height="181"
          />
          <div className={styles.logo}>Guessy</div>
          <form className={styles.form}>
            <input
              value={pincode}
              onChange={pincodeHandler}
              className={styles.pincode}
              type="text"
              placeholder="Введите код доступа"
            />
            <MyLink
              to={`guess-play/${pincode}`}
              text="Присоединиться"
              bgcolor="violet"
              size="medium"
              customStyle="center"
            />
          </form>
        </div>

        <footer>made by Dan</footer>
      </main>
    </>
  )
}

export default MainPage
