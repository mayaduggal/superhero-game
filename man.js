class Man{
    constructor(x, y) {
        var options = {
           
            'friction':1.0,
            'density':0.04
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width=50;
      this.height=50;
      this.image=loadImage("sprites/images/Superhero-01.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
       
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}


