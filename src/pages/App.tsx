import './App.css'
import Navbar from '../components/nav/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

import Home from './home/home'
import Projects from './projects/projects'
import Contact from './contact/contact'
import Mail from './mail/mail'
import SEO from '../components/SEO/SEO';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Router
          basename={import.meta.env.DEV ? '/' : '/project-portfolio/'}
        >
          <Navbar />
          <SEO />
          <div className="app-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>
        </Router>
      </div>
    </HelmetProvider>
  )
}

export default App;
