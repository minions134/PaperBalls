
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var world,engine
var radius=20
var ground,left,right

function preload()
{
	
}




function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

var balloption ={
	isStatic : false,
	restitution : 1.0,
	density:1.2

}
ball = Bodies.circle(260,100,radius,balloption);
World.add(world,ball)

ground=new Ground(800,680,1600,20)
left=new Ground(1100,610,20,120)
right=new Ground(1300,610,20,120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ellipse(ball.position.x,ball.position.y,radius,radius)
  ground.display();
  left.display();
  right.display();

 
}
function keyPressed(){
if(keyCode===UP_ARROW ){
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
}






}



