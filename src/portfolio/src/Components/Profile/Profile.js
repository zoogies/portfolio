import NavBar from "../Navbar/Navbar";
import "../../Resources/shared.css";
import "./Profile.css";
import GitHubCalendar from 'react-github-calendar';
import {AiFillGithub} from "react-icons/ai";
import {BsFillKeyboardFill} from "react-icons/bs";

export default function Profile(){
    return(
        <div>
            <NavBar/>
            <div className="slide">
                <div className="profile_width">
                    <div className="profile_content">
                        <div className="profile_general_top b3 shadow">
                            <img className="profile_picture" alt="portrait" src={require("../../Resources/Images/portrait_square.jpeg")}/>
                            <div className="profile_meta">
                                <h1 className="profile_name">Ryan Zmuda</h1>
                                <p>An 18 year old University of Dayton student developer.</p>
                                <div className="profile_buttons">
                                    <div className="profile_button b3 shadow">
                                        <BsFillKeyboardFill size={40} color={"white"} />
                                        <h2 className="profile_button_text">Experience</h2>
                                    </div>
                                    <div className="profile_button b3 shadow">
                                        <AiFillGithub size={40} color={"white"} />
                                        <h2 className="profile_button_text">Github</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="profile_general_top b3 shadow" href="https://github.com/Yoyolick">
                            <h2 className="profile_github_label">Github Commit Calender:</h2>
                            <GitHubCalendar username="yoyolick" color="#ffdd00"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}