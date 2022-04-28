import React from 'react'
import Header from '../../components/Header/Header'
import Guess from '../../components/Guess/Guess'

const GameplayPage = () => {
  return (
    <>
      <Header pageName="Игра" containsNumeration={true} />
      <Guess gameplay={true} />
    </>
  )
}

export default GameplayPage
