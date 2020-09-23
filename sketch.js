const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 =new Box(700,240,70,70);
    box4 =new Box (920,240,70,70);
    pig1 =new Pig(  810,350  );
    plank1= new Plank(810,260,300,PI/2);
    pig2 =new Pig (810,220);
    plank2=new Plank(810,140,300,PI/2);
    box5= new Box(810,120,70,70);
    plank3 =new Plank(765,120,150,PI/7);
    plank4 =new Plank(870,120,150,-PI/7);


    ground=new Ground();
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    plank1.display();
    box3.display();
    box4.display();
pig2.display();
plank2.display();
box5.display();
plank3.display();
    plank4.display();
   
}