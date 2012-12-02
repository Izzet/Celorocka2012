function Hexagon(position,a,options){
	GUIObject.call(this);
	
	this.color = options.color;
	this.position = position;
	this.a = a;
	this.v = Math.sqrt(3)*a/2;
	
	this.boundingRadius = Math.sqrt(3*Math.sqrt(3)/(2*Math.PI))*a;
	this.boundingColor = options.boundingColor === undefined ? "#ff0000" : options.boundingColor;
	this.boundingRenderable = options.boundingRenderable === undefined ? false : options.boundingRenderable;
	this.add(new Circle(new Vector2(0,0),this.boundingRadius,{color:this.boundingColor}));
	this.boundingCircle = this.children[0];
	this.boundingCircle.renderable = this.boundingRenderable;
	
	this.render = function (ctx){
		var x = this.position.x;
		var y = this.position.y;
		
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.moveTo(x-this.a,y);
		ctx.lineTo((x-this.a/2),y-this.v);
		ctx.lineTo((x+this.a/2),y-this.v);
		ctx.lineTo((x+this.a),y);
		ctx.lineTo((x+this.a/2),y+this.v);
		ctx.lineTo((x-this.a/2),y+this.v);
		ctx.lineTo((x-this.a),y);
		ctx.fillStyle = this.color;
		ctx.stroke();
		ctx.closePath();
	};
};
Hexagon.prototype = new GUIObject();

function Circle(position,r,options){
	GUIObject.call(this);
	
	this.color = options.color;
	this.position = position;
	this.r = r;
	
	this.render = function (ctx){
		var x = this.position.x;
		var y = this.position.y;
		
		ctx.beginPath();
		ctx.arc(x,y,this.r,0,Math.PI*2);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	};
};
Circle.prototype = new GUIObject();