var fixedRect, movingRect;

function setup() {
  createCanvas(600,600);
  

  fixedRect = createSprite(300,200,40,90);
  fixedRect.shapeColor="red";
   
  movingRect = createSprite(300,400,50,60);
  movingRect.shapeColor="red";

}

function draw() {
  background("blue");
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
     movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2&&
     fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
     movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 ){
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  
  drawSprites();
}