
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg, boy;

function preload()
{
	boyImg = loadImage("imgspng/boy.png");
}

function setup() {
	createCanvas(1200, 650);

	boy = createSprite(280, 550);
	boy.addImage(boyImg);
	boy.scale = 0.15;

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	treesan1 = new Tree(880, 450, 600, 600);
}


function draw() {
  rectMode(CENTER);
  background(230, 230, 230);
  
  treesan1.display();
  drawSprites();
}



