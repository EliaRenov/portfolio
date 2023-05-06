import './ProjectPage.css'
import DemoBrowserOverlay from './assets/modern-browser-tabs.png'
import OW2CareerProfileVideo from './assets/ow-career-profile-video.mp4'
import LiveDemoIcon from './assets/live-demo-icon.png'
import GitHubRepoIcon from './assets/repo-icon.png'
import OverFastAPI from './assets/OverFastAPI.png'
import Overwatch2 from './assets/Overwatch2-icon.png'
import { useEffect } from 'react'


const OWCareerProfile = (props) => {
    useEffect(() => {
        document.documentElement.scrollTop = 0
        document.title = props.title
    }, [])
    
    return (
        <main className="project-page">
                <h1 className="project-title">
                    'Overwatch' Player Statistics
                    <img className="ow2-icon" src={Overwatch2} alt="Overwatch 2 icon" height="20px" />
                </h1>
                <h4 className="project-summary">
                    This fan-made website uses a public API to gather statistics and emulate players' profiles and statistics, as displayed in the video game 'Overwatch'.
                    <br></br>
                    <br></br>
                    Desktop only.
                </h4>
                    <div className="project-links">
                        <a href="https://overwatch-career-profile.netlify.app" className="demo-link" target="_blank">
                            <img src={LiveDemoIcon} alt="Demo Icon" />
                            Live Demo
                        </a>
                        <a href="https://github.com/EliaRenov/ow-career-profile" className="repo-link" target="_blank" >
                            <img src={GitHubRepoIcon} alt="Demo Icon" />
                            Repository
                        </a>
                    </div>
                    <div className="project-demo">
                        <img className="project-demo-tabs" src={DemoBrowserOverlay} />
                        <video className="project-demo-video" playsInline autoPlay muted loop>
                            <source src={OW2CareerProfileVideo} type="video/mp4" />
                        </video>
                    </div>
                <section className="project-ep">
                    <h2 className="project-ep-title">
                        Why?
                    </h2>
                    <h4 className="project-ep-content project-summary">
                    With this project, it is possible to view a player's page as you would in the game.
                    <br />
                    It also allows users to view any player's page using their username, a feature which is not included in the game
                    
                    </h4>
                </section>
                <section className="project-ep">
                    <h2 className="project-ep-title">
                        The OverFast API
                    </h2>
                    <h4 className="project-ep-content project-summary">
                        The <a className="reference" href="https://github.com/TeKrop/overfast-api">OverFast API</a> gives data about Overwatch 2 heroes, gamemodes, maps and players statistics by scraping Blizzard pages.
                        <br />
                        The project accepts any player's username and uses the API fetch their data by scraping their user page.
                        <img src={OverFastAPI} className="overfast-api-pic" />
                    </h4>
                </section>
        </main>
    )
}

export default OWCareerProfile