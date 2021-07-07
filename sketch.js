
function preload(){
  //pre-load images
  var pathh=loadImage("path.png")
  var run=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200)
 track.velocityY=-4
 track.addImage(pathh)
 
 }

function draw() {
  background(0);
  if(track.y=400){
    track.y=200
  }
  drawSprites()

}
