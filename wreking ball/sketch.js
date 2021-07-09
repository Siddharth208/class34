const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height-30,1200,20);
    box1=new Box(900,100)
    box2=new Box(900,100)
    box3=new Box(900,100)
    box4=new Box(900,100)
    box5=new Box(900,100)
    box6=new Box(900,100)
    box7=new Box(900,100)
    box8=new Box(900,100)

    box9=new Box(800,100)
    box10=new Box(800,100)
    box11=new Box(800,100)
    box12=new Box(800,100)
    box13=new Box(800,100)
    box14=new Box(800,100)

    box15=new Box(700,100)
    box22=new Box(700,100)
    box33=new Box(700,100)
    box44=new Box(700,100)
    box55=new Box(700,100)
    box66=new Box(700,100)
    box77=new Box(700,100)

    ball1=new Ball()

    rope = new SlingShot(ball1.body,{x:500,y:120})

    
    

}

function draw(){
    background(0);
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
    box22.display();
    box33.display();
    box44.display();
    box55.display();
    box66.display();
    box77.display();

    ball1.display();

    rope.display();


    
}

function mouseDragged(){
    
    //Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}


