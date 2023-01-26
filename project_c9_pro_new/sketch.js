
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor = "white";

}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background(rgb(255,77,77));
    
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background(rgb(77,195,255));
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background(rgb(255,255,77));
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background(rgb(102,255,102));
  }


  
  drawSprites();
}

