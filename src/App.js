import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CreateGuessPage from './pages/CreateGuessPage/CreateGuessPage'
import GameplayPage from './pages/GameplayPage/GameplayPage'
import MagicLinkPage from './pages/MagicLinkPage/MagicLinkPage'
import MainPage from './pages/MainPage/MainPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {
  const [session, setSession] = useState(null)

  // useEffect(() => {
  //   setSession(supabase.auth.session())

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="magic-link" element={<MagicLinkPage />} />
          <Route path="guess-play/:gameId" element={<GameplayPage />} />
          <Route path="create-guess" element={<CreateGuessPage />} />
          <Route path="create-guess/question/:id" element={<CreateGuessPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

/* 
          <Route path="guess-play" element={<GameplayPage />} />
          <Route path="guess-play" element={<MainPage />} />


<Route path="auth" element={<AuthModal />} />
          <Route path="signup" element={<SignupModal />} />
*/
