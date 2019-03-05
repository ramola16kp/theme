$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".header").addClass("nav-bg");
        $('.navbar-brand img').attr('src', 'images/logo.svg');
        
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("nav-bg");
       $('.navbar-brand img').attr('src', 'images/logo-white.svg');
    }
});

$('.search').on("click",function(){
	$("#search-form").toggleClass("form-show");
});

$('.cart-button').on('click',function(){
	$(".cart").toggleClass("show-cart");
});

$('.bars').on('click', function(){
	$('aside').addClass('show-aside');
	$('.cross').on('click', function(){
	$('aside').removeClass("show-aside");
});
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	 items:6,
  	 autoplay:true,
  	 autoplayTimeout:2000,
  	 loop:true
  });
 

});
