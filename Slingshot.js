class Slingshot{
    constructor(body1, point2){
        
var option={
    bodyA:body1,
    pointB:point2,
    length:2,
    stiffness:0.4,
 }
 
 this.sling = Constraint.create(option);
    World.add(world, this.sling);
    this.point2 = point2
}
 display(){
    if(this.sling.bodyA != null){
     var posA = this.sling.bodyA.position;
     
     var posB = this.point2;
     push();
     var anchor1X = posA.x;
     var anchor1Y = posA.y;
     
     
     line(anchor1X, anchor1Y);
     pop();
    }
 }  
   
   fly(){
    this.sling.bodyA = null

}
attach(body){
   this.sling.bodyA = body
}
}

   
