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
	endState();
};

function test() {

	var wallsOfMaze =document.querySelectorAll('div.boundary');
	document.getElementById('status').innerHTML ='You Lose!';
/*
changes colour of div
*/	
	for (var i =0; i <=4; i++) {
		wallsOfMaze[i].setAttribute('style','background-color:#ff8888');
	}	
}

function winn() {

	if(document.getElementById('boundary1').getAttribute('style') == 'background-color:#ff8888') {
		document.getElementById('status').innerHTML ='Avoid the walls';
	}	
	else {
		document.getElementById('status').innerHTML ='You Win!';
	}
}

function init() {

	
	for (var i =0; i <=4; i++) {
		wallsOfMaze[i].setAttribute('style','background-color: #eeeeee');
	}
}
