class Box
{
     constructor(x,y,width,height)

     {
         var options={
             restitution : 1.0,
            friction:0.3,
            density:0.2
         }
     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
     this.object=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.object)
        }
     display(){
         rectMode(CENTER)
         rect(this.object.position.x,this.object.position.y,this.width,this.height)
     }
}