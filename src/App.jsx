import { Route, Routes } from 'react-router-dom'
import './App.css'
import GamePage from './pages/gamePage/GamePage'
import Leader from './pages/leaderPage/LeaderPage'
import RegistrationModal from './pages/registrationPage/RegistrationPage'
import MainPage from './pages/mainPage/mainPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/game' element={<GamePage/>}/>
      <Route path='/leaderboard' element={<Leader/>}/>
      <Route path='/registration' element={<RegistrationModal/>}/>
    </Routes>
  )
}

export default App
