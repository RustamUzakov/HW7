$(document).ready(function(){
console.log("js ex4 is here");



function clock(){
	setTimeout(function(){
		var dt = new Date();
		var h = dt.getHours();
		var m = dt.getMinutes();
		var s = dt.getSeconds();
		m=checkTen(m);
		s=checkTen(s);
		document.getElementById("txt").innerHTML=h + ":" + m + ":" + s;
		clock();
	},1000);
}
clock();

function checkTen(i){
	if(i<10){
		i="0"+i;
	}return i;
}






})