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
			if(this.children[i].renderable === false) continue;
			this.children[i].render(ctx);
			this.children[i].renderChildren(ctx);
		};
		ctx.restore();
	};
	
	this.actions = {
		onClick : [],
		onKeyDown : []
	};
};
GUIObject.prototype = new GameObject();

GUIObject.prototype.mouseHandle = function (button,cX,cY){
	var clientX = cX-this.position.x;
	var clientY = cY-this.position.y;
	var saveEv = {button:button,clientX:clientX,clientY:clientY};
	if(this.actions.onClick.length > 0){
		for(var i in this.actions.onClick){
			if(this.actions.onClick[i].condition(saveEv,this)){ // Vrácení mateřského objektu a podmínka
				this.actions.onClick[i].reaction(saveEv,this);
			}
		};
	}
	
	for(var i in this.children){
		this.children[i].mouseHandle(button,clientX,clientY);
	};
};