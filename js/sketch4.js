var apiKey = 'df17ad158355ea6ff93024953ae062a5';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var units = 'imperial';
var weatherData;
var temperature = 0;
var humidity = 0;
var rain = 0;
var snow = 0;
var maxTemp = 40;
var minTemp = -5;
var maxColor = 360;
var minColor = 240;
var swim;
var park;
var coding;
var umbrella;


function preload(){
  
  console.log('The json file has been loaded.');
  swim = loadImage('../img/swim.png');
  park = loadImage('../img/park.png');
  coding = loadImage('../img/coding.png');
  umbrella = loadImage('../img/umbrella.png');
}

function setup(){
  createCanvas (800,800);
  button = select("#submit");
  city = select('#city');
  button.mousePressed(queryAPI);
  for (var i = temperature; i > 80; i + 1){
    if (i > 80)
      image(swim, 400, 100, 200, 200);
    else{
      image(jacket, 400, 100, 200, 200);
    }
  }
}

function queryAPI(){
  var query = baseURL + city.value() + '&apiKey=' + apiKey + '&units=' + units;
  loadJSON(query, getWeatherData);
}


function getWeatherData(apiData){
  weatherData = apiData;
  temperature = weatherData.main.temp;
  humidity = weatherData.main.humidity;
  clouds = weatherData.clouds.all;
  maxTemp = weatherData.main.temp_max;
  minTemp = weatherData.main.temp_min;
  cityname = city.value();
  console.log(weatherData);

}

function draw(){
    background(220);
    if (weatherData) {
      if(temperature > 80 && clouds < 30){
        noStroke();
        fill(0);
        text('The current temperature in ' + cityname + ' is ' + str(temperature) + ' F', 20, 20);
        text('The current cloud coverage in ' + cityname  + ' is ' + str(clouds) + '%', 20, 80);
        text('Better try and get to the beach.', 20, 160);
        image(swim, 150, 300, 200, 200);
      }
        if(temperature < 79.99 && clouds <50){
        noStroke();
        fill(0);
        text('The current temperature in ' + cityname + ' is ' + str(temperature) + ' F', 20, 20);
        text('The current cloud coverage in ' + cityname  + ' is ' + str(clouds) + '%', 20, 80);
        text('Its a great day to spend some time in the park!', 20, 160);
        image(park, 150, 300, 200, 200);
        }
          if(temperature < 55 && clouds >50){
          noStroke();
          fill(0);
          text('The current temperature in ' + cityname + ' is ' + str(temperature) + ' F', 20, 20);
          text('The current cloud coverage in ' + cityname  + ' is ' + str(clouds) + '%', 20, 80);
          text('Pretty cold and cloudy out there, better stay inside and code.', 20, 160);
          image(coding, 150, 300, 200, 200);
          }
            if(clouds > 80){
            noStroke();
            fill(0);
            text('The current temperature in ' + cityname + ' is ' + str(temperature) + ' F', 20, 20);
            text('The current cloud coverage in ' + cityname  + ' is ' + str(clouds) + '%', 20, 80);
            text('Looks like you should grab an umbrealla.', 20, 240)
            image(umbrella, 350, 300, 200, 200);
            }
      else{
        noStroke();
        fill(0);
        text('The current temperature in ' + cityname + ' is ' + str(temperature) + ' F', 20, 20);
        text('The current cloud coverage in ' + cityname  + ' is ' + str(clouds) + '%', 20, 80);
      }
      if (temperature > 70){
        fill(220,20,60);
        ellipse(400, 20, temperature * 0.5, temperature * 0.5);
        }
      else{
        fill(235,240,255);
        ellipse(400, 20, temperature * 0.5, temperature * 0.5);
        }

      if (clouds > 40){
        fill(100, 100, 100);
        ellipse(400, 80, clouds * 0.5, clouds * 0.5);
        }
      else{
        var hueColor = map(temperature, minTemp, maxTemp, minColor, maxColor);
        fill(255, 255, 0);
        ellipse(400, 80, clouds * -1.5, clouds * -1.5);
        }
      }
    else{
      text('Figure out what to do for the day... enter a city and get a weather report.', 20, 20);
    }
}
