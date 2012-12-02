function GUI(){
	GUIObject.call(this);
	
	this.add(new Hexagon(new Vector2(200,200),50,{color:"#000000"}));
	
	this.render = function(ctx){
		this.renderChildren(ctx);
	};
	
};
GUI.prototype = new GUIObject();