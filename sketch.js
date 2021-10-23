const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob,bob1,bob2,bob3,bob4;
var rope1;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options = {
		isStatic : false,
		restitution : 0.3, 
		frictionAir : 0,
		density : 1.2
	 }


	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob = Bodies.circle(300,500,20,bob_options); 
	World.add(world,bob);

	bob1= Bodies.circle(341,500,20,bob_options); 
	World.add(world,bob1);

	bob2= Bodies.circle(382,500,20,bob_options); 
	World.add(world,bob2);

	bob3= Bodies.circle(423,500,20,bob_options); 
	World.add(world,bob3);

	bob4= Bodies.circle(464,500,20,bob_options); 
	World.add(world,bob4);

     rope1= new rope(bob.body,roof.body,-80);
	 rope2= new rope(bob1.body,roof.body,-40);
	 rope3= new rope(bob2.body,roof.body,0);
	 rope4= new rope(bob3.body,roof.body,40);
	 rope5= new rope(bob4.body,roof.body,80);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  
  //create ellipse shape for multiple bobs here
  ellipseMode(RADIUS);
  ellipse(bob.position.x,bob.position.y,20);
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
