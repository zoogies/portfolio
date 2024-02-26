import "../../Resources/shared.css";
import "./Main.css";
import Button from "../Button/Button";
import Project from "../Project/Project";
import "../Button/Button.css";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
interface project {
    title: string,
    media: string,
    mediatype: "video" | "image",
    source: string,
    link: string,
    description: string,
    tech: string[],
}

let engine: project = {
    title:"2D Game Engine (Work in progress)",
    media:require("../../Resources/Images/Projects/engine.mp4"),
    mediatype: "video",
    source: "https://github.com/zoogies/yoyoengine",
    link: "",
    description: "A work in progress 2D game engine written in C. Utilizes SDL2 for graphics and input, as well as Nuklear for immediate mode gui. Employs the Entity Component System desing pattern.",
    tech: ["c", "git"]
}

let spotiguess: project = {
    title:"Spotiguess",
    media:require("../../Resources/Images/Projects/spotiguessdemo.mp4"),
    mediatype: "video",
    source: "https://github.com/zoogies/spotiguess",
    link: "https://zoogies.live/spotiguess",
    description: "A fullstack react flask app web game that utilizes spotify's Oath and API to provide a party game experience of guessing who has streamed a song the most.",
    tech: ["python","react","javascript","docker","git"]
}

let filmfest: project = {
    title:"Filmfest",
    media:require("../../Resources/Images/Projects/filmfestdemo.mp4"),
    mediatype: "video",
    source: "https://github.com/zoogies/filmfest",
    link: "",
    description: "A fullstack react flask app video streaming site, meant to archive student films from a creative filmmaking class I took.",
    tech: ["python","react","javascript","sqlite","git"]
}

let hdhs: project = {
    title:"hdhs.live",
    media:require("../../Resources/Images/Projects/hdhs.jpeg"),
    mediatype: "image",
    source: "https://github.com/zoogies/hdhs.live",
    link: "",
    description: "A vanilla JS flask served anonymous message/image board created for students at my highschool.",
    tech: ["python","javascript","sqlite","git"]
}

let mitsuri: project = {
    title:"Mitsuri",
    media:require("../../Resources/Images/Projects/mitsuri.png"),
    mediatype: "image",
    source: "https://github.com/zoogies/mitsuri",
    link: "",
    description: "A discordjs bot I maintain for a server with friends, uses a bunch of API for a combination of cool AI-powered commands.",
    tech: ["javascript","docker","git"]
}

let hub: project = {
    title:"zoogies.live",
    media:require("../../Resources/Images/Projects/hub.png"),
    mediatype: "image",
    source: "https://github.com/zoogies/hub",
    link: "https://zoogies.live",
    description: "A website and API I maintain to host and control a multitude of different services. Acts as a central hub for all of my projects.",
    tech: ["python","svelte","javascript","docker","git"]
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
    source: "https://github.com/zoogies/TextToGcode",
    link: "https://pypi.org/project/TextToGcode/",
    description: "A python library with over 12,000 downloads that you can utilize to create custom gcode commands from a string. Intended to be used to engrave or draw text with cnc machines.",
    tech: ["python","git","pypi"]
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
                            <img className="profile_picture shadow" alt="portrait" src={require("../../Resources/Images/portrait_square_min.jpeg")}/>
                            <div className="profile_meta">
                                <h1 className="profile_name">Ryan Zmuda</h1>
                                {/* <p>he / him</p> */}
                                <p>A 20 year old University of Dayton student developer.</p>
                                <div className="icontext">
                                    <ImLocation2 size={25} color={"white"} />
                                    <p>Dayton, OH</p>
                                    
                                </div>
                                <div className="icontext">
                                    <MdEmail size={25} color={"white"}/>
                                    <a className="nolink" href="mailto:ryanzmuda@gmail.com">ryanzmuda@gmail.com</a>
                                </div>
                                {/* turn this age into a float that updates very slowly but noticably darken the background on the text a little TODO */}
                                <div className="profile_buttons">            
                                    <Button name="github"/>

                                    <Button name="resume"/>

                                    <Button name="projects"/>

                                    <Button name="youtube"/>
                                </div>
                            </div>
                        </div>
                        {/* <a className="profile_general_top" href="https://github.com/zoogies">
                            <h2 className="profile_github_label">Commit Activity:</h2>
                            <GitHubCalendar userName="zoogies" global_stats={false}/>
                        </a> */}
                        
                        <h1 className="project-text">Notable Projects:</h1>
                        <p className="project-text slight-grayed-text">For work experience, please refer to my resume above</p>

                        <Project obj={engine}/>

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
