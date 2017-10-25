$(document).ready(function(){
  $(".slider li a").click(function(){
    $(".slider li").removeClass('active');
    var targetID = $(this).attr("href");
    $('.slider li a[href=' + targetID +']').closest('li').addClass('active');
    var $target = $(targetID);
    $(".block").not($target).removeClass('active').fadeOut();
    $target.addClass('active').fadeIn();
    $parent = $(this).parent().parent().parent();
    if ($parent.hasClass("-color-white")){
      $("#header").removeClass("-color-white").addClass("-color-black");
      $("#footer").removeClass("-color-white").addClass("-color-black");
    }
    if ($parent.hasClass("-color-black")){
      $("#header").removeClass("-color-black").addClass("-color-white");
      $("#footer").removeClass("-color-black").addClass("-color-white");
    }
    return false;
  });
  $(".slider li").click(function(){
    $(".slider li").removeClass('active');
    var targetID = $(this).find("a").attr("href");
    $('.slider li a[href=' + targetID +']').closest('li').addClass('active');
    var $target = $(targetID);
    $(".block").not($target).removeClass('active').fadeOut();
    $target.addClass('active').fadeIn();
    $parent = $(this).parent().parent();
    if ($parent.hasClass("-color-white")){
      $("#header").removeClass("-color-white").addClass("-color-black");
      $("#footer").removeClass("-color-white").addClass("-color-black");
    }
    if ($parent.hasClass("-color-black")){
      $("#header").removeClass("-color-black").addClass("-color-white");
      $("#footer").removeClass("-color-black").addClass("-color-white");
    }
    return false;
  });

  if ($(".slider li.active").length) {
    $(".slider li.active").click();
  }
  else{
    $('.block:first-of-type').addClass('active').fadeIn();
    var block_id = $('.block:first-of-type').attr('id');
    $('.slider li a[href="#'+ block_id +'"]').closest('li').addClass('active');
  }

   $('.team__slider').slick({
    fade: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    prevArrow: '<div class="slick-prev"><div class="team__arr"></div></div>',
    nextArrow: '<div class="slick-next"><div class="team__arr"></div></div>',
    appendArrows: $('.team__arr_wrap'),
    appendDots: $('.team__dots')
  });
   $('.roadmap__slider').slick({
    fade: false,
    slidesToShow: 1,
    arrows: true,
    dots: false,
    initialSlide: 2,
    asNavFor: '.roadmap__nav',
    prevArrow: '<div class="slick-prev"><div class="roadmap__nav_arr"></div></div>',
    nextArrow: '<div class="slick-next"><div class="roadmap__nav_arr"></div></div>',
    appendArrows: $('.roadmap__nav_arr_wrap')
  });
  $('.roadmap__nav').slick({
    fade: false,
    autoplay: true,
    slidesToShow: 6,
    variableWidth: true,
    // centerMode: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    asNavFor: '.roadmap__slider'
  });
});