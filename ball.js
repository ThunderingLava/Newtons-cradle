class Ball {

    constructor(x, y, radius) {
         
         var options = {
              isStatic: false,
              restituition: 1,
              density: 0.8,
              friction: 0
              
         }
         
         this.body = Bodies.circle(x, y, radius, options)
         World.add(world, this.body)

              this.width = radius*2
              this.height = radius*2
    }

    display() {
         fill("white")
         var pos = this.body.position
         ellipseMode(CENTER);
         ellipse( pos.x, pos.y, this.width, this.height)
         
    }
}