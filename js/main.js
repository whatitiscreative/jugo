$(document).ready(function(){
	console.log('working');
});

// Init tabs

// $( function() {
//   $( "#tabs" ).tabs();
// } );

// Init sliders

$('.slider-one').slick({
	arrows: false,
	dots: false
});

$('.slider-two').slick({
	arrows: false,
	dots: false
});

// Init Mobile Controls

function initMobileMenu() {
 $('#triggerMobileMenu').on('click', function(){
   $('.nav-wrap').toggleClass('active');
   $('main').toggleClass('blur');
   });
}
initMobileMenu();

// function closeMobileMenu() {
//  $('#closeMobileMenu').on('click', function(){
//    $('.nav-wrap').removeClass('active');
//    $('main').removeClass('blur');
//    });
// }
// closeMobileMenu();

function hamburgerAnimate() {
 $('.hamburger').on('click', function(){
   $(this).toggleClass('is-active');
   });
}
hamburgerAnimate();


// Smooth scrolling navigation

$('.nav-items a').on('click', function() {
	$('.nav-items').removeClass('active');

	$('.nav-wrap').removeClass('active');
	$('.hamburger').removeClass('is-active');
	$('main').removeClass('blur');

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('[data-anchor="' + scrollAnchor + '"]').offset().top - 50;

        if ($(window).width() > 1199) {

        	$('body,html').animate({
        	    scrollTop: scrollPoint
        	}, 500);

        } else {

        	$('body,html').delay(500).animate({
        	    scrollTop: scrollPoint
        	}, 600);
        }

    return false;

})

// Add / remove active class based on window position

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 550) {
        $('.smooth-anchor').each(function(i) {
            if ($(this).position().top <= windscroll + 50) {
                $('.nav-items a.active').removeClass('active');
                $('.nav-items a').eq(i).addClass('active');
            }
        });

    } else {

        $('.nav-items').removeClass('fixed');
        $('.nav-items a.active').removeClass('active');
        $('.nav-items a:first').addClass('active');
    }
});


