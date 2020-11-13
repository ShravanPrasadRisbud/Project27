
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var roof,rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 700);

	bobDiameter = 5;

    roof = new Roof(600,200,600,20);

	ball1 = new Bob(400,400,50);
	ball2 = new Bob(500,400,50);
	ball3 = new Bob(600,400,50);
	ball4 = new Bob(700,400,50);
	ball5 = new Bob(800,400,50);

	rope1 = new Rope(ball1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(ball2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(ball3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(ball4.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(ball5.body,roof.body,-bobDiameter*2,0);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
}



function draw() {
  rectMode(CENTER);
  background("yellow");

  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



