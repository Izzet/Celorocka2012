function GUI(){
	GUIObject.call(this);
	
	function Hexagon(position,a,options){
		GUIObject.call(this);
		
		this.color = options.color;
		this.position = position;
		this.a = a;
		this.v = Math.sqrt(3)*a/2;
		
		this.render = function (ctx){
			var x = this.position.x;
			var y = this.position.y;
			var odt = Math.sqrt(3);
			
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
	
	this.add(new Hexagon(new Vector2(200,200),50,{color:"#000000"}));
	
	this.render = function(ctx){
		this.renderChildren(ctx);
	};
	
};
GUI.prototype = new GUIObject();