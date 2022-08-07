import axios from "axios";
import React, {useEffect} from "react";
import { useSearchParams, useLocation} from "react-router-dom";
import ReactPlayer from "react-player";

function Player(){
    const [params] = useSearchParams();
    const location = useLocation();
    const {videoName} = location.state;
    // console.log(location.state);
    var link = params.get('link');
    //extract the link id from full link
    // console.log("og:", link);
    link = link.replace("..\\frontend\\skill-it\\public\\videos\\", "");
    //update views after clicking on link.

    // console.log(link);
    return(
        <>
        <div className="video-container">
        <span style={{fontSize: "50px"}}>Time to Skill-iT : </span>
        <span className="video-title">{videoName}</span>
        <ReactPlayer
            className='react-player'
            url= {'/videos/' + link}
            width='700px'
            controls = {true}
          />
        </div>
        </>
    )
}

export default Player;