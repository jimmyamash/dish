(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function(){

      $(".close-overlay").click(function(){
          $(".overlay-full").removeClass("active android-success");
          window.location = window.location.replace('/#.*$/','');
      });

      if(window.location.href.indexOf("#android-success") > -1) {
          $(".overlay-full").addClass("active android-success");
      }

      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (iOS) {
          $(".btn-android").addClass("hide");
      }
      else {
          $(".btn-android").removeClass("hide");
      }
      $(".btn-android").click(function(){
          $(".overlay-full").addClass("active");
      });

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
        if ($("#mainNav").offset().top > 80) {
          $("#mainNav").addClass("navbar-shrink");
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





  function toggleMute() {

      // setTimeout(function(){
      //     var video=document.getElementById("derp");
      //
      //     // if(video.muted){
      //     //   video.muted = false;
      //     // } else {
      //     //   video.muted = true;
      //     // }
      //
      // }, 1);
  }
  toggleMute();

})(jQuery); // End of use strict
