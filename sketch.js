//name spocing 

const Engine = Matter.Engine;
const Body= Matter.Body;
const Bodies = Matter.Bodies;
const World= Matter.World 

var ball,engine,world;
var ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var options = {restitution :1.0}   // JSON Format  { x :200, y:300}

var ground_Options={isStatic : true}


  ball=Bodies.circle(400,200,50,options);
  World.add(world,ball);
  console.log(ball)

ground=Bodies.rectangle(400,390,800,20,ground_Options);
World.add(world,ground)



  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("pink");  
  Engine.run(engine);
  ellipseMode(RADIUS);
  fill("green");
  ellipse(ball.position.x,ball.position.y,40,40);

rectMode(CENTER);
 fill("Brown");
rect(ground.position.x,ground.position.y,800,20) 



  //drawSprites();
}