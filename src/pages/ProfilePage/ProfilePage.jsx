import { useEffect, useState } from 'react'
import GuessList from '../../components/GuessList/GuessList'
import Header from '../../components/Header/Header'
import Button from '../../components/UI/Buttons/Button'
import MyLink from '../../components/UI/Buttons/MyLink'
import styles from './ProfilePage.module.css'
import QuestionMark from './questionMark.png'
import { supabase } from '../../supabaseClient'
import Loader from '../../components/UI/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  // useEffect(() => {
  //   const user = supabase.auth.user()
  //   if (!user) {
  //     navigate('/')
  //     setUserQuit(true)
  //   }
  // }, [userQuit])

  return (
    <>
      <Header pageTitle="Мой профиль">
        <Nav session={session} currentPage="profile" />
      </Header>
      <main className={styles.mainPage}>
        <div className={`${styles.circle} ${styles.circlePink}`}></div>
        <div className={`${styles.circle} ${styles.circleGreen}`}>
          <img className={styles.questionMark} src={QuestionMark} alt="question mark" />
        </div>

        <GuessList />
      </main>
    </>
  )
}

export default ProfilePage
