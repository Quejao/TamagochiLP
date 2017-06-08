function init(){
 document.addEventListener("deviceready", onLoad, false);
}

function localSave(){
	localStorage.setItem("happy",happy);
	localStorage.setItem("hunger",hunger);
	localStorage.setItem("health",health);
	localStorage.setItem("state",state);	
	localStorage.setItem("age",age);	
	localStorage.setItem("date",new Date.getTime());
}

function onLoad(){
	happy = localStorage.getItem("happy");
	hunger = localStorage.getItem("hunger");
	health = localStorage.getItem("health");
	state = localStorage.getItem("state");
	age = localStorage.getItem("age");
	deltaTime = new Date.getTime() - localStorage.getItem("date");
	updateScreen();
}

function Reset(){
	age = 0;
	happy = 101;
	hunger = 101;
	health = 101;
	ageString = 'baby'
	state = 'normal';
	localSave();
}

function updateStatus(){
	if(state != 'dead'){
		if((happy >= 40 || health >= 40 || hunger >= 40)&&(state != 'normal')){
			state = 'normal';
			document.getElementById('img').src = "img/tamagochi.gif";
		}
		if((happy < 40)&&(state != 'sad')){ 
			state = 'sad';
		}
		if((health < 40)&&(state != 'sick')){ 
			state = 'sick';
			document.getElementById('img').src = "img/sujo.gif";
		}
		if((hunger < 40)&&(state != 'hungry')){
			state = 'hungry';
		}
		if (happy <= 0 || health <= 0 || hunger <= 0){
			state = 'dead';
		}
	}
}

function Feed(){
	if(state != 'dead'){
		hunger += 15;
		updateStatus();
	}
}

function Clean(){
	if(state != 'dead'){
		health += 20;
		updateStatus();
	}
}
	
function Play(){
	if(state != 'dead'){
		happy += 10;
		hunger -= 20;
		health -=20
		updateStatus();
	}
}

function Cure(){
	if(state != 'dead'){
		health += 10;
		updateStatus();
	}
}

function Lights(){
	lights = false;
}
	
function Notification(){
	
}

function update(deltaTime) {
	age += ageRate;
// máquina de estados do vpet
	if (state == 'normal') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime;
		hunger -= hungerRate * deltaTime;
		health -= healthRate * deltaTime;
		// atualiza estados
		updateStatus();
	}
	if (state == 'sad') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime * 1.5;
		hunger -= hungerRate * deltaTime;
		health -= healthRate * deltaTime * 1.5;
		// atualiza estados
		updateStatus();
	}
	if (state == 'sick') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime;
		hunger -= hungerRate * deltaTime * .5;
		health -= healthRate * deltaTime * 1.5;
		// atualiza estados
		updateStatus();
	}
	if (state == 'hungry') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime * 1.5;
		hunger -= hungerRate * deltaTime * 1.5;
		health -= healthRate * deltaTime * 1.5;
		// atualiza estados
		updateStatus();
	}
	updateScreen();
	localSave();
	
}

function updateScreen(){
	if(happy>101){
		happy = 101;
	}
	if(hunger>101){
		hunger = 101;
	}
	if(health>101){
		health = 101;
	}
	document.getElementById('happy').innerHTML = Math.trunc(happy);
	document.getElementById('hunger').innerHTML = Math.trunc(hunger);
	document.getElementById('health').innerHTML = Math.trunc(health);
	document.getElementById('state').innerHTML = state;
	if(age < 3) ageString = 'baby';
	else if(age < 12) ageString = 'child';
	else if(age < 18) ageString = 'teen';
	else if(age < 50) ageString = 'adult';
	else ageString = 'old';
}

var age = 0;
var happy = 101;
var hunger = 101;
var health = 101;
var happyRate = .0001;
var hungerRate = .00015;
var healthRate = .00005;
var ageRate = 1;
var ageString = 'baby'
var state = 'normal';

init();

const dt = 200;
let updateInterval = setInterval( () => update(dt), dt);