class Bob {
    constructor(x, y, radius) {
      var options = { 
          isStatic: false,
          restitution:0.3,
          friction:1.0,
          density:1.0
      }
      this.body = Bodies.rectangle(x, y, radius, options);
      this.radius = radius;

      Matter.Bodies.circle(x, y, radius, [options], [maxSides]);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
/*    push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);*/
//    stroke("green");
      fill("pink");
      ellipseMode(CENTER);
      rect(0, 0, this.width, this.height);
      ellipse(0, 0, this.radius);
  //  pop();
    }
  };
  
  