import { Routes, Route } from 'react-router-dom'
import './styles/styles.css'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default App
