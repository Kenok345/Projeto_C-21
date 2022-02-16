class ground {
    constructor(x, y, w, h){
        var options ={
            isStatic: true
        };
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;

        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display(){
    var groundPos = this.body.position;
    push();
    translate(groundPos.x, groundPos.y);
    rectMode(CENTER);
    fill("brown");
    //cuz it's shite D:<
    strokeWeight(4);
    rect(0, 0, this.w, this.h);
    pop();
    }
}