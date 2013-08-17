function Tile (options){
	var hexOptions = options.hexagon === undefined ? {} : options.hexagon;
	HexagonGame.call(this, hexOptions);
		
	this.coverHexagon = new HexagonGame(hexOptions);
	this.coverHexagon.color = "#ffffff";
	this.coverHexagon.alpha = 0;
	
	this.ticks = 0;
	this.blinkTime = options.blinkTime === undefined ? Math.PI*2 : Math.PI*2/options.blinkTime;
	this.blinking = false;
};
Tile.prototype = Object.create(HexagonGame.prototype);
Tile.prototype.render = function (ctx){
	HexagonGame.prototype.render.call(this, ctx);
	this.coverHexagon.render(ctx);
};
Tile.prototype.tick = function (){
	if(this.blinking){
		this.coverHexagon.alpha = 0.5*(Math.sin(this.ticks*this.blinkTime)+1);
		this.ticks++;
	}
	else {
		this.ticks = 0;
		this.coverHexagon.alpha = 0;
	}
};