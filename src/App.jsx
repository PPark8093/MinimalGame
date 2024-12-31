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
        <footer className="footer">
                <p>&copy; 2024 <a href='https://github.com/PPark8093' target='_blank'>PPark8093</a>. All rights reserved.</p>
        </footer>
      </div>
    )
}

export default App
