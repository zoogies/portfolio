import {FaGamepad} from "react-icons/fa";
import {HiOutlineCode} from "react-icons/hi";
import NavBar from "../Navbar/Navbar";
import "../Releases/Releases.css"

export default function Live(){
    const releases= {
        "Spotiguess":{
            "description":"A party web game where you guess who has streamed a song the most.",
            "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",
            "play":"http://spotiguess.zoogies.live",
            "source":"https://github.com/Yoyolick/spotiguess"
        }
    }
    return(
        <div>
            <NavBar/>
            <div className="releases_content slide">
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
                                    <a className="release_download b3 hvr-grow" href={releases[keyName]['play']}>
                                        <div className="release_icon">
                                            <FaGamepad size={40} color={"white"} />
                                        </div>
                                        <h2 className="release_download_text">Play</h2>
                                    </a>
                                    <a className="release_download b3 hvr-grow" href={releases[keyName]['source']}>
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