const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const file = require('fs');
const upload = require('./multerConfig');
const Album = require('./AlbumSchema');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/THEREACT")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

function logger(req, res, next){
    console.log(`${req.method} request to ${req.url}`);
    next();
}

function Authentication(req, res, next){
    const auth = req.headers["authorization"];
    console.log("Received auth header:", auth);
    if(!auth){
        return res.status(401).send("No authorization was provided");
    }
    next();
}
app.use(logger);
app.get("/", (req, res)=> {
    res.send("hello from server!")
});
app.post("/signup", Authentication, (req, res) => {
     // res.send("Data received you are authorizes");
  console.log(req.body);
  res.json({ message: "Data received! You are authorized" });
});

// app.post('/upload-album', upload.fields([
//     {name:"coverImage", maxCount:1},
//     {name:"images",maxCount:20},
// ]),
// (req,res) => {
//     console.log("Album title:", req.body.albumTitle);
//     console.log("Cover image: ",req.files.coverImage);
//     console.log("Other Images:", req.files.images);

//     res.json({message:"album uploaded successfully!"});
// })

app.post('/upload-album', upload.fields([
    {name:"coverImage",maxCount:1},
    {name:"images",maxCount:10},
]), async (req, res) => {
    try{
        const newAlbum = new Album({
            title:req.body.albumTitle,
            camera:{
                body:req.body.cameraBody,
                lens:req.body.lens,
            },
            coverImage: req.files.coverImage[0].path,
            images: req.files.images.map((image) => image.path),
        });
        await newAlbum.save();
        console.log("req.files.images:", req.files.images);
        res.json({ message: "Album uploaded successfully!", album: newAlbum });
    } catch (error) {
      res.status(500).json({ message: "Error saving album", error: error.message });
   
    }
}
)

app.listen(3000, ()=>{
    console.log("server running on http://localhost:3000");
});