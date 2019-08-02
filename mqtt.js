const dev_id = ;

const express = require('express');   //calling module express

const app = express();
const port = 3000;        //port no of server


app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
app.use(express.json());


var mqtt    = require('mqtt');   //caling module mqtt
var client  = mqtt.connect("https://iot.eclipse.org/");   //define brocker address
console.log("connected flag  " + client.connected);
/*
//handle incoming messages
client.on('message',function(topic, message, packet){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});
*/

client.on("connect",function(){	
console.log("connected  "+ client.connected);

})
//handle errors
client.on("error",function(error){
console.log("Can't connect" + error);
process.exit(1)});



app.get('/status', (req, res) => {
    res.status(200).json({requestBody: req.query});
    var s = req.query;
    console.log(s);
});
//publish

const cmd = "cmnd/";
const msg = "POWER";
const payload = "ON";
var topic ="sonofftd1/"


	
client.publish(cmd+topic+msg,payload);
console.log("switch "+payload+" "+topic);

