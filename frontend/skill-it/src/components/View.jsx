import React, { useState , useEffect } from "react";
import axios from "axios";
import Video from "./Video";
function View(){
    const [videos, setData] = useState([]);
    useEffect(()=>{
           axios.get('http://localhost:3000/home')
           .then(res => {
            setData(res.data)
           });
    },[]);



    return(
        <div>
                <div className="row">
                {videos.map( video => <Video 
                    key={video._id}
                    id={video._id}
                    name={video.name}
                    link={video.link}
                    description={video.description}
                    dateOfUpload={video.dateOfUpload.substring(0,10)}
                    views={video.views}    
                    instructor={video.instructor}
                    contact={video.contact}
                    email={video.email}
                    consent={video.consent}
                />)}

                </div>
                
        </div>
    )
}



export default View;