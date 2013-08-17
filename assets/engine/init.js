function init(id){
	if(id === undefined){
		canvas = document.createElement("canvas");
		document.body.appendChild(canvas);
	}
	else{
		canvas = document.getElementById(id);
	}
	
	canvas.width = 800;
	canvas.height = 600;
	
	canvas.style.position = "absolute";
	canvas.style.left = (window.innerWidth-canvas.width)/2;
	canvas.style.top = (window.innerHeight-canvas.height)/2;
	
	window.addEventListener("resize",function (){
		
		canvas.width *= window.innerWidth/(2*canvas.width);
		canvas.height *= window.innerHeight/(2*canvas.height);
	
		canvas.style.left = window.innerWidth/4;
		canvas.style.top = window.innerHeight/4;
	});
	
	game = new Game( canvas );
	
	// Toliko oficiální init
	
	game.add(new HexagonGame({
		position : new Vector2(50,50),
		a : 50,
		renderStyle : "fill",
		color : "#00ff00",
		onclick : function (){console.log("ole");}
	}));
	var tile = new Tile ({
		hexagon : {
			position : new Vector2(200,100),
			color : "#ff0000",
			a : 75,
			renderStyle : "fill",
		},
		blinkTime : 0.01,
	});
	tile.blinking = true;
	game.add( tile );
	return true;
};