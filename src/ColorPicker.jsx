import './ProjectPage.css'
import DemoBrowserOverlay from './assets/modern-browser-tabs.png'
import ColorPickerVideo from './assets/color-picker-demo.webm'
import LiveDemoIcon from './assets/live-demo-icon.png'
import GitHubRepoIcon from './assets/repo-icon.png'
import BrushIcon from './assets/brush-icon.webp'
import { useEffect } from 'react'


const ColorPicker = (props) => {
    useEffect(() => {
        document.documentElement.scrollTop = 0
        document.title = props.title
    }, [])
    
    return (
        <main className="project-page">
                <h1 className="project-title">
                    Color Picker
                    <img className="brush-icon" src={BrushIcon} alt="Brush icon" height="20px" />
                </h1>
                <h4 className="project-summary">
                A list of 1302 named colors.
                Lock in your favourite colors and prepare a beautiful palette for your next design.
                </h4>
                    <div className="project-links">
                        <a href="https://elia-color-picker.netlify.com/" className="demo-link" target="_blank">
                            <img src={LiveDemoIcon} alt="Demo Icon" />
                            Live Demo
                        </a>
                        <a href="https://github.com/EliaRenov/color-picker" className="repo-link" target="_blank" >
                            <img src={GitHubRepoIcon} alt="Demo Icon" />
                            Repository
                        </a>
                    </div>
                    <div className="project-demo">
                        <img className="project-demo-tabs" src={DemoBrowserOverlay} />
                        <video className="project-demo-video" playsInline autoPlay muted loop>
                            <source src={ColorPickerVideo} type="video/webm" />
                        </video>                    </div>
        </main>
    )
}

export default ColorPicker