function init(){
 document.addEventListener("deviceready", onLoad, false);
}

function localSave(){
	localStorage.setItem("happy",happy);
	localStorage.setItem("hunger",hunger);
	localStorage.setItem("health",health);
	localStorage.setItem("state",state);	
	localStorage.setItem("age",age);
	localStorage.setItem("tired",tired);
	localStorage.setItem("date",new Date.getTime());
}

function onLoad(){
	happy = localStorage.getItem("happy");
	hunger = localStorage.getItem("hunger");
	health = localStorage.getItem("health");
	state = localStorage.getItem("state");
	age = localStorage.getItem("age");
	tired = localStorage.getItem("tired");
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
	document.getElementById('img').src = "img/normal.gif";
	localSave();
}

function updateStatus(){
	if(state != 'dead' && state != 'sleeping'){
		if (happy <= 0 || health <= 0 || hunger <= 0){
			state = 'dead';
			document.getElementById('img').src = "img/dead.png";
		}
		else if(state === 'normal'){
			if((tired >=1000) && (state != 'tired')){
				state = 'tired';
				document.getElementById('img').src = "img/tired.gif";
			}
			else if((happy < 40)&&(state != 'sad')){ 
				state = 'sad';
				document.getElementById('img').src = "img/sad.gif";
			}
			else if((health < 40)&&(state != 'sick')){ 
				state = 'sick';
				document.getElementById('img').src = "img/sick.gif";
			}
			else if((hunger < 40)&&(state != 'hungry')){
				state = 'hungry';
				document.getElementById('img').src = "img/hungry.gif";
			}
		}
		else if(state === 'tired'){
			if((happy >= 40 && health >= 40 && hunger >= 40)&&(state != 'normal')){
				state = 'normal';
				document.getElementById('img').src = "img/normal.gif";
			}
			else if((happy < 40)&&(state != 'sad')){ 
				state = 'sad';
				document.getElementById('img').src = "img/sad.gif";
			}
			else if((health < 40)&&(state != 'sick')){ 
				state = 'sick';
				document.getElementById('img').src = "img/sick.gif";
			}
			else if((hunger < 40)&&(state != 'hungry')){
				state = 'hungry';
				document.getElementById('img').src = "img/hungry.gif";
			}
		}
		else if(state === 'sad'){
			if((happy >= 40 && health >= 40 && hunger >= 40)&&(state != 'normal')){
				state = 'normal';
				document.getElementById('img').src = "img/normal.gif";
			}
			else if((tired >=100) && (state != 'tired')){
				state = 'tired';
				document.getElementById('img').src = "img/tired.gif";
			}
			else if((health < 40)&&(state != 'sick')){ 
				state = 'sick';
				document.getElementById('img').src = "img/sick.gif";
			}
			else if((hunger < 40)&&(state != 'hungry')){
				state = 'hungry';
				document.getElementById('img').src = "img/hungry.gif";
			}
		}
		else if(state === 'sick'){
			if((happy >= 40 && health >= 40 && hunger >= 40)&&(state != 'normal')){
				state = 'normal';
				document.getElementById('img').src = "img/normal.gif";
			}
			else if((happy < 40)&&(state != 'sad')){ 
				state = 'sad';
				document.getElementById('img').src = "img/sad.gif";
			}
			else if((tired >=100) && (state != 'tired')){
				state = 'tired';
				document.getElementById('img').src = "img/tired.gif";
			}
			else if((hunger < 40)&&(state != 'hungry')){
				state = 'hungry';
				document.getElementById('img').src = "img/hungry.gif";
			}
		}
		else if(state === 'hungry'){
			if((happy >= 40 && health >= 40 && hunger >= 40)&&(state != 'normal')){
				state = 'normal';
				document.getElementById('img').src = "img/normal.gif";
			}
			else if((happy < 40)&&(state != 'sad')){ 
				state = 'sad';
				document.getElementById('img').src = "img/sad.gif";
			}
			else if((tired >=100) && (state != 'tired')){
				state = 'tired';
				document.getElementById('img').src = "img/tired.gif";
			}
			else if((health < 40)&&(state != 'sick')){ 
				state = 'sick';
				document.getElementById('img').src = "img/sick.gif";
			}
		}
	}
}

function Feed(){
	if(state != 'dead' && state != 'sleeping'){
		hunger += 15;
		updateStatus();
	}
}

function Clean(){
	if(state != 'dead' && state != 'sleeping'){
		health += 20;
		updateStatus();
	}
}
	
function Play(){
	if(state != 'dead' && state != 'sleeping'){
		happy += 10;
		hunger -= 20;
		health -=20
		updateStatus();
	}
}

function Cure(){
	if(state != 'dead' && state != 'sleeping'){
		health += 10;
		updateStatus();
	}
}

function Lights(){
	if(state != 'sleeping'){
		aux = state;
		state = 'sleeping';
		document.getElementById('img').src = "img/sleeping.gif";
	}else{
		state = aux;
		document.getElementById('img').src = "img/"+ aux +".gif";
	}
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
		tired++;
		// atualiza estados
		updateStatus();
	}
	if (state == 'sad') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime * 1.5;
		hunger -= hungerRate * deltaTime;
		health -= healthRate * deltaTime * 1.5;
		tired++;
		// atualiza estados
		updateStatus();
	}
	if (state == 'sick') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime;
		hunger -= hungerRate * deltaTime * 1.2;
		health -= healthRate * deltaTime * 1.5;
		tired++;
		// atualiza estados
		updateStatus();
	}
	if (state == 'hungry') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime * 1.5;
		hunger -= hungerRate * deltaTime * 1.5;
		health -= healthRate * deltaTime * 1.5;
		tired++;
		// atualiza estados
		updateStatus();
	}
	if (state == 'tired') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime * 1.8;
		hunger -= hungerRate * deltaTime * 1.5;
		health -= healthRate * deltaTime * 2;
		tired++;
		// atualiza estados
		updateStatus();
	}
	if(state == 'sleeping'){
		happy -= happyRate * deltaTime;
		hunger -= hungerRate * deltaTime;
		health -= healthRate * deltaTime;
		tired--;
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
var ageRate = .5;
var ageString = 'baby'
var state = 'normal';
var tired = 0;
var aux;

init();

const dt = 200;
let updateInterval = setInterval( () => update(dt), dt);