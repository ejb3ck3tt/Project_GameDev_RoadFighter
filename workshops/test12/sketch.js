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

//global variables
let roadX; //x and y position of the road
let roadY;
let roadsizeX = 350;
let roadsizeY = 600;

//sprite, player and obstacles variables
let player, playerX = 0, playerY = 0;
let theplayer;
let enemy = new Array(11);
let enemyY = new Array(11);
let theEnemy = new Array(11);
//let coin;
let coin = new Array(10);
let coinSprite = new Array(10); //sprite image
let blockimage;
let roadblock = new Array(6);
let block = new Array(6); //blockages or obstacle sprite

//other variables
let score = 0;
let bush, koala, roadwork,bye, flags;

let myCoin;
let themeMusic;

let a;

function preload() {
    soundFormats('mp3');
    myCoin= loadSound('sounds/coins.mp3');
    themeMusic = loadSound('sounds/boxcat.mp3');
    
    bush = loadImage('images/bush.png');
    koala = loadImage('images/koalasign.png');
    roadwork = loadImage('images/roadwork.png');
    blockimage = loadImage('images/roadblock1.png');
    player = loadImage('images/player.png'); //player image
    coin = loadImage('images/star1.png'); // star image
    logo = loadImage('images/roadfighter.png'); //logo
    bye = loadImage('images/bye.png'); //bye image
    flags = loadImage('images/flags.png')//flags
    loadAnimation('images/star1.png', 'images/star2.png'); //star animation
    roadblock[0] = loadImage('images/roadblock1.png'); //orange roadblock
    roadblock[1] = loadImage('images/roadblock2.png'); //orange roadblock
    roadblock[2] = loadImage('images/roadblock1.png'); //orange roadblock
    roadblock[3] = loadImage('images/roadblock2.png'); //orange roadblock
    roadblock[4] = loadImage('images/roadblock1.png'); //orange roadblock
    roadblock[5] = loadImage('images/roadblock2.png'); //orange roadblock
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
}



function setup() {
    noStroke();
    createCanvas(800, 600);
    rectMode(CENTER);
    angleMode(DEGREES);
    roadX = width/2; //update x and y of the road
    roadY = height/2;
    a = 0;
    
//    themeMusic.setVolume(0.01);
//    themeMusic.playMode('restart'); 
    
    
    //this creates buttons to navigate through different screens
    playButton1 = createButton('MAIN MENU');
    playButton1.position(650, 400 - playButton1.size(100, 40).width / 1400);
    playButton1.mouseClicked(playMenuButton);


    playButton2 = createButton('PLAY');
    playButton2.position(650, 450 - playButton2.size(100, 40).width / 1400);
    playButton2.mouseClicked(playButtonGame);

    playButton5 = createButton('RESET GAME');
    playButton5.position(650, 500 - playButton5.size(100, 40).width / 1400);
    playButton5.mouseClicked(resetGame);

    playButton3 = createButton('HOW TO');
    playButton3.position(650, 500 - playButton3.size(100, 40).width / 1400);
    playButton3.mouseClicked(playHowButton);


    playButton6 = createButton('END GAME');
    playButton6.position(650, 550 - playButton6.size(100, 40).width / 1400);
    playButton6.mouseClicked(playEndGame);

    playButton4 = createButton('CREDITS');
    playButton4.position(650, 550 - playButton4.size(100, 40).width / 1400);
    playButton4.mouseClicked(playCreditButton);
    
    //my sprite setup     
    block = new Group();
    
    for(let r = 0; r < roadblock.length; r++) {
        block[r] = createSprite(roadX -145 + r * 60, random(height));
        block[r].addImage(roadblock[r]);  
        block[r].setCollider("circle", 0, 0, 15);
        block[r].debug = true;
    }
    
    theplayer = createSprite(roadX, roadY + 250);
    theplayer.addImage(player);
    theplayer.setSpeed(0, 0);
    theplayer.setCollider("circle", 0, 0, 15);
    
    for(let c = 0; c < 10; c++) {
        coinSprite[c] = createSprite(260 + c * 25, random(height));
        coinSprite[c].addAnimation('run', 'images/star1.png', 'images/star2.png');
        coinSprite[c].scale = 0.01;
        coinSprite[c].setCollider("circle", 0, 0, 20);
        coinSprite[c].debug = true;
        coinSprite[c].setCollider("circle", 0, 0, 20);
    }
    for(let i = 0; i < enemyY.length; i++) {
        theEnemy[i] = createSprite (roadX -145 + i *50, random(height));
        theEnemy[i].addImage(enemy[i]);
        theEnemy[i].setVelocity(0, random(-15));
        theEnemy[i].setCollider("circle", 0, 0, 15);
    }
       
}

//functions to show and hide buttons as per the screen events
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

function playHowButton() {
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




function draw() {
    background(51);
//    themeMusic.play();
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
            resetGame();
            break; 
        case END_GAME:
            endGame();
            break;
    }
}

//game play object



function drawMainMenuScreen() {
      
 fill(0,100, 100);
    rectMode(RADIUS);
    noStroke();
    image(flags, roadX -80, 100);
    image(logo, roadX /2, roadY/2);
    textSize(30);
    fill(255);
    text("Assignment Creative Coding", 220, 340);
    textSize(20);
    fill(255);
    text("Ethel Beckett s5125717", 290, 370);

}



