//button variables CONST applied as variables are
const MAIN_MENU = 0;
const PLAY = 1;
const HOW_TO = 2;
const CREDITS = 3;
const RESET_GAME = 4;
const GAME_OVER = 5;

//button variable functions  for different screens events
let currentScreen = MAIN_MENU;
let playButton1, playButton2, playButton3, playButton4, playButton5, playButton6;


//object variables
let roadX, roadY, roadSX, roadSY;
let player, myPlayer;
let roadblock, block = new Array(8);
let traffic, traffic2 = new Array(10);
let coin, coins = new Array(10);
let keys, bird, birds, koala;
let man, manly;

let a, a2; //road line variables used to make lines on the road move
let score = 0;
let coinSound, themeMusic;
let video;


function preload() {
    player = loadImage('images/player.png');
    bush = loadImage('images/bush.png');
    roadblock = loadImage('images/roadblock2.png');
    traffic = loadImage('images/enemy10.png');

    coin = loadImage('images/star1.png');
    loadAnimation('images/star1.png', 'images/star2.png');
    man = loadImage('images/sprite_00.png');
    loadAnimation('images/sprite_00.png', 'images/sprite_09.png');

    soundFormats('mp3', 'ogg');
    coinSound = loadSound('sounds/coins.mp3');
    themeMusic = loadSound('sounds/boxcat.mp3');

    logo = loadImage('images/roadfighter.png');
    flags = loadImage('images/flags.png');
    keys = loadImage('images/keys.png');
    bird = loadImage('images/frame-1.png');
    loadAnimation('images/frame-1.png', 'images/frame-8.png');
    bye = loadImage('images/bye.png'); //game over koala image
    koala = loadImage('images/koalasign.png'); //koala road sign image

    data = loadJSON('data.json');
    lines = loadStrings('label.txt');
    objectX = 10;
    objectY = 10;
}

function setup() {
    createCanvas(800, 600);
    video = createVideo('video/city-motion.mp4');
    video.hide();
    noStroke();
    rectMode();
    roadX = width / 2;
    roadY = width / 2;
    roadSX = 360; //x and y road size
    roadSY = 600;

    a = 0; //a and a2 updated variable to move road lines
    a2 = 100;


    //creates buttons to navigate through different screens
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
    playButton6.mouseClicked(playgameOver);

    playButton4 = createButton('CREDITS');
    playButton4.position(650, 550 - playButton4.size(100, 40).width / 1400);
    playButton4.mouseClicked(playCreditButton);


    myPlayer = createSprite(roadX, roadY + 250);
    myPlayer.addImage(player);
    myPlayer.setSpeed(0, 0);
    myPlayer.setCollider('circle', 0, 0, 15);
    // myPlayer.debug = true;

    for (let t = 0; t < traffic2.length; t++) {
        traffic2[t] = createSprite(roadX - 250 + t * 45, random(height));
        traffic2[t].addImage(traffic);
        traffic2[t].setVelocity(0, random(-3));
        traffic2[t].setCollider('circle', 0, 0, 15);
        // traffic2[t].debug = true;
    }


    for (let rb = 0; rb < block.length; rb++) {
        block[rb] = createSprite(roadX - 170 + rb * 45, random(height));
        block[rb].addImage(roadblock);
        block[rb].setCollider("circle", 0, 0, 10);
        // block[rb].debug = true;
    }

    coins = new Group();
    for (let c = 0; c < 10; c++) {
        coins[c] = createSprite(260 + c * 25, random(height));
        coins[c].addAnimation('run', 'images/star1.png', 'images/star2.png');
        coins[c].scale = 0.01;
        coins[c].setCollider("circle", 0, 0, 20);
        // coins[c].debug = true;
        coins.add(coins[c]);
    }

    birds = createSprite(100, 200);
    birds.addAnimation('birdie', 'images/frame-1.png', 'images/frame-8.png');
    birds.scale = 0.1;
    birds.setVelocity(.08, .08);

    manly = createSprite(615, 15);
    manly.addAnimation('human', 'images/sprite_00.png', 'images/sprite_09.png');
    manly.scale = 1.5;
    manly.setVelocity(0, .1);


    //every additional bubbles create a new bubbles under new Bubble for credit screen
    for (let i = 0; i < 500; i++) {
        bubbles[i] = new Bubble();
    }

}

//functions used to show and hide buttons as per the screen events
function playMenuButton() {
    currentScreen = MAIN_MENU;
    playButton2.show();
    playButton3.show();
    playButton4.show();
    playButton5.hide();
    playButton6.hide();
}

