var Mrect, Frect;

function setup() {
  createCanvas(800,400);

  Mrect=createSprite(400, 200, 80, 50);
  Mrect.shapeColor = "lightblue";

  Frect=createSprite(600, 300, 50, 80);
  Frect.shapeColor = "lightblue";
}

function draw() {
  background(255,255,255);

  Mrect.x = World.mouseX;
  Mrect.y = World.mouseY;

  if (Mrect.x-Frect.x<Frect.width/2+Mrect.width/2 &&
    Frect.x-Mrect.x<Frect.width/2+Mrect.width/2 &&
    Mrect.y-Frect.y<Frect.height/2+Mrect.height/2 &&
    Frect.y-Mrect.y<Frect.height/2+Mrect.height/2) {

    Mrect.shapeColor = "pink";
    Frect.shapeColor = "pink";
  }
  else {
    Mrect.shapeColor = "lightblue";
    Frect.shapeColor = "lightblue";
  }
    

  drawSprites();
}