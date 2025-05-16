import { Route, Routes } from 'react-router-dom'
import './App.css'
import GamePage from './pages/gamePage/GamePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>Hello!</div>}/>
      <Route path='/game' element={<GamePage/>}/>
    </Routes>
  )
}

export default App
