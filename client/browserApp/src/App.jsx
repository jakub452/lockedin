import './App.css'
import { Chat } from './pages/Chat/Chat'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/Chat" element={<Chat />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </>
  )
}

export default App
