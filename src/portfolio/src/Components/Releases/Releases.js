import NavBar from "../Navbar/Navbar"
import "./Releases.css";
import "../../Resources/shared.css";
import {AiOutlineDownload} from "react-icons/ai";
import {HiOutlineCode} from "react-icons/hi";

export default function Releases(){
    const releases= {
        "TextToGcode":{
            "description":"A python library that can create gcode files and strings from text",
            "image":"https://cdn-icons-png.flaticon.com/512/4371/4371109.png",
            "download":"https://pypi.org/project/TextToGcode/",
            "source":"https://github.com/Yoyolick/TextToGcode"
        },
        "BSM":{
            "description":"A 3rd party save manager for the VR game boneworks.",
            "image":"https://external-preview.redd.it/KvG-Pq-xSI2ctb0GyJF43zMz4oLtxnONYmpULtwu9sI.jpg?auto=webp&s=9a7cb263d3dcaaafa61a41495b47b2f8aeb8e770",
            "download":"https://github.com/Yoyolick/Boneworks-Save-Manager/releases",
            "source":"https://github.com/Yoyolick/Boneworks-Save-Manager"
        }
    }
    return(
        <div>
            <NavBar/>
            <div className="releases_content">
                <div className="releases_list">
                    {
                        Object.keys(releases).map((keyName, i) => (
                            <div key={keyName} className="release_top b3 shadow">
                                <div className="release_header">
                                    <img alt={keyName} className="release_image" src={(releases[keyName]['image'])}/>
                                    <h1 className="release_title">{keyName}</h1>
                                </div>
                                <p className="release_description">{releases[keyName]['description']}</p>
                                <div className="release_info">
                                    <a className="release_download b4" href={releases[keyName]['download']}>
                                        <div className="release_icon">
                                            <AiOutlineDownload size={40} color={"white"} />
                                        </div>
                                        <h2 className="release_download_text">Download</h2>
                                    </a>
                                    <a className="release_download b4" href={releases[keyName]['source']}>
                                        <div className="release_icon">
                                            <HiOutlineCode size={40} color={"white"} />
                                        </div>
                                        <h2 className="release_download_text">Source</h2>
                                    </a>
                                </div>
                            </div>    
                        ))
                    }
                </div>
            </div>
        </div>
    )
}