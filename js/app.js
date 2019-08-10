(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function(){

      $('form#Android').submit(function(){
          $(this).find('button').prop('disabled', true);
      });

      $(".close-overlay").click(function(){
          $(".overlay-full").removeClass("active android-success");
      });

      if(window.location.href.indexOf("#android-success") > -1) {
          $(".overlay-full").addClass("active android-success");
          window.history.replaceState(null, null, window.location.pathname);
      }

      // commenting out the conditional code

      function isMobileDevice() {
          return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
      };

      if (isMobileDevice() == true) {

          var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
          if (iOS) {
              $(".btn-device-android").addClass("hide");
              $(".btn-ios").removeClass("hide");
              console.log('ios');
          }
          else {
              $(".btn-device-android").removeClass("hide");
              $(".btn-ios").addClass("hide");
              console.log('android');
          }

      }

      // $(".btn-android").click(function(){
      //     $(".overlay-full").addClass("active");
      // });

      var vid = document.getElementById("Cover");
      $(".device-video").click(function(){
          if($(".cover").hasClass("to-front")) {
              vid.pause();
              $(".play-button").addClass("to-front");
              $(".play-button").removeClass("to-back");
              $(".cover").addClass("to-back");
              $(".cover").removeClass("to-front");
          } else {
              $(".cover").addClass("to-front");
              $(".cover").removeClass("to-back");
              $(".play-button").addClass("to-back");
              $(".play-button").removeClass("to-front");

              vid.play();
          }
      });
      // Collapse Navbar
      var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 30) {
          $("#mainNav").addClass("navbar-shrink");
          $(".navbar-collapse").removeClass("show");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
      };
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);
  });
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

$(".slider-nav-previous").click(function(){

    $(".slider-img").removeClass("fadeInLeft fadeInRight fadeOutLeft fadeOutRight");

    if ($("#Slider1").hasClass("active")) {

        $("#Slider1").removeClass("active");
        $("#Slider1").addClass("fadeOutRight");
        $("#Slider4").addClass("active fadeInLeft");

    }
    else if ($("#Slider2").hasClass("active")) {

        $("#Slider2").removeClass("active");
        $("#Slider2").addClass("fadeOutRight");
        $("#Slider1").addClass("active fadeInLeft");

    }
    else if ($("#Slider3").hasClass("active")) {

        $("#Slider3").removeClass("active");
        $("#Slider3").addClass("fadeOutRight");
        $("#Slider2").addClass("active fadeInLeft");

    }
    else {

        $("#Slider4").removeClass("active");
        $("#Slider4").addClass("fadeOutRight");
        $("#Slider3").addClass("active fadeInLeft");

    }
});
$(".slider-nav-next").click(function(){

    $(".slider-img").removeClass("fadeInLeft fadeInRight fadeOutLeft fadeOutRight");

    if ($("#Slider1").hasClass("active")) {

        $("#Slider1").removeClass("active");
        $("#Slider1").addClass("fadeOutLeft");
        $("#Slider2").addClass("active fadeInRight");

    }
    else if ($("#Slider2").hasClass("active")) {

        $("#Slider2").removeClass("active");
        $("#Slider2").addClass("fadeOutLeft");
        $("#Slider3").addClass("active fadeInRight");

    }
    else if ($("#Slider3").hasClass("active")) {

        $("#Slider3").removeClass("active");
        $("#Slider3").addClass("fadeOutLeft");
        $("#Slider4").addClass("active fadeInRight");

    }
    else {

        $("#Slider4").removeClass("active");
        $("#Slider4").addClass("fadeOutLeft");
        $("#Slider1").addClass("active fadeInRight");

    }
});

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict
