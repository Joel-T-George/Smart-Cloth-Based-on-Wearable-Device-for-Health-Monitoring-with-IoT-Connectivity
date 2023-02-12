const express = require("express");
const server = express();

const router = express.Router();

router.get("/", function(req,res){
    res.send("index.html")
})

server.use("/",router)
server.listen(9000, function(){
    console.log("running on 9000")
})