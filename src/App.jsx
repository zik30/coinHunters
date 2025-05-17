import { Route, Routes } from 'react-router-dom'
import './App.css'
import GamePage from './pages/gamePage/GamePage'
import Main from './pages/mainPage/Main'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/game' element={<GamePage/>}/>
    </Routes>
  )
}

export default App
