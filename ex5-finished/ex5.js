$(document).ready(function(){

	console.log("js is here");


var email_var;
var pass_var;
var zip_var;

var email_valid=false;
var pass_valid=false;
var zip_valid=false;

$("#btnEx5").click(function(){
console.log("clicked");
email_var=$("#email").val();
pass_var=$("#pass").val();
zip_var=$("#zip").val();

if(email_var==""){
	$("#email").css("border","solid 1px red");
}else{
	email_valid=validate("emailAddress", email_var);
}

if(pass_var==""){
	$("#pass").css("border","solid 1px red");
}else{
	pass_valid=validate("normalString",pass_var);
}

if(zip_var==""){
	$("#zip").css("border","solid 1px red");
}else{
	zip_valid=validate("zip",zip_var);
}

if(email_valid && pass_valid && zip_valid){
	alert("Form is ready");
	$("#btnEx5").submit();

}else{
	alert("Please make sure your form is complete properly!");
}


});

function validate(inputType, userInput){
var valid = false;
switch(inputType){
	case 'emailAddress':
					console.log( "Validating Email Address");
					userInput=cleanUp(userInput);
					if( userInput.indexOf("@") >= 0){
						//valid so far...
						if( userInput.indexOf(".") >= 0 ){
							valid = true;
						}
					}
	break;

	case 'zip':
	console.log("Validating zip");
	userInput=cleanUp(userInput);
	if(isNaN(userInput)){
		valid=false;
	}else{
		valid=true;
	}
	break;
	
	case 'normalString':
					console.log( "Validating a String" );
					userInput = cleanUp( userInput );
					valid = true;
				break;		
	



}

return valid;
}



function cleanUp( userInput ){
		console.log("cleanUp() initiated...")
		var temp = userInput;
		temp = temp.replace(/-/g, "");
		temp = temp.replace("<", "&lt;");
		temp = temp.replace(">", "&gt;");
		temp = temp.replace("SELECT", "");
		temp = temp.replace("DELETE", "");
		temp = temp.replace("INSERT", "");
		temp = temp.replace("alert()", "");
		return temp;
	}

})