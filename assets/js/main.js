$(function () {
	
	
	//blog slick trigger
	$('.testimonials-slick').slick({
		arrows: true,
		dots: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
    		},
			
			
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
    		}
  		]
	}); 

	
}) //document ready