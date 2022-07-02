let angle = 0.1;  
let angle2 = 1;
let x1 = 0;
//calculate the distance
//  let d = dist(x1, y1, x2, y2);
destX =0;
destY =0;
let x=0;
let y=0;

function setup() {
  // put setup code here
    createCanvas(600,400);
    
}

function draw() {
    background(0,150,0);
    
  let centreX = width / 2;
  let centreY = height / 2;
  let centreWidth = width / 2;
  let centreHeight = height / 2;
  let radius = 100;
  let x = radius * cos(angle);
  let y = radius * sin(angle);    
    
  let x2 = radius * cos(angle2);
  let y2 = radius * sin(angle2);     
  //let d = dist(x1, y1, x2, y2);
    
    
  ellipseMode(RADIUS);
  angleMode(DEGREES);

  //this is the circular track    
 strokeWeight(40);
  noFill();
  stroke(150);
  ellipse(300,200,200,100);
  
  //yellow stroke
  strokeWeight(1);
  stroke(255,255,0);
  ellipse(300, 200, 200, 100); 
  ellipse(300, 200, 203, 103) 
  
    
  //blue ellipse      
  fill(0,0,255);
  noStroke();   
  ellipse(1.9*x  + 300 , y/1.1 + 200, 5, 5);
  angle = angle + 0.5; 
    
  
  //blue ellipse      
  fill(255,0,0);
  noStroke();   
  ellipse(2.1*x2  + 300 , y2/0.9 + 200, 5, 5);
  angle2 = angle2 + 0.5;
//    
//      if(y < destY) { //key down
//            angle++;
//            
//        }
//        if(y > destY) { //key up
//            angle--;
//        }
//        if(x < destX) { //right key
//            angle++;
//        }
//        if(x > destX) { //left key
//            angle--;
//        }
  
}


function keyPressed() {
            if (keyCode == RIGHT_ARROW) {
               angle += 5; 
            }
            if (keyCode == LEFT_ARROW) {
               angle-= 5; 
            }
            if (keyCode == DOWN_ARROW) {
                angle += 5; 
            }
            if (keyCode == UP_ARROW) {
                angle -= 5; 
            }
//            if(dist(destX, destY, enemyX[i], enemyY[i]) < 10) {
//                enemyX[i] = random(width);
//                enemyY[i] = random(height);   
//            }
          
            
        }


//function keyPressed() {
//   //handleCollision();
//    if (keyCode == RIGHT_ARROW) {
//        ellipse
//    }
//    else if (keyCode == DOWN_ARROW) {
//        sprite2.setSpeed(2, 90);
//
//    }
//    else if (keyCode == LEFT_ARROW) {
//        sprite2.setSpeed(2, 180);
//
//    }
//    else if (keyCode == UP_ARROW) {
//        sprite2.setSpeed(2, 270);
//
//    }
//    else if (key == ' ') {
//        sprite2.setSpeed(0, 0);
//    }
//    return false;
//}
