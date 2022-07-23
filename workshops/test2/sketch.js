//screen state variables
const MAIN_MENU = 0; //main screen
const PLAY= 1; //screen play
const HOW_SCREEN = 2; //instructions screen
const CREDITS = 3; //attribution screen
const END_GAME = 4; //when player wants to end the game

let angle = 0;


let img; // roadfighter logo
let bush; // side bushes images

let currentScreen = MAIN_MENU; //identifies the state of the screen
let screenState = false;
let playButton1; //main menu button
let playButton2; //play button
let playButton3; //how to button
let playButton4; //credits button
let playButton5; //end game button



function preload() {
    img = loadImage('images/roadfighter.png'); //logo image
    bush = loadImage('images/bush.png'); //bush image
    enemy = loadImage('images/enemy.png'); //enemy car image
    player = loadImage('images/player.png'); //player car image
}


function setup() {
    createCanvas(900, 600); 
    background(51);
    
    
    for(let p = 0; p < player.length; p++) {
    playerX = random(width);
    playerY = random(height);
    playerDX = random(-5, 5);
    playerDY = random(-5, 5);
 }  
   
    //main menu button
    playButton1 = createButton('MAIN MENU');
    //playButton1.position(10, 10);
    playButton1.position(20, 35 - playButton1.size(100, 50).width / 1400);
    playButton1.mouseClicked(playMenuButton);

    //play button
    playButton2 = createButton('PLAY');
    //playButton2.position(300, 320);
    playButton2.position(20, 90 - playButton2.size(100, 50).width / 1400);
    playButton2.mouseClicked(playButtonGame);

    //play button
    playButton3 = createButton('HOW TO');
    //playButton3.position(300, 390);
    playButton3.position(20, 145 - playButton3.size(100, 50).width / 1400);
    playButton3.mouseClicked(playHowButton);

    playButton4 = createButton('CREDITS');
    //playButton4.position(300, 460);
    playButton4.position(20, 200 - playButton4.size(100, 50).width / 1400);
    playButton4.mouseClicked(playCreditButton);

    playButton5 = createButton('END GAME');
    //playButton5.position(300, 130); 
    playButton5.mouseClicked(playEndGame);
    
}


//button states, which one to hide and show when clicked
function playMenuButton() {
    currentScreen = MAIN_MENU; 
    playButton2.show();
    playButton3.show();
    playButton4.show();
    playButton5.hide();
}

function playButtonGame(){
    currentScreen = PLAY;
    playButton1.show();
    playButton5.position(20, 145 - playButton5.size(100, 50).width / 1400);
    playButton5.show();
    playButton3.hide();
    playButton4.hide();
}

function playHowButton(){
    currentScreen = HOW_SCREEN; 
    playButton5.hide();
}

function playCreditButton(){
    currentScreen = CREDITS;
    playButton5.hide();

}

function playEndGame(){
    currentScreen = PLAY;   
    playButton5.hide();
}

//states of each screen to play

function draw() {
   if(currentScreen == MAIN_MENU) { //main screen of the game
    //mainMenuScreen();
        background(51);
        image(img, 280, 150);
        textSize(30);
        fill(255);
        text("Assignment Creative Coding", 290, 340);
        textSize(20);
        fill(255);
        text("Ethel Beckett s5125717", 380, 370);

   }
   else if(currentScreen == PLAY) { //play screen 
      
    //playScreen();  
          background(51);
          drawBackground();
          drawEnemies();
          drawPlayer();
          playControl();
       
   }
   else if(currentScreen == HOW_SCREEN) { //instructions screen
    //howScreen();  
       background(51);

   }    
   else if(currentScreen == CREDITS) { //credits/attribution screen
       background(51);
       fill(255);
       textSize(30);
       text("CREDITS", 425, 100);
       rect(200, 120, 600, 400);      
   }   

    
    //   else if(currentScreen == END_GAME) {
//       
//   }    
}

function drawBackground() {

//drawing the box
       fill(255);
       stroke(200);
       strokeWeight(8);
       rect(166,42, 555, 501);


       //drawing the grass
       noStroke();
       fill(0,146,69);
       rect(170, 46, 100, 493);
       rect(617,46, 100, 493);

       //drawing the red strip curbs
       fill(193,39,45);
       for(let c = 60; c < 530; c = c + 30) { //red strip left
           rect(270, c, 21,15);
       }


       for(let d = 60; d < 530; d = d + 30) { //red strip right
          rect(596, d, 21,15);
       }

       //drawing the road
       rectMode(DEGREES);
       angleMode(DEGREES);
       strokeWeight(1);
       fill(100);
       rect(290, 45, 305, 493);

       //drawing the start text
       strokeWeight(2);
       stroke(255);
       fill(100);
       
       rect(370, 115, 150, 50); //the rect for start
       fill(255);
       textSize(30);
       text("START", 398, 150);

       //drawing the line
       fill(251,176,59);
       noStroke();
       //strokeWeight(2);
       for(let y = 55; y < 550; y = y + 50) { //dash line on the road
       rect(442, y, 5, 20);
       }


       //draw the bushes
        for(let b = 60; b < 500; b = b + 100) { //bush left
        image(bush, 195, b);
       }

        for(let u = 60; u < 500; u = u + 100) { //bush right
        image(bush, 645, u);
       }
}

//variable controls
let x1 = 0;
let y1 = 0;

   
function drawEnemies() {
        //drawing the opponents  
        fill(0,0,255);
            
        for(let o = 0; o < 6; o++){
            let h = o * 35 + 365;
            let v = o * -50 + 430;
            image(enemy, h, v);
       }
}

function drawPlayer() {
    //drawing the player
    fill(255, 0, 0);
    image(player, x1 + 320, y1 + 465, 20, 45);
    playControl();    
}



function keyPressed() {
   if(keyCode == RIGHT_ARROW) {    
        destX += 50;   
   }
   if(keyCode == LEFT_ARROW) {
        destX -= 50;   
   }  
    if(keyCode == DOWN_ARROW) {
        destY += 50;   
   }  
     if(keyCode == UP_ARROW) {
        destY -= 50;   
   }   
 
}