const express = require("express");
const WebSocket = require("ws");



const server = express();
const router = express.Router();
const PORT = 9000;

wss = new WebSocket.Server({port: 9000, host:'192.168.137.1'})




router.get("/", function(req,res){
    var clientIP = req.ip;
    console.log("requested client Ip: "+ clientIP)
    res.send("joel is coding")
})

wss.on("connection", function (ws){
    ws.on("message", function (data){
      
        console.log('recived: %s', data)
    })
    ws.send("funny")
    
})



server.use("/",router)
server.listen(PORT, function(){
    console.log("running on 9000")
  
})