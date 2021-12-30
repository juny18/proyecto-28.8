class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
         
    
        this.launcher=Constraint.create(options)        
        this.pointB=pointB
        //World.add(world,chain)
        World.add(world, this.launcher);
    }

    attach(body){
        this.launcher.bodyA = body;
    }


    fly(){
      this.launcher.bodyA=null
    }
     
    display(){
    
    if(this.sling.bodyA){
    
    var pointA=this.launcher.bodyA.position;
    var pointB=this.pointB;
    push()
    strokeWeight(4);
    stroke("blackbrown");
    if(pointA.x<220){
    strokeWeight(7)
    line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
    }
   
     pop()
    }
    }
    }



    
