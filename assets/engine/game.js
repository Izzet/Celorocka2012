function Game( canvas ){
	var game = this;
	
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");
	
	this.map = [];
	
	setInterval("game.tick();",1000/60);
	
};
Game.prototype.tick = function (){
	this.render();
	console.log("tick");
};

Game.prototype.render = function (){
	var length = this.map.length;
	for(var i =0;i < length;i++){
		this.map[i].render(this.ctx);
	};
};