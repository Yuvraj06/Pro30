class Box {

    constructor(x, y, w, h) {

        var option = {

            'restitution':0.8,
            'friction':1.0,
            'density':0.2

        }

        this.body = Bodies.rectangle(x, y, w, h, option);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
        this.image = loadImage("box.png")
        this.Visibility = 255;

    }

    display() {

        if(this.body.speed<5){

            var pos = this.body.position;
            rectMode(CENTER);
            strokeWeight(10);
            stroke("yellow");
            fill("lightblue");
            rect(pos.x, pos.y, this.width, this.height);

            // var angle = this.body.angle;
            //  push();
            //  translate(this.body.position.x, this.body.position.y);
            //  rotate(angle);
            //  imageMode(CENTER);
            //   image(this.image, 0, 0, this.width+10, this.height+10);
            //  pop();


        }else{
            var pos = this.body.position;
      
            World.remove(world,this.body);
            push();
            this.Visibility=this.Visibility-5;
            tint(255,this.Visibility);
            // image(this.image,this.body.position.x,this.body.position.y,60,60)
            pop();
            
          }

    }

}