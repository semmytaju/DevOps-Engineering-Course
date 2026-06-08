// Handle and validate input.
function login_action(){
	// get input values
	var email = document.getElementById("email").value;
	var passwd = document.getElementById("password").value;
	
	// JavaScript validation for empty input field
	if(!email.trim().length){
		alert("Empty user email !!!");
		
	}else if(!passwd.trim().length){
		alert("Empty user password !!!");
		
	}else if(email != "juan@gmail.com"){
		alert("Wrong email address !!!");
		
	}else if(passwd != "12345"){
		alert("Wrong user password !!!");
		
	}else{
		console.log("User Email: "+email);
		console.log("User password: "+passwd);
		alert("Welcome user !!!");
		
		// redirect with JavaScript
		window.location = "success.html";
	}
}
