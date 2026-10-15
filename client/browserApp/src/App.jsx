import './App.css'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { Route, Routes, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import GamePage from './pages/GamePage/GamePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/chat" element={<MainPage />}/>
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </>
  )
}

export default App
