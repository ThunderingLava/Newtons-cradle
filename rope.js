
class Rope {

constructor(bodyA, bodyB, xOffset){
 var options = {
     bodyA:bodyA,
     bodyB:bodyB

 }

 this.rope = Matter.Constraint.create(options)
 World.add(world, this.rope)
 this.xOffset = xOffset
}

display(){

    stroke("white");
 var point1 = this.rope.bodyA.position 
 var point2 = this.rope.bodyB.position 

    line(point1.x + this.xOffset, point1.y, point2.x, point2.y);
}

}