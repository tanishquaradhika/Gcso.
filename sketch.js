var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,200);
  wall.shapeColor=color(80,80,80) ;
speed=random(55,90);
weight=random(400,1500);
car.velocityX=speed;
}

function draw() {
  background("green");  
    if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
     deformation=0.5 * weight * speed * speed/22500;
  if(deformation>180){
car.shapeColor=("blue");
car.collide(wall);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor=("red");
    car.collide(wall);
  }
  if(deformation<100){
    car.shapeColor=("pink");
  }
  car.collide(wall);
    }
  
  drawSprites();
}