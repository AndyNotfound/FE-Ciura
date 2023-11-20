import { Routes, Route } from 'react-router-dom'
import './styles/styles.css'
import HomePage from './pages/Home'
import CheckSymptoms from './pages/CheckSymptoms'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/symptoms' element={<CheckSymptoms />} />
    </Routes>
  )
}

export default App
