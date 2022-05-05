import React from 'react'
import styles from './Loader.module.css'
import LoaderIcon from './cube-loader.svg'

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <img src={LoaderIcon} className={styles.loader} alt="loading" />
    </div>
  )
}

export default Loader
