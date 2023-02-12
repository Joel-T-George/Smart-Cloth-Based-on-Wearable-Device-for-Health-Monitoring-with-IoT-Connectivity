const express = require("express")

const server = express();

server.get("/", function(req,res){
    res.send("<h1>joel is back to coding</h1>")
})

server.listen(9000, function(){
    console.log("running on 9000")
})