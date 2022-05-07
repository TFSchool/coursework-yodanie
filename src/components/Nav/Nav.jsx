import { supabase } from '../../supabaseClient'
import Button from '../UI/Buttons/Button'
import MyLink from '../UI/Buttons/MyLink'
import styles from './Nav.module.css'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Nav = ({ currentPage, signInHandler, signUpHandler }) => {
  const logout = () => supabase.auth.signOut()

  const user = supabase.auth.user()

  const navigate = useNavigate()
  const { session } = useAuth()

  useEffect(() => {
    if (user === null) navigate('/')
  }, [session])

  return (
    <>
      {user ? (
        <nav className={styles.nav}>
          {currentPage === 'main' && (
            <>
              <MyLink
                to="/create-guess"
                bgcolor="green"
                size="small"
                text="Создать квиз"
                customStyle="spacing"
              />
              <MyLink
                to={`/profile/${user.id}`}
                bgcolor="yellow"
                size="small"
                text="Профиль"
                customStyle="spacing"
              />
            </>
          )}
          {currentPage === 'profile' && (
            <>
              <MyLink
                to="/create-guess"
                bgcolor="green"
                size="small"
                text="Создать квиз"
                customStyle="spacing"
              />
            </>
          )}
          {currentPage === 'create-guess' && (
            <>
              <MyLink
                to={`/profile/${user.id}`}
                bgcolor="yellow"
                size="small"
                text="Профиль"
                customStyle="spacing"
              />
            </>
          )}

          <Button
            bgcolor="white"
            customStyle="spacing"
            size="small"
            text="Выход"
            onClick={logout}
          />
        </nav>
      ) : (
        <nav className={styles.nav}>
          <Button
            onClick={signInHandler}
            text="Войти"
            bgcolor="violet"
            size="small"
            customStyle="spacing"
          />
          <Button
            onClick={signUpHandler}
            text="Регистрация"
            bgcolor="violet"
            size="small"
            customStyle="spacing"
          />
        </nav>
      )}
    </>
  )
}

export default Nav
