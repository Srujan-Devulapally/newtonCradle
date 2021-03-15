
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(200,400,100,30)
    bobObject1=new Circle(20,20,20)
    bobObject2=new Circle(20,40,20)
    bobObject3=new Circle(20,60,20)
    bobObject4=new Circle(20,80,2)
    bobObject5=new Circle(20,100,20)
	rope1=new Rope(bobObject1.body,roof.body,-35*4,0)
	rope2=new Rope(bobObject2.body,roof.body,-35*2,0)
	rope3=new Rope(bobObject3.body,roof.body,-35*2,0)
	rope4=new Rope(bobObject4.body,roof.body,-35*-2,0)
	rope5=new Rope(bobObject5.body,roof.body,-35*-4,0)
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);  
  drawSprites();
 roof.display()
 bobObject1.display()
 bobObject2.display()
 bobObject3.display()
 bobObject4.display()
 bobObject5.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000});
	}
	if(keyCode === 50){
		Matter.body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000});
		Matter.body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000});
	}
}

