$( document ).ready(function() {
	
i
	
	     $('.upcoming-event').slick({
				infinite: true,
				slidesToShow:1, // Shows a three slides at a time
				slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
				arrows: true, // Adds arrows to sides of slider
				dots: false, // Adds the dots on the bottom
				responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						
					  }
					},
					{
					  breakpoint: 768,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					  }
					},
					
				
				  ]
			  });
	
	
	      

	
	
});


  





