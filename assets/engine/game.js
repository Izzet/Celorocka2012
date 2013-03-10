function Game( canvas ){
	
	GameObject.call(this);
	
	var game = this;
	
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");
	
	this.gui = new GUI();
	this.eventhandler = new Eventhandler( this );
	
	this.mouseControls = {};
	this.keyboardControls = {};
		
	this.mouseControls[0] = function (cX,cY){game.gui.mouseHandle(0,cX-parseFloat(game.canvas.style.left),cY-parseFloat(game.canvas.style.top));};
	
	this.map = [];
	this.message = "message from the game";
	setInterval("game.tick();",1000/60);
	
};
Game.prototype = new GameObject();
Game.prototype.tick = function (){
	this.render();
	this.checkTimedEvents(new Date().getTime());
};

Game.prototype.render = function (){
	this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
	this.ctx.fillStyle = "#CCDCE6";
	this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
	this.gui.render(this.ctx);
};