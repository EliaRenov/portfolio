import './ProjectPage.css'
import DemoBrowserOverlay from './assets/modern-browser-tabs.png'
import AesopFablesVideo from './assets/AesopFables-demo.webm'
import AesopFablesPhoneVideo from './assets/aesop-phone-demo.webm'
import LiveDemoIcon from './assets/live-demo-icon.png'
import GitHubRepoIcon from './assets/repo-icon.png'
import BookIcon from './assets/book-icon.png'
import { useEffect } from 'react'


const AesopFables = (props) => {
    useEffect(() => {
        document.documentElement.scrollTop = 0
        document.title = props.title
    }, [])
    
    return (
        <main className="project-page">
                <h1 className="project-title">
                    Aesop's Fables
                    <img className="book-icon" src={BookIcon} alt="Book icon" height="20px" />
                </h1>
                <h4 className="project-summary">
                Aesop's Fables is a website containing hundreds of fables credited to ancient Greek fabulist and storyteller Aesop.
                <br />
                These fables were translated to Hebrew by poet, Shlomo Shapan, and webscraped from the website 'Ben-yehuda Project'.
                </h4>
                    <div className="project-links">
                        <a href="https://eliarenov.github.io/AesopFables/" className="demo-link" target="_blank">
                            <img src={LiveDemoIcon} alt="Demo Icon" />
                            Live Demo
                        </a>
                        <a href="https://github.com/EliaRenov/AesopFables" className="repo-link" target="_blank" >
                            <img src={GitHubRepoIcon} alt="Demo Icon" />
                            Repository
                        </a>
                    </div>
                    <div className="project-demo">
                        <img className="project-demo-tabs" src={DemoBrowserOverlay} />
                        <video className="project-demo-video" playsInline autoPlay muted loop>
                            <source src={AesopFablesVideo} type="video/webm" />
                        </video>                    
                        
                        <video 
                        className="project-phone-demo-video" playsInline autoPlay muted loop>
                            <source src={AesopFablesPhoneVideo} type="video/webm" />
                        </video>
                        </div>
                <section className="project-ep">
                    <h2 className="project-ep-title">
                        Why?
                    </h2>
                    <h4 className="project-ep-content project-summary">
                        I like ancient fables and their morals, and I could not found a good website to view them in Hebrew, and simply share those fables with a link.
                    </h4>
                </section>
                <section className="project-ep">
                    <h2 className="project-ep-title">
                        Webscraping
                    </h2>
                    <h4 className="project-ep-content project-summary">
                        I scraped the fables from the 'Ben-yehuda project' website using query selectors. 
                        I then manipulated the data to allow for easy access and styling.
                        <br />
                        <br />
                        352 fables
                        <br />
                        29,531 words 
                        <br />
                        270,026 characters
                    </h4>
                </section>
        </main>
    )
}

export default AesopFables