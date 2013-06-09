function GUI(){
	GUIObject.call(this);
	
	//~ var hexField = new HexagonField(
		//~ new Vector2(60,50),
		//~ 5,
		//~ 9,
		//~ 50,
		//~ [
			//~ new EventAction({
				//~ type: "onClick",
				//~ which : 0,
				//~ condition : function (ev,obj){
					//~ if(ev.button != this.which) return false;
					//~ if(ev.clientX*ev.clientX+ev.clientY*ev.clientY <= obj.boundingRadius*obj.boundingRadius){
						//~ return true;
					//~ }
					//~ else return false;
				//~ },
				//~ reaction : function (ev, obj){
					//~ if(game.editType)
						//~ obj.switchType(game.editType);
				//~ }
			//~ })
		//~ ],
		//~ false
	//~ );
	//~ this.add(hexField);
			
	var tlac1 = new Button({
		position : new Vector2(50,250),
		dimension : new Vector2(50,20),
		text : new Text({
			value : "Plains",
		}),
		onClick : [new EventAction({
			type : "onClick",
			which : 0,
			condition : function (ev, obj){
				if(ev.clientX > 0 && ev.clientX < obj.width){
					if(ev.clientY > 0 && ev.clientY < obj.height){
						return true;
					}
					else return false;
				}
				else return false;
			},
			reaction : function (){alert("funguje");}
		})]
	});
	this.add(tlac1);
	
	this.makeRivers = function (hexfield){
		var start = [Math.ceil(Math.random()*10),Math.ceil(Math.random()*6)]; //[rada;poradi]
	};
	
	this.makeRivers(this.children[0]);
	
	this.render = function(ctx){
		this.renderChildren(ctx);
	};
	
};
GUI.prototype = new GUIObject();