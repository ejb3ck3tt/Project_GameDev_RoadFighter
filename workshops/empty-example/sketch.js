let data;
let objectX;
let objectY;
let minPop = 1009363;
let maxPop = 8461961;

function preload() {
    data = loadJSON('data.json');
    lines = loadStrings('label.txt');
    objectX = 10;
    objectY = 10;

    
}


function setup() {
    createCanvas( 800,500);
    rectMode(CENTER);
//        let cities = data.cities;
//        for(let i = 0; i <10; i++) {
//            createElement('h3', cities[i].city);
//         
//        let state = cities.state; 
//        for(let c = 0; c <1; c++) {
//            createDiv(cities[i].state);   
//           
//        let population = cities[i].population;
//        for(let p = 0; p < 10; p++) {
//            createDiv(population[p]);
//                
//        }      
//          console.log(state);
//    }
//
//}
  
}
     
function draw() {
        background(51);
        randomSeed(4); //makes ellipse stop moving 
        stroke('white');
        fill('white');
        for(let d =0; d < 10; d++) {
        
            for(let s =0; s < 1; s++) {

              fill(51, 102,0);
              ellipse(50, d * 40 +40, objectX, objectY);
              fill(255);
              text(lines[d], 80, d * 40 + 40);
           
             let cities = data.cities;
             let state = cities[s].state;
             let population = cities[d].population;   
            
             if(data['cities'][d].population > minPop) {
                 text('Most Population ' + maxPop, 50, 440);
             }    
                
             if(data['cities'][d].population < maxPop) {
                 text('Least Population ' + minPop, 50, 470);
             }  

        }            
}

}





    





//let explodes = [];
//
//
//function preload() {
//    explodes = loadImage('images/explo1.png');
//    loadAnimation = ('images/explo1.png', 'images/explo6');
//}
//
//function setup() {
//    createCanvas(800, 600);
//    rectMode(CENTER);
//    angleMode(DEGREES);
//    explosion = createSprite(this.x, this.y,);
//
//    for (let i = 0; i < 4; i++) {    
//   
//        explodes[i] = new Explode();
//       
//    
//}
//}
//
//function draw() {
//    background(51);
//    fill(100);
//    
//    radX = 350;
//    radY = 600;
//    
//    rect(width/2, height/2, radX, radY);
//    
//     for(let i = 0; i < 4; i++) {    
//            explodes[i].move();
//            explodes[i].display();
//         
//            if(explodes[i] > 200 - objectSize/2|| this.y < objectSize/2) {
//                this.x = -this.x;
//            }
//            if(explodes[i] > radY - objectSize/2 || this.y < objectSize/2) {
//                this.y = -this.y;
//                
//            }
//            
//          //  explodes[i].bounce(explodes[e]);
//        }
//    }
////    for(let e = 0; e < 10; e++) {
////        for(let h = 0; h < roadBlock.length; h++) {     
////            sprite2.overlap(coinSprite[i], getCoins);
////            //sprite2.collide(block[h]);
////            coinSprite[i].collide(block[h]);
////            block[h].displace(sprite2);     
//// 
////        }
////      }
//    
//let objectSize = 20;
//
//function Explode() {
//    this.x = random(width/2 + 150, height/2);
//    this.y = 600;
//    this.display = function() {
//    
//    stroke(255);
//    noFill();
////    rect(this.x, this.y, 24, 24);
//       // rect(this.x +20, this.y + 20, 50, 50);
//    image(explodes, this.x, this.y, objectSize, objectSize);
//    fill('white');    
//    
//    
//    }
//    this.move = function() {
//        this.x = this.x + random(-1, 2);
//        this.y = this.y + random(-1, -1);
//        
//    }
//}





//
//
//
////reference
//let bubbles = [];
//
//
//
//
//function setup() {
//    createCanvas(800, 600);
//    for (let i = 0; i < 400; i++) {    
//        bubbles[i] = new Bubble();
//    }
//}
//
//function draw() {
//    background(51);
//     for (let i = 0; i < bubbles.length; i++) {    
//        bubbles[i].move();
//        bubbles[i].display();
//    }
//    
//}
//
//function Bubble() {
//    this.x = random(0, width);
//    this.y = random(0, height);
//    this.display = function() {
//    stroke(255);
//    noFill();
//    ellipse(this.x, this.y, 24, 24);
//    }
//    this.move = function() {
//        this.x = this.x + random(-1, 1);
//        this.y = this.y + random(-1, 1);
//    }
//}





//var coins;
//var player;
//var score = 0;
//function setup() {
//  createCanvas(400, 400);
//  coins = new Group();
//  for (var i = 0; i < 10; i++) {
//    var c = createSprite(
//      random(100, width-100),
//      random(100, height-100),
//      10, 10);
//    c.shapeColor = color(255, 255, 0);
//    coins.add(c);
//  }
//  player = createSprite(50, 50, 40, 40);
//  player.shapeColor = color(255);
//}
//function draw() {
//  background(50);
//  player.velocity.x = 
//    (mouseX-player.position.x)*0.1;
//  player.velocity.y = 
//    (mouseY-player.position.y)*0.1;
//  player.overlap(coins, getCoin);
//  drawSprites();
//  fill(255);
//  noStroke();
//  textSize(72);
//  textAlign(CENTER, CENTER);
//  if (coins.length > 0) {
//    text(score, width/2, height/2);
//  }
//  else {
//    text("you win!", width/2, height/2);
//  }
//}
//function getCoin(player, coin) {
//  coin.remove();
//  score += 1;
//}







//let explosion;
//let explode;
//
//
//function preload (){
//
//    explosion = loadImage('images/explo1.png');
//    loadAnimation('images/explo1.png', 'images/explo6.png');
//}
//
//function setup() {
//    createCanvas(500, 500);
//    
//    explode = createSprite((random)(200), (random)(200), 50, 50);
//    explode.addAnimation('run', 'images/explo1.png', 'images/explo6.png');
//   // sprite.setVelocity(.1, .1);
//    explode.setSpeed(0, .0);
//    setFrameRate(10);
//}
//
//function draw (){
//    background('grey');
//    drawSprites();
//}


















//let spritesheet; //store the image, spritesheet
//let spritedata; //my explosion sprite
//w = 96;
//counter = 0;
//let animation = [];
//
//function preload() {
////explode.load.spritesheet('uniqueKey', 'images/explosion.png', 77, 77, 5);
//spritesheet = loadImage('images/explosion.png'); 
//
//}
//
//let audience;
//
//function setup() {
//   background('grey');
//   createCanvas(800,600);
//    
//    let sprite = explode.sprite;
//    
//    for (let i = 0; i < sprite.length; i++) {  
//        let pos = sprite[i].position;
//        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
//        animation.push(img);
//    }
//    console.log(animation);
//    
//    
//    
//    
//    
//    
//    
////    //explode = loadImage('images/explosion.png');  
////   sprite.addAnimation('run', 'images/explosion.png');
//}
//function draw() {
//    //image(spritedata, 100, 100, 1152, 96);
//    
//    
//    
//    
//    
//    
////    x = (counter % 12) * w;
////    y = (counter / 12) * w;
////    copy(explode, 0, 0, w, w, 0, 0, w, w);
////    counter = counter + 1;
////    counter == 12;
////     counter = 0;
//}