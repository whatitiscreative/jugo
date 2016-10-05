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

var Tabs = {

  init: function() {
    this.bindUIfunctions();
    this.pageLoadCorrectTab();
  },

  bindUIfunctions: function() {

    // Delegation
    $(document)
      .on("click", ".transformer-tabs a[href^='#']:not('.active')", function(event) {
        Tabs.changeTab(this.hash);
        event.preventDefault();
      })
      .on("click", ".transformer-tabs a.active", function(event) {
        Tabs.toggleMobileMenu(event, this);
        event.preventDefault();
      });

  },

  changeTab: function(hash) {

    var anchor = $("[href=" + hash + "]");
    var div = $(hash);

    // activate correct anchor (visually)
    anchor.addClass("active").parent().siblings().find("a").removeClass("active");

    // activate correct div (visually)
    div.addClass("active").siblings().removeClass("active");

    // update URL, no history addition
    // You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
    // window.history.replaceState("", "", hash);

    // Close menu, in case mobile
    anchor.closest("ul").removeClass("open");

  },

  // If the page has a hash on load, go to that tab
  pageLoadCorrectTab: function() {
    this.changeTab(document.location.hash);
  },

  toggleMobileMenu: function(event, el) {
    $(el).closest("ul").toggleClass("open");
  }

}

Tabs.init();


