import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthModal from './components/AuthModal/AuthModal'
import Layout from './components/Layout'
import './global.css'
import CreateGuessPage from './pages/CreateGuess/CreateGuessPage'
import GameplayPage from './pages/Gameplay/GameplayPage'
import MagicLinkPage from './pages/MagicLinkPage/MagicLinkPage'
import MainPage from './pages/MainPage/MainPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import SignupPage from './pages/SignupPage/SignupPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="auth" element={<AuthModal />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="magic-link" element={<MagicLinkPage />} />
          <Route path="guess-play" element={<GameplayPage />} />
          <Route path="create-new-guess" element={<CreateGuessPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
