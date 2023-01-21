import "../../Resources/shared.css";
import "./Main.css";
import GitHubCalendar from 'react-ts-github-calendar';
import Button from "../Button/Button";
import Project from "../Project/Project";
import "../Button/Button.css";
interface project {
    title: string,
    media: string,
    mediatype: "video" | "image",
    source: string,
    link: string,
    description: string,
    tech: string[],
}

let spotiguess: project = {
    title:"Spotiguess",
    media:require("../../Resources/Images/Projects/spotiguessdemo.mp4"),
    mediatype: "video",
    source: "https://github.com/Yoyolick/spotiguess",
    link: "https://zoogies.live/spotiguess",
    description: "A fullstack react flask app web game that utilizes spotify's Oath and API to provide a party game experience of guessing who has streamed a song the most.",
    tech: ["python","react","javascript","docker"]
}

let filmfest: project = {
    title:"Filmfest",
    media:require("../../Resources/Images/Projects/filmfestdemo.mp4"),
    mediatype: "video",
    source: "https://github.com/Yoyolick/filmfest",
    link: "",
    description: "A fullstack react flask app video streaming site, meant to archive student films from a creative filmmaking class I took.",
    tech: ["python","react","javascript","sqlite"]
}

let hdhs: project = {
    title:"hdhs.live",
    media:require("../../Resources/Images/Projects/hdhs.jpeg"),
    mediatype: "image",
    source: "https://github.com/Yoyolick/hdhs.live",
    link: "",
    description: "A vanilla JS flask served anonymous message/image board created for students at my highschool.",
    tech: ["python","javascript","sqlite"]
}

let mitsuri: project = {
    title:"Mitsuri",
    media:require("../../Resources/Images/Projects/mitsuri.png"),
    mediatype: "image",
    source: "https://github.com/Yoyolick/mitsuri",
    link: "",
    description: "A discordjs bot I maintain for a server with friends, uses a bunch of API for a combination of cool AI-powered commands.",
    tech: ["javascript","docker"]
}

let hub: project = {
    title:"zoogies.live",
    media:require("../../Resources/Images/Projects/hub.png"),
    mediatype: "image",
    source: "https://github.com/Yoyolick/hub",
    link: "https://zoogies.live",
    description: "A website and API I maintain to host and control a multitude of different services. Acts as a central hub for all of my projects.",
    tech: ["python","svelte","javascript","docker"]
}

let soulja: project = {
    title:"Portable Emulation Console",
    media:require("../../Resources/Images/Projects/soulja.jpg"),
    mediatype: "image",
    source: "",
    link: "",
    description: "A retropi and emulation station powered handheld console. Designed pcb as well as 3d printed case myself, and soldered and assembled all components together. Modified linux image to support various buttons and features.",
    tech: ["soldering","3D printing"]
}

let texttogcode: project = {
    title:"TextToGcode",
    media:require("../../Resources/Images/Projects/texttogcode.png"),
    mediatype: "image",
    source: "https://github.com/Yoyolick/TextToGcode",
    link: "https://pypi.org/project/TextToGcode/",
    description: "A python library you can utilize to create custom gcode commands from a string. Intended to be used to engrave or draw text with cnc machines.",
    tech: ["python"]
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
                                {/* turn this age into a float that updates very slowly but noticably darken the background on the text a little TODO */}
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

                        <Project obj={filmfest}/>

                        <Project obj={hub}/>

                        <Project obj={mitsuri}/>

                        <Project obj={hdhs}/>

                        <Project obj={soulja}/>

                        <Project obj={texttogcode}/>
                    </div>
                </div>
            </div>
            <p className="footertext">Portfolio Site v{version}</p>
        </div>
    )
}