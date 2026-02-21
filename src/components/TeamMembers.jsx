import FbIcon from "../assets/fb-icon1.png"
import LinkedinIcon from "../assets/Linkedin-icon1.png"
import MemberPic from "../assets/Profile-placeholder.png"
import XIcon from "../assets/x-icon1.png"
import ProfileRectangle from "../assets/Profile-rectangle.png"
import "../styles/TeamMembers.css";


export default function TeamMembers(){
    return(
        <div className="team-section">
            <h1>Meet Our Team Members</h1>
            <div className="profiles">

                <div className="profile-card low">
                    <img src={MemberPic} alt="" />
                    <h3>Mariam Bello</h3>
                    <p>Founder</p>
                    <div className="social-links">
                        <img src={ProfileRectangle} alt="" />
                        <img src={FbIcon} alt="" />
                        <img src={LinkedinIcon} alt="" />
                        <img src={XIcon} alt="" />
                    </div>
                </div>


                <div className="profile-card high">
                     <img src={MemberPic} alt="" />
                    <h3>Mariam Bello</h3>
                    <p>Founder</p>
                    <div className="social-links">
                        <img src={ProfileRectangle} alt="" />
                        <img src={FbIcon} alt="" />
                        <img src={LinkedinIcon} alt="" />
                        <img src={XIcon} alt="" />
                    </div>
                </div>

                <div className="profile-card low">
                     <img src={MemberPic} alt="" />
                    <h3>Mariam Bello</h3>
                    <p>Founder</p>
                    <div className="social-links">
                        <img src={ProfileRectangle} alt="" />
                        <img src={FbIcon} alt="" />
                        <img src={LinkedinIcon} alt="" />
                        <img src={XIcon} alt="" />
                    </div>
                </div>

                <div className="profile-card high">
                     <img src={MemberPic} alt="" />
                    <h3>Mariam Bello</h3>
                    <p>Founder</p>
                    <div className="social-links">
                        <img src={ProfileRectangle} alt="" />
                        <img src={FbIcon} alt="" />
                        <img src={LinkedinIcon} alt="" />
                        <img src={XIcon} alt="" />
                    </div>
                </div>

                <div className="profile-card low">
                     <img src={MemberPic} alt="" />
                    <h3>Mariam Bello</h3>
                    <p>Founder</p>
                    <div className="social-links">
                        <img src={ProfileRectangle} alt="" />
                        <img src={FbIcon} alt="" />
                        <img src={LinkedinIcon} alt="" />
                        <img src={XIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}