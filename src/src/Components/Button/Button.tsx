import {AiFillGithub,AiFillYoutube} from "react-icons/ai";
import {IoDocumentTextSharp} from "react-icons/io5"
import {FaArchive} from "react-icons/fa";

export default function Button(props: any){
    if(props.name === "youtube"){
        return(
            <a className="profile_button b1 shadow" href="https://www.youtube.com/@ryanzmuda">
                <AiFillYoutube size={40} color={"white"} />
                <h2 className="profile_button_text">Youtube</h2>
            </a>   
        )
    }
    if(props.name === "github"){
        return(
            <a className="profile_button b1 shadow" href="https://github.com/Yoyolick">
                <AiFillGithub size={40} color={"white"} />
                <h2 className="profile_button_text">Github</h2>
            </a>
        )
    }
    if(props.name === "resume"){
        return(
            <a className="profile_button b1 shadow" href="">
                <IoDocumentTextSharp size={40} color={"white"} />
                <h2 className="profile_button_text">Resume</h2>
            </a>
        )
    }
    if(props.name === "projects"){
        return(
            <a className="profile_button b1 shadow" href="https://zoogies.live">
                <FaArchive size={40} color={"white"} />
                <h2 className="profile_button_text">Projects</h2>
            </a>
        )
    }

    return(<p>error</p>)
}