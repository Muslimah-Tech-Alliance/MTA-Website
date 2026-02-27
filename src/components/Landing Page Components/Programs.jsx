import CodeAcademy from "../../assets/Landing Page Pics/code-academy-icon.png"
import Pitch from "../../assets/Landing Page Pics/pitch-icon.png"
import TechSummit from "../../assets/Landing Page Pics/tech-summit-icon.png"
import StartupAdvisory from "../../assets/Landing Page Pics/startup-advisory-icon.png"
import "../../styles/Landing Page Styles/Programs.css"

export default function Programs(){
    return(
       <div id="programs" className="programs-section">
            <h1>Our Programs</h1>
            <div className="programs-list">
                <div className="each-program">
                    <img src={CodeAcademy} alt="Muslimah code academy icon" />
                    <h2>Muslimah Code Academy</h2>
                    <p>A 3-month intensive, mentorship based program specifically for Muslim women in tech who are at an above-beginner level</p>
                    <button>Read More</button>
                </div>
                 <div className="each-program">
                    <img src={Pitch} alt="Muslimah pitch icon" />
                    <h2>Muslimah Pitch-a-thon</h2>
                    <p>A structured competition designed to tranisition technical products into validated fundable products</p>
                    <button>Read More</button>
                </div>

                 <div className="each-program">
                    <img src={TechSummit} alt="Muslimah tech summit icon" />
                    <h2>Muslimah Tech Summit</h2>
                    <p>The flagship annual gathering of MTA designed to inspire the community and  showcase innovation</p>
                    <button>Read More</button>
                </div>

                 <div className="each-program">
                    <img src={StartupAdvisory} alt="code academy icons" />
                    <h2>Muslimah Startup Advisory Academy</h2>
                    <p>It provides the specialized  business and legal framework necessary to turn a technical product into a sustainable company</p>
                    <button>Read More</button>
                </div>
            </div>
       </div>
    )
}