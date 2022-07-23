const MAIN_MENU = 0;
const PLAY = 1;
const HOW_TO = 2;
const CREDITS = 3;
const START_GAME = 4;
const END_GAME = 5;
const PAUSE = 6;

let currentScreen = MAIN_MENU;
let playButton1; //main menu button
let playButton2; //play button
let playButton3; //how screen button
let playButton4; //credits button
let playButton5; //start game button
let playButton6; //end game

let score = 0;

let logo;
let bush;


let player, playerX = 0, playerY = 0;
let xpos, ypos;

let enemy = new Array(11);
let enemyX = new Array(11);
let enemyY = new Array(11);
let speedEX = 2.8;
let speedEY = 2.2;
let xdirection = 1;
let ydirection =1;

let sprite1 = new Array(11); //enemy sprites
let sprite2; //player sprite

let coin = new Array(5); //star image
let coinSprite = new Array(5); //sprite image

let roadBlock = new Array(5);
let block = new Array(5); //blockages or obstacle sprite
let blockX = new Array(5);
let blockY = new Array(5);
let blockSpeedX = new Array(5);

let explosion;
let explode;



function preload(){
    logo = loadImage('images/roadfighter.png'); //logo image
    bush = loadImage('images/bush.png'); //bushes image
    player = loadImage('images/player.png'); //player image
    sign = loadImage('images/sign.png'); //road sign
    
    coin[0] = loadImage('images/star1.png'); // star image
    loadAnimation('images/star1.png', 'images/star2.png'); //star animation
    coin[1]= loadImage('images/star1.png'); // star image
    loadAnimation('images/star1.png', 'images/star2.png'); //star animation
    coin[2] = loadImage('images/star1.png'); // star image
    loadAnimation('images/star1.png', 'images/star2.png'); //star animation
    coin[3]= loadImage('images/star1.png'); // star image
    loadAnimation('images/star1.png', 'images/star2.png'); //star animation
    coin[4]= loadImage('images/star1.png'); // star image
    loadAnimation('images/star1.png', 'images/star2.png'); //star animation

    

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

    roadBlock[0] = loadImage('images/roadblock1.png'); //orange roadblock
    roadBlock[1] = loadImage('images/roadblock2.png'); //orange roadblock
    roadBlock[2] = loadImage('images/roadblock1.png'); //orange roadblock
    roadBlock[3] = loadImage('images/roadblock2.png'); //orange roadblock
    roadBlock[4] = loadImage('images/roadblock1.png'); //orange roadblock

    explosion = loadImage('images/explo1.png');
    loadAnimation('images/explo1.png', 'images/explo6.png');
}



function setup(){
    createCanvas(750, 600);
    rectMode(RADIUS);
    angleMode(DEGREES);
    setFrameRate(30);
    xpos = width /2;
    ypos = height /2;
    let radius = 375;
    let x = radius * cos(coin);
    let y = radius * sin(coin);
   
    
    
    //this creates buttons to navigate through different screens
    playButton1 = createButton('MAIN MENU');
    playButton1.position(620, 400 - playButton1.size(100, 40).width / 1400);
    playButton1.mouseClicked(playMenuButton);

    //play button
    playButton2 = createButton('PLAY');
    playButton2.position(620, 450 - playButton2.size(100, 40).width / 1400);
    playButton2.mouseClicked(playButtonGame);


    playButton5 = createButton('START GAME');
    playButton5.position(620, 500 - playButton5.size(100, 40).width / 1400);
    playButton5.mouseClicked(playStartGame);

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
    
    
    //sprite star setup
    for(let c = 0; c < 5; c++) {
        coinSprite[c] = createSprite(320 + c * 40, random(height));
        coinSprite[c].addAnimation('run', 'images/star1.png', 'images/star2.png');
        coinSprite[c].scale = 0.01;
        coinSprite[c].setCollider("circle", 0, 0, 20);
        
    }
    
    
    //sprite player setup - 
    sprite2 = createSprite(playerX + 300, playerY + 550);
    sprite2.addImage(player);
    sprite2.setVelocity(1, 0);
    sprite2.setCollider("circle", 0, 0, 15);
    
    //sprite obstacle setup - roadblock
    for(let r = 0; r < roadBlock.length; r++) {
        block[r] = createSprite(270 + r * 50, random(height));
//      block[r] = createSprite(270 + r * 50, 480 + r * -100, 0, 0);
        block[r].addImage(roadBlock[r]);  
        block[r].setCollider("circle", 0, 0, 15);
    }

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

function playStartGame() {
    currentScreen = START_GAME;
    playButton1.show();
    playButton2.show();
    playButton3.hide();
    playButton4.hide();
    playButton5.show();
    playButton6.show();
}

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
        case START_GAME:
            drawStartGame();
            break; 
        case END_GAME:
            drawEndGame();
            break;
        case PAUSE:
            handlePause();
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
    drawBackground();
    drawRoad();
    drawContents();
    drawObstacles();
    drawPlayer();
    drawEnemies();
    handleCollision();
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
    image(sign, 30, 58);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(score, 655, 100);
    text('Score', 670,120);
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
    image(sign, 30, 58); //street sign
    for(let b = 0; b < 600; b = b + 150) { //bush left
        image(bush, 70, b);        
    }
}
roadX = 300;
roady = 0;

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
       for(let i = 0; i < enemyY.length; i++) {
                if(sprite1[i].position.x > 450 || sprite1[i].position.x < 150){
                    
                   sprite1[i].velocity.x *= +0.8;
                   sprite1[i].position.x = roadX;
                }

                 if(sprite1[i].position.y > 600 || sprite1[i].position.y < 0){
                    sprite1[i].velocity.y *= -0.8;
                    sprite1[i].position.y = roadY;
                }
                
            }
        }
    
}


function handleCollision() {
    for(let i = 0; i < 5; i++) {
       // for(let h = 0; h < roadBlock.length; h++) {
//            sprite2.velocity.x = (sprite2.position.x)*2;
//            sprite2.velocity.y = (sprite2.position.y)*2;  
    
            sprite2.overlap(coinSprite[i], getCoins);
    }
      
            //console.log(coinSprite[i]);

    
}

function getCoins(sprite2, coinSprite) {
    for(let i = 0; i < 5; i++) {
        coinSprite.remove();
        score +=1;
        if(coinSprite.position.y > height + 20) {
        print(coinSprite[i]);
        
        
        }
      
    }
}


function drawHowToScreen() {
    
}

function drawCreditScreen() {
    
}

function drawStartGame() {
    
}

function drawEndGame() {
    
}

function pause() {
    
}

