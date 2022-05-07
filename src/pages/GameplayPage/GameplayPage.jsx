import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import GuessGameplay from '../../components/GuessGameplay/GuessGameplay'
import { supabase } from '../../supabaseClient'
import { useParams } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import GameOver from '../../components/GuessGameplay/GameOver'

const GameplayPage = () => {
  const [gameData, setGameData] = useState({})
  const [questionsNumber, setQuestionsNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)

  const { gameId } = useParams()

  // useEffect(() => {
  //   fetchGameData()
  // }, [])

  const fetchGameData = async () => {
    setIsLoading(true)
    try {
      const { data } = await supabase.from('games').select().eq('id', gameId)
      if (data.length === 0) setFetchError('No data bro')
      setGameData(data[0])
      setQuestionsNumber(data[0].gameContent.questions.length)
    } catch (error) {
      console.log(`Ошибочка... ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* <GameOver /> */}
      {/* {fetchError && <h2>{fetchError}</h2>}
      {!fetchError && isLoading && <Loader />}
      {Object.keys(gameData).length && (
        <>
          <Header pageTitle={gameData.gameTitle}>
            <div className="questionsNumber">{`1/${questionsNumber}`}</div>
          </Header>
          <GuessGameplay gameData={gameData.gameContent.questions} />
        </>
      )} */}
      <Header pageTitle={'sdfsdf'}>
        <div className="questionsNumber">{`1/${questionsNumber}`}</div>
      </Header>
      <GameOver />
    </>
  )
}

export default GameplayPage
