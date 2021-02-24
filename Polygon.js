class Polygon {
    constructor(x, y, radius, angle){
        var options = {
            isStatic : false,
            density : 3
        }
        this.body = Bodies.circle(x, y, (radius-5)/2, options);
        this.radius = radius;
        this.image = loadImage("polygon.png");
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}