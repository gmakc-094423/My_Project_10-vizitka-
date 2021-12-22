$(document).ready(function () {
  //эта функция прилепляет меню вверху страницы
  var waypoint = new Waypoint({
    element: document.getElementById('bakery-description'),
    handler: function (direction) {
      if (direction == "down") {
        $("nav").attr("id", "sticky_nav");
      } else {
        $("nav").removeAttr("id");
      }
    },
    offset: 80
  })
  //эта функция - кнопка Заказать - в место на странице
  $(".button_order").click(function () {
    $("html, body").animate({
      scrollTop: $("#how_to_order_section").offset().top
    }, 1000)
  });
  //эта функция - кнопка Узнать больше - в место на странице
  $(".button_more").click(function () {
    $("html, body").animate({
      scrollTop: $("#bakery-description").offset().top
    }, 1000)
  });

  //эта функция - кнопки навигации - в место на странице
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  //animation
  var waypoint = new Waypoint({
    element: document.getElementById('bakery-description'),
    handler: function (direction) {
      $(".anim1").addClass("animated");
    },
    offset: 60
  });

  var waypoint = new Waypoint({
    element: document.getElementById('sities_section'),
    handler: function (direction) {
      $(".anim2").addClass("animated");
    },
    offset: 60
  });


  var waypoint = new Waypoint({
    element: document.getElementById('how_to_order_section'),
    handler: function (direction) {
      $(".anim3").addClass("animated");
    },
    offset: 80
  });


  var waypoint = new Waypoint({
    element: document.getElementById('header_text'),
    handler: function (direction) {
      if (direction == "up") {
        $(".anim4").addClass("animate__animated animate__bounce");
      } else {
        $(".anim4").removeClass("animate__animated animate__bounce");
      }
    },
    /* offset: 80 */
  });

  //mobile nav
  $(".mobile_nav_icon").click(function () {
    var icon = $(".mobile_nav_icon i");
    if (icon.hasClass("ion-md-menu")) {
      icon.removeClass("ion-md-menu");
      icon.addClass("ion-md-close");
      $("nav").animate({
        height: "300px"
      }, 300);
    } else {
      icon.removeClass("ion-md-close");
      icon.addClass("ion-md-menu");
      $("nav").animate({
        height: "70px"
      }, 300);
    }
    $("#main_nav").slideToggle(300);
  });

})