//variable functions for different screen events
const MAIN_MENU = 0;
const PLAY = 1;
const HOW_TO = 2;
const CREDITS = 3;
const RESET_GAME = 4;
const END_GAME = 5;


//button functions for different screens events
let currentScreen = MAIN_MENU;
let playButton1; //main menu button
let playButton2; //play button
let playButton3; //how screen button
let playButton4; //credits button
let playButton5; //reset game button
let playButton6; //end game

let score = 0;

let logo;
let bush;

let xpos, ypos;

let enemy = new Array(11);
let enemyY = new Array(11);
let sprite1 = new Array(11); //enemy sprites


let sprite2; //player sprite
let player, playerX = 0, playerY = 0;


let coin;
let coinSprite = new Array(10); //sprite image
let coinSpriteX = new Array(10);
let coinSpriteY = new Array(10);
let coinSpriteDX = new Array(10);
let coinSpriteDY = new Array(10);
let objectSize = 20;

let blockimage;
let roadBlock = new Array(5);
let block = new Array(5); //blockages or obstacle sprite
let blockX = new Array(5);
let blockY = new Array(5);
let blockSpeedX = new Array(5);
let explosion;
let explode;

let bird;
let birds;

let bye;


function preload(){
    logo = loadImage('images/roadfighter.png'); //logo image
    bush = loadImage('images/bush.png'); //bushes image
    player = loadImage('images/player.png'); //player image
    sign = loadImage('images/sign.png'); //road sign
    
    bye = loadImage('images/bye.png'); //koala bye image
    
    coin = loadImage('images/star1.png'); // star image
    loadAnimation('images/star1.png', 'images/star2.png'); //star animation
//    coin[1]= loadImage('images/star1.png'); // star image
//    loadAnimation('images/star1.png', 'images/star2.png'); //star animation
//    coin[2] = loadImage('images/star1.png'); // star image
//    loadAnimation('images/star1.png', 'images/star2.png'); //star animation
//    coin[3]= loadImage('images/star1.png'); // star image
//    loadAnimation('images/star1.png', 'images/star2.png'); //star animation
//    coin[4]= loadImage('images/star1.png'); // star image
//    loadAnimation('images/star1.png', 'images/star2.png'); //star animation


    enemy[0] = loadImage('images/enemy.png'); //enemy1 image
    enemy[1] = loadImage('images/enemy2.png'); //enemy2 image
    enemy[2] = loadImage('images/enemy3.png'); //enemy3 image
    enemy[3] = loadImage('images/enemy4.png'); //enemy4 image
    enemy[4] = loadImage('images/enemy.png'); //enemy5 image
    enemy[5] = loadImage('images/enemy.png'); //enemy6 image
    enemy[6] = loadImage('images/enemy7.png'); //enemy7 image
    enemy[7] = loadImage('images/enemy8.png'); //enemy8 image
    enemy[8] = loadImage('images/enemy9.png'); //enemy9 image
    enemy[9] = loadImage('images/enemy10.png'); //enemy10 image
    enemy[10] = loadImage('images/enemy11.png'); //enemy11 image

    blockimage = loadImage('images/roadblock1.png');
    roadBlock[0] = loadImage('images/roadblock1.png'); //orange roadblock
    roadBlock[1] = loadImage('images/roadblock2.png'); //orange roadblock
    roadBlock[2] = loadImage('images/roadblock1.png'); //orange roadblock
    roadBlock[3] = loadImage('images/roadblock2.png'); //orange roadblock
    roadBlock[4] = loadImage('images/roadblock1.png'); //orange roadblock

    
    bird = loadImage('images/frame-1.png');
    loadAnimation = ('flying bird', 'images/frame-1.png', 'images/frame-8.png');
    
    
    explosion = loadImage('images/explo1.png');
    loadAnimation = ('images/explo1.png', 'images/explo6.png');
}



