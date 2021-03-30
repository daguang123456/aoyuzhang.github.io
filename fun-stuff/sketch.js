
let mobilenet;
let video;
let label="";

function modelReady(){
  console.log('Model is ready!!!');

  mobilenet.predict( gotResults);
}
function gotResults(error, results){
  if(error){
    console.error(error);
  } else {
    console.log(results);
    label= results[0].label;
    // let prob = results[0].probability;

    // createP(label);
    // createP(prob);
    mobilenet.predict(gotResults);
    }
}

// function imageReady(){
//   image(puffin,0,0,width, height);
// }

function setup(){
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  video.hide()
  background(0);

  mobilenet = ml5.imageClassifier('MobileNet',video,modelReady);
}

function draw(){
  background(0);
  image(video,0,0);
  fill(255);
  textSize(64);
  text(label, 20, height -50);
}

// // Copyright (c) 2019 ml5
// //
// // This software is released under the MIT License.
// // https://opensource.org/licenses/MIT
//
// /* ===
// ml5 Example
// Image classification using MobileNet and p5.js
// This example uses a callback pattern to create the classifier
// === */
//
// // Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
// let classifier;
//
// // A variable to hold the image we want to classify
// let img;
//
// function previewFile() {
//   var preview = document.querySelector('img'); // select the first element that match A CSS selector
//   var file    = document.querySelector('input[type=file]').files[0];
//   var reader  = new FileReader();
//
//   reader.onloadend = function () {
//     preview.src = reader.result;
//   }
//
//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     preview.src = "";
//   }
// }
//
// function preload() {
//   classifier = ml5.imageClassifier('MobileNet')
//   img = loadImage('images/bird.jpg');
// }
//
// function setup() {
//   createCanvas(400, 400);
//   classifier.classify(img, gotResult);
//   image(img, 0, 0);
// }
//
// // A function to run when we get any errors and the results
// function gotResult(error, results) {
//   // Display error in the console
//   if (error) {
//     console.error(error);
//   }
//   // The results are in an array ordered by confidence.
//   console.log(results);
//   createDiv('Label: ' + results[0].label);
//   createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
// }
