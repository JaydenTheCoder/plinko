class plinko{
    constructor(x,y){
        var options={
        restitution:1,
        friction:0,
        isStatic:true
        }
        this.r=10
        this.body=bodies.circle(x,y,this.r,options);
        World.add(world,this.body);

    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    
    }
}