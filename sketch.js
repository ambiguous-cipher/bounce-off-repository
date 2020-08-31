//variable declaration space
var car, wall;
var speed, weight;
var deformation;


function setup() {
  createCanvas(1600,400);

//sets the speed and weight to random values
  speed = random(55, 90);
  weight = random(400, 1500);

//creates the car and wall sprites and adds their properties
  car = createSprite(50, 200, 50, 50);
    car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2);
    wall.shapeColor = rgb(80, 80, 80);
  
  

}

function draw() {
  background(255,255,255);  
  deformation = (0.5 * weight * speed * speed)/22500;

  if (wall.x - car.x <= car.width/2 + wall.width/2){
    if (deformation < 100){
      car.shapeColor = rgb(0, 255, 0);
    } else if(100 < deformation < 180){
      car.shapeColor = rgb(230, 230, 0);
    } else if(deformation > 180){
      car.shapeColor = rgb(255, 0, 0);
    }  
  }
  
  drawSprites();
}