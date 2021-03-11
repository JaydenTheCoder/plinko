class Divisions{
    constructor(X,Y,width,height){
 var options={
     isStatic:true
 }
this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    }
    display(){
 var Position=this.body.position;
 rectMode(CENTER);
 rect(Position.x,Position.y,this.width,this.height)
    }
}