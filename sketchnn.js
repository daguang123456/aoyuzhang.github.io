let model;


function setup(){
  createCanvas(400,400);
  let options ={
    inputs:2,
    outputs: 3

  };

  model = ml5.neuralNetwork(options);
}

function draw(){
  background(255);
}
