var width = $(window).width();
var height = $(window).height();

var sizeTheOverlays = function() {
	
	$(".header-overlay").resize().each(function() {
    	
		var w = $(this).parent().outerWidth();
		
		if(width > 538) {
			
			$(this).css("width", w);
		} else {
			
			$(this).css("width", "fit-content");
		}
    });

    $(".overlay").resize().each(function() {
    	
    	var h = $(this).parent().outerHeight();
    	var w = $(this).parent().outerWidth();
    	
    	$(this).css("height", h);
    	$(this).css("width", w);
    });
    
    $(".content-overlay").resize().each(function() {
    	
    	var w = $(this).parent().outerWidth();
    	var h = $(this).parent().outerHeight();
    	
    	$(this).css("height", h);
    	$(this).css("width", w);
    	
    	$('.construction-details').css("height", h);
    });
};

var changeBackground = function() {

	$(window).resize().each(function() {
		
		if(width < 768) {
		 	 
    		changeMobileImg();
    		changeFontMobile();
    	} else {
 	   
    		changeDeskImg();
    		changeFontDesk();
    	}
	});
	
    $(".modal2").resize().each(function() {
    	
    	if(width < 538) {
    		
    		$('.modal2').css('background-image','url(images/front-banner/agastiyan_vertical.png)');
    	} else {
 	    
    		$('.modal2').css('background-image','url(images/front-banner/agastiyan_horizontal.png)');
    	}
    });
};

changeBackground();

sizeTheOverlays();

$(window).resize(function() {
	
	if($(this).width() != width) {
	   
		width = $(this).width();
      
		changeBackground();
		sizeTheOverlays();
	}
	
	if($(this).height() != height) {
	   
		height = $(this).height();
	   
		changeBackground();
		sizeTheOverlays();
	}
});

function changeMobileImg() {
	
	var h = height;
	
	h = (h - 86) * 0.25;
	
	$(".item01-col").css("height",h);
	$(".panel").css("margin-bottom",3);
	
	$('#serv1').attr('src','images/mobile/agastiyan-mobile-1.jpg');
	$('#serv2').attr('src','images/mobile/agastiyan-mobile-2.jpg');
	$('#serv3').attr('src','images/mobile/agastiyan-mobile-3.jpg');
	$('#serv4').attr('src','images/mobile/agastiyan-mobile-4.jpg');
}

function changeFontMobile() {
	
	$(".navbar-float").css("float","left");
	
	$(".headerTextDesign").css("padding","1%");
	$(".headerTextDesign").css("font-size","10px");
	
	$(".slideTextDesign").css("padding-top","9%");
	$(".slideTextDesign").css("font-size","10px");
	$(".slideTextDesign").css("line-height","1.5");
	$(".slideTextDesign").css("display","flex");
	
	$(".readmore").css("font-size", "8px");
	$(".readmore").css("line-height", "0.8");
	
	$(".construction-nav-button").css("padding-left", 0);
}

function changeDeskImg() {
	
	$(".item01-col").css("height","84vh");
	$(".panel").css("margin-bottom",3);
	
	$('#serv1').attr('src','images/front-banner/agas01.jpg');
	$('#serv2').attr('src','images/front-banner/agas02.jpg');
	$('#serv3').attr('src','images/front-banner/agas03.jpg');
	$('#serv4').attr('src','images/front-banner/agas04.jpg');
}

function changeFontDesk() {
	
	$(".navbar-float").css("float","right");
	
	$(".headerTextDesign").css("padding","2%");
	$(".headerTextDesign").css("font-size","15px");
	
	$(".slideTextDesign").css("padding-top","21%");
	$(".slideTextDesign").css("font-size","12px");
	$(".slideTextDesign").css("line-height","3");
	$(".slideTextDesign").css("display","block");
	
	$(".readmore").css("font-size", "13px");
	$(".readmore").css("line-height", "1.6");
	
	$(".construction-nav-button").css("padding-left", 15);
}