function Tile (options){
	var hexOptions = options.hexagon === undefined ? {} : options.hexagon;
	this.hexagon = new Hexagon(hexOptions);
	GUIObject.call(this,options);
	this.add(this.hexagon);
};
Tile.prototype = Object.create(GUIObject.prototype);