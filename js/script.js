
$(document).ready(function(){

/* NAV MENU BTN
* -------------------------------------------------- */
 $('.navbar .menu-btn').click(function() {
  $(this).toggleClass('open');

  if($(this).hasClass('open')){
    $('.navbar .nav-menu').addClass('nav-open');
    $('body').addClass('open-nav');
  } else {
    $('.navbar .nav-menu').removeClass('nav-open');
    $('body').removeClass('open-nav');
  }
})

$('.navbar .nav-menu a').click(function() {
  $('.navbar .menu-btn').removeClass('open');
  $('.navbar .nav-menu').removeClass('nav-open');
  $('body').removeClass('open-nav');
});

/* PRICING FUNCTION
* ------------------------------------------------------ */
  var pricingBtn = $('.switch-btn > div');
  pricingBtn.click(function(){
    $(this).removeClass('no-background').siblings().addClass('no-background');
    if (!$('.switch-btn .monthly').hasClass('no-background')){
      subscriptionPlan('99', '/monthly')
    } else {
      subscriptionPlan('1,000', '/yearly')
    }
  });

  function subscriptionPlan(price, term) {
    $('.price-info .price').text(price);
    $('.price-info .term').text(term);
  }

  /* ACCORDION
  * ------------------------------------------------------ */
  $('.accordion-toggle').click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active').siblings('h4').removeClass('active');
    }
    $(this).next().slideToggle('fast');
    $(".accordion-content").not($(this).next()).slideUp('fast');
  });

  /* SMOOTH SCROLL
  * ------------------------------------------------------ */
  let offset = $("header").outerHeight();
  $('a[href^="#"]').on('click',function (e) {
      let target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-offset
      }, 600, 'swing', function () {
      window.location.hash = target;
      });
  });

  /* GO TOP BTN 
  * ------------------------------------------------------ */
  const pxShow = 800;
  const $goTopButton = $(".go-top-btn");

  // Show or hide the button
  if ($(window).scrollTop() >= pxShow) $goTopButton.addClass('fade-in');

  $(window).on('scroll', function() {
      if ($(window).scrollTop() >= pxShow) {
          if(!$goTopButton.hasClass('fade-in')) $goTopButton.addClass('fade-in')
      } else {
          $goTopButton.removeClass('fade-in')
      }
  });

  /* SCROLL FIXED HEADER
  * -------------------------------------------------- */
  const header = $('header');
  let position = $('header').outerHeight(); 
  // should start at 0
  $(window).scroll(function() {
      const scroll = $(window).scrollTop();
      if(scroll > position) {
          header.addClass('sticky');
      } else {
          header.removeClass('sticky');
      }
      position = scroll;
  });
    
//end
});



