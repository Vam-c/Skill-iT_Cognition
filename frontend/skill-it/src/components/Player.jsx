import axios from "axios";
import React, {useEffect} from "react";
import { useSearchParams, useLocation} from "react-router-dom";
import ReactPlayer from "react-player";

function Player(){
    const [params] = useSearchParams();
    const location = useLocation();
    const data = location.state.props;
    var showContact = false;
    if(data.consent == "on"){
        showContact = true;
    }
    function sendEmail()
        {
            window.location = "mailto:" + data.email;
        }
    var link = params.get('link');
    //extract the link id from full link
    // console.log("og:", link);
    link = link.replace("..\\frontend\\skill-it\\public\\videos\\", "");
    //update views after clicking on link.

    // console.log(link);
    return(
        <>
        <div className="row">
            <div className="col-lg-6">
        <div className="video-container">
        <span style={{fontSize: "50px"}}>Time to Skill-iT : </span>
        <span className="video-title">{data.name}</span>
        <ReactPlayer
            className='react-player'
            url= {'/videos/' + link}
            width='700px'
            controls = {true}
          />
        </div>
        </div>
        <div className="col-lg-6">
        <div class="card desc" style={{width: "18rem"}}>
            <div class="card-header ">
                <h3>By: {data.instructor}</h3>
            </div>
            <div class="card-body">
            <h2 style={{backgroundColor: "aliceblue"}} class="views">{data.views} Views</h2><hr />
            <h3>Description: </h3>
                <p class="card-text ">{data.description}</p>

                
            {showContact && <div onClick={sendEmail()}><button type="button" class="btn btn-outline-dark btn-lg btn-block">Contact me</button>
            </div>}


            </div>
        </div>
        </div>
        </div>
        </>
    )

    {/* /*
    

    <script>
            function sendEmail()
            {
                window.location = "mailto:xyz@yourapplicationdomain.com";
            }
            </script>


    */ }
}

export default Player;