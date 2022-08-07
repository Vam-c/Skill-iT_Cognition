const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
      //videos are stored in /videos
        cb(null, '../frontend/skill-it/public/videos/');
    },
    filename: function(req, file, cb){
      const random = Date.now();
      cb(null, random + file.originalname);
    }
  });
const upload = multer({storage: storage});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//skilliTDB as endpoint.
mongoose.connect("mongodb://localhost:27017/skilliTDB");
const contentSchema = new mongoose.Schema({
    name: String,
    link: String,
    description: String,
    dateOfUpload: Date,
    views: {
      type: Number,
      default: 0
    },
    instructor: String,
    email: String,
    contact: String
  });

const Content = mongoose.model("Content", contentSchema);

//Serves all courses available 
app.get("/home", function(req, res){
    Content.find({}, function(err, foundContent){
        if(err){
          console.log(err);
        } else {
          res.send(foundContent);
        }
      });
});

//Handles uploads done by instructor
app.post("/upload", upload.single("video_file"), function(req, res){
    // console.log("/upload hit");
    var dt = new Date();
    const date = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
    const newVideo = new Content({
        name: req.body.name,
        link: req.file.path,
        description: req.body.description,
        dateOfUpload: date,
        instructor: req.body.instructor
    });
    newVideo.save(function(err){
      if(err){
        console.log(err);
      } else {
        res.send("Video uploaded and content successfully saved with creator's name.");   
      }
    });
});

app.put("/view-update/:videoId", function(req, res){
  Content.findById(req.params.videoId, function(err, returnedVideo){
    if(err){
      console.log(err);
    } else {
      returnedVideo.views++;
      returnedVideo.save();
    }
  });
});
app.listen(3000, function(){
    console.log("Server running on port 3000");
});