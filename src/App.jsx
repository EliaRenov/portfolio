import { useEffect, useState } from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Link,
    NavLink
} from "react-router-dom";
import Index from './Index'
import OWCareerProfile from './OWCareerProfile'
import AesopFables from './AesopFables';
import CommsBoard from './CommsBoard';
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />
      <Route path="/ow-career-profile" element={<OWCareerProfile title="Elia Renov - Player Statistics" />} />
      <Route path="/aesops-fables" element={<AesopFables title="Elia Renov - Aesop's Fables" />} />
      <Route path="/comms-board" element={<CommsBoard title="Elia Renov - Communication Board" />} /> 
    </>
  )

)

function App() {

  const link = window.location.href

  if (link.includes('#')) {
    useEffect(() => {
      setTimeout(() => {
        const index = link.indexOf('#')
        const jumpToHash = link.slice(index)
        const jumpToElement = document.querySelector(jumpToHash)

        jumpToElement.scrollIntoView({ behavior: 'instant'})
      })
      })
    }

  return (
    <>
      <header className="header">
            <h1 className="portfolio-title">Portfolio</h1>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-link">
                      <a href="/#about">
                        ABOUT
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="/#projects">
                        PROJECTS
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="/#contact">
                        CONTACT
                      </a>
                    </li>
                </ul>
            </nav>
        </header>
      <RouterProvider router={router} />
    </>
  )
}

export default App
