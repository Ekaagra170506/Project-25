const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1825,825);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(width/2,770,width,20);

  paper = new Paper(150,130,70);
  

  dustbin = new Dustbin(1400,750,200,220);
  
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
    ground.display();
    paper.display();
    dustbin.display();
    
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-140});
  }
}



