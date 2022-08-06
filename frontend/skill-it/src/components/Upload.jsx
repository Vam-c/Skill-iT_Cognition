import axios from "axios";

function Content() {
    function handleSubmit(event){
        event.preventDefault();
        const form  = document.getElementById('upload-form');
        const formData = new FormData(form);

        console.log([...formData.entries()]);

        axios.post("http://localhost:3000/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then((response) => {
            console.log(response);
            console.log("Successfully uploaded content to database");
          }).catch((error) => {
            console.log(error);;
          });

    }


    return (
        <div className='container'>
          <h1>Spread Knowledge!</h1>
        <form id="upload-form" onSubmit={handleSubmit}>
        <div className="form-group">
                <label for="name-of-instructor">Name</label>
                <input name="instructor" type="text" className="form-control" id="name-of-instructor" placeholder="Your good name" />
            </div><br />
            <div className="form-group">
                <label for="name-of-content">Content Name</label>
                <input name="name" type="text" className="form-control" id="name-of-content" placeholder="Category" />
            </div><br />
            <div className="form-group">
                <label for="content-desc">Describe your content</label>
                <textarea name="description" className="form-control" id="content-desc" rows="4"></textarea>
            </div>
              <br />
            <div className="form-group">
                <label for="upload-video">Upload the video</label>
                <input name="video_file" type="file" className="form-control-file" id="upload-video"/>
            </div><br />
            <button type="submit" class="btn btn-dark">Upload</button>
        </form>

      </div>
    )
}



export default Content;