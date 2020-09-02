var monkey, monkey_sprite, ground, invisibleGround, obstaclegroup,bananagroup,score,survival_time, jungle_picture;



function preload(){
monkey_sprite=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
jungle_picture=loadImage("jungle2.jpg");
rock=loadImage("stone.png");
banana_image=loadImage("Banana.png");
}


function setup() {
  createCanvas(800, 400);
 
  ground = createSprite(200,200,400,40);
  ground.shapeColor="green";
  ground.velocityX=-10;
  ground.addImage("background", jungle_picture);
  
   monkey = createSprite(100,300,20,50);
  monkey.addAnimation("monkey_running", monkey_sprite);
  monkey.scale=0.2;
  invisibleGround = createSprite(200,385,400,5);
  invisibleGround.visible = false;
 obstaclegroup = createGroup();
bananagroup= createGroup();
score = 0;
 survival_time = 0;
}

function draw() {
  background(220);
  if(keyDown("space") && monkey.y>320){
    
    monkey.velocityY=-20;
   
  }
  
monkey.velocityY=monkey.velocityY+1;
  
 
  monkey.collide(invisibleGround);
if(ground.x<200){
  ground.x=ground.width/2;
}  
Spawn_Obstacle();
Spawn_Banana();
survival_time=Math.round(survival_time+World.frameRate/60);
if(bananagroup.isTouching(monkey)){
  score=score+2;
  bananagroup.destroyEach();
}
if(obstaclegroup.isTouching(monkey)){
  obstaclegroup.destroyEach();
  bananagroup.destroyEach();
  score=0;
  survival_time=0;
}
  drawSprites();
stroke("black");
textSize(20);
text("Survival Time: "+survival_time,100,50);
text("Score: "+score,100,80);
}
function Spawn_Obstacle() {
  //create the obstacles
 if(World.frameCount%80==0){
    
  
   var obstacle = createSprite(400,340,20,20);
   obstacle.velocityX=-10;

   //create a random animation choice

   obstacle.addImage("Stone", rock);
   obstacle.scale=0.2;

  //assign a lifetime to the object
   obstacle.lifetime=400/-obstacle.velocityX;

   //declare the object's group
   obstaclegroup.add(obstacle);
 }
  

}
function Spawn_Banana() {
  //create the obstacles
 if(World.frameCount%80==0){
    
  
   var banana = createSprite(400,random(120,200),20,20);
   banana.velocityX=-10;

   //create a random animation choice

   banana.addImage("Banana", banana_image);
   banana.scale=0.1;

  //assign a lifetime to the object
   banana.lifetime=400/-banana.velocityX;

   //declare the object's group
   bananagroup.add(banana);
 }
  

}


  
              