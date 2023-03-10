import './App.css'
import Navbar from '../components/nav/Navbar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './home/home'
import Projects from './projects/projects'
import Contact from './contact/contact'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
          <Navbar />
      </Router>
    </div>
  )
}

export default App
