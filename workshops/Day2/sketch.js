function setup() {
  createCanvas(400, 500);
     
  
}

function draw() {
//This is excercise 1    
/*
background(220);
  fill(255,182,193);
  ellipse(50,50,100,100);
 fill(0,0,255);    
  rect(100,100,60,30);
  fill(255,0,0);     
  line(365, 60, 185,165);
  fill(100);
  ellipse(100,190, 60); */
    
//This is excercise 2
  background(220);    
  /*rect(100, 170,220,50,10);
  textStyle(BOLD);    
  textSize(20);   
  textAlign(CENTER);
     
  text("x" + mouseX + ", y" + mouseY, 200,200);*/
  /*text("News on Channel" + 9 + "at " + 5 + "O'clock");    
   ellipse(50,50,100,100)         
  line(100,100,200,100);
    line(200,100,200,200);
    line(200,200,100,200);
    line(100,200,100,100);*/
    
//building the road
   noStroke();  
  //the road//    
  fill(51);    
  rect(50,40,300,400);
  
  //first car//
  fill(255,0,0);    
  ellipse(140, 100, 30,30);
 
  //second car// 
  ellipse(230, 200, 30,30);    
  
  //road line//    
  fill(255,164,0);    
  rect(200,40,6,20,);
  rect(200,80,6,20,);
  rect(200,120,6,20,); 
  rect(200,160,6,20,);     
  rect(200,200,6,20,);    
  rect(200,240,6,20,);  
  rect(200,280,6,20,); 
  rect(200,320,6,20,);  
  rect(200,360,6,20,);    
  rect(200,400,6,20,);    
      
    
  //player//    
  fill(0,100,0);      
  rect(120,380,20,40);

  
 
    
}