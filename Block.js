class Block {
    constructor(x, y, width, height){
        var options = {
            density : 1.2,
            isStatic : false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
    }
    b(){
        fill(89, 0, 179); 
    }
    y(){
        fill(255, 255, 0);
    }
    g(){
        fill(64, 255, 0);
    }
    pp(){
        fill(255, 51, 153);
    }
    c(){
        fill(0, 255, 255);
    }
    lp(){
        fill(255, 51, 119);
    }
    o(){
        fill(255, 102, 0);
    }
    bl(){
        fill(255, 193, 128);
    }
    p(){
        fill(255, 102, 255);
    }
    w(){
        fill(255);
    }
    display(){
        if (this.body.speed < 3){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            World.remove(world, this.body);
            push();
            tint(255, this.visbility);
            this.visibility = this.visibility - 5;
            pop();
        }
    }
}