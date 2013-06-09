function GameObject(){
	
	this.timeoutSet = false;
	
	this.timedEvents = [];
	
	this.parent = false;
	
	this.children = [];
	
};
GameObject.prototype.setTimeout = function (howLong, what){
	var countdownStart = new Date().getTime();
	this.timedEvents.push([howLong+countdownStart,what]);
};
	
GameObject.prototype.checkTimedEvents = function ( currentTime ){
	for(var i = 0;i < this.timedEvents.length;i++){
		if(currentTime > this.timedEvents[i][0]){
			this.timedEvents[i][1].call(this);
			this.timedEvents.splice(i,1);
		}
	};
};
GameObject.prototype.tick = function (){
	
};
GameObject.prototype.tickChildren = function ( ctx ){
	for(var i =0;i<this.children.length;i++){
		this.children[i].render(ctx);
		this.children[i].tick();
		this.children[i].tickChildren();
	};
};
GameObject.prototype.add = function (){
	var sumOfArgs = arguments.length;
	for(var i = 0;i < sumOfArgs;i++){
		if(!(arguments[i] instanceof GameObject)){
			console.error("Trying to add non-game object "+arguments[i]+" to game object"+this);
			continue;
		}
		var obj = arguments[i];
		obj.parent = this;
		this.children.push(obj);
	};
};
GameObject.prototype.mouseHandle = function (button,cX,cY){
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