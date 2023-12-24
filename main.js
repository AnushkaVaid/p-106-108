function  startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true, video: false});
    classiifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',
    { probablityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog =0 ;
var cat = 0;

function gotResults(error, results){
    if (error){
        console.error(error);
    }else {
        console.log(results);
        random_number_r=Math.floor(Math.random() * 255) + 1;
        random_number_b=Math.floor(Math.random() * 255) + 1;
        random_number_g=Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML='detected voice is of - '+ results[0].label;
        document.getElementById("results_count").innerHTML='detected - '+dog+'detected - '+cat;
        document.getElementById("result_label").style.color="rbg("+random_number_r+random_number_b+random_number_g+")";
        document.getElementById("result_count").style.color="rbg("+random_number_r+random_number_b+random_number_g+")";

        img=document.getElementById('animal_image');

        if (results[0].label=="Barking"){
            img.src='bark.gif';
        }else if (results[0].label=="Meowing"){
            img.src='meow.gif';
        }else{
            innerHeight.src='listen.gif'
        }
    }
}