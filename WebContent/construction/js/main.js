"use strict";
jQuery(document).ready(function ($) {

//==========================================
// MOBAILE MENU
//=========================================

    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
    	
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        	
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
            	
                $('html,body').animate({
                    
                	scrollTop: (target.offset().top - 0)
                }, 1000);
                
                if ($('.navbar-toggle').css('display') != 'none') {
                    
                	$(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                
                return false;
            }
        }
    });

//==========================================
//ScrollUp
//=========================================

    $(window).scroll(function () {
    	
        if ($(this).scrollTop() > 600) {
        	
            $('#scrollUp').fadeIn('slow');
        } else {
        	
            $('#scrollUp]').fadeOut('slow');
        }
    });

    $('#scrollUp').click(function () {
    	
        $("html, body").animate({scrollTop: 0}, 1000);
        
        return false;
    });

//==========================================
// For fancybox active
//=========================================

    $('.fancybox').fancybox();
       
//==========================================
// Loading
//=========================================

    $(window).load(function () {
    	
        $("#loading").fadeOut(500);
    });

    
 $('#about-read-more').click(function () {
    	
        $("#about-us-full").css("height","max-content");
        $("#about-us-full").css("opacity","1");
        
        $('#about-read-more').css("display","none");
        $('#about-read-less').css("display","inline-block");
  });
 
 $('#about-read-less').click(function () {
	 
	 $("#about-us-full").css("opacity","0");
     $("#about-us-full").css("height",0);
     
     $('#about-read-less').css("display","none");
     $('#about-read-more').css("display","inline-block");
 });
});

