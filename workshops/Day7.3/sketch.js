//store the images
let images = new Array(16);
//position
let imgX = new Array(16);
let imgY = new Array(16);


function preload() {
     pixelDensity(1);
    images[0] = loadImage('images/1_1.jpg');
    images[1] = loadImage('images/1_2.jpg'); 
    images[2] = loadImage('images/2_2.jpg');
    images[3] = loadImage('images/2_2.jpg'); 
    images[4] = loadImage('images/3_1.jpg');  
    images[5] = loadImage('images/3_2.jpg');  
    images[6] = loadImage('images/4_1.jpg');  
    images[7] = loadImage('images/4_2.jpg');  
    images[8] = loadImage('images/5_1.jpg');  
    images[9] = loadImage('images/5_2.jpg');  
    images[10] = loadImage('images/6_1.jpg'); 
    images[11] = loadImage('images/6_2.jpg');
    images[12] = loadImage('images/7_1.jpg');
    images[13] = loadImage('images/7_2.jpg');
    images[14] = loadImage('images/8_1.jpg');
    images[15] = loadImage('images/8_2.jpg');  
      
}

let box;
let sprite1 = new Array (16);   
function setup() {
createCanvas(800, 500);
    
  
   for (let i = 0; i < imgX.length; i++) {
       
      // box = createSprite(600, 400);
    //   box.addAnimation('normal', 'images/1_1.jpg', 'images/8_2.jpg');
       
       sprite1[i] = createSprite(random(width),random(height));
       sprite1[i].addImage(images[i]);
       sprite1[i].scale = 0.1; 
       sprite1[i].setSpeed(1, random(360));
       
   }
}    
    

function draw() {
background('grey');
    drawSprites();
     
   for(let i = 0; i < imgX.length; i++) {
        for( let d = 0; d < imgX.length; d++) {
            sprite1[i].bounce(sprite1[d]);
           
}
        }
    
}