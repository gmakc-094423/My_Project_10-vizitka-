//  $(document).ready(function(){
/*  $('.carousel__inner').slick({
    speed: 1100,
    adaptiveHeight: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // fade: true,
    // cssEase: 'linear'
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow:  '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
          settings: {
            dots: true,
            arrows: false,
            // adaptiveHeight: true
            autoplay: true,
            autoplaySpeed: 2000,

          }
      }
    ]
  });*/


/* 
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  // responsive: {
  //   640: {
  //     edgePadding: 20,
  //     gutter: 20,
  //     items: 2
  //   },
  //   700: {
  //     gutter: 30
  //   },
  //   900: {
  //     items: 3
  //   }
  // }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
  });
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
  });


  $(document).ready(function(){

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
       $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active'); 
      });
    });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });

    // $('.button_mini').on('click', function() {
    //   $('.overlay, #order').fadeIn('slow');
    // });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

     $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
     });

     // валидация форм

     function validateForm(form) {
      $(form).validate({
        rules: {
          name: {
           required: true,
           minlength: 2
         },
          phone: "required",
          email: {
           required: true,
           email: true
          }
        },
         messages: {
         name: {
           required: "И это твоё имя?",
           minlength: jQuery.validator.format("Имя меньше {0} букв! Не пойдёт!")
         },
         phone: "Телефон правильно введи, да?",
         email: {
           required: "Е-почту введи, да?",
           email: "Правильная почта пишется так: name@domain.com"
         }
       },
      });
     };

    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');

    // маска ввода

    $('input[name=phone]').mask("+7 (999) 999-99-99");

     // отправка данных на сервер

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
      });
      return false;
    }); 

    // скролл вверх

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
 */


    // плавный скролл на jQuerry
    $(function(){
      $("a[href^='#']").click(function(){
              const _href = $(this).attr("href");
              $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
              return false;
      });
    });


// слайдер блока видео
    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }



/* Включаем слик-слайдер */
    // $(document).ready(function(){
    //   $('.how_it_works__mediabox__photo_box').slick({
    //     infinite: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     // nextArrow: <button type = "button" class = "slick-next"> Далее </button>,
    //   });
    // });


// слайдер блока фотографий
    var slider = tns({
      container: '.how_it_works__mediabox__photo_box',
      items: 2,
      slideBy: 'page',
      autoplay: false,
      nav: false,
      slideBy: 1,
      autoHeight: false,
      // controls: false,
      controlsText: [
        '<img src = "">',
        '<img src = "./icons/down-double-arrow2.svg" style="transform: rotate(270deg)">'],

      responsive: {
        640: {
          // edgePadding: 20,
          // gutter: 20,
          items: 1
        },
        // 700: {
        //   gutter: 30
        // },
        1200: {
          items: 2
        }
      }
    });


    // фотка на весь экран
    $(function(){
      $("a.colorbox").colorbox({
        maxWidth:"90%",
        maxHeight:"90%",
        opacity:"0.7",
        // current:"Фото {current} из {total}"
        current:""
      });
    });


// эффект параллакса
    let bg = document.querySelector('.mouse-parallax-bg');
    let bg1 = document.querySelector('.mouse-parallax-bg-1');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        bg.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
        bg1.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
    });


/*     var slider = tns({
      container: '.my-slider',
      items: 1,
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 3
        }
      }
    }); */

// подключаем анимацию WOW
/*     new WOW().init();

  });
   */


