function Eventhandler( game ){
	var _this = this;
	
	this.game = game;
	
	window.addEventListener("keydown",function (ev){_this.resolveKeyboard(ev);});
	
	window.addEventListener("mousedown",function (ev){ev.preventDefault();_this.resolveMouse(ev);});
	window.addEventListener("contextmenu",function (ev){ev.preventDefault();});
	
};
Eventhandler.prototype.resolveMouse = function (ev){
	if(this.game.mouseControls[ev.button] !== undefined)
		this.game.mouseControls[ev.button](ev.clientX,ev.clientY);
	console.log(ev);
	console.log(ev.button);
};
Eventhandler.prototype.resolveKeyboard = function (ev){
	if(this.game.keyboardControls[ev] !== undefined)
		this.game.keyboardControls[ev]();
	console.log("You pressed: "+String.fromCharCode(ev.keyCode));
};