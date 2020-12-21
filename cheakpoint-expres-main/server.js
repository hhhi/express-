const express = require("express");
const app = express();

function time (req,res,next){
    let d = new Date();
    let day = d.getDay();
    let hours = d.getHours();
     
    console.table({ method: req.method, path: req.url});

    if (day === 0 || day === 2){
        res.sendFile(__dirname+"/public/error.html")
    }else if (hours> 8 && hours < 17){
        next();
    } else{
        res.sendFile(__dirname+"/public/error.html")
    }
    };

app.get("/", (req,res) => {
    
    res.sendFile(__dirname+"/public/index.html")
});

app.get("/home", time , (req,res) => {
    
    res.sendFile(__dirname+"/public/home.html")
});

app.get("/services", time , (req,res) => {
    
    res.sendFile(__dirname+"/public/services.html")
});

app.get("/contact", time , (req,res) => {
    
    res.sendFile(__dirname+"/public/contact.html")
});



const port = 5000 ;
app.listen(port, () => {
    console.log(`The server is Running on port ${port}`);
});