var x= 300;
var y= 200;
var x=0;
var i = 0;
var seasons= ["winter","spring","summer","fall"];

function setup(){
    createCanvas(1350,600);
    background(200,90,190);
    
}

function draw(){
    ellipse(x,y,60,60);
    fill(255,0,100);
    noStroke();
    if(mouseIsPressed){
        ellipse(mouseX,mouseY, 90, 90);
    }
    if(keyIsDown(LEFT_ARROW)){
        background(90,100,10);
    }
    if(keyIsDown(RIGHT_ARROW)){
        background(90);
    }
    if(keyIsDown(UP_ARROW)){
        background(190,50,80);
    }
    if(keyIsDown(DOWN_ARROW)){
        background(0,50,280);
         
    }

    x = x + 5;
  if (x > width) {
    x = 0;
  }
 // rect(20,20,90,80);
  fill(300);
    
}

function mousePressed(){
    textSize(55);
    background(200,90,190);
    text(seasons[i], width/2,100);
    i++;
    if(i==seasons.length){
        i=0;
    }
}
