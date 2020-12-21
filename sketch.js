const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var box;
var ground;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world
  
  var options = {
    restitution:2.0
  }
box = Bodies.rectangle(200,20,50,50,options)
World.add(world,box)
var ground_options = {
isStatic : true
}
ground=Bodies.rectangle(200,380,400,10,ground_options)
World.add(world,ground)



}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 600,10);
  ellipseMode(RADIUS);
  ellipse(box.position.x,box.position.y,20,20)
  drawSprites();
}