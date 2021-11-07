Webcam.set({
    width:355,
    height:295,
    image_format:'png',
    png_quality:100
});

var one= document.getElementById("webcamview");
Webcam.attach(one);

function snappic(){
    Webcam.snap(function(data_uri){
        document.getElementById("img").innerHTML= '<img id="imaging" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);
classify=ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/8NbYOM9bg/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model has been Loaded!");
}

var predict1="";
var predict2="";

function speak(){
    var synth= window.speechSynthesis;
    var speke1= "Prediction 1: You are" + predict1;
    var speke2= "Prediction 2: You are" +predict2;
    var utterThis= new SpeechSynthesisUtterance(speke1 + speke2);
    synth.speak(utterThis);
}