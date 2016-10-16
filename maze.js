/*
Dale Wilson 620014503
lab4
*/


window.onload =function eventhandling() {

	var wallsOfMaze =document.querySelectorAll('div.boundary');
/*
changes colour of div
*/

	for (var i =0; i <=4; i++) {
		wallsOfMaze[i].setAttribute('onmouseover','test()');
	}
};

function test() {
	var wallsOfMaze =document.querySelectorAll('div.boundary');

/*
changes colour of div
*/
	for (var i =0; i <=4; i++) {
		wallsOfMaze[i].setAttribute('style','background-color:#ff8888');
	}
	
}
