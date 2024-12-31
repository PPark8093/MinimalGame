import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import "./styles/default/m_button.css"
import "./styles/default/m_class.css"

function App() {
    return (
      <div className='app_cons'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </div>
    )
}

export default App
