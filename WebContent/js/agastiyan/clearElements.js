
function clearMainScreen() {
	
	$('#service-container').css("display","none");
	$('#about-container').css("display","none");
	$('#contact-container').css("display","none");
	$('#construction-container').css("display","none");
}

function displayServiceScreen() {
	$('#service-container').css("display","block");
}

clearMainScreen();
displayServiceScreen();
