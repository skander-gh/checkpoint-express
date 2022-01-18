const express = require("express");
const res = require("express/lib/response");


const app = express(); 

const port = 5000;

const currentDate = new Date();
const day = currentDate.getDay();
const hours = currentDate.getHours();

const middleware = (req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 18) {
    next();
  } else {
    res.send("serviceee");
  }

}


app.listen(port, ()=> console.log(`port is runing on port ${port}`));

app.use(express.static("public"));
app.use(middleware)
app.get ("/contact", middleware, (req,res)=>{
    res.sendFile(__dirname + "/public/Contact us.html")
})
app.get ("/", middleware, (req,res)=>{
    res.sendFile(__dirname + "/public/Home page.html")
})
app.get ("/Service", middleware, (req,res)=>{
    res.sendFile(__dirname + "/public/Our Service.html")
})
