/*
Dale Wilson 620014503
lab4
*/



window.onload=function eventhandling() {

	var wallsOfMaze=document.getElementsByTagName('div');
	
	
/*
loop to select each div
*/
	for (var i =2; i <=6; i++) {
		wallsOfMaze[i].setAttribute('onmouseover','test(this)');
	}
	
};
/*
changes colour of div
*/
function test(element) {
	element.setAttribute('style','background-color:#ff8888');
}
