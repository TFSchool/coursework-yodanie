import MyLink from '../UI/Buttons/MyLink'
import Button from '../UI/Buttons/Button'
import { supabase } from '../../supabaseClient'
import styles from './Nav.module.css'

const Nav = ({ session, currentPage, signInHandler, signUpHandler }) => {
  const logout = () => supabase.auth.signOut()

  return (
    <>
      {session ? (
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
                to="/profile"
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
                to="/profile"
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
