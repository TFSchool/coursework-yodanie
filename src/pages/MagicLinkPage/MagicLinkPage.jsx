import { useState } from 'react'
import styles from './MagicLinkPage.module.css'
import { supabase } from '../../supabaseClient'
import Loader from '../../components/UI/Loader/Loader'

const MagicLinkPage = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const submitHandler = async event => {
    event.preventDefault()

    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleMagicLinkSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      {isLoading && <Loader />}

      <div className={styles.content}>
        <div className={styles.signup}>
          <h1 className={styles.title}>MagicLink</h1>
          <div>*Авторизация по ссылке, которая придет на указанную электронную почту</div>
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.inputLabel}>Email</div>
            <input
              className={styles.input}
              placeholder="player@mail.com"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {/* <Button type="submit" text="Отправить" size="medium" /> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default MagicLinkPage
