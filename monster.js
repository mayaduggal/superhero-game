class Monster {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.04,
      }
      this.body = Bodies.rectangle(x, y, 170, 170, options);
      this.width = 170;
      this.height = 170;
      this.image=loadImage("sprites/images/Monster-01.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }