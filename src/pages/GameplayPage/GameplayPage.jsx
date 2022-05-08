import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import GuessGameplay from '../../components/GuessGameplay/GuessGameplay'
import { supabase } from '../../supabaseClient'
import { useParams } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import GameOver from '../../components/GuessGameplay/GameOver'

const GameplayPage = () => {
  const [gameData, setGameData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const { gameId } = useParams()

  const totalQuestions = gameData && gameData.questions.length

  useEffect(() => {
    fetchGameData()
  }, [gameId])

  const fetchGameData = async () => {
    setIsLoading(true)
    try {
      const { data } = await supabase.from('games').select().eq('id', gameId)
      setGameData(data[0])
    } catch (error) {
      console.log(`Ошибочка... ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      {gameData && (
        <>
          <Header pageTitle={gameData.gameTitle}>
            <div className="questionsNumber">{`${currentQuestionIndex + 1}/${totalQuestions}`}</div>
          </Header>
          <GuessGameplay gameData={gameData} />
        </>
      )}

      {/* {!fetchError && isLoading && <Loader />} */}
      {/* <GameOver /> */}
    </>
  )
}

export default GameplayPage
