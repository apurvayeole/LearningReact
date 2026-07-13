const express = require('express');
const cors = require('cors');
const upload = require('./multerConfig');

const app = express();
app.use(express.json());
app.use(cors());

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

app.post('/upload-album', upload.fields([
    {name:"coverImage", maxCount:1},
    {name:"images",maxCount:20},
]),
(req,res) => {
    console.log("Album title:", req.body.albumTitle);
    console.log("Cover image: ",req.files.coverImage);
    console.log("Other Images:", req.files.images);

    res.json({message:"album uploaded successfully!"});
})
app.listen(3000, ()=>{
    console.log("server running on http://localhost:3000");
});