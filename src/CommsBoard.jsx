import './ProjectPage.css'
import DemoBrowserOverlay from './assets/modern-browser-tabs.png'
import CommsBoardVideo from './assets/comms-board.webm'
import Board from './assets/board.png'

import { useEffect } from 'react'


const CommsBoard = (props) => {
    useEffect(() => {
        document.documentElement.scrollTop = 0
        document.title = props.title
    }, [])
    
    return (
        <main className="project-page">
                <h1 className="project-title">
                    Dog Therapy Communication Board
                </h1>
                <h4 className="project-summary">
                A communication board developed in the iOS app 'TouchChat'.
                    <br />
                    This board is used weekly by the staff at a school for children with severely weak verbal skills.

                </h4>
                    <div className="project-demo">
                        <img className="project-demo-tabs" src={DemoBrowserOverlay} />
                        <video className="project-demo-video" playsInline autoPlay muted loop>
                            <source src={CommsBoardVideo} type="video/webm" />
                        </video>
                    </div>
                <section className="project-ep">
                    <h2 className="project-ep-title">
                        Why?
                    </h2>
                    <h4 className="project-ep-content project-summary">
                        These children have a hard time understanding others and conveying their needs and wants. 
                        The communication board helps the children:
                        <br />
                        <br />
                        * Understand the different activities they can do with the dogs 
                        <br />
                        * Communicate to the staff what activies they would like to do
                        <br />
                        * Strengthen communication and social tools
                        <br />
                        * Overcoming fears (fear of dogs)
                        <br />
                        * Build personal confidence
                    </h4>
                </section>
                <section className="project-ep">
                    <h2 className="project-ep-title">
                        The board
                    </h2>
                    <h4 className="project-ep-content project-summary">
                        <div className="board-pic">
                            <img src={Board} alt="Communication board" />
                        </div>
                    </h4>
                </section>
        </main>
    )
}

export default CommsBoard