function setup(){
    createCanvas(750, 600);
    rectMode(RADIUS);
    angleMode(DEGREES);
    setFrameRate(30);
    xpos = width /2;
    ypos = height /2;

    //this creates buttons to navigate through different screens
    playButton1 = createButton('MAIN MENU');
    playButton1.position(620, 400 - playButton1.size(100, 40).width / 1400);
    playButton1.mouseClicked(playMenuButton);

    //play button
    playButton2 = createButton('PLAY');
    playButton2.position(620, 450 - playButton2.size(100, 40).width / 1400);
    playButton2.mouseClicked(playButtonGame);


    playButton5 = createButton('RESET GAME');
    playButton5.position(620, 500 - playButton5.size(100, 40).width / 1400);
    playButton5.mouseClicked(reset);

    //play button
    playButton3 = createButton('HOW TO');
    playButton3.position(620, 500 - playButton3.size(100, 40).width / 1400);
    playButton3.mouseClicked(playHowButton);


    playButton6 = createButton('END GAME');
    playButton6.position(620, 550 - playButton6.size(100, 40).width / 1400);
    playButton6.mouseClicked(playEndGame);

    playButton4 = createButton('CREDITS');
    playButton4.position(620, 550 - playButton4.size(100, 40).width / 1400);
    playButton4.mouseClicked(playCreditButton);
    
    
    //sprite coin star setup
    for(let c = 0; c < 10; c++) {
        coinSprite[c] = createSprite(260 + c * 25, random(height));
        coinSprite[c].addAnimation('run', 'images/star1.png', 'images/star2.png');
        coinSprite[c].scale = 0.01;
        coinSprite[c].setCollider("circle", 0, 0, 20);
        coinSprite[c].debug = true;
    }
    
    //sprite player setup - 
    sprite2 = createSprite(playerX + 300, playerY + 550);
    sprite2.addImage(player);
    sprite2.setSpeed(0, 0);
    sprite2.setCollider("circle", 0, 0, 15);
   
    
    //sprite obstacle setup - roadblock
    for(let r = 0; r < roadBlock.length; r++) {
        block[r] = createSprite(270 + r * 50, random(height));
//      block[r] = createSprite(270 + r * 50, 480 + r * -100, 0, 0);
        block[r].addImage(roadBlock[r]);  
        block[r].setCollider("circle", 0, 0, 20);
        block[r].debug = true;
    }
    
    birds = createSprite(100, 100);
    birds.addAnimation('flying bird', 'images/frame-1.png', 'images/frame-8.png');
    birds.setSpeed(1,1);
    birds.scale =.10;
    
    //sprite explosion animation
//    explode = createSprite(playerX + 300, playerY + 550);
//    explode.addAnimation('normal', 'images/player.png');
//    explode.addAnimation('transformed', 'images/explo1.png', 'images/explo6.png');
//   // sprite.setVelocity(.1, .1);
//    explode.setSpeed(0, .0);
//    explode.setCollider("circle", 0, 0, 12);
    

}
 //button states, which one to hide and show when clicked
function playMenuButton() {
    currentScreen = MAIN_MENU; 
    playButton2.show();
    playButton3.show();
    playButton4.show();
    playButton5.hide();
    playButton6.hide();
}

function playButtonGame(){
    currentScreen = PLAY;
    playButton1.show();
    playButton3.hide();
    playButton4.hide();

    playButton5.show();

    playButton6.show();

}

function playHowButton(){
    currentScreen = HOW_TO; 
    playButton5.hide();
}

function playCreditButton() {
    currentScreen = CREDITS;
    playButton1.show();
    playButton2.show();
    playButton3.show();
    playButton4.show();
    playButton5.hide();
    playButton6.hide();
}

//function playStartGame() {
//    currentScreen = START_GAME;
//    playButton1.show();
//    playButton2.show();
//    playButton3.hide();
//    playButton4.hide();
//    playButton5.show();
//    playButton6.show();
//}

function playEndGame(){
    currentScreen = END_GAME; 
    playButton1.show();
    playButton2.show();
    playButton3.hide();
    playButton4.hide();
    playButton5.show();
    playButton6.show();
}

    
function draw(){
    background(51);
    angleMode(DEGREES);
    
    
    switch(currentScreen) {
        case MAIN_MENU:
            drawMainMenuScreen();
            break;
        case PLAY:
            drawPlayScreen();
            break;
        case HOW_TO: 
            drawHowToScreen();
            break;   
        case CREDITS:
            drawCreditScreen();
            break;
        case RESET_GAME:
            reset();
            break; 
        case END_GAME:
            drawEndGame();
            break;
        
    }
}


function drawMainMenuScreen() {
    
    fill('green');
    noStroke();
    image(logo, xpos / 2, ypos / 2);
    textSize(30);
    fill(255);
    text("Assignment Creative Coding", 200, 340);
    textSize(20);
    fill(255);
    text("Ethel Beckett s5125717", 290, 370);
}

function drawPlayScreen() { 
    drawScore();
    drawBackground();
    drawRoad();
    drawContents();
    drawObstacles();
    drawPlayer();
    drawEnemies();
    handleCollision(); 
}

function reset() {
    score=0;
    angle = 0;
    sprite2.position.x = xpos - 75;
    sprite2.position.y = playerY + 550;
}

function drawScore() {
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(score, 668, 40);
    textSize(15);
    text('Score', 670,60);

 }

function drawBackground() {
    
    fill('white');
    rect(0,0,500, 600);  //white background  
    fill('green');
    noStroke();
    rect(0, 0, 175, 600); //left grass
    rect(590, 0, 10, 600); // right grass
    fill('white');
    rect(529, 0, 50, 600); // right grass
    
  
}

function drawRoad() {
    fill('grey');
    rect(xpos,ypos, 160, 600); //the road
    

    fill('orange');
    for(let d = 20; d < 600; d = d + 40) { //dash line on the road
        rect(xpos, d, 2, 10);
        
    }

    fill(193,39,45);
        for(let r1 = 10; r1 < 600; r1 = r1 + 30) { //red strip left
        rect(195, r1, 20,8);
   }

   for(let r2 = 10; r2 < 600; r2 = r2 + 30) { //red strip right
       rect(557, r2, 22,8);
   }    
}

