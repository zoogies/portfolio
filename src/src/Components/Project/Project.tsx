import "../../Resources/shared.css";
import "./Project.css";

export default function Project(props:any){
    return(
        <div className="b1 shadow project-top">
            <h1>{props.obj.title}</h1>
        </div>
    )
}