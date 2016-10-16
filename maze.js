/*
Dale Wilson 620014503
lab4
*/

window.onload =function eventhandling() {

	var start =document.getElementById('start');
	var win =document.getElementById('end');
	var wallsOfMaze =document.querySelectorAll('div.boundary');

	start.setAttribute('onclick','init()');
/*
changes colour of div
*/
	for (var i =0; i <=4; i++) {
		wallsOfMaze[i].setAttribute('onmouseover','test()');
	}

	win.setAttribute('onmouseover','winn()');
};

function test() {
	
	alert('You Lose!');
	var wallsOfMaze=document.querySelectorAll('div.boundary');
/*
changes colour of div
*/
	for (var i =0; i <=4; i++) {
		wallsOfMaze[i].setAttribute('style','background-color:#ff8888');
	}	
}

function winn() {

	if(document.getElementById('boundary1').getAttribute('style') == 'background-color:#ff8888') {
		alert('Avoid the walls');
	}	
	else {
		alert('You Win!');
	}
}

function init() {
	var wallsOfMaze =document.querySelectorAll('div.boundary');

	for (var i =0; i <=4; i++) {
		wallsOfMaze[i].setAttribute('style','background-color: #eeeeee');
	}
}
