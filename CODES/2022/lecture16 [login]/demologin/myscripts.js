// document ready
$(document).ready(function () {
	// prevent Bootstrap modal from closing when clicking outside
	$("#login-modal").modal({backdrop: 'static', keyboard: false });
	
	var status = false;
	
	// handle button login
	$("#btn-login").click(function (e) {
		// get values
		var email = $('#txt-email').val();
		var passwd = $('#txt-password').val();
				
		// validation
		if(!email.trim().length){
			show_dialog("Information Dialog", "Sorry, you put an empty user email !!!");
		}else if(!passwd.trim().length){
			show_dialog("Information Dialog", "Sorry, you put an empty user password !!!");
		}else if(email != "juan@gmail.com"){
			show_dialog("Error Dialog", "Sorry, we found wrong email address !!!");
		}else if(passwd != "12345"){
			show_dialog("Error Dialog", "Sorry, wrong email password !!!");
		}else{
			status = true;
			console.log("User Email: "+email);
			console.log("User password: "+passwd);
			show_dialog("Success Dialog", "Conggratulations, welcome to the user !!!");
		}
	});
	
	// handle button login
	$("#btn-close-modal").click(function (e) {
		if(status === true){
			// redirect with JavaScript
			window.location = "success.html";
		}else{
			// hide modal
			$('#login-modal').modal('hide');
		}
		
	});
	
	// function to show modal
	function show_dialog(title, message){
		// set values to madal
		$(".modal-header h4").text(""+title);
		$(".modal-body label").text(""+message);
		
		// show modal
		$('#login-modal').modal('show');
	}
});