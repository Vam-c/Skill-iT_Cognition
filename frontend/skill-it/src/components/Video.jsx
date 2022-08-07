import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";

function Video(props){
    var link = props.link;
    link = link.replace("..\\frontend\\skill-it\\public\\videos\\", "");

    function updateViews() {
        axios.put("http://localhost:3000/view-update/" + props.id)
        .then( res => {
            console.log(res);
        })
        .catch( err => {
            console.log("Error occured while updating views");
            console.log(err);
        });
    }

    return(
        <div className="col-md-3" style={{padding: "3%"}}>
            <Card style={{ width: '18rem' }}>
            <Link to={`/watch/?link=${props.link}`} state={{videoName: props.name}} >
                <video onClick={updateViews} className="thumbnail" src={"videos/" + link}></video>
            </Link>
            <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description.substring(0,50)}...
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Instructor: {props.instructor}</ListGroup.Item>
            <ListGroup.Item>Uploaded on: {props.dateOfUpload}</ListGroup.Item>
            <ListGroup.Item>Views: {props.views}</ListGroup.Item>
            </ListGroup>
            </Card>
        </div>
    )
       
   
}


export default Video;