
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof = new Roof(400,200,400,30);

bob1 = new Ball(320, 400, 20);
bob2 = new Ball(360, 400, 20);
bob3 = new Ball(400, 400, 20);
bob4 = new Ball(440, 400, 20);
bob5 = new Ball(480, 400, 20);

rope = new Rope(roof.body, bob1.body, -80);
rope2 = new Rope(roof.body, bob2.body, -40);
rope3 = new Rope(roof.body, bob3.body, 0);
rope4 = new Rope(roof.body, bob4.body, 40);
rope5 = new Rope(roof.body, bob5.body, 80);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);





roof.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}



function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-40, y:-40})
		console.log("notworking")
		}
}