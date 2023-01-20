import "../../Resources/shared.css";
import Button from "../Button/Button";
import "./Project.css";

export default function Project(props:any){
    if(props.obj.mediatype === "video"){
        return(
            <div className="b1 shadow project-top">
                <h1>{props.obj.title}</h1>
                <p>{props.obj.description}</p>
                <div className="wrapper">
                    <video className="shadow video" autoPlay={true} controls={true} muted={true} loop={true}>
                        <source src={props.obj.media} type="video/mp4"/>
                    </video>
                </div>
                <div className="buttons">
                    <Button link={props.obj.source} name="source"/>
                    <Button link={props.obj.link} name="visit"/>
                </div>
            </div>
        )
    }
    else{
        return(
            <p>uhhh</p>
        )
    }
}