
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,b1,b2,b3
var ground

function preload()
{

}


function 	setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20)
	b1 = new Box(550,650,10,60);
	b2 =  new Box (750,650,10,60);
	b3 =  new Box(650,675,200,10)
	paper= new Paper(100,500,25)
	

	Engine.run(engine);
	world = engine.world;
}
function draw() {
  background("whight");
 
  ground.display()
  b1.display()
  b2.display()
  b3.display()
  paper.display()
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25});
  
	}
}
