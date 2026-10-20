import './App.css'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { Route, Routes, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        {/* <Route path="/chat" element={<MainPage />}/> */}
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </>
  )
}

export default App
