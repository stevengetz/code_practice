
var citibikeData;

//Preload Function

function preload(){
  citibikeData = loadJSON('../data/citibike.json');
  console.log('The json file has been loaded');
}


function setup(){
  createCanvas(800,800);
  console.log(citibikeData.data.stations[0]);
}

function draw(){

}