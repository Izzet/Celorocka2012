function GUIObject(){
	GameObject.call(this);
	
	this.position = new Vector2(0,0);
	
	this.dimension = new Vector2(0,0);
	
	this.rotation = 0;
	
	this.render = function (ctx){
	};
	
	this.renderChildren = function (ctx){
		ctx.save();
		ctx.translate(this.position.x,this.position.y);
		ctx.rotate(this.rotation);
		for(var i =0;i<this.children.length;i++){
			this.children[i].render(ctx);
			this.children[i].renderChildren(ctx);
		};
		ctx.restore();
	};
};
GUIObject.prototype = new GameObject();