/*
Dale Wilson 620014503
lab4
*/

window.onload =function eventhandling(){

	var win =document.getElementById('end');
	var wallsOfmaze =document.querySelectorAll('#maze div.boundary');
/*
changes colour of div
*/
	for (var i =0; i <=4; i++) {
		wallsOfmaze[i].setAttribute('onmouseover','test()');
	}

	win.setAttribute('onmouseover','winn()');
};

function test() {
	
	alert('You Lose!');
	var wallsOfmaze =document.querySelectorAll('div.boundary');
/*
changes colour of div
*/
	for (var i =0; i <=4; i++) {
		wallsOfmaze[i].setAttribute('style','background-color:#ff8888');
	}	
}

function winn() {

	if(document.getElementById('boundary1').getAttribute('style') == 'background-color:#ff8888') {
		alert('You must go through the maze \nwithout hitting the walls!');
	}	
	else {
		alert('You Win!');
	}
}
