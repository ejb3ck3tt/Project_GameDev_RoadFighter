let img;
let img2;


function preload() {
    pixelDensity(1);
    img = loadImage("images/bg.jpg");
    img2 = loadImage("images/modified.jpg")
}

function setup() {
    createCanvas(600,400);
    frameRate(10);
       
}

function draw() {
   background(244,248,252);
        xWidth = 800;
        imageMode(CORNER);
    
   image(img, 0, 0, 800, 400, mouseX, 0, 300, 200);
   image(img2, mouseX, 0, 800, 400, mouseX, 0, 300, 200);    
  
//   image(img, 0, 0, 800, 400, mouseX, 0);
//   image(img2, mouseX, 0, 800, 400, mouseX, 0);
    
    
    
   stroke(255,0,0);
   line(mouseX, 0, mouseX, 400, mouseX, 0);
  
       
        
}