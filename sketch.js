var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
 speed = random(55,90);
 weight = random(400,1500);

car = createSprite(60, 200, 50, 50);
wall= createSprite(1200,200,60,height/2);
wall.shapeColor = "green";
}

function draw() {
  background(0);  
 car.velocityX = speed;
 if(wall.x - car.x < (car.width = wall.width)/2){
   car.velociyX = 0;
   deformation = 0.5 * weight * speed * speed/22500;
   if(deformation>180){
     car.shapeColor = color(255,0,0);
   }
   if(deformation<180 && deformation>100){
    car.shapeColor = color(230,230,0);

   }
   if(deformation<100){
    car.shapeColor = color(0,255,0);
   }
 }
  drawSprites();
}