function GUIObject(){
	GameObject.call(this);
	
	this.position = new Vector2(0,0);
	
	this.dimension = new Vector2(0,0);
	
	this.rotation = 0;

};
GUIObject.prototype = new GameObject();

GUIObject.prototype.render = function (ctx){
};

GUIObject.prototype.onclick = function (button, cX,cY){
	return false;
};

GUIObject.prototype.pointIn = function (point){
	return false;
};

GUIObject.prototype.tickChildren = function (ctx){
	ctx.save();
	ctx.translate(this.position.x,this.position.y);
	ctx.rotate(this.rotation);
	for(var i =0;i<this.children.length;i++){
		if(this.children[i].renderable !== false){
			this.children[i].render(ctx);
		}
		this.children[i].tick();
		this.children[i].tickChildren(ctx);
	};
	ctx.restore();
};

GUIObject.prototype.mouseHandle = function (button,cX,cY){
	var clientX = cX-this.position.x;
	var clientY = cY-this.position.y;
	var point = new Vector2(clientX,clientY);
	if(this.onclick !== undefined && this.pointIn(point)){
		this.onclick(button,clientX,clientY);
	}
	
	for(var i in this.children){
		this.children[i].mouseHandle(button,clientX,clientY);
	};
};