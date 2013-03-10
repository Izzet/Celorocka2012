function EventAction(options){
	this.type = options.type;
	this.which = options.which;
	this.condition = options.condition === undefined ? function (){return false;} : options.condition;
	this.reaction = options.reaction === undefined ? function (){} : options.reaction;
};