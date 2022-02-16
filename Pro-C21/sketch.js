
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var world;
var engine;
var radius = 40;
var groundObj;;
var leftSide, rightSide;


function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	groundObj = new ground(width/2, 670, width, 20);

	rightSide = new ground(1350, 600, 20, 120);
	leftSide = new ground(1100, 600, 20, 120);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here. forma para criar na bibioteca bidies a forma circular
    ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(50);

	groundObj.display();
	rightSide.display();
	leftSide.display();
  
	//para desenhar na tela a bola
	ellipse(ball.position.x,ball.position.y,radius,radius);
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x: 85, y: -85});
	}
}

