import "./Button.css";
import "../../Resources/shared.css";
import {BiPackage} from "react-icons/bi";
import {FaList} from "react-icons/fa";

export default function Button(props){
    if(props.type === 'about'){
        return(
            <a className="about_top b3 shadow" href="/profile">
                <img className="about_picture_top" alt="Ryan Zmuda" src={require("../../Resources/Images/portrait_square.jpeg")}/>
                <h1 className="about_text">Profile</h1>
            </a>
        )
    }
    else if(props.type === 'live'){
        return(
            <a className="button_top b3 shadow" href="/live">
                <h1 className="button_text">Live Projects</h1>
                <div className="live_icon shadow"/>
            </a>
        )
    }
    else if(props.type === 'timeline'){
        return(
            <a className="button_top b3 shadow" href="/timeline">
                <div className="button_icon box">
                    <FaList size={45} color={"white"} />
                </div>
                <h1 className="button_text_icon">Timeline</h1>
            </a>
        )
    }
    else if(props.type === 'releases'){
        return(
            <a className="button_top b3 shadow" href="/releases">
                <div className="button_icon">
                    <BiPackage size={60} color={"white"} />
                </div>
                <h1 className="button_text_icon">Releases</h1>
            </a>
        )
    }
}