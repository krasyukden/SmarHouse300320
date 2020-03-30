"use strict";

class AirConditioning {
	constructor(name){
		this._name = name;
		this._status = false;
		this._temperature = 28;
	}
	get name(){ 
		return this._name;
	}
	
	getStatus(){ //status - ключевое слово//get Status()-airBedroom.Status is not a function
		if(this._status == true){
			return true;
		}
		else{
			return false;
		}
	}
	on(){ 
		this._status = true;
	} 
	off(){ 
		this._status = false;
	}
	increaseTemperature(){
		if(this._isCorrectTemperature(this._temperature)){
			this._temperature++;
		}
	}
	decreaseTemperature(){
		if(this._isCorrectTemperature(this._temperature)){
			this._temperature--;
		}
	}
	set temperature(value){ // * set temp...
		if(this._isCorrectTemperature(value)){
		this._temperature = value;
		}
	}
	_isCorrectTemperature(value){ //  protected
		if(typeof value == "number" && !isNaN(value)){
				if(value <= 35 && value >= 15 ){ //+ && this._temperatureMode == "tropics"
					return true;
				};
				
		}
		else{
			return false;
		}
	}	
	get temperature(){
		return this._temperature;
	}
}	
let airBedroom = new AirConditioning("airBedroom");
console.log(airBedroom.name);
console.log(airBedroom.getStatus());
airBedroom.on();
console.log(airBedroom.getStatus());
airBedroom.increaseTemperature();
console.log(airBedroom.temperature);
airBedroom.decreaseTemperature();
console.log(airBedroom.temperature);
airBedroom.temperature = 32;//36 уже не ставит
console.log(airBedroom._temperature);