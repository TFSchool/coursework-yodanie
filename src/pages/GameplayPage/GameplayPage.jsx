import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import GuessGameplay from '../../components/GuessGameplay/GuessGameplay'
import { supabase } from '../../supabaseClient'
import { useParams } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'

const GameplayPage = () => {
  const [gameData, setGameData] = useState({})
  const [questionsNumber, setQuestionsNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)

  const { gameId } = useParams()

  useEffect(() => {
    fetchGameData()
  }, [])

  const fetchGameData = async () => {
    setIsLoading(true)
    try {
      const { data } = await supabase.from('quizes').select().eq('id', gameId)
      if (data.length < 1) setFetchError('No data bro')
      setGameData(data[0])
      setQuestionsNumber(data[0].content.questions.length)
    } catch (error) {
      console.log(`Ошибочка... ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {fetchError && <h2>{fetchError}</h2>}
      {!fetchError && isLoading && <Loader />}
      {Object.keys(gameData).length && (
        <>
          <Header pageTitle={gameData.title}>
            <div className="questionsNumber">{`1/${questionsNumber}`}</div>
          </Header>
          <GuessGameplay gameData={gameData.content.questions} />
        </>
      )}
    </>
  )
}

export default GameplayPage
