import './App.css'
import Navbar from '../components/nav/Navbar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './home/home'
import Projects from './projects/projects'
import Contact from './contact/contact'

const BASE_URL: string = ''

type pathList = {
  home: string
  projects: string
  contact: string
}

const appPaths: pathList = {
  home: `${BASE_URL}/`,
  projects: `${BASE_URL}/projects`,
  contact: `${BASE_URL}/contact`,
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={appPaths.projects} element={<Projects />} />
            <Route path={appPaths.contact} element={<Contact />} />
          </Routes>
        </div>
          <Navbar baseURL={BASE_URL} appPaths={appPaths} />
      </Router>
    </div>
  )
}

export default App
