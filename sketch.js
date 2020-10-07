var fixedRect, movingRect;

var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.debug = true;
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(0,400,50,50);
  gameObject2.debug = true;
  gameObject2.shapeColor = "green";
  gameObject2.velocityX = 4;

  gameObject3 = createSprite(1200,400,50,50);
  gameObject3.debug = true;
  gameObject3.shapeColor = "green";
  gameObject3.velocityX = -4;


  gameObject4 = createSprite(400,100,50,50);
  gameObject4.debug = true;
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(gameObject2,gameObject3);
  isTouching(movingRect,gameObject1);
  drawSprites();
}

