
    
function setup() {
  // put setup code here
   createCanvas(800, 400);
}


function draw() {
  // put drawing code here
    background(200);   
    //Excercise 1
    line(0,200,800,200);
    if (mouseX > 50 && mouseX < 200 && mouseY > 50 && mouseY < 200) {
        //shape will show at the bottom of the line
        triangle(201, 201, 400, 395, 550, 201);       
    } else {
        //shape will show at the top of the line 
        triangle(200, 200, 400, 50, 550, 200);
    }
    
}
   
   

       
 