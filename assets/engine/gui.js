function GUI(){
	GUIObject.call(this);
	
	this.add(new HexagonField(
		new Vector2(60,50),//Pozice prvního
		6, //V jedné řadě je n šestiúhelníků
		10, //Celkem je n řad
		50, //Délka strany šestiúhelníku je n
		{type: "swamps"}, //options šestiúhelníku
		false // Ve předu jsou liché řady
	));
	
	this.makeRivers = function (hexfield){
		var start = [Math.ceil(Math.random()*10),Math.ceil(Math.random()*6)]; //[rada;poradi]
	};
	
	this.makeRivers(this.children[0]);
	
	this.render = function(ctx){
		this.renderChildren(ctx);
	};
	
};
GUI.prototype = new GUIObject();