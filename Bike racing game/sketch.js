var bg , bgImage;


function preload() {
  bgImage = loadImage("track1.png");
  bk1 = loadImage("biker1.png");
  bk2 = loadImage("biker2.png"); 
  bk3 = loadImage("biker3.png"); 
 
}




function setup() {
  createCanvas(displayWidth,displayHeight-100);
bg =  createSprite(width/2, 200, 1000, 1000);
bg.addImage("track",bgImage);
bg.velocityY=1;

biker1 = createSprite(460,500,40,40);
biker1.addImage("b1",bk1);
biker1.scale = 0.5;

biker2 = createSprite(690,500,40,40);
biker2.addImage("b2",bk2);
biker2.scale = 0.2;

biker3 = createSprite(890,500,40,40);
biker3.addImage ("b3",bk3);
biker3.scale = 0.6;
}

function draw() {
  background(0);
  console.log(bg.y);
  
  if(bg.y>400){
   bg.y = 300;
  }

  if (keyDown("UP_ARROW")){
  biker2.velocityY=-1;
  }
  //image(bgImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
  drawSprites();
  textSize(20);
  text(mouseX+","+mouseY,mouseX,mouseY);
}