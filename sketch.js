const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    backgroundImg=loadImage("sprites/images/GamingBackground.png");
}




function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;
    monster=new Monster(800, 400);
    





    ground = new Ground(100,600,1500,20);
    man=new Man(200, 200, 40);
    box1=new Box(300, 100);
    box2=new Box(300, 100);
    box3=new Box(300, 100);
    box4=new Box(300, 100);
    box5=new Box(300, 100);
    box6=new Box(300, 100);
    box7=new Box(450, 100);
    box8=new Box(450, 100);
    box9=new Box(450, 100);
    box10=new Box(450, 100);
    box11=new Box(450, 100);
    box12=new Box(450, 100);
    box13=new Box(600, 100);
    box14=new Box(600, 100);
    box15=new Box(600, 100);
    box16=new Box(600, 100);
    box17=new Box(600, 100);
    box18=new Box(600, 100);
    box19=new Box(600, 100);
    box20=new Box(450, 100);
    box21=new Box(300, 100);
    rope=new Rope(man.body, {x:100, y:20});
}

function draw(){
    background(backgroundImg);
    
    Engine.update(engine);
    
   
    ground.display();
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    man.display();
monster.display();

}



function mouseDragged(){
    Matter.Body.setPosition(man.body, {x: mouseX , y: mouseY});

}



