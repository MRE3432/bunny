const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var button;
var bg_img;
var food;
var rabbit;
var rabbitimg;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbitimg = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  button= createImg("cut_button.png");
  button.position (220,30);
  button.mouseClicked(drop);
  button.size(40,40)
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
  rabbit = createSprite(230,600,10,10);
  rabbit.addImage  (rabbitimg);
  fruit_con = new Link(rope,fruit);
  rabbit.scale = 0.3;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
  
  image(bg_img,width/2,height/2,490,690);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();
  drawSprites();
 
   
}

function drop(){
rope.break();
fruit_con.detach();
fruit_con = null;

}