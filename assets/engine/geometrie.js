function Geometrie(options){
	GameObject.call(this);
	
	this.position = options.position === undefined ? new Vector2() : options.position;
	
	this.renderStyle = options.renderStyle === undefined ? "stroke" : options.renderStyle;
	this.color = options.color === undefined ? "#000000" : options.color;
	this.renderable = options.renderable === undefined ? true : options.renderable;
};
Geometrie.prototype = Object.create( GameObject.prototype );

Geometrie.prototype.drawPath = function ( ctx ){
	// Metoda, která musí být zadána každou geometrií zvlášť
};

Geometrie.prototype.render = function ( ctx ){
	if(!this.renderable)
		return;
	ctx.save();
	ctx.fillStyle = this.color;
	ctx.beginPath();
	this.drawPath(ctx);
	if(this.renderStyle == "stroke"){
		ctx.stroke();
	}
	else{
		ctx.fill();
	}
	ctx.closePath();
	ctx.restore();
};