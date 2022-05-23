import NavBar from "../Navbar/Navbar";
import "../../Resources/shared.css";
import "./Profile.css";
import GitHubCalendar from 'react-github-calendar';

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
                            </div>
                            <GitHubCalendar username="yoyolick" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}