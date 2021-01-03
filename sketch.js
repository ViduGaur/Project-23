var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var log1, log2,log3;
//var log1Body, log2Body, log3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    fill("red");
	/*log1 = createSprite(300,620,20,95);
	log2 = createSprite(450,620,20,95);
	log3 = createSprite(375,660,150,20);*/
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
    log1 = Bodies.rectangle(300, 620, 20, 95 , {isStatic:true} );
 	World.add(world, log1);
   
	log2 = Bodies.rectangle(450, 620, 20, 95 , {isStatic:true} );
	 World.add(world, log2);
	 
	log3 = Bodies.rectangle(275, 640, 100, 20 , {isStatic:true} );
 	World.add(world, log3);
	/*log1Body = Bodies.rectangle(300,620,20,95, {isStatic:true});
	World.add(world, log1Body);*/
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  rectMode(CENTER);
  rect(log1.position.x, log1.position.y, log1.width, log1.height); 
  rectMode(CENTER);
  rect(log2.position.x, log2.position.y, log2.width, log2.height);
  rectMode(CENTER);
  rect(log3.position.x, log3.position.y, log3.width, log3.height);
  if(keyDown("DOWN_ARROW")){
   Matter.Body.setStatic(packageBody,false)
  }
  Engine.update(engine);
  drawSprites(); 
}