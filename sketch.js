var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
var rand;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 400, 50, 50);
  movingRect = createSprite(400,200, 70, 20);
  gameObject1 = createSprite(300, 100, 40, 30);
  gameObject2 = createSprite(100, 300, 40, 20);
  gameObject3 = createSprite(500, 150, 30, 50);
  gameObject4 = createSprite(600, 350, 60, 20);

  rand = random(-5 , 5);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.velocityY = -5;
  fixedRect.velocityX = 5;

  movingRect.velocityY = 5;
  movingRect.velocityX = -5

  gameObject1.velocityY = rand;
  gameObject1.velocityX = -rand;

  rand = random(-5, 5);

  gameObject2.velocityY = rand;
  gameObject2.velocityX = -rand;

  rand = random(-5, 5);

  gameObject3.velocityY = rand;
  gameObject3.velocityX = -rand;

  rand = random(-5, 5);

  gameObject4.velocityY = rand;
  gameObject4.velocityX = -rand;

}

function draw() {
  background(0);

  bounceOff(gameObject2, gameObject1);

  drawSprites();
}

function bounceOff(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2)
 {
   object2.velocityX = object2.velocityX * -1;
   object1.velocityX = object1.velocityX * -1;
 }

 if (object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2)
 {
   object2.velocityY = object2.velocityY * -1;
   object1.velocityY = object1.velocityY * -1;
 }
}