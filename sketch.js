var trex,trex_running, ground, ground_img, ground2, clouds, clouds_img, obstacle1, obstacle2, obstacle3, obstacle4,obstacle5,obstacle6, score

function preload(){
  trex_running = loadAnimation("trex1.png","trex4.png","trex3.png")
  ground_img= loadImage("ground2.png")
  clouds_img= loadImage("cloud.png")
  obstacle1= loadImage("obstacle1.png")
   obstacle2= loadImage("obstacle2.png")
   obstacle3= loadImage("obstacle3.png")
   obstacle4= loadImage("obstacle4.png")
   obstacle5= loadImage("obstacle5.png")
   obstacle6= loadImage("obstacle6.png")
 
}

function setup() {
  createCanvas(600, 200);
 trex = createSprite(100, 165, 20, 20);
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5
  cloudsGroup= new Group();
  obstacleGroup= new Group();
  
  ground = createSprite(200, 185, 400, 10)
  ground.addImage("ground", ground_img)
  ground.x = ground.width/2
  ground.velocityX = -2
  
  ground2 = createSprite(200,195, 400, 10)
  ground2.visible = false;
  
   score=0;
}

function draw() {
  background(0);
 spawnClouds();
  spawnObstacles();
  trex.collide(ground2)
  textSize(20)
  text("Score:"+score, 500, 20)
  
  score= score+Math.round(getFrameRate()/60)
       if (keyDown("space")&& trex.y>164){
    trex.velocityY = -5
  }
  trex.velocityY=trex.velocityY+0.2      
  
  if (ground.x<  0){
    ground.x = ground.width/2
  }
  
  drawSprites();
}


function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var clouds = createSprite(600,120,40,10);
    clouds.y = random(80,120);
  clouds.addImage(clouds_img)
    clouds.scale = 1;
    clouds.velocityX = -3;
    
     //assign lifetime to the variable
    clouds.lifetime = 200;
    
    //adjust the depth
    clouds.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudsGroup.add(clouds)
  }
  
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6))
    switch(rand){
      case 1: obstacle.addImage(obstacle1)
      break;
       case 2: obstacle.addImage(obstacle2)
      break;
       case 3: obstacle.addImage(obstacle3)
      break;
       case 4: obstacle.addImage(obstacle4)
      break;
       case 5: obstacle.addImage(obstacle5)
      break;
       case 6: obstacle.addImage(obstacle6)
      break;
    }
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.55     
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}