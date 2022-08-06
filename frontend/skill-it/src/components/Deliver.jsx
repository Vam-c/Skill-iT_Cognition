import axios from "axios";
import React, {useEffect} from "react";
import { useSearchParams, useLocation} from "react-router-dom";
import ReactPlayer from "react-player";

function Deliver(){
    const [params] = useSearchParams();
    const location = useLocation();
    const {videoId} = location.state;
    var link = params.get('link');
    //extract the link id from full link
    // console.log("og:", link);
    //..\frontend\skill-it\public\videos
    link = link.replace("..\\frontend\\skill-it\\public\\videos\\", "");
    //update views after clicking on link.
    //frontend\skill-it\public\1659775758203video.mp4
    console.log(link);
    return(
        <div>
        
            <video width="500" height="300" controls>
            <source src="videos\1659775758203video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Deliver;