function drawContents() {
    image(sign, 30, 50); //street sign
    for(let b = 0; b < 600; b = b + 150) { //bush left
        image(bush, 70, b);        
    }
}


function drawObstacles() {
    drawSprites(); 
}

function drawPlayer() {
                  
            if(sprite2.position.x > 520 || sprite2.position.x < 225){
//                sprite2.velocity.x *= -0.10;
                sprite2.position.x = xpos;
            }
            
             if(sprite2.position.y > 600 || sprite2.position.y < 0){
//                sprite2.velocity.y *= -0.10;
                sprite2.position.y = 0;
            } 
            drawSprites();
        }

function keyPressed() {
   //handleCollision();
    if (keyCode == RIGHT_ARROW) {
        sprite2.setSpeed(2, 0);
    }
    else if (keyCode == DOWN_ARROW) {
        sprite2.setSpeed(2, 90);

    }
    else if (keyCode == LEFT_ARROW) {
        sprite2.setSpeed(2, 180);

    }
    else if (keyCode == UP_ARROW) {
        sprite2.setSpeed(2, 270);

    }
    else if (key == ' ') {
        sprite2.setSpeed(0, 0);
    }
    return false;
}


function drawEnemies() {
    
}


function handleCollision() {
    
    for(let i = 0; i < 10; i++) {
        for(let h = 0; h < roadBlock.length; h++) {     
            sprite2.overlap(coinSprite[i], getCoins);
            //sprite2.collide(block[h]);
            coinSprite[i].collide(block[h]);
            block[h].displace(sprite2);     
 
        }
      }
    }     
        
   
function getCoins(sprite2, coinSprite) {
  for(let i = 0; i < 10; i++) {
        coinSprite.remove();
        score ++;
        if(coinSprite.position.y > height + 20) {
        print(coinSprite[i]);
        }
        
    }
}


//
//function getExplosion(sprite2, roadBlock) {
//   // explosion.animation.hide;
//    for(let i = 0; i < roadBlock.length; i++) {
//        if(sprite2.collide(block[i].position.x, block[i].position.y))
//           sprite2.changeAnimation('transformed');   
//        }
//        
//         drawSprites();
//       //  console.log(transformed);
//    }
   



function drawHowToScreen() {
    
}
 let angle = 0;
 let angle1 = 0;
 let angle2 = 0;
function drawCreditScreen() { 
    noStroke();
    let degrees = 250;
    let x = degrees * cos(angle);
    let y = degrees * sin(angle); 
    angleMode(RADIANS);
    
    fill(150);
    rect(xpos - 50, ypos, 250, 250);
    fill(255);
    textSize(50);
    text('A T T R I B U T I O N', 90, 100);
    textSize(10);
    text('logo by Ethel Becket', 140, 185);
    image(logo, 120, 120, 150, 50);
    text('cars via stockUnlimited', 270, 270)
    image(player, 170, 210);
    for(let i = 0; i < enemy.length; i++) {
        image(enemy[i],i * 25 + 195 , 210);
     } 
    image(bush, 330, 120);  
    text('bush via stockUnlimited', 300, 185); 
    image(coin, 480, 130, 40, 40);
     
    text('Coin Star via open game art', 425, 185); 
    
    image(blockimage, 145, 300);
    text('road block via open game art', 110, 340);
    
    
    image(bye, 320, 290, 40, 40);
    text('bye koala via stockUnlimited', 300, 340);
    
    
    //top border animation
    fill(255, 0, 0);
    fill('green');
    rect(100, 25, 200, 25);
    
    fill('yellow');
    rect(550, 25, 105, 25);
    
    fill('red');
    rect(x * 0.32 + xpos, 25, 200, 25);
    angle = angle -1;
    
    //left border animation
    fill('yellow');
    rect(35, 0, 40, 200);
    fill('red');
    rect(35, 300 + ypos, 40, 200);
    fill('green');
    rect(35, y/-2.5 + ypos, 40, 200);
    angle = angle -1;
    
    //right border animation
    rect(615, ypos -100, 40, 150);
    fill('red');
    rect(615, ypos +180, 40, 150);
    fill('yellow');
    rect(615, y/1.8 + ypos, 40, 150);
    angle2 = angle2 +1;
    
    //bottom border animation
    fill('green');
    rect(100, 575, 200, 25);
    
    fill('yellow');
    rect(455, 575, 200, 25);
    
    fill('red');
    rect(x * 0.32 + xpos, 575, 200, 25);
    angle = angle -1;
}    
    




function drawEndGame() {
    textSize(30);
    fill(255);
    text('Sad to see you go...', xpos -190, ypos/2 -20);
    let tintValue = map(mouseX, mouseY, width, 0, 255);
    tint(0, 200, 50, 200 - tintValue);
    image(bye, xpos - 200, ypos - 140);
    text('THANK YOU FOR PLAYING!', 130, 430);
}



function gameOver() {

}

