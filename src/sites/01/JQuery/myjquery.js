$(document).ready(function() {

/***************************
Стоячая панель сверху
****************************/
	var waypoint = new Waypoint({
	  element: document.getElementById('Anal_description'),
	  handler: function(direction) {
	   if (direction == "down") {
	   		$("nav").attr("id", "sticky_nav");
	   }
	   else {
	   		$("nav").removeAttr("id");
	   }
	  },
	  offset: 70 
	});

/***************************
Действия по кнопкам
****************************/
$(".button_events").click(function() {
	$("html, body").animate({scrollTop: $("#anal_images").offset().top}, 1000);
});
$(".button_facts").click(function() {
	$("html, body").animate({scrollTop: $("#Anal_description").offset().top}, 1000);
});
$(".button_peoples").click(function() {
	$("html, body").animate({scrollTop: $("#feedback_section").offset().top}, 1000);
});


/***************************
Плавное перемещение по странице сайт 
https://css-tricks.com/smooth-scrolling-accessibility/
****************************/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/***************************
Анимация с animate сайта
****************************/
var waypoint = new Waypoint({
  element: document.getElementById('Anal_description'),
  handler: function(direction) {
		$(".anim1").addClass("animated fadeIn")
  },
  offset: 70 
});

var waypoint = new Waypoint({
  element: document.getElementById('cities-section'),
  handler: function(direction) {
		$(".anim2").addClass("animated zoomIn")
  },
  offset: 70 
});

var waypoint = new Waypoint({
  element: document.getElementById('how_in_add'),
  handler: function(direction) {
		$(".anim3").addClass("animated fadeInUp")
  },
  offset: 70 
});

/***************************
При переходе в начало кнопка прыгает
****************************/
	var waypoint = new Waypoint({
	  element: document.getElementById('header_subtitle'),
	  handler: function(direction) {
	   if (direction == "up") {
	   		$(".anim4").addClass("animated shake");
	   }
	   else {
	   	$(".anim4").removeClass("animated shake");
	   }
	  },
	  offset: 70 
	});

/***************************
Вываливающееся меню по гамбургер меню
****************************/

$(".hamburger_menu").click(function() {
	var icon=$(".hamburger_menu i");
	if (icon.hasClass("ion-ios-menu")) {
		icon.removeClass("ion-ios-menu");
		icon.addClass("ion-ios-close");
	$("nav").animate({height: "300px"}, 300);
	}	
	else {
		icon.removeClass("ion-ios-close");
		icon.addClass("ion-ios-menu");
	$("nav").animate({height: "65px"}, 300);	
	}
	$("#main_nav").slideToggle(500);

});





})


