function GUI(){
	GUIObject.call(this);
	
	/*this.add(new HexagonField(
		new Vector2(60,50),//Pozice prvního
		6, //V jedné řadě je n šestiúhelníků
		10, //Celkem je n řad
		50, //Délka strany šestiúhelníku je n
		[new EventAction({
			type : "onClick",
			which : 0,
			condition : function (ev,obj){
				if(this.which != ev.button) return false;console.log(Math.sqrt(ev.clientX*ev.clientX + ev.clientY*ev.clientY))
				if(ev.clientX*ev.clientX + ev.clientY*ev.clientY <= obj.boundingRadius*obj.boundingRadius){
					return true;
				}
				else return false;
			},
			action : function (ev,obj){
				console.log("kliknuto na");
				console.log(obj);
			}
		})], //onClick šestiúhelníku
		false // Ve předu jsou liché řady
	));*/
	
	/*this.add(new Hexagon(
		new Vector2(100,100),
		50,
		{
			type:"plains",
			boundingRenderable : true,
			onClick:[
				new EventAction({
					type: "onClick",
					which : 0,
					condition : function (ev,obj){
						if(ev.button != this.which) return false;
						if(ev.clientX*ev.clientX+ev.clientY*ev.clientY <= obj.boundingRadius*obj.boundingRadius){
							return true;
						}
						else return false;
					},
					reaction : function (ev, obj){
						console.log("Hexagon byl zmáčknut");
					}
				})
			]
		}
	));*/
	
	var hexField = new HexagonField(
		new Vector2(60,50),
		6,
		10,
		50,
		[
			new EventAction({
				type: "onClick",
				which : 0,
				condition : function (ev,obj){
					if(ev.button != this.which) return false;
					if(ev.clientX*ev.clientX+ev.clientY*ev.clientY <= obj.boundingRadius*obj.boundingRadius){
						return true;
					}
					else return false;
				},
				reaction : function (ev, obj){
					obj.switchType("dark");
				}
			})
		],
		false
	);
	this.add(hexField);
	
	this.makeRivers = function (hexfield){
		var start = [Math.ceil(Math.random()*10),Math.ceil(Math.random()*6)]; //[rada;poradi]
	};
	
	this.makeRivers(this.children[0]);
	
	this.render = function(ctx){
		this.renderChildren(ctx);
	};
	
};
GUI.prototype = new GUIObject();