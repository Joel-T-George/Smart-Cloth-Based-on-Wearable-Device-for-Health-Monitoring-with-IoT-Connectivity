const pas_dom = document.getElementById("password") 
// Get the modal
const Netmodal = document.getElementById("NetworkModel");
const Infomodal = document.getElementById("InfoModel");
const Sensormodal = document.getElementById("SensorModel");

// Get the button that opens the modal
const Nbtn = document.getElementById("NetBtn");
const Infobtn = document.getElementById("infoBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close");

const sensorBlock = document.getElementsByClassName("Sensor");

// Graph dom element
const ecgGraph = document.getElementById("ECG");
const modalGraph = document.getElementById("sensorholder");

// Sensor Data Storing Array for plotting

// When the user clicks on the button, open the modal
Nbtn.onclick = function() {
    Netmodal.style.display = "block";
}
Infobtn.onclick = function() {
    Infomodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    Netmodal.style.display = "none";
}
span[1].onclick = function() {
    Infomodal.style.display = "none";
}


class ModelComponent {
    constructor (ctx) {
        this.ecgData ={labels:[0],data:[0]};
        this.pulseData ={labels:[0],data:[0]};
         this.TempData ={labels:[0],data:[0]};
         this.AirData ={labels:[0],data:[0]};
         this.GlucoseData={labels:[0],data:[0]}; 
         this.plotData ={labels:[0],data:[0]};
         this.data = {
            labels:this.plotData.labels,
            datasets:[
                {
                    label:"Default",
                    data:this.plotData.data,
                    borderColor:"rgb(245, 141, 6)",
                    lineTension:0.7
                }
            ]
        };
         this.config ={
            type:"line",
            data:this.data
        };
         this.Graph =  new Chart(
            ctx,this.config
         )
        
        
    }
    htmlLabelUpdate(Name){
        document.getElementById("sensor-name").innerText = Name;

    }
    htmlCurrentData(value){
        if(value == undefined){
            document.getElementById("current-data").innerText = "00";
        }
        document.getElementById("current-data").innerText = value;

    }
    update(){
        this.Graph.update();
        
        this.htmlCurrentData(this.Graph.data.datasets[0].data[28]);
    }
    sensorSelector (SensorName){
        switch (SensorName) {
            case "Temperature":
                this.Graph.data.datasets[0].label =SensorName;
                this.Graph.data.labels = this.TempData.labels;
                this.Graph.data.datasets[0].data = this.TempData.data;
                this.htmlLabelUpdate(SensorName)
                this.Graph.update();
                break;
            case "BPM":
                this.Graph.data.datasets[0].label =SensorName
                this.Graph.data.labels = this.pulseData.labels
                this.Graph.data.datasets[0].data =this.pulseData.data;
                this.htmlLabelUpdate(SensorName)
                this.Graph.update();
                break;
            case "Air Detector":
                this.Graph.data.datasets[0].label =SensorName
                this.Graph.data.labels = this.AirData.labels
                this.Graph.data.datasets[0].data =this.AirData.data;
                this.htmlLabelUpdate(SensorName)
                this.Graph.update();
                break;
            case "Gulcose Level":
                this.Graph.data.datasets[0].label =SensorName
                this.Graph.data.labels = this.GlucoseData.labels;
                this.Graph.data.datasets[0].data =this.GlucoseData.data;
                this.htmlLabelUpdate(SensorName)
                this.Graph.update();
                break;
        
            default:
                this.Graph.data.datasets[0].label ="default"
                this.Graph.data.labels = [0]
                this.Graph.data.datasets[0].data =[0];
                this.htmlLabelUpdate(SensorName)
                this.Graph.update();
                break;
        }
        
    }



 }
 var SensorComponent=new ModelComponent(modalGraph)
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == Netmodal | event.target == Infomodal | event.target == Sensormodal  ) {
        Netmodal.style.display = "none";
        Infomodal.style.display = "none";
        Sensormodal.style.display ="none";
        
    }
    if(event.target.localName == "h1" ){
        ShowModel(event.target.id)
    }
    
    
}
span[2].onclick = function() {
    Sensormodal.style.display = "none";
    
}

function modalData(SensorName){

    SensorComponent.sensorSelector(SensorName)
    Sensormodal.style.display ="block";
}
function ShowModel(SensorName){
    switch (SensorName) {
        case "Sensor-1":
            modalData("Temperature");
            break;
        case "Sensor-2":
            modalData("BPM")
            break;
        case "Sensor-3":
            modalData("Air Detector")
            break;
        case "Sensor-4":
            modalData("Gulcose Level")
            break;
        default:
            break;
    }
}


function C(e){
    pas_dom.value =""
    console.log(e.children[0].innerText)
    console.log(e.children[1].innerText)
    document.getElementById("ssid").value = e.children[0].innerText
    EncrptionChecker(e.children[1].innerText)
}
function Showpassword() {
    pas_dom.type === "password"?pas_dom.type='text':pas_dom.type='password';

}
function EncrptionChecker(e){
    switch (e) {
        case "None" :
            pas_dom.disabled = true;
            break;
        case "WEP" :
        case "WPA":
        case "WPA2":
        case "WPA3":
        case "WAPI":
        case "WPA+WPA2" :
        case "WPA2-EAP" :
        case "WPA2+WPA3":
            pas_dom.disabled = false;
            break;
        default:
            pas_dom.disabled = false;

            break;
    }
}

var data = {
    labels:[0],
    datasets:[
        {
            label:"ECG",
            data:[0],
            borderColor:"rgb(245, 141, 6)",
            lineTension:0.3
        }
    ]
};
 var config ={
    type:"line",
    data:data
 };
 var Graph = new Chart (
    ecgGraph,config
 )
/// random Data Generator
 window.setInterval(()=> {
    var now = new Date();

    now =now.getSeconds() 
    var random = Math.floor(Math.random()*1000);
    if (SensorComponent.TempData.data.length >= 30){
        SensorComponent.TempData.labels.shift();
        SensorComponent.TempData.data.shift();
    }
    if (SensorComponent.pulseData.data.length >= 30){
        SensorComponent.pulseData.labels.shift();
        SensorComponent.pulseData.data.shift();
    }
    if (SensorComponent.AirData.data.length >= 30){
        SensorComponent.AirData.labels.shift();
        SensorComponent.AirData.data.shift();
    }
    if (SensorComponent.GlucoseData.data.length >= 30){
        SensorComponent.GlucoseData.labels.shift();
        SensorComponent.GlucoseData.data.shift();
    }
    
    if (data.datasets[0].data.length >= 61){
        data.labels.shift();
        data.datasets[0].data.shift();
    }
    SensorComponent.TempData.labels.push(now);
    SensorComponent.pulseData.labels.push(now);
    SensorComponent.AirData.labels.push(now);
    SensorComponent.GlucoseData.labels.push(now);
    SensorComponent.TempData.data.push(random/5);
    SensorComponent.pulseData.data.push(random/50);
    SensorComponent.AirData.data.push(Math.round(random/67));
    SensorComponent.GlucoseData.data.push(Math.round(random/87));
    SensorComponent.update();
    data.labels.push(now);
    data.datasets[0].data.push(random)
    Graph.update();
 },500) 

 

 