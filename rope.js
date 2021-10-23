class rope{
	constructor(body1,body2, Lel)
	{
    
	this.Lel = Lel
	

    var options={
		bodyA:body1,
		bodyB:body2	
	}
	 //create rope constraint here
	this.con = Constraint.create(options);
     World.add(world,this.con);
	}


    //create display() here 
	display(){
		var posA = this.con.bodyA.position
		var posB = this.con.bodyB.position
		push();
		strokeWeight(3);
		stroke("pink");
		line(posA.x,posA.y,posB.x-this.Lel,posB.y);
		pop();
	  
	}
}