function drawPlayScreen() {

        background('green');
        drawScore();
        drawBackground();
        drawRoad();
        drawObstacles();
        drawPlayer();
        drawEnemies();
        handleCollision(); 

}

function drawScore() {
    
    fill(255);
    textSize(20);
    text(score, 700, 40);
    textSize(15);
    text('Score:', 630,40);

   
}

function drawBackground() {

    image(koala, 120, 20); //street sign
    for(let b = 20; b < 600; b = b + 150) { //bush left
        image(bush, 70, b);      
        
    }   
}

function drawRoad() {
    
    fill(100);
    rect(roadX, roadY, roadsizeX, roadsizeY);
    fill('white');
    rect(roadX - 188, roadY, 25, roadsizeY);
    rect(roadX + 188, roadY, 25, roadsizeY);
    
   
    
//    fill('orange');
//    for(let r2 = 20; r2 < 600; r2 = r2 + 40) { //road line
//        rect(roadX, r2, 3,15);    
//    }   
    
      fill('orange')
        noStroke();
        for(let i = 0; i < 500; i = i + 50 + 50) {
        rect( 300, i + a, 3, 60);
            
        for(let i = 0; i < 500; i = i + 50 + 50) {
        rect( 400, i + a  , 3, 60);  
    
        for(let i = 0; i < 500; i = i + 50 + 50) {
        rect( 500, i + a, 3, 60);     
        
        a = a + 0.2;
        if (a > 600) {
            a = 0;
        }   
        }
        }
    }
    
    
    
    fill(193,39,45);
    for(let r1 = 10; r1 < 600; r1 = r1 + 30) { //red strip left
        rect(212, r1, 25,15);
   }
   for(let r3 = 10; r3 < 600; r3 = r3 + 30) { //red strip right
       rect(588, r3, 25,15);   
   }
    image(roadwork, 90, 380);
    
}



function drawObstacles() {
    drawSprites();
}

function drawPlayer() {
    if(theplayer.position.x > 565 || theplayer.position.x < 235){
    theplayer.position.x = roadX;
    }
    if(theplayer.position.y > 600 || theplayer.position.y < 0){
    theplayer.position.y = 600;
    } 
    drawSprites();
} 



function drawEnemies() {
    for(let i = 0; i < enemyY.length; i++) {
        if(theEnemy[i].position.x > 565 || theEnemy[i].position.x < 235){
            theEnemy[i].velocity.x *= +0.8;
            theEnemy[i].position.x = roadX;
        }

        if(theEnemy[i].position.y > 600 || theEnemy[i].position.y < 0){
            theEnemy[i].velocity.y *= -0.8;
            theEnemy[i].position.y = 600;
        }
     drawSprites();
    }
}

    
function handleCollision() {

    for(let i = 0; i < 10; i++) {
        for(let h = 0; h < roadblock.length; h++) { 
            for(let e =0; e < enemyY.length; e++) {
                for(let e1 = 0; e1 < enemyY.length; e1++) {
                    theplayer.overlap(coinSprite[i], getCoins);
                    //sprite2.collide(block[h]);
                    coinSprite[i].displace(block[h]);
                    block[h].displace(theplayer, getGameOver); 
                    theplayer.bounce(theEnemy[e]);
                    theEnemy[e].bounce(theEnemy[e1]);

                }
            }
        }
    }     
}
   
function getCoins(theplayer, coinSprite) {
  for(let i = 0; i < 10; i++) {
      if(i < 1) {
        coinSprite.remove(); 
        score ++;    
//        myCoin.play();  
//        myCoin.setVolume(0.01);
//        myCoin.playMode('restart');
         
       }   
        if(coinSprite.position.y > height + 20) {
            print(coinSprite[i]);
        }
        if(coinSprite < 9) {
            background(0);
            fill('white');
            textSize(40);
            text('You Win', roadX, roadY);
            
        }
    }      
}



function getGameOver() {
    for(let i = 0; i < roadblock.length; i++) {
        if(block[i].displace(theplayer)) {
            background(0);
            textSize(50);
            text("GAME OVER", 260, roadY);
            noLoop();
        }
    }
}
function drawHowToScreen() {
    
    
}

function drawCreditScreen() {
    
}

function resetGame() {
  
    counter=0;
    
    theplayer.position.x = roadX;
    theplayer.position.y = playerY + 550;
}

function endGame() {
    textSize(30);
    fill(255);
    
    let tintValue = map(mouseX, mouseY, width, 0, 255);
    text('THANK YOU FOR PLAYING!', 200, roadY);
    tint(0, 200, 50, 200 - tintValue);
    image(bye, roadX/2, roadY - 140);
    text('Sad to see you go...', 230, 420);
    textSize(15);
    text('roll the mouse off screen so I can thank you', 220, 450);
}



function keyPressed() {
   
  
    
    if (keyCode == RIGHT_ARROW) {
        theplayer.setSpeed(5, 0);
        
      
    }
    
    else if (keyCode == DOWN_ARROW) {
        theplayer.setSpeed(5, 90);

    }
    else if (keyCode == LEFT_ARROW) {
        theplayer.setSpeed(5, 180);

    }
    else if (keyCode == UP_ARROW) {
        theplayer.setSpeed(5, 270);

    }
    else if (key == ' ') {
        theplayer.setSpeed(0, 0);
    }
    return false;
    }
