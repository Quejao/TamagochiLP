function init(){
 document.addEventListener("deviceready", onLoad, false);
 document.addEventListener("backbutton", localSave, false);
}

function localSave(){
	localStorage.setItem("happy",happy);
	localStorage.setItem("hunger",hunger);
	localStorage.setItem("health",health);
	localStorage.setItem("state",state);	
	localStorage.setItem("age",age);
	localStorage.setItem("tired",tired);
	localStorage.setItem("gif",document.getElementById('img').src);
	localStorage.setItem("aux",aux);
	localStorage.setItem("date",new Date.getTime());
}

function onLoad(){
	happy = localStorage.getItem("happy");
	hunger = localStorage.getItem("hunger");
	health = localStorage.getItem("health");
	state = localStorage.getItem("state");
	age = localStorage.getItem("age");
	tired = localStorage.getItem("tired");
	document.getElementById('img').src = localStorage.getItem("gif");
	aux = localStorage.getItem("aux");
	deltaTime = new Date.getTime() - localStorage.getItem("date");
	update(deltaTime);
}

function Reset(){
	age = 0;
	happy = 100.9;
	hunger = 100.9;
	health = 100.9;
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
		else if(state == 'normal'){
			if((dirty >= 500) && (state != 'dirty')){
				state = 'dirty';
				document.getElementById('img').src = "img/dirty.gif";
			}
			else if((tired >= 1000) && (state != 'tired')){
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
		else if(state == 'dirty' && dirty < 500){
			if((happy >= 40 && health >= 40 && hunger >= 40)&&(state != 'normal')){
				state = 'normal';
				document.getElementById('img').src = "img/normal.gif";
			}
			else if((tired >= 1000) && (state != 'tired')){
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
		else if(state == 'tired' && tired < 1000){
			if((dirty >= 500) && (state != 'dirty')){
				state = 'dirty';
				document.getElementById('img').src = "img/dirty.gif";
			}
			else if((happy >= 40 && health >= 40 && hunger >= 40)&&(state != 'normal')){
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
		else if(state == 'sad'){
			if((dirty >= 500) && (state != 'dirty')){
				state = 'dirty';
				document.getElementById('img').src = "img/dirty.gif";
			}
			else if((happy >= 40 && health >= 40 && hunger >= 40)&&(state != 'normal')){
				state = 'normal';
				document.getElementById('img').src = "img/normal.gif";
			}
			else if((tired >=1000) && (state != 'tired')){
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
		else if(state == 'sick'){
			if((dirty >= 500) && (state != 'dirty')){
				state = 'dirty';
				document.getElementById('img').src = "img/dirty.gif";
			}
			else if((happy >= 40 && health >= 40 && hunger >= 40)&&(state != 'normal')){
				state = 'normal';
				document.getElementById('img').src = "img/normal.gif";
			}
			else if((happy < 40)&&(state != 'sad')){ 
				state = 'sad';
				document.getElementById('img').src = "img/sad.gif";
			}
			else if((tired >=1000) && (state != 'tired')){
				state = 'tired';
				document.getElementById('img').src = "img/tired.gif";
			}
			else if((hunger < 40)&&(state != 'hungry')){
				state = 'hungry';
				document.getElementById('img').src = "img/hungry.gif";
			}
		}
		else if(state == 'hungry'){
			if((dirty >= 500) && (state != 'dirty')){
				state = 'dirty';
				document.getElementById('img').src = "img/dirty.gif";
			}
			else if((happy >= 40 && health >= 40 && hunger >= 40)&&(state != 'normal')){
				state = 'normal';
				document.getElementById('img').src = "img/normal.gif";
			}
			else if((happy < 40)&&(state != 'sad')){ 
				state = 'sad';
				document.getElementById('img').src = "img/sad.gif";
			}
			else if((tired >=1000) && (state != 'tired')){
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
		hunger += 20;
		happy +=5;
		updateStatus();
	}
}

function Clean(){
	if(state != 'dead' && state != 'sleeping'){
		health += 20;
		happy -= 10;
		dirty = 0;
		updateStatus();
	}
}
	
function Play(){
	if(state != 'dead' && state != 'sleeping'){
		happy += 10;
		hunger -= 20;
		tired += 10;
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
		dirty++;
		// atualiza estados
		updateStatus();
	}
	if (state == 'sad') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime * 1.5;
		hunger -= hungerRate * deltaTime;
		health -= healthRate * deltaTime * 1.5;
		tired++;
		dirty++;
		// atualiza estados
		updateStatus();
	}
	if (state == 'sick') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime;
		hunger -= hungerRate * deltaTime * 1.2;
		health -= healthRate * deltaTime * 1.5;
		tired++;
		dirty++;
		// atualiza estados
		updateStatus();
	}
	if (state == 'hungry') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime * 1.5;
		hunger -= hungerRate * deltaTime * 1.5;
		health -= healthRate * deltaTime * 1.5;
		tired++;
		dirty++;
		// atualiza estados
		updateStatus();
	}
	if (state == 'tired') {
		//atualiza itens de status (versão "muito simples")
		happy -= happyRate * deltaTime * 1.8;
		hunger -= hungerRate * deltaTime * 1.5;
		health -= healthRate * deltaTime * 2;
		tired++;
		dirty++;
		// atualiza estados
		updateStatus();
	}
	if(state == 'sleeping'){
		happy -= happyRate * deltaTime;
		hunger -= hungerRate * deltaTime;
		health -= healthRate * deltaTime;
		tired--;
		dirty++;
	}
	
	updateScreen();
	localSave();
	
}

function updateScreen(){
	if(happy>101){
		happy = 100.9;
	}
	if(hunger>101){
		hunger = 100.9;
	}
	if(health>101){
		health = 100.9;
	}
	document.getElementById('happy').innerHTML = Math.trunc(happy);
	document.getElementById('hunger').innerHTML = Math.trunc(hunger);
	document.getElementById('health').innerHTML = Math.trunc(health);
	document.getElementById('state').innerHTML = state;
	if(age < 30){ 
		ageString = 'baby';
	}else if(age < 120){ 
		ageString = 'child';
		happyRate = .000025;
		hungerRate = .0000275;
		healthRate = .000025;
	}else if(age < 180){ 
		ageString = 'teen';
		happyRate = .00005;
		hungerRate = .00002;
		healthRate = .000015;
	}else if(age < 500){ 
		ageString = 'adult';
		happyRate = .00005;
		hungerRate = .00003;
		healthRate = .00002;
	}else if(age>499){ 
		ageString = 'old';
		happyRate = .00002;
		hungerRate = .000015;
		healthRate = .000045;
	}
	
	document.getElementById('age').innerHTML = ageString;
}

var age = 0;
var happy = 100.9;
var hunger = 100.9;
var health = 100.9;
var rate = 4;
var happyRate = .00005*rate;
var hungerRate = .000045*rate;
var healthRate = .00002*rate;
var ageRate = .5;
var ageString = 'baby'
var state = 'normal';
var tired = 0;
var dirty = 0;
var aux;//armazena state antes de colocar para dormir

init();

const dt = 200;
let updateInterval = setInterval( () => update(dt), dt);