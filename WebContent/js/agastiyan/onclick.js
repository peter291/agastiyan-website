
var auto_load = setTimeout(function() {
	
	// onLoadHome();
	
	var load_home = setTimeout(function() {
		
		// $('.modal2').css("display","none"); 
	 }, 3000);
},500);

/*var construction_load = setTimeout(function() {
	
	var val = Math.floor(Math.random() * 4) + 1;
	
	switch(val) {

	case 1:
		window.location.href = '/construction';
		break;
	case 2:
		window.location.href = '/interiors';
		break;
	case 3:
		window.location.href = '/property';
		break;
	case 4:
		window.location.href = '/advisory';
		break;
	}
	
},60000);*/

$(function() {
	
	$('#nav-home').click(function() {
		
		clearMainScreen();
		$('#service-container').css("display","block");
		sizeTheOverlays();
	});
	
	$('#nav-product').click(function() {
		
		clearMainScreen();
		$('#service-container').css("display","block");
		sizeTheOverlays();
	});

	$('#nav-about').click(function() {
		
		clearMainScreen();
		$('#about-container').css("display","block");
		sizeTheOverlays();
	});

	$('#nav-contact').click(function() {
		
		clearMainScreen();
		$('#contact-container').css("display","block");
		sizeTheOverlays();
	});
	
	$('#go-cons').click(function() {
		
		clearMainScreen();
		$('#construction-container').css("display","block");
		sizeTheOverlays();
	});
});

$(document).on("click", ".modal2", function() {
	
	 $('.modal2').css("height","0vh");
	 $('.modal2').css("width","0vw");
	
	 var load_home = setTimeout(function() {
		
		// $('.modal2').css("display","none"); 
	 }, 1000);
});

function onLoadHome() {
	
	var w = $(window).width();
	 
	// $('.modal2').css("opacity",0);
}	

$(".header-overlay").hover(function(){
	
	let hClass = $(this).offsetParent().prop('className').split(" ")[1];
	
	$("." + hClass + " .header-overlay").css("letter-spacing","2.5px");
	$("." + hClass + " .overlay").css("opacity","1");
	},function(){

		let hClass = $(this).offsetParent().prop('className').split(" ")[1];
		
		$("." + hClass + " .header-overlay").css("letter-spacing","0.5px");
		$("." + hClass + " .overlay").css("opacity","0");
});

$(".overlay").hover(function(){
	
	let hClass = $(this).offsetParent().prop('className').split(" ")[1];
	
	$("." + hClass + " .header-overlay").css("letter-spacing","2.5px");
	$("." + hClass + " .overlay").css("opacity","1");
	},function(){

		let hClass = $(this).offsetParent().prop('className').split(" ")[1];
		
		$("." + hClass + " .header-overlay").css("letter-spacing","0.5px");
		$("." + hClass + " .overlay").css("opacity","0");
});

$(".construct-overlay").hover(function(){
	
	$(this).css("letter-spacing","2.5px");
	},function(){
		
		$(this).css("letter-spacing","0.5px");
});