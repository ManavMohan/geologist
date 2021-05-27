class Stone {
    constructor(x,y,w,h)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width=w
		this.height=h
		var options={
			restitution:0.8,
			friction:0.9,
			density:12

		}
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height ) 
		World.add(world, this.body);
		

	}
	display()
	{
			var pos =this.body.position;		
			push()
			 
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			 
			   rect(pos.x, pos.y, this.width, this.height);
			pop()
	}

}