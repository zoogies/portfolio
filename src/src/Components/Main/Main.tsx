import "../../Resources/shared.css";
import "./Main.css";
import GitHubCalendar from 'react-ts-github-calendar';
import Button from "../Button/Button";
import Project from "../Project/Project";

interface project {
    title: string,
    media: string,
    mediatype: "video" | "image",
    source: string,
    description: string,
}

let spotiguess: project = {
    title:"Spotiguess",
    media:require("../../Resources/Images/Projects/spotiguessdemo.mp4"),
    mediatype: "video",
    source: "https://github.com/Yoyolick/spotiguess",
    description: "A fullstack react flask app web game that utilizes spotify's Oath and API to provide a party game experience of guessing who has streamed a song the most."
}

// get site version from package.json
let version = require("../../../package.json").version;

export default function Main(){
    return(
        <div className="b1">
            <div className="slide">
                <div className="profile_width">
                    <div className="profile_content b2 shadow">
                        <div className="profile_general_top">
                            <img className="profile_picture shadow" alt="portrait" src={require("../../Resources/Images/portrait_square.jpeg")}/>
                            <div className="profile_meta">
                                <h1 className="profile_name">Ryan Zmuda</h1>
                                {/* <p>he / him</p> */}
                                <p>An 18 year old University of Dayton student developer.</p>
                                <div className="profile_buttons">            
                                    <Button name="github"/>

                                    <Button name="resume"/>

                                    <Button name="projects"/>

                                    <Button name="youtube"/>
                                </div>
                            </div>
                        </div>
                        {/* <a className="profile_general_top" href="https://github.com/Yoyolick">
                            <h2 className="profile_github_label">Commit Activity:</h2>
                            <GitHubCalendar userName="yoyolick" global_stats={false}/>
                        </a> */}
                        
                        <h1 className="project-text">Notable Projects:</h1>

                        <Project obj={spotiguess}/>

                        {/*
                        <div className="profile_entry_top">
                            <div className="profile_entry_info">
                                <h1 className="profile_entry_title">Film Fest</h1>
                                <p>A fullstack react flask app video streaming site, meant to archive student films from a creative filmmaking class I took.</p>
                                <div className="profile_entry_buttons">
                                    <a className="profile_entry_button hvr-grow" href="https://github.com/Yoyolick/spotiguess">
                                        <h2>Source Code</h2>
                                    </a>
                                </div>
                            </div>
                            <video className="shadow video" autoPlay={true} controls={true} muted={true} loop={true}>
                                <source src={require("../../Resources/Images/Projects/filmfestdemo.mp4")} type="video/mp4"/>
                            </video>
                        </div>

                        <div className="profile_entry_top">
                            <div className="profile_entry_info">
                                <h1 className="profile_entry_title">hdhs.live</h1>
                                <p>A vanilla JS social media site I created as an anonmymous message board for my high school, which may or may not have gotten me in trouble.</p>
                                <div className="profile_entry_buttons">
                                    <a className="profile_entry_button hvr-grow" href="https://github.com/Yoyolick/hdhs.live">
                                        <h2>Source Code</h2>
                                    </a>
                                </div>
                            </div>
                            <div className="showcase_double">
                                <img className="showcase_image" src={require("../../Resources/Images/Projects/hdhsexample.png")} alt="project showcase"/>
                                <img className="showcase_image" src={require("../../Resources/Images/Projects/hdhsexample2.png")} alt="project showcase"/>
                            </div>
                        </div>

                        <div className="profile_entry_top">
                            <div className="profile_entry_info">
                                <h1 className="profile_entry_title">TextToGcode</h1>
                                <p>A python library that generates gcode files and data when given an alphanumeric input. Created so that I could translate math problem answers into CNC movement to solve math homework automatically.</p>
                                <div className="profile_entry_buttons">
                                    <a className="profile_entry_button hvr-grow" href="https://github.com/Yoyolick/texttogcode">
                                        <h2>Source Code</h2>
                                    </a>
                                </div>
                            </div>
                            <div className="showcase_double">
                                <img className="showcase_single_image" src="https://camo.githubusercontent.com/4c9d4170db9c7ad07e193d798deaeb3715c708836ea361ab605d341265f4725d/68747470733a2f2f692e696d6775722e636f6d2f476b38785467332e706e67" alt="project showcase"/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <p className="footertext">Portfolio Site v{version}</p>
        </div>
    )
}