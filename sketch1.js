const lenn =784;

let snowflakes_data;
let snowmans_data;
let guitars_data;
let fishes_data;
let cats_data;

let snowflakes_train;
let snowmans_train;
let guitars_train;
let fishes_train;
let cats_train;

function preload(){
  snowflakes = loadBytes('trainingImages/snowflake2000.bin');
  snowmans = loadBytes('trainingImages/snowman2000.bin');
  guitars = loadBytes('trainingImages/guitars2000.bin');
  fishes = loadBytes('trainingImages/fish2000.bin');
  cats = loadBytes('trainingImages/cat2000.bin');
}

function setup() {
  createCanvas(280, 280);
  background(0);

  cats_training = [];
  for (let i =0; i< 1000 ; i++){
    let offset = i * lenn;
    cats_training[i] = cats_data.bytes.subarray(offset, offset+lenn);
  }


  // // Images visualization
  // let total= 100;
  // for (let n = 0; n < total; n++){
  //   let img = createImage(28,28);
  //   img.loadPixels();
  //   let offset = n * 784;
  //   for (let i =0; i<784; i++){
  //     let val = 255-cats.bytes[i+offset]
  //     img.pixels[i * 4 + 0]= val;
  //     img.pixels[i * 4 + 1]= val;
  //     img.pixels[i * 4 + 2]= val;
  //     img.pixels[i * 4 + 3]= 255;
  //   }
  //   img.updatePixels();
  //   let x = n % 10 * 28;
  //   let y = floor(n/10) * 28;
  //   image(img, x, y);
  //}
}

setup();
