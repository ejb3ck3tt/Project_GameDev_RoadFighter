const MAIN_MENU = 0;
const PLAY = 1;
const HOW_SCREEN = 2;
const CREDITS = 3;
const END_GAME = 4;

let logo; //logo image
let bush; //bush image

let enemy = new Array(6); //enemy image
let enemyX = new Array(6); //x and y coordinates of enemy
let enemyY = new Array(6);
let enemyTX = new Array(6); //x and y speed of the enemy
let enemyTY = new Array(6);

let player; //player image
let x = 0; // x and y coordinates of the player
let y = 0;
let destX = 0; // destination of player that I want to move
let destY = 0;

let counter = 0;
let speedY = new Array(6);


let currentScreen = MAIN_MENU;
let playButton1; //main menu button
let playButton2; //play button
let playButton3; //how screen button
let playButton4; //credits button
let playButton5; //end game button



let a;

function preload() {
    pixelDensity(1);
    logo = loadImage('images/roadfighter.png'); //road fighter logo
    bush = loadImage('images/bush.png'); //bushes image
    enemy[0] = loadImage('images/enemy.png'); //enemy1 image
    enemy[1] = loadImage('images/enemy2.png'); //enemy2 image
    enemy[2] = loadImage('images/enemy3.png'); //enemy3 image
    enemy[3] = loadImage('images/enemy4.png'); //enemy4 image
    enemy[4] = loadImage('images/enemy.png'); //enemy5 image
    enemy[5] = loadImage('images/enemy.png'); //enemy6 image
    player = loadImage('images/player.png'); //player image
}

function setup() {
    createCanvas(900, 600);
    
//    imageMode(CENTER);
         a = height;     
         
         for(let e = 0; e < enemyY.length; e++) {
         enemyX[e] = e * 35 + 365;
         enemyY[e] = e * 50 + 460; 
         enemyTY[e] = random(-5); 
             
         }
      
         xPos = width / 2; //starting position of the image
         yPos = height / 2;    
    
    
        //main menu button
        playButton1 = createButton('MAIN MENU');
        playButton1.position(30, 35 - playButton1.size(100, 50).width / 1400);
        playButton1.mouseClicked(playMenuButton);

        //play button
        playButton2 = createButton('PLAY');
        playButton2.position(30, 90 - playButton2.size(100, 50).width / 1400);
        playButton2.mouseClicked(playButtonGame);

        //play button
        playButton3 = createButton('HOW TO');
        playButton3.position(30, 145 - playButton3.size(100, 50).width / 1400);
        playButton3.mouseClicked(playHowButton);

        playButton4 = createButton('CREDITS');
        playButton4.position(30, 200 - playButton4.size(100, 50).width / 1400);
        playButton4.mouseClicked(playCreditButton);

        playButton5 = createButton('END GAME');
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
            playButton5.position(30, 145 - playButton5.size(100, 50).width / 1400);
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


function draw() {
    background(51);
    

    let roadWidth = 255;
    let roadHeight = 400;

    if(currentScreen == MAIN_MENU) {
        drawMain();
    }
    if(currentScreen == PLAY) {
          drawBackground();
          drawRoad();
          drawNature();
          drawEnemies();
          drawPlayer();
    }
    if(currentScreen == HOW_SCREEN) {
        drawHowTo();
    }
    if(currentScreen == CREDITS) {
        drawAttrib();
    }
    
        if(y < destY) { //key down
            y++;
            
        }
        if(y > destY) { //key up
            y--;
        }
        if(x < destX) { //right key
            x++;
        }
        if(x > destX) { //left key
            x--;
        }

}



        function drawMain() { //main menu screen
            image(logo, 280, 150);
            textSize(30);
            fill(255);
            text("Assignment Creative Coding", 290, 340);
            textSize(20);
            fill(255);
            text("Ethel Beckett s5125717", 380, 370);
         }    


        function drawBackground() { 
           fill(255);
           rect(170,0, 520, 600);    
           //drawing the grass
           noStroke();
           fill(0,146,69);
           rect(170, 0, 100, 600);
           rect(617,0, 100, 600);
        }
        
        function drawRoad() {    
           rectMode(DEGREES);
           angleMode(DEGREES);
           strokeWeight(1);
           fill(100);
           rect(290, 0, 305, 600); //drawing the road
            
           fill(251,176,59);
           noStroke();
           //strokeWeight(2);
           for(let y = 0; y < 650; y = y + 50) { //dash line on the road
           rect(442, y, 5, 20);
               
                if(keyPressed.UP_ARROW == true) {
                    y += y - speedY[i];
                }       
               
           }    
            
           //drawing the red strip curbs in loop
           fill(193,39,45);
           for(let c = 10; c < 600; c = c + 30) { //red strip left
               rect(270, c, 21,15);
           }
           for(let d = 10; d < 600; d = d + 30) { //red strip right
              rect(595, d, 22,15);
           }    
        }

        function drawNature() { 
            for(let b = 20; b < 580; b = b + 100) { //bush left
            image(bush, 195, b);
            
           }

            for(let u = 20; u < 580; u = u + 100) { //bush right
            image(bush, 645, u);
           }
        }
      
        function drawEnemies() {
            imageMode(CENTER);
            
            for(let e = 0; e < enemyY.length; e++) {  
                image(enemy[e], enemyX[e], enemyY[e] + a, 20,40); 

                    enemyX[e] = enemyX[e];
                    enemyY[e] += enemyTY[e];
                     
                     a = a - 0.5;
                    if(a < 0) {
                        a = height;         
                    } 
                  
                
                
                console.log(enemy[e]);     
            }
            
       }

     

        function drawPlayer() {
            rectMode(RADIUS);
            fill(255, 0, 0);
            image(player, x + 320,y + 505);
            
         
        }     
        
        function keyPressed() {
            if (keyCode == RIGHT_ARROW) {
               destX += 50; 
            }
            if (keyCode == LEFT_ARROW) {
               destX -= 50; 
            }
            if (keyCode == DOWN_ARROW) {
                destY += 50; 
            }
            if (keyCode == UP_ARROW) {
                destY -= 50; 
            }
            if(dist(destX, destY, enemyX[i], enemyY[i]) < 10) {
                enemyX[i] = random(width);
                enemyY[i] = random(height);   
            }
          
            
        }

        function drawHowTo() {
            
        }

        function drawAttrib() {
            fill(255);
            textSize(30);
            text("CREDITS", xSize /2, 100);
            rect(200, 120, 600, 400);
        }




