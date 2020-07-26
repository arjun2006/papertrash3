var ground
var paper, ground,trashBase, trashRight, trashLeft
var launcher 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(320,240,25);
	ground=new Ground (400,690,800,20);
	trashBase=new Trash(600,670,100,20);
	trashLeft=new Trash(540,655,20,50);
  trashRight=new Trash(660,655,20,50);
  launcher= new Launcher(paper.body,{x:300, y:700})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();
  trashBase.display();
  trashLeft.display();
  trashRight.display();
  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

