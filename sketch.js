var fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(400,200, 20, 20);
  gameObject1 = createSprite(400, 0, 20, 50);
  gameObject2 = createSprite(0, 200, 50, 20);
  gameObject3 = createSprite(400, 400, 20, 50);
  gameObject4 = createSprite(800, 200, 50, 20);


  fixedRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";


  gameObject1.velocityY = 5;

  gameObject2.velocityX = 5;

  gameObject3.velocityY = -5;

  gameObject4.velocityX = -5;

}

function draw() {
  background(0);

  bounceOff(fixedRect, gameObject1);
  bounceOff(fixedRect, gameObject2);
  bounceOff(fixedRect, gameObject3);
  bounceOff(fixedRect, gameObject4);

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
