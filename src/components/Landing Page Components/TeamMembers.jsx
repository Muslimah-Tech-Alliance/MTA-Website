import FbIcon from "../../assets/Social icons/fb-icon1.png"

import LinkedinIcon from "../../assets/Social icons/Linkedin-icon1.png"
import MemberPic from "../../assets/Landing Page Pics/Profile-placeholder.png"
import XIcon from "../../assets/Social icons/x-icon1.png"

import ProfileRectangle from "../../assets/Landing Page Pics/Profile-rectangle.png"
import "../../styles/Landing Page Styles/TeamMembers.css";


export default function TeamMembers(){
    return(
        <div className="team-section" id="team">
            <h1>Meet Our Team Members</h1>
            <div className="profiles">

                <div className="profile-card low left">
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


                <div className="profile-card high right">
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

                <div className="profile-card low left">
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

                <div className="profile-card high right">
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

                <div className="profile-card low left">
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