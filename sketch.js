var box;

function setup() {
  createCanvas(400,400);
box=createSprite(20,30,30,30);

}


function draw() 
{
  background(30);
  if (keyDown("right")) {
    box.position.x +=10;

  }
  if (keyDown("left")) {
    box.position.x -=10;
  }
  drawSprites();

}




