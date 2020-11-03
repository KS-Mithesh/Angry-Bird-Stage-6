class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
             if (pointA.x>=220) {
          
                stroke("#301608");strokeWeight(4);
                line(pointA.x+20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+50, pointB.y);
    
                image(this.sling3,pointA.x+20,pointA.y-5);
        }
    
        else{
            
            stroke("#301608");strokeWeight(4);
            line(pointA.x-20, pointA.y, pointB.x, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+50, pointB.y);

            image(this.sling3,pointA.x-20,pointA.y-5);
        }
    }
        image(this.sling1,200,20);
        image(this.sling2,173,15);
    }
    
}