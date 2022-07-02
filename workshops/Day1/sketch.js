function setup() {
  createCanvas(640, 400);
  frameRate(30);
}

function draw() {
  
   if (mouseIsPressed) {
      fill (255);
    } else {
        fill(255,0,0);
    }
    ellipse(mouseX, mouseY, 60,60);
    
    let x = 20;
    if (x>=20){
        let y = 20;
        print(y);
    }
    let y = 20;
}