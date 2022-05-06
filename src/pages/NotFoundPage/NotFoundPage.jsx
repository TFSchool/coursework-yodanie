import React from 'react'
import styles from './NotFoundPage.module.css'
import MyLink from '../../components/UI/Buttons/MyLink'
const NotFoundPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.border}>
      <div className={styles.circle}>
        <span className={styles.error}>404</span>
      </div>
    </div>
    <p className={styles.text}>Такая страница не существует или она была удалена.</p>
    <MyLink to="/" text="На главную" bgcolor="violet" size="small" />
  </div>
)

export default NotFoundPage
