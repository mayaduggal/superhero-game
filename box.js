class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.1,
        'friction':1,
        'density':0.04,
    }
    this.body = Bodies.rectangle(x, y, 70, 70, options);
    this.width = 70;
    this.height = 70;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke(223, 181, 255);
    fill(242, 226, 255);
    rect(0, 0, this.width, this.height);
    pop();
  }
}