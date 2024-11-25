import {AiFillGithub,AiFillYoutube} from "react-icons/ai";
import {IoDocumentTextSharp} from "react-icons/io5"
import {FaArchive} from "react-icons/fa";
import {IoMdOpen} from "react-icons/io";

export default function Button(props: any){
    if(props.name === "youtube"){
        return(
            <a className="profile_button b1 shadow hvr-float hvr-fade" href="https://www.youtube.com/@realzoogies" target="_blank" rel="noreferrer">
                <AiFillYoutube size={40} color={"white"} />
                <h2 className="profile_button_text">Youtube</h2>
            </a>   
        )
    }
    if(props.name === "github"){
        return(
            <a className="profile_button b1 shadow hvr-float hvr-fade" href="https://github.com/zoogies" target="_blank" rel="noreferrer">
                <AiFillGithub size={40} color={"white"} />
                <h2 className="profile_button_text">Github</h2>
            </a>
        )
    }
    if(props.name === "resume"){
        return(
            <a className="profile_button b1 shadow hvr-float hvr-fade" href = {require('../../Resources/resume.pdf')} target = "_blank" rel="noreferrer">
                <IoDocumentTextSharp size={40} color={"white"} />
                <h2 className="profile_button_text">Resume</h2>
            </a>
        )
    }
    if(props.name === "projects"){
        return(
            <a className="profile_button b1 shadow hvr-float hvr-fade" href="https://zoogies.live" target="_blank" rel="noreferrer">
                <FaArchive size={40} color={"white"} />
                <h2 className="profile_button_text">Projects</h2>
            </a>
        )
    }
    if(props.name === "source"){
        return(
            <a className="profile_button b1 shadow hvr-float hvr-fade" href={props.source} target="_blank" rel="noreferrer">
                <AiFillGithub size={40} color={"white"} />
                <h2 className="profile_button_text">Source</h2>
            </a>
        )
    }
    if(props.name === "visit" && props.link.length > 0){
        return(
            <a className="profile_button b1 shadow hvr-float hvr-fade" href={props.link} target="_blank" rel="noreferrer">
                <IoMdOpen size={40} color={"white"} />
                <h2 className="profile_button_text">Visit</h2>
            </a>
        )
    } else{
        return(<></>)
    }
}