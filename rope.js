class rope{
	constructor(body1,body2, pointA, pointB)
	{
    
	this.pointA = pointA
	this.pointB = pointB

    var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA, y:this.pointB}	
	}
	 //create rope constraint here
	con = Matter.Constraint.create(options);

	}


    //create display() here 
	display(){
		 
		push();
		strokeWeight(3);
		stroke("pink");
		line(this.pointA.x,this.pointA.y,body1.position.x,body1.position.y);
		pop();
	  
	}
}
