
 let x = 0;
//let velocity = 5;

function setup() {
    createCanvas(800,400)
}

    function draw() {
    background(200);
   // angleMode(DEGREES);    
        
        let x1 = width / 2;
        let y1 = height / 2;
         let rectWidth = 100;
          let rectHeight = 100;
        let radius = 50;
        let x2 = mouseX;
        let y2 = mouseY;
    
   
  
    //distance
    let dx = x2 - x1;
    let dy = y2 - y1;
    let d = sqrt(dx * dx + dy * dy);
    
    //mouse inside the circle
  ellipse(x,y1, rectWidth, rectHeight);
   if (x < width - rectWidth && d <= radius) {
      ellipse(d + x, d + MouseY,radius * 2, radius * 2);
       } else {
          x = x + 5; 
         
       }
 
   
}