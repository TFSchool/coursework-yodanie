import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GuessList from '../../components/GuessList/GuessList'
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import { supabase } from '../../supabaseClient'
import styles from './ProfilePage.module.css'
import QuestionMark from './questionMark.png'
import { useAuth } from '../../contexts/AuthContext'

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Header pageTitle="Мой профиль">
        <Nav currentPage="profile" />
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
