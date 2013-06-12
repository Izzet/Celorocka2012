function Game( canvas ){
	
	GameObject.call(this);
	
	var game = this;
	
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");
	
	this.gui = new GUI();
	this.eventhandler = new Eventhandler( this );
	
	this.mouseControls = {};
	this.keyboardControls = {};
		
	this.mouseControls[0] = function (cX,cY){
		game.gui.mouseHandle(
			0,
			cX-parseFloat(game.canvas.style.left),
			cY-parseFloat(game.canvas.style.top)
		);
		game.mouseHandle(
			0,
			cX-parseFloat(game.canvas.style.left),
			cY-parseFloat(game.canvas.style.top)
		);
	};
	
	this.map = [];
	this.message = "message from the game";
	setInterval("game.tick();",1000/60);
	
};
Game.prototype = new GameObject();
Game.prototype.tick = function (){
	this.gui.tick();
	this.render( this.ctx );
	this.checkTimedEvents(new Date().getTime());
	this.tickChildren( this.ctx );
};

Game.prototype.render = function ( ctx ){
	ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
	ctx.fillStyle = "#CCDCE6";
	ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
	this.gui.render(ctx);
};
Game.prototype.mouseHandle = function (button, cX, cY){
	for(var i in this.children){
		if(this.children[i].mouseHandle !== undefined){
			this.children[i].mouseHandle(button, cX, cY);
		}
	}
};