function playButtonGame() {
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

function playgameOver() {
    currentScreen = GAME_OVER;
    playButton1.show();
    playButton2.show();
    playButton3.hide();
    playButton4.hide();
    playButton5.show();
    playButton6.show();
}


/*start drawing
===============================================================================*/

//directs you which screen to draw depending on each screen state
function draw() {
    background(51);
    // themeMusic.play();

    switch (currentScreen) {
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
        case GAME_OVER:
            gameOver();
            break;
    }
}


function drawMainMenuScreen() {
    image(video, 0, 0, 800, 600);
    image(flags, roadX - 80, 160);
    image(logo, roadX / 2, roadY / 2);
    textSize(30);
    fill(255, 255, 51);
    text("Assignment Creative Coding", 220, 365);
    textSize(20);
    fill(255);
    text("Ethel Beckett s5125717", 290, 395);
}



//play screen starts here ====================================================//

function drawPlayScreen() {
    background(0, 153, 0);
    drawScore();
    drawRoad();
    drawPlayer();
    drawTraffic();
    drawObstacles();
    handleCollision();


    //===1000 millisecond equals to 1 sec. If millis is less than 3000 and greater than 500 start count down. Then round mills per 1000 and start counting from 4 to start the countdown from 3.==//

    if (millis() < 3000 && millis() > 500) { //start countdown
        fill(100);
        rect(0, 0, 800, 600);
        fill(255);
        textSize(100);
        text(4 - round(millis() / 1000), width / 2 - 40, height / 2);
        textSize(30);
        text("Press ARROW KEYS to start", 200, 100);
        text("Press SPACEBAR to pause", 200, 140);
    }
}

function drawScore() {
    fill(255);
    textSize(20);
    text(score, 695, 45);
    textSize(20);
    text('SCORE', 660, 65);
    text(frameCount, 680, 120);
    text('TIMER', 662, 140);
}

function drawRoad() {
    fill(100);
    rect(roadX / 2 + 10, 0, roadSX, roadSY);
    image(koala, 110, 50);
    fill(255);
    rect(roadX - 215, 0, 25, 600); //white Strip left of road
    rect(roadX + 170, 0, 25, 600); //white strip right of road

    for (let b = 40; b < 600; b = b + 150) { //start bush from 20 with 150 increment up to 600
        if (keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            image(bush, 70, b + a);
        }
        if (keyCode === DOWN_ARROW) {
            image(bush, 70, b + a2);
        }
    }

    fill(193, 39, 45);
    for (let r1 = 0; r1 < 600; r1 = r1 + 30) { //red strip left
        if (keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            rect(185, r1 + a, 25, 15);
        }
        if (keyCode === DOWN_ARROW) {
            rect(185, r1 + a2, 25, 15);
        }
    }

    for (let r2 = 10; r2 < 600; r2 = r2 + 30) { //red strip right
        if (keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            rect(570, r2 + a, 25, 15);
        }
        if (keyCode === DOWN_ARROW) {
            rect(570, r2 + a2, 25, 15);
        }
    }

    fill(255, 140, 0);
    for (let i = 0; i < 550; i = i + 50 + 50) {
        a = a + 0.2;
        a2 = a2 - 0.2;

        if (keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            rect(300, i + a, 3, 60);
            rect(roadX, i + a, 3, 600);
            rect(500, i + a, 3, 60);

        }
        if (a > 100) { //if a is greater than 100, restart again from 0
            a = 0;
        }
        if (keyCode === DOWN_ARROW) {
            rect(300, i + a2, 3, 60);
            rect(roadX, i + a2, 3, 600);
            rect(500, i + a2, 3, 60);
        }
        if (a2 < 0) { //if a2 is less than 0, restart again from 100
            a2 = 100;
        }
    }
}


function drawPlayer() {
    if (myPlayer.position.x > 565 || myPlayer.position.x < 220) {
        myPlayer.position.x = roadX;
    }
    if (myPlayer.position.y > 600 || myPlayer.position.y < 0) {
        myPlayer.position.y = 550;
    }
    drawSprites();
}

function drawTraffic() {
    for (let i = 0; i < traffic2.length; i++) {
        if (keyCode === UP_ARROW && traffic2[i].position.x > 525 || traffic2[i].position.x < 235) {
            traffic2[i].velocity.x *= +0.8;
            traffic2[i].position.x = roadX;
        }

        if (keyCode === UP_ARROW && traffic2[i].position.y > 600 || traffic2[i].position.y < 0) {
            traffic2[i].velocity.y *= -0.8;
            traffic2[i].position.y = 600;
        }
    }
}

function drawObstacles() {
    drawSprites();
}

//play screen ends here ====================================================//



//nested loops for handling collission. gameOver and get coins are function call backs that when the overlap or collide happens it will perform these functions.
function handleCollision() {
    for (let i = 0; i < coins.length; i++) {
        for (let h = 0; h < block.length; h++) {
            for (let e = 0; e < traffic2.length; e++) {
                for (let e1 = 0; e1 < traffic2.length; e1++) {
                    myPlayer.overlap(coins, getCoin);
                    myPlayer.collide(block[h], gameOver);
                    myPlayer.bounce(traffic2[e]);
                    traffic2[e].displace(traffic2[e1]);
                    block[h].displace(traffic2[e]);
                }
            }
        }
    }
}


function getCoin(myPlayer, coin) {
    score = round(millis() / 100) - 30;
    coin.remove();
    score++;
    //  coinSound.play(); 
    //  coinSound.setVolume(0.01);

    if (score > 250) {
        fill(255, 255, 153);
        rect(0, 0, 800, 600);
        fill(0);
        textSize(50);
        text('YOU WIN', 250, 300);
        textSize(20);
        text('Refresh your browser to restart', 220, 340);
    }

    if (frameCount > 1000 && mouseClicked.playButtonGame) {
        fill(255, 128, 0);
        rect(0, 0, 800, 600);
        fill(0);
        textSize(50);
        text('TIME IS UP', 255, 300);
        textSize(20);
        text('Refresh your browser to restart', 245, 340);
    }
}


/*-----------------------------------------------------------------------------
                            json variables global*/
let data;
let objectX;
let objectY;
let minPop = 1009363;
let maxPop = 8461961;

//------------------------------------------------------------------------------


function drawHowToScreen() {
    background(100);
    fill(51);
    rect(300, 0, 500, 600);
    textSize(30);
    fill(255, 215, 0);
    text('HOW TO PLAY THE GAME', roadX / 2 + 160, 80);
    image(keys, roadX + 180, 120);
    textSize(16);
    text('Use arrow keys to move up, down, left, right.', 340, 360);
    text('Use spacebar to stop.', 340, 390);
    text('Collect all the coins.', 340, 420);
    text('Avoid colliding with blocks.', 340, 450);

    randomSeed(4); //makes ellipse stop moving 
    stroke('white');
    fill('white');
    for (let d = 0; d < 10; d++) {
        for (let s = 0; s < 1; s++) {
            fill(51, 102, 0);
            ellipse(50, d * 40 + 60, objectX, objectY); //start from 50 and offset by 40 and add 40
            fill(255);
            text(lines[d], 80, d * 40 + 65);

            let cities = data.cities;
            let state = cities[s].state;
            let population = cities[d].population;

            if (data['cities'][d].population > minPop) {
                text('Most Population ' + maxPop, 50, 480);
            }

            if (data['cities'][d].population < maxPop) {
                text('Least Population ' + minPop, 50, 510);
            }
        }
    }
}


let bubbles = []; //bubble array undefined for new bubbles
function drawCreditScreen() {
    rectMode(CENTER);
    roadX = width / 2;
    roadY = height / 2;
    for (let i = 0; i < bubbles.length; i++) { //add bubbles as per bubbles length
        bubbles[i].move();
        bubbles[i].display();

        noStroke();
        fill(100);
        rect(mouseX, mouseY, 500, 150);
        fill(255);
        textSize(40);
        text('A T T R I B U T I O N', 215, 100);
        textSize(16);
        text('stockUnlimited', 215, 140);
        text('Open Game Art', 215, 170);
        text('Logo by Ethel Beckett', 215, 200);
        text('Video by Ignite Motion', 360, 140);

        image(coin, 240, 220, 30, 30);
        image(roadblock, 340, 225);
        image(player, 440, 225);
        image(traffic, 540, 225);
        image(bush, 240, 280);
        image(keys, 340, 280, 50, 60);
        image(logo, 180, 400);

    }
}


//bubble constructor to draw multiple bugs in random, only require one function to draw multiple bubbles. currently bubbles set to 400
function Bubble() {
    this.x = random(0, width); //x and y positions of bubbles to be displayed in random
    this.y = random(0, height);
    this.display = function () {
        noStroke();
        fill(255, 140, 0);
        ellipse(this.x, this.y, 10, 10);
    }
    this.move = function () {
        this.x = this.x + random(-1, 1); //x and y that makes the bubble moves
        this.y = this.y + random(-1.5, 1.5);
    }
}


function resetGame() {
    a = 0;
    a2 = 100;
    score = 0;
    counter = 0;
    frameCount = 0;
}


function gameOver() {
    background(100);
    var tintValue = map(mouseX, 0, width, 0, 255);
    tint(255, 100, 255, tintValue);
    image(bye, roadX / 2, 160);
    textSize(40);
    fill(255, 128, 0);
    text('G  A  M  E  O  V  E  R', 200, 140);
    fill(255);
    textSize(20);
    text('THANK YOU FOR PLAYING!', 215, 380);
    text('Sad to see you go...', 220, 420);
    textSize(15);
    //noLoop();     
}


function videoLoad() {
    vid.play();
}

function mousePressed() {
    video.loop();
}

function keyPressed() {

    if (keyCode == RIGHT_ARROW) {
        myPlayer.setSpeed(3, 0);

    } else if (keyCode == DOWN_ARROW) {
        myPlayer.setSpeed(3, 90);

    } else if (keyCode == LEFT_ARROW) {
        myPlayer.setSpeed(3, 180);

    } else if (keyCode == UP_ARROW) {
        myPlayer.setSpeed(3, 270);

    } else if (key == ' ') {
        myPlayer.setSpeed(0, 0);
    }
    return false;
}