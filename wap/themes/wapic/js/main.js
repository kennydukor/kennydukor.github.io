// Main JavaScript Function
// WAPIC INSURANCE UI
// Remarks: Sowemimo Bamidele;
// Start Date: 9th January 2017;

// #Please do not edit any content here, if any changes has to be made,
// create a new file and link it to the corresponding page.

$(function() {



  // Login dropdown:after fixes
  $('.login-register-menu .dropdown-menu li').eq(0).hover(function() {
  	$('.login-register-menu .dropdown-menu').toggleClass('after-caret');
  });

  // Expanded Area
  $('#expand-top').click(function(event) {
  	$('.expanded-area').slideToggle(400);
  });

  // Main Page Sliders
  $("#mainpage-sliders").owlCarousel({
  	autoPlay: 3000,
  	singleItem: true,
  	navigation: false,
  	baseClass: "owl-carousel",
  	theme: "owl-theme",
  	transitionStyle: "fade",
  	stopOnHover: true
  });

  // Bottom Banner
  $("#bottom-banner").owlCarousel({
  	autoPlay: 3000,
  	singleItem: true,
  	navigation: false,
  	baseClass: "owl-carousel",
  	theme: "owl-theme",
  	transitionStyle: "fade",
  	stopOnHover: true
  });


  // FAQs
  $(function() {
    $('.faq-toggles .toggle-span').click(function(event) {
      $('.faq-toggles .inner').slideUp(200);
      if (!$(this).next().is(':visible')) {
        $(this).next().slideDown(200);
      }
    });

    if ($('.faq-toggles .inner.active').css('display', 'block')) {
      $('.general-view').css('display', 'none !important');
    }

  });

  // Show More - Less
  $('.show-more').click(function() {
    if($('.showmore-details').css('height') != '180px'){
        $('.showmore-details').stop().animate({height: '180px'}, 200);
        $(this).html('Read More <i class="fa fa-arrow-right"></i>');
    }else{
        $('.showmore-details').css({height:'100%'});
        var xx = $('.showmore-details').height();
        $('.showmore-details').css({height:'180px'});
        $('.showmore-details').stop().animate({height: xx}, 400);
        $(this).html('Show Less <i class="fa fa-arrow-up"></i>');
    }
});


  // Small Scrollboxes
  $('#small-scrollboxes').owlCarousel({
  	autoPlay: 3000,
  	items : 2,
  	itemsDesktop : [1199,3],
  	itemsDesktopSmall : [979,3],
  	pagination: false,
      // rewindNav : true,
    });
  // Custom Navigation Events
  $("#scrollboxes-small .next").click(function(){
  	owl.trigger('owl.next');
  })
  $("#scrollboxes-small .prev").click(function(){
  	owl.trigger('owl.prev');
  })

  // Pricing Table
  $( "ul" ).on( "click", "li", function() {
  	var pos = $(this).index()+2;
  	$("tr").find('td:not(:eq(0))').hide();
  	$('td:nth-child('+pos+')').css('display','table-cell');
  	$("tr").find('th:not(:eq(0))').hide();
  	$('li').removeClass('active');
  	$(this).addClass('active');
  });

// Initialize the media query
var mediaQuery = window.matchMedia('(max-width: 640px)');

  // Add a listen event
  mediaQuery.addListener(featuresIsMobile);
  
  // Function to do something with the media query
  function featuresIsMobile(mediaQuery) {    
  	if (mediaQuery.matches) {
  		$('.sep').attr('colspan',2);
  	}   }
  
  // On load
  featuresIsMobile(mediaQuery);

  // Animation init
  new WOW().init();

});