class Ground { 
    constructor(){ 
        var options={
            isStatic:true
        }
       this.body= Bodies.rectangle(600,390,1200,5,options);
       World.add (world,this.body);


    }
    display(){

        rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,1200,5);
    }
}
  