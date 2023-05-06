import { useState } from 'react'
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
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<Index />} />
      <Route path="/ow-career-profile" element={<OWCareerProfile />} />
    </>
  )

)

function App() {
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
