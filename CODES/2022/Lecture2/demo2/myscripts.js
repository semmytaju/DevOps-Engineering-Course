// Handle and validate input.
function action_val(){
	// get input values
	var name = document.getElementById("user-name").value;
	var email = document.getElementById("user-email").value;
	var address = document.getElementById("user-address").value;
	
	// JavaScript validation for empty input field
	if(!name.trim().length){
		alert("Empty user name !!!");
		
	}else if(!email.trim().length){
		alert("Empty user email !!!");
		
	}else if(!address.trim().length){
		alert("Empty user address !!!");
		
	}else{
		console.log("User Name: "+name);
		console.log("User Email: "+email);
		console.log("User address: "+address);
	}
}
