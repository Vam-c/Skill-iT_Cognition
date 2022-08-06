import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Video(props){
  //add subscribe functionality
    
    return(
            // style={{width: "100%", height: "300px", objectFit: "cover"}}  />
    
        <div className="col-md-4" style={{padding: "3%"}}>
            <Card style={{ width: '18rem' }}>
            <Link to={`/watch/?link=${props.link}`} state={{videoId: props.id}} >
                <Card.Img variant="top" src={`http://localhost:3000/videothumbnail?link=${props.link}`} alt="thumbnail" />
            </Link>
            <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Instructor: {props.instructor}</ListGroup.Item>
            <ListGroup.Item>Uploaded on: {props.dateOfUpload}</ListGroup.Item>
            <ListGroup.Item>Views: {props.views}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <button className="card-button" >Subscribe</button>
            </Card.Body>
            </Card>
        </div>
    )
       
   
}


export default Video;