var fish; 
var starfish,fishes,octopus; 
  var sharks,sharksGroup;
  var ground,invisibleGround, groundImage;
  var score;
  var score=0;
  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;
  var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
  var gameOver, restart;

  
  
  
  function preload(){
    fishImage = loadImage("fish.png");
    
    starfishImage = loadImage("starfish.png");
    sharksImage = loadImage("shark.png");
    
    



  }






















function setup() {






createCanvas(windowWidth,windowHeight);


starfish= createSprite(1800,height-300,60,100);
 starfish.shapeColor="yellow";
 starfish.velocityX=-3/3;
 starfish.addImage("starfish",starfishImage);
 starfish.scale = 0.5;
 fishes= createSprite(1800,height-640,50,50);
 fishes.shapeColor="white";
 fishes.velocityX=-2;
 
 
 
 
 octopus= createSprite(50,height-600,60,100);
 octopus.shapeColor="brown";
 octopus.velocityX=3;
  
  
  
 fish= createSprite(50,height-50,80,100);
 fish.shapeColor="red";
 fish.addImage("fish",fishImage);
 fish.scale = 0.3;
 sharksGroup = new Group();
 obstaclesGroup = new Group();
 house= createSprite(1800,height-860,100,100);
 house.shapeColor="black";

 
 invisibleGround = createSprite(200,height-10,3250,10);
 invisibleGround.visible = true;
 





















}

function draw() {
  background("skyblue");  


  fill("midnightblue")
  textSize(30)
   text("𝕊𝕔𝕠𝕣𝕖: "+ score, 20,50);
  

   
   if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    if (keyDown("left")) {
      fish.x=fish.x-2.5;
      
     }
     
     if (keyDown("right")) {
       fish.x= fish.x+2.5;
      
       
     }
     
     if (keyDown("up")) {
       fish.y=fish.y-2.5;
       
     }
     
     if (keyDown("DOWN")) {
       fish.y=fish.y+2.5;
       
     }

 
 
    fish.collide(invisibleGround);
  


    if(sharksGroup.isTouching(fish)){
      gameState = END;
  }
  


   }
   else if (gameState === END) {
    textSize(50);
    fill("red");
    stroke("yellow");
    text("YOU LOSE!! BETTER LUCK NEXT TIME2221",480,450); 
    
    
     


    ground.velocityX = 0;
    fish.velocityY = 0;
    sharkssGroup.setVelocityXEach(0);
    sharksGroup.setLifetimeEach(-1);
    
    
   



  }
  if(fish.isTouching(house)){
    textSize(50);
    fill("midnightblue")
    stroke("yellow")
    text("YOU WIN!! CONGRATULATIONS",600,200);
    ground.velocityX = 0;
    fish.velocityY = 0;
    sharkssGroup.setVelocityXEach(0);
    sharksGroup.setLifetimeEach(-1);
    
  }


   

   






   



   spawnSharks();
  drawSprites();
}  



function spawnSharks() {
  //write code here to spawn the clouds
  if (frameCount % 16=== 0) {
    var sharks = createSprite(0,120,40,10);
    sharks.y = Math.round(random(80,600));
    
    sharks.scale = 0.5;
    sharks.velocityX = 6;
    
     //assign lifetime to the variable
    sharks.lifetime = 400;
    
    //adjust the depth
    
    
    //add each cloud to the group
    sharksGroup.add(sharks);
    sharks.addImage("shark",sharksImage);
    sharks.scale = 0.3;

    
  }
  
}