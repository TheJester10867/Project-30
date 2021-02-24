class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 50,
            stiffness : 0.05,
            density : 1.1
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(){
        this.sling.bodyA = polygon.body;
    }
    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(255);
            strokeWeight(1);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
}