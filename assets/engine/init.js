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
	return true;
};