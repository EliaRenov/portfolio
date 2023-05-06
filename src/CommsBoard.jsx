import './ProjectPage.css'
import DemoBrowserOverlay from './assets/modern-browser-tabs.png'
import LiveDemoIcon from './assets/live-demo-icon.png'
import GitHubRepoIcon from './assets/repo-icon.png'
import CommsBoardVideo from './assets/comms-board.mp4'
import Board1 from './assets/board-1.png'
import Board2 from './assets/board-2.png'
import Board3 from './assets/board-3.png'

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
                            <source src={CommsBoardVideo} type="video/mp4" />
                        </video>
                    </div>
                <section className="project-ep">
                    <h2 className="project-ep-title">
                        Why?
                    </h2>
                    <h4 className="project-ep-content project-summary">
                        These children have a hard time understanding others and conveying their needs and wants. 
                        <br />
                        By using the communication board, the children can see pictures of what activities they can do with the dogs.
                        <br />
                        They can also clearly communicate to the staff what they would like to do.
                    </h4>
                </section>
                <section className="project-ep">
                    <h2 className="project-ep-title">
                        The board
                    </h2>
                    <h4 className="project-ep-content project-summary">
                        <div className="board-pic">
                            <img src={Board3} alt="Communication board" />
                        </div>
                    </h4>
                </section>
        </main>
    )
}

export default CommsBoard