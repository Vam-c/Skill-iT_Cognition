import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Content() {
    var instructorName;
    let navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        const form  = document.getElementById('upload-form');
        const formData = new FormData(form);
        instructorName = [...formData.values()][3];
        // console.log([...formData.entries()]);

        axios.post("http://localhost:3000/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then((response) => {
            console.log(response);
            console.log("Successfully uploaded content to database");
            navigate("/thank", {state: {instructor: instructorName}});
          }).catch((error) => {
            console.log(error);;
          });
    }


    return (
        <div className='container'>
          <h1 className="form-header" >Spread Knowledge!</h1>
        <form id="upload-form" onSubmit={handleSubmit}>
      <div className="row">
      <div className="col-lg-6">
        <div className="form-group">
            <label for="contact">Contact Number</label>
            <input required name="contact" type="text" className="form-control" id="contact" placeholder="Contact" />
        </div><br />
        <div className="form-group">
            <label for="email">Email address</label>
            <input required name="email" type="email" className="form-control" id="email" placeholder="Email" />
        </div><br />
        <div className="form-group">
            <input style={{marginRight: "7px"}} name="consent" className="form-check-input" type="checkbox" id="consent" />
            <label for="consent"> Share your contact details with your audience?</label>
        </div><br />
      </div>
        <div className="col-lg-6">
        <div className="form-group">
                <label for="name-of-instructor">Name</label>
                <input required name="instructor" type="text" className="form-control" id="name-of-instructor" placeholder="Your good name" />
            </div><br />
            <div className="form-group">
                <label for="name-of-content">Content Name</label>
                <input required name="name" type="text" className="form-control" id="name-of-content" placeholder="Category" />
            </div><br />
            <div className="form-group">
                <label for="content-desc">Describe your content</label>
                <textarea name="description" className="form-control" id="content-desc" rows="4"></textarea>
            </div>
              <br />
            <div className="form-group">
                <label for="upload-video">Upload the video</label><br />
                <input required name="video_file" type="file" className="form-control-file" id="upload-video"/>
            </div><br />
            </div>
            
          </div>
              <button type="submit" class="btn btn-dark">Upload</button>
        </form>

      </div>
    )
}



export default Content;