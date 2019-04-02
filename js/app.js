(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function(){
      var vid = document.getElementById("Cover");
      $(".device").click(function(){
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

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 20) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


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
