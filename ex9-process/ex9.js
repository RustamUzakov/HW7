$(document).ready(function(){
console.log("js is here ex 9");



 var txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
 /*if(navigator.appCodeName==Mozilla){
 	document.getElementById("browser").innerHTM= "img/mozila.png" }*/


document.getElementById("browser").innerHTML=txt;
})