const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2
var block1, block2, block3, block4, block5, block6, block7, block8, block9
var PolygonImage, Polygon
var SlingShot

function preload() {
  PolygonImage = loadImage("polygon.png")
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    stand1 = new Ground(390, 260, 200, 10);
    //stand2 = new Ground();

    block1 = new Box(330, 235, 30, 40);
    block2 = new Box(360, 235, 30, 40);
    block3 = new Box(390, 235, 30, 40);
    block4 = new Box(420, 235, 30, 40);
    block5 = new Box(450, 235, 30, 40);  

    block6 = new Box(360, 195, 30, 40);
    block7 = new Box(390, 195, 30, 40);
    block8 = new Box(420, 195, 30, 40);

    block9 = new Box(390, 155, 30, 40);

    Polygon = Bodies.circle(50, 200, 20);
    World.add(world, Polygon);

    SlingShot = new slingShot(this.Polygon, {x:100, y:200});
}


function draw() {
    background(255);
    Engine.update(engine)

    image(PolygonImage, Polygon.position.x, Polygon.position.y, 40, 40);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    stand1.display();

    SlingShot.display();

}

function keyPressed() {
    if(keyCode === 32) {
        SlingShot.attach(this.Polygon);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(this.Polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    SlingShot.fly();
}
