import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import './global.css'
import CreateGuessPage from './pages/CreateGuess/CreateGuessPage'
import MainPage from './pages/MainPage/MainPage'
import GameplayPage from './pages/Gameplay/GameplayPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  // В Страницу CreateGuess мы отправляем id вопроса, над которым работаем в данный момент

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="create-guess" element={<CreateGuessPage id={12} />} />
          <Route path="guess-play" element={<GameplayPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
