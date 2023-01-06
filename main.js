
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100

});

camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_image' src="+data_uri+">";
    });
}

console.log("ml5 Version:",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0aFwPwY8u/model.json",modelLoaded);

function modelLoaded()
{
    console.log("model Loaded");
}

function identify()
{
    img=document.getElementById("selfie_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results) 
{
    if(error){
        console.error(error);
       }
       else{
        console.log(results);
      if(results[0].label=="ProperMask"){
        document.getElementById("label").innerHTML="entry accepted✅😷";
      }
      else if(results[0].label=="ImproperMask"){
        document.getElementById("label").innerHTML="entry denied⛔❌";
      }

      else if(results[0].label=="NoMask"){
        document.getElementById("label").innerHTML="entry denied❌⛔";
      }
        
       }
}

