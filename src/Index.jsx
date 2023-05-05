import './Index.css'
import EliaPic from './assets/elia-pic.png'
import DemoBrowserOverlay from './assets/modern-browser-tabs.png'

import AesopFablesVideo from './assets/AesopFables-demo.mp4'
import OW2CareerProfileVideo from './assets/ow-career-profile-video.mp4'
import LiveDemoIcon from './assets/live-demo-icon.png'
import GitHubRepoIcon from './assets/repo-icon.png'



const Index = () => {

    return (
        <main className="index-page">
            <section className="section first-section">
            <div className="introduction">
            <div className="name-and-job">
                <h1 className="name">Elia Renov</h1>
                <h3 className="job-title">Frontend Developer</h3>
            </div>
            <div className="elia-pic">
            <img src={EliaPic} alt="Picture of Elia" />
            </div>
            </div>
            <div className="about">
                <p>
                I'm Elia, a frontend developer with an affinity for eye-soothing designs. 
                </p>
                <p>
                Based in the Upper Galilee, Israel.
                </p>
            </div>
            </section>

            <section className="projects">
                <h2 className="projects-title">
                    Projects
                </h2>
                <div className="project">
                    <h3 className="project-title">
                        'Overwatch' User Statistics
                    </h3>
                    <p className="project-description">
                        This fan-made website uses a public API to gather statistics and emulate players' profiles and statistics, as displayed in the video game 'Overwatch'.
                    </p>
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
                </div>

                <div className="project">
                    <h3 className="project-title">
                        Aesop's Fables
                    </h3>
                    <p className="project-description">
                        Aesop's Fables is a website containing hundreds of fables credited to ancient Greek fabulist and storyteller Aesop.
                        <br />
                        These fables were translated to Hebrew by poet, Shlomo Shapan, and webscraped from the website 'Ben-yehuda Project'.
                    </p>
                    <div className="project-links">
                        <a href="https://eliarenov.github.io/AesopFables/" className="demo-link">
                            <img src={LiveDemoIcon} alt="Demo Icon"  target="_blank" />
                            Live Demo
                        </a>
                        <a href="https://github.com/EliaRenov/AesopFables" className="repo-link"  target="_blank" >
                            <img src={GitHubRepoIcon} alt="Demo Icon" />
                            Repository
                        </a>
                    </div>
                    <div className="project-demo">
                        <img className="project-demo-tabs" src={DemoBrowserOverlay} />
                        <video className="project-demo-video" playsInline autoPlay muted loop>
                            <source src={AesopFablesVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Index