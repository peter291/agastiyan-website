
loadImages();

function loadImages() {
	
	$('#isotope-grid').text('');
	
	var data = "";
	
	for(var i = 1; i <= 20; i++) {
		
		data += "<div class='col-lg-3 col-md-6 col-sm-12 item agency'>" +
					"<div class='project__item'>" +
						"<div class='pro__img'>" +
						"<img alt='Project 4' src='img/tv_units_image/Page-4-Image-" + i + ".png'>" +
						"<a href='img/tv_units_image/Page-4-Image-" + i + ".png' data-lightbox='Lastest Project' class='pro-link'>" +
							"<div class='pro-info pro-info--darker'>" +
								"<h4 class='company'>" +
									"Au creative" +
								"</h4>" +
								"<p class='cat-name'>" +
									"<em>" +
										"Agency Interior" +
									"</em>" +
								"</p>" +
							"</div>" +
						"</a>" +
					"</div>" +
					"</div>" +
			    "</div>";
	}

	$('#isotope-grid').append(data);	
} 
