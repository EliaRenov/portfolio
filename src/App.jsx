import { useState } from 'react'
import Index from './Index'
import './App.css'
function App() {

  const [showMenu, setShowMenu] = useState('false')

  return (
    <>
      <header className="header">
            <h1 className="portfolio-title">Portfolio</h1>

            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-link">
                      <a href="#about">
                        ABOUT
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#projects">
                        PROJECTS
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#contact">
                        CONTACT
                      </a>
                    </li>
                </ul>
            </nav>
        </header>



      <Index />
    </>
  )
}

export default App
