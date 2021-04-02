var tom,tomimage;
var jerry,jerryimage;
var garden;

function preload() {
    //load the images here
    tomimage=loadImage("tomTwo.png");
    jerryimage=loadImage("jerryOne.png");

}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
tom = createSprite(600,450,20,10); 
tom.addImage("tom",tomimage);
tom.scale=0.2
jerry = createSprite(50,30,30,20);
jerry.addImage("jerry",jerryimage);
jerry.scale=0.08
jerry.velocityY=3


}
function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
if (keyCode===37){
  tom.velocityX=-4
}
if (keyCode===38){
  tom.velocityY=-4
}
if (keyCode===39){
  tom.velocityX=4
}
if (keyCode===40){
  tom.velocityY=4
}
if (tom.isTouching (jerry)){
  tom.velocityX=0
}
if (jerry.isTouching(tom)){
  jerry.velocity=0
}
    drawSprites();
    stroke("red");
  fill("red");


 }



function keyPressed(){


}
  //For moving and changing animation write code here
  if (keyCode===(Top_Arrow)){
    jerry.velocityY=-5

}
