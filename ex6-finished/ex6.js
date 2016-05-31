$(document).ready(function(){
	console.log("js is here-ex6!");

var string =prompt("Please enter a string");
if(string!=null){
	 var stringIntoInt=parseInt(string);
	document.getElementById("text").innerHTML=
	("Your string "+string+" has been converted into "+ stringIntoInt);
}


})