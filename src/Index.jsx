import './Index.css'
import EliaPic from './assets/elia-pic.webp'
import DemoBrowserOverlay from './assets/modern-browser-tabs.png'
import AesopFablesVideo from './assets/AesopFables-demo.webm'
import OW2CareerProfileVideo from './assets/ow-career-profile-video.webm'
import OW2CareerProfileVideoMobile from './assets/overwatch-mobile-demo.webm'
import ColorPickerVideo from './assets/color-picker-demo.webm'

import CommsBoard from './assets/comms-board.webm'
import AesopFablesPhoneVideo from './assets/aesop-phone-demo.webm'
import ColorPickerPhoneVideo from './assets/color-picker-phone-demo.webm'

import BookIcon from './assets/book-icon.png'
import BrushIcon from './assets/brush-icon.webp'
import Overwatch2 from './assets/Overwatch2-icon.png'

import LiveDemoIcon from './assets/live-demo-icon.png'
import GitHubRepoIcon from './assets/repo-icon.png'
import Skills from './assets/skills.png'


import CatsHeart from './assets/cats-heart.webp'
import Contact from './Contact'

import {
    Link,
} from "react-router-dom";


const Index = () => {

    return (
        <main className="index-page" id="about">
            <section className="section first-section">
            <div className="introduction">
            <div className="name-and-job">
                <h1 className="name-title">Elia Renov</h1>
                <h3 className="job-title">Web Developer</h3>
                <img className="skills" src={Skills} alt="skills" />
            </div>
            <div className="elia-pic">
            <img src={EliaPic} alt="Picture of Elia" />
            </div>
            </div>
            
            <div className="about">
                {/* <p>
                I'm Elia, a self-taught frontend developer with a strong appreciation for UX. 
                </p> */}
                {/* <p>
                Based in the Upper Galilee, Israel.
                </p> */}
            </div>
            <a className="contact-me-btn" href="#contact">Contact Me</a>
            {/* <img src={CatsHeart} alt="Cats with a heart" className="cats-heart" /> */}
            </section>
            <section id="projects" className="projects">
                <h2 className="projects-title">
                    Projects
                </h2>
                <div className="project">
                    <h3 className="project-title">
                        'Overwatch' Player Statistics
                        <img className="ow2-icon" src={Overwatch2} alt="Overwatch 2 icon" height="20px" />
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
                        <Link to="/ow-career-profile" target="_blank" >
                        <img className="project-demo-tabs" src={DemoBrowserOverlay} />
                        <video className="project-demo-video" playsInline autoPlay muted loop>
                            <source src={OW2CareerProfileVideo} type="video/webm" />
                        </video>

                        <video 
                        className="project-phone-demo-video" playsInline autoPlay muted loop>
                            <source src={OW2CareerProfileVideoMobile} type="video/webm" />
                        </video>
                    </Link>
                    </div>
                </div>

                <div className="project">
                    <h3 className="project-title">
                        Aesop's Fables
                        <img className="book-icon" src={BookIcon} alt="Book icon" height="20px" />
                    </h3>
                    <p className="project-description">
                        Aesop's Fables is a website containing hundreds of fables credited to ancient Greek fabulist and storyteller Aesop.
                        <br />
                        These fables were translated to Hebrew by poet, Shlomo Shapan, and webscraped from the website 'Ben-yehuda Project'.
                    </p>
                    <div className="project-links">
                        <a href="https://eliarenov.github.io/AesopFables/" className="demo-link" target="_blank" >
                            <img src={LiveDemoIcon} alt="Demo Icon" />
                            Live Demo
                        </a>
                        <a href="https://github.com/EliaRenov/AesopFables" className="repo-link" target="_blank" >
                            <img src={GitHubRepoIcon} alt="Demo Icon" />
                            Repository
                        </a>
                    </div>
                    <div className="project-demo">
                    <Link to="/aesops-fables" target="_blank" >
                        <img className="project-demo-tabs" src={DemoBrowserOverlay} />
                        <video className="project-demo-video" playsInline autoPlay muted loop>
                            <source src={AesopFablesVideo} type="video/webm" />
                        </video>
                        
                        <video 
                        className="project-phone-demo-video" playsInline autoPlay muted loop>
                            <source src={AesopFablesPhoneVideo} type="video/webm" />
                        </video>
                    </Link>
                    </div>
                    </div>
                    
                <div className="project">
                    <h3 className="project-title">
                        Color Picker <img className="brush-icon" src={BrushIcon} alt="Brush icon" height="20px" />
                    </h3>
                    <p className="project-description">
                    Scroll through hundreds of colors and hues by clicking space.
                    <br />
	                Find complementary shades by locking specific colors; allowing them to persist between new palettes.
                    </p>
                    <div className="project-links">
                        <a href="https://elia-color-picker.netlify.app/" className="demo-link" target="_blank" >
                            <img src={LiveDemoIcon} alt="Demo Icon" />
                            Live Demo
                        </a>
                        <a href="https://github.com/EliaRenov/color-picker" className="repo-link" target="_blank" >
                            <img src={GitHubRepoIcon} alt="Demo Icon" />
                            Repository
                        </a>
                    </div>
                    <div className="project-demo">
                    <Link to="/color-picker" target="_blank" >
                        <img className="project-demo-tabs" src={DemoBrowserOverlay} />
                        <video className="project-demo-video" playsInline autoPlay muted loop>
                            <source src={ColorPickerVideo} type="video/webm" />
                        </video>

                        <video 
                        className="project-phone-demo-video" playsInline autoPlay muted loop>
                            <source src={ColorPickerPhoneVideo} type="video/webm" />
                        </video>
                    </Link>
                    </div>
                    </div>

                    <div className="project">
                    <h3 className="project-title">
                        Dog Therapy Communication Board
                    </h3>
                    <p className="project-description">
                        A communication board developed in the iOS app 'TouchChat'.
                        <br />
                        This board is used weekly by the staff at a school for children with severely weak verbal skills.
                    </p>
                    
                    <div className="project-demo">
                    <Link to="/comms-board" target="_blank" >
                        <img className="project-demo-tabs" src={DemoBrowserOverlay} />
                        <video className="project-demo-video" playsInline autoPlay muted loop>
                            <source src={CommsBoard} type="video/webm" />
                        </video>
                    </Link>
                    </div>
                    </div>
            </section>
            
            <Contact />
            
        </main>
    )
}

export default Index