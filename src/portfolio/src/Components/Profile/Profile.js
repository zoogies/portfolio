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
                                    <a className="profile_button b3 shadow" href="https://github.com/Yoyolick">
                                        <AiFillGithub size={40} color={"white"} />
                                        <h2 className="profile_button_text">Github</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a className="profile_general_top b3 shadow" href="https://github.com/Yoyolick">
                            <h2 className="profile_github_label">Github Activity:</h2>
                            <GitHubCalendar username="yoyolick" color="#ffdd00"/>
                        </a>

                        <h1>Notable Projects:</h1>

                        <div className="profile_general_top profile_entry_top">
                            <div className="profile_entry_info">
                                <h1 className="profile_entry_title">Spotiguess</h1>
                                <p>A fullstack react flask app web game that utilizes spotify's Oath and API to provide a party game experience of guessing who has streamed a song the most.</p>
                                <div className="profile_entry_buttons">
                                    <a className="profile_entry_button hvr-grow" href="http://spotiguess.zoogies.live">
                                        <h2>Play Now</h2>
                                    </a>
                                    <a className="profile_entry_button hvr-grow" href="https://github.com/Yoyolick/spotiguess">
                                        <h2>Source Code</h2>
                                    </a>
                                </div>
                            </div>
                            <video className="shadow video" autoPlay={true} controls={true} muted={true} loop={true}>
                                <source src={require("../../Resources/Images/Projects/spotiguessdemo.mp4")} type="video/mp4"/>
                            </video>
                        </div>

                        <div className="profile_general_top profile_entry_top">
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

                        <div className="profile_general_top profile_entry_top">
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

                        <div className="profile_general_top profile_entry_top">
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
                                <img className="showcase_image" src="https://camo.githubusercontent.com/4c9d4170db9c7ad07e193d798deaeb3715c708836ea361ab605d341265f4725d/68747470733a2f2f692e696d6775722e636f6d2f476b38785467332e706e67" alt="project showcase"/>
                            </div>
                        </div>

                        <div className="profile_general_top profile_entry_top">
                            <div className="profile_entry_info">
                                <h1 className="profile_entry_title">Soulja Game</h1>
                                <p>A custom made raspberry pi driven handheld gaming emulator device. Designed from scratch, with a custom PCB and parts sourced straight from china, this compact gaming device can emulate just about any game ever made before the PS2 era.</p>
                            </div>
                            <div className="showcase_double">
                                <img className="showcase_image" src={require("../../Resources/Images/Projects/souljaex.jpg")} alt="project showcase"/>
                                <img className="showcase_image" src={require("../../Resources/Images/Projects/souljaex2.jpg")} alt="project showcase"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}