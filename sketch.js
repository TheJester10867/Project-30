const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1, stand2;

var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16, block17;
var block18, block19, block20, block21, block22, block23, block24;
var block25, block26, block27, block28, block29, block30;
var block31, block32, block33, block34, block35;
var block36, block37, block38, block39;
var block40, block41, block42;
var block43, block44;
var block45;
var block46, block47, block48;
var block49, block50;
var block51;

var polygon, sling;

function setup(){
    var canvas = createCanvas(1350, 590);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(675, 590, 1350, 20);
    stand1 = new Ground(725, 425, 400, 20);
    stand2 = new Ground(1150, 225, 185, 20);

    polygon = new Polygon(110, 465, 50, PI/4);
    sling = new Slingshot(polygon.body, {x : 150, y : 460});

    //SECOND ROW
    block1 = new Block(565, 395, 40, 40);
    block2 = new Block(605, 395, 40, 40);
    block3 = new Block(645, 395, 40, 40);
    block4 = new Block(685, 395, 40, 40);
    block5 = new Block(725, 395, 40, 40);
    block6 = new Block(765, 395, 40, 40);
    block7 = new Block(805, 395, 40, 40);
    block8 = new Block(845, 395, 40, 40);
    block9 = new Block(885, 395, 40, 40);
    //THIRD ROW
    block10 = new Block(585, 353, 40, 40);
    block11 = new Block(625, 353, 40, 40);
    block12 = new Block(665, 353, 40, 40);
    block13 = new Block(705, 353, 40, 40);
    block14 = new Block(745, 353, 40, 40);
    block15 = new Block(785, 353, 40, 40);
    block16 = new Block(825, 353, 40, 40);
    block17 = new Block(865, 353, 40, 40);
    //FOURTH ROW
    block18 = new Block(605, 310, 40, 40);
    block19 = new Block(645, 310, 40, 40);
    block20 = new Block(685, 310, 40, 40);
    block21 = new Block(725, 310, 40, 40);
    block22 = new Block(765, 310, 40, 40);
    block23 = new Block(805, 310, 40, 40);
    block24 = new Block(845, 310, 40, 40);
    //FIFTH ROW
    block25 = new Block(625, 267, 40, 40);
    block26 = new Block(665, 267, 40, 40);
    block27 = new Block(705, 267, 40, 40);
    block28 = new Block(745, 267, 40, 40);
    block29 = new Block(785, 267, 40, 40);
    block30 = new Block(825, 267, 40, 40);
    //SIXTH ROW
    block31 = new Block(645, 225, 40, 40);
    block32 = new Block(685, 225, 40, 40);
    block33 = new Block(725, 225, 40, 40);
    block34 = new Block(765, 225, 40, 40);
    block35 = new Block(805, 225, 40, 40);
    //SEVENTH ROW
    block36 = new Block(665, 184, 40, 40);
    block37 = new Block(705, 184, 40, 40);
    block38 = new Block(745, 184, 40, 40);
    block39 = new Block(785, 184, 40, 40);
    //EIGHTH ROW
    block40 = new Block(685, 146, 40, 40);
    block41 = new Block(725, 146, 40, 40);
    block42 = new Block(765, 146, 40, 40);
    //NINTH ROW
    block43 = new Block(705, 106, 40, 40);
    block44 = new Block(745, 106, 40, 40);
    //TENTH ROW
    block45 = new Block(725, 63, 40, 40);

    //FIRST ROW
    block46 = new Block(1150, 200, 40, 40);
    block47 = new Block(1110, 200, 40, 40);
    block48 = new Block(1190, 200, 40, 40);

    //SECOND ROW
    block49 = new Block(1130, 158, 40, 40);
    block50 = new Block(1170, 158, 40, 40);

    //THIRD ROW 
    block51 = new Block(1150, 115, 40, 40);
}

function draw(){
    background(0);
    Engine.update(engine);

    polygon.display();
    sling.display();

    ground.display();
    stand1.display();
    stand2.display();

    block1.display();
    block1.pp();
    block2.display();
    block2.p();
    block3.display();
    block3.c();
    block4.display();
    block4.o();
    block5.display();
    block5.bl();
    block6.display();
    block6.y();
    block7.display();
    block7.b();
    block8.display();
    block8.pp();
    block9.display();
    block9.p();
    block10.display();
    block10.g();
    block11.display();
    block11.lp();
    block12.display();
    block12.b();
    block13.display();
    block13.y();
    block14.display();
    block14.w();
    block15.display();
    block15.bl();
    block16.display();
    block16.c();
    block17.display();
    block17.pp();
    block18.display();
    block18.p();
    block19.display();
    block19.o();
    block20.display();
    block20.lp();
    block21.display();
    block21.w();
    block22.display();
    block22.g();
    block23.display();
    block23.bl();
    block24.display();
    block24.g();
    block25.display();
    block25.lp();
    block26.display();
    block26.w();
    block27.display();
    block27.o();
    block28.display();
    block28.c();
    block29.display();
    block29.y();
    block30.display();
    block30.g();
    block31.display();
    block31.c();
    block32.display();
    block32.o();
    block33.display();
    block33.bl();
    block34.display();
    block34.p();
    block35.display();
    block35.b();
    block36.display();
    block36.p();
    block37.display();
    block37.w();
    block38.display();
    block38.y();
    block39.display();
    block39.p();
    block40.display();
    block40.y();
    block41.display();
    block41.pp();
    block42.display();
    block42.bl();
    block43.display();
    block43.g();
    block44.display();
    block44.lp();
    block45.display();
    block45.c();
    block46.display();
    block46.y();
    block47.display();
    block47.g();
    block48.display();
    block48.b();
    block49.display();
    block49.pp();
    block50.display();
    block50.o();
    block51.display();
    block51.w();

    txt();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    sling.fly();
}

function txt(){
    textSize(25);
    text("Drag the mouse over the Launcher and aim for the blocks!", 30, 40);
    text("Press the SPACE key to get a second chance!", 30, 70);
}

function keyPressed(){
    if (keyCode === 32){
        sling.attach(polygon.body);
    }
}