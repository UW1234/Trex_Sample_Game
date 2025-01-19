
/*var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;
var gameOverImg, restartImg;
var jumpSound, checkPointSound, dieSound;
var isJumping = false;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadAnimation("trex_collided.png");

  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");

  restartImg = loadImage("restart.png");
  gameOverImg = loadImage("gameOver.png");

  jumpSound = loadSound("jump.mp3");
  dieSound = loadSound("die.mp3");
  checkPointSound = loadSound("checkPoint.mp3");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.scale = 0.5;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;

  gameOver = createSprite(300, 100);
  gameOver.addImage(gameOverImg);

  restart = createSprite(300, 140);
  restart.addImage(restartImg);

  gameOver.scale = 0.5;
  restart.scale = 0.5;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();

  trex.setCollider("rectangle", 0, 0, trex.width, trex.height);
  trex.debug = false;

  score = 0;
}
function draw() {
  background(180);
  text("Score: " + score, 500, 50);

  if (gameState === PLAY) {
    gameOver.visible = false;
    restart.visible = false;

    ground.velocityX = -(4 + 3 * score / 100);
    score = score + Math.round(getFrameRate() / 60);

    if (score > 0 && score % 100 === 0) {
      checkPointSound.play();
    }

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

    if (keyDown("space") && trex.y >= 150 && !isJumping) {
      trex.velocityY = -12;
      jumpSound.play();
      isJumping = true;
    }

    trex.velocityY = trex.velocityY + 0.8;

    spawnClouds();
    spawnObstacles();

    if (obstaclesGroup.isTouching(trex)) {
      gameState = END;
      dieSound.play();
    }

    if (trex.collide(invisibleGround)) {
      isJumping = false;
    }

  } else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;

    trex.changeAnimation("collided", trex_collided);

    ground.velocityX = 0;
    trex.velocityY = 0;

    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);

    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);

    if (mousePressedOver(restart)) {
      reset();
    }
  }

  trex.collide(invisibleGround);

  drawSprites();
}


function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -(6 + score / 100);

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle1);
        break;
      case 2:
        obstacle.addImage(obstacle2);
        break;
      case 3:
        obstacle.addImage(obstacle3);
        break;
      case 4:
        obstacle.addImage(obstacle4);
        break;
      case 5:
        obstacle.addImage(obstacle5);
        break;
      case 6:
        obstacle.addImage(obstacle6);
        break;
      default:
        break;
    }

    obstacle.scale = 0.5;
    obstacle.lifetime = 300;

    obstaclesGroup.add(obstacle);
  }
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600, 120, 40, 10);
    cloud.y = Math.round(random(80, 120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;

    cloud.lifetime = 200;

    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;

    cloudsGroup.add(cloud);
  }
}

function reset() {
  console.log("Resetting game...");
  score = 0;
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  trex.changeAnimation("running", trex_running);
  trex.y = 160; 
  trex.velocityY = 0;
  isJumping = false; 
  console.log("T-Rex animation set to running");
}*/

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;
var highscore = 0; 
var gameOverImg, restartImg;
var jumpSound, checkPointSound, dieSound;
var isJumping = false;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadAnimation("trex_collided.png");

  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");

  restartImg = loadImage("restart.png");
  gameOverImg = loadImage("gameOver.png");

  jumpSound = loadSound("jump.mp3");
  dieSound = loadSound("die.mp3");
  checkPointSound = loadSound("checkPoint.mp3");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.scale = 0.5;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;

  gameOver = createSprite(300, 100);
  gameOver.addImage(gameOverImg);

  restart = createSprite(300, 140);
  restart.addImage(restartImg);

  gameOver.scale = 0.5;
  restart.scale = 0.5;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();

  trex.setCollider("rectangle", 0, 0, trex.width, trex.height);
  trex.debug = false;

  score = 0;
}

function draw() {
  background(180);
  text("Score: " + score, 500, 50);
  text("Highscore: " + highscore, 400, 50); 

  if (gameState === PLAY) {
    gameOver.visible = false;
    restart.visible = false;

    ground.velocityX = -(4 + 3 * score / 100);
    score = score + Math.round(getFrameRate() / 60);

    if (score > 0 && score % 100 === 0) {
      checkPointSound.play();
    }

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

    if (keyDown("space") && trex.y >= 150 && !isJumping) {
      trex.velocityY = -12;
      jumpSound.play();
      isJumping = true;
    }

    trex.velocityY = trex.velocityY + 0.8;

    spawnClouds();
    spawnObstacles();

    if (obstaclesGroup.isTouching(trex)) {
      gameState = END;
      dieSound.play();
    }

    if (trex.collide(invisibleGround)) {
      isJumping = false;
    }

  } else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;

    trex.changeAnimation("collided", trex_collided);

    ground.velocityX = 0;
    trex.velocityY = 0;

    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);

    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);

    if (score > highscore) {
      highscore = score;
    }

    if (mousePressedOver(restart)) {
      reset();
    }
  }

  trex.collide(invisibleGround);

  drawSprites();

  fill("gray"); 
  textSize(20); 
  text("NO INTERNET", 10, height -170); 
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -(6 + score / 100);

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle1);
        obstacle.setCollider("rectangle", 0, 0, obstacle1.width / 2 + 30, obstacle1.height / 2 + 30); 
        break;
      case 2:
        obstacle.addImage(obstacle2);
        obstacle.setCollider("rectangle", 0, 0, obstacle2.width / 2 + 30, obstacle2.height / 2 + 30); 
        break;
      case 3:
        obstacle.addImage(obstacle3);
        obstacle.setCollider("rectangle", 0, 0, obstacle3.width / 2 + 30, obstacle3.height / 2 + 30); 
        break;
      case 4:
        obstacle.addImage(obstacle4);
        obstacle.setCollider("rectangle", 0, 0, obstacle4.width / 2 + 30, obstacle4.height / 2 + 30); 
        break;
      case 5:
        obstacle.addImage(obstacle5);
        obstacle.setCollider("rectangle", 0, 0, obstacle5.width / 2 + 30, obstacle5.height / 2 + 30); 
        break;
      case 6:
        obstacle.addImage(obstacle6);
        obstacle.setCollider("rectangle", 0, 0, obstacle6.width / 2 + 30, obstacle6.height / 2 + 30); 
        break;
      default:
        break;
    }

    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstacle.debug = false; 

    obstaclesGroup.add(obstacle);
  }
}




function spawnClouds() {
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600, 120, 40, 10);
    cloud.y = Math.round(random(80, 120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;

    cloud.lifetime = 200;

    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;

    cloudsGroup.add(cloud);
  }
}

function reset() {
  console.log("Resetting game...");
  score = 0;
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  trex.changeAnimation("running", trex_running);
  trex.y = 160; 
  trex.velocityY = 0;
  isJumping = false; 
  console.log("T-Rex animation set to running");
}


