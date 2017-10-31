$(document).ready(function(){
  var win_w = $('.body_wrap').width();

  $(".slider li a").click(function(){
    $(".slider li").removeClass('active');
    var targetID = $(this).attr("href");
    $('.slider li a[href=' + targetID +']').closest('li').addClass('active');
    var $target = $(targetID);
    $(".block").not($target).removeClass('active');
    $target.addClass('active');
    if ($target.hasClass("-color-white")){
      $("#header").removeClass("-color-black").addClass("-color-white");
      $("#footer").removeClass("-color-black").addClass("-color-white");      
     if (targetID == '#block-contacts'){
        if (win_w > 1200) {
          $(".slider__wrap").removeClass("-color-white").addClass("-color-black");
        }

        else{
          $(".slider__wrap").removeClass("-color-black").addClass("-color-white");
        }
      }

      else{
        $(".slider__wrap").removeClass("-color-black").addClass("-color-white");
      }
    }
    if ($target.hasClass("-color-black")){
      $("#header").removeClass("-color-white").addClass("-color-black");
      $("#footer").removeClass("-color-white").addClass("-color-black");      
      if (targetID == '#block-contacts'){
        if (win_w > 1200) {
          $(".slider__wrap").removeClass("-color-white").addClass("-color-black");
        }

        else{
          $(".slider__wrap").removeClass("-color-black").addClass("-color-white");
        }
      }

      else{
        $(".slider__wrap").removeClass("-color-white").addClass("-color-black")
      }
    }
    return false;
  });
  $(".slider li").click(function(){
    $(".slider li").removeClass('active');
    var targetID = $(this).find("a").attr("href");
    $('.slider li a[href=' + targetID +']').closest('li').addClass('active');
    var $target = $(targetID);
    $(".block").not($target).removeClass('active');
    $target.addClass('active');
    if ($target.hasClass("-color-white")){
      $("#header").removeClass("-color-black").addClass("-color-white");
      $("#footer").removeClass("-color-black").addClass("-color-white");
      if (targetID == '#block-contacts'){
        if (win_w > 1200) {
          $(".slider__wrap").removeClass("-color-white").addClass("-color-black");
        }

        else{
          $(".slider__wrap").removeClass("-color-black").addClass("-color-white");
        }
      }
      else{
        $(".slider__wrap").removeClass("-color-black").addClass("-color-white");
      }
    }
    if ($target.hasClass("-color-black")){
      $("#header").removeClass("-color-white").addClass("-color-black");
      $("#footer").removeClass("-color-white").addClass("-color-black");
      if (targetID == '#block-contacts'){
        if (win_w > 1200) {
          $(".slider__wrap").removeClass("-color-white").addClass("-color-black");
        }

        else{
          $(".slider__wrap").removeClass("-color-black").addClass("-color-white");
        }
      }

      else{
        $(".slider__wrap").removeClass("-color-white").addClass("-color-black");
      }
    }
    return false;
  });

  if ($(".slider li.active").length) {
    $(".slider li.active").click();
  }
  else{
    $('.block:first').addClass('active');
    var block_id = $('.block:first').attr('id');
    var $target = $("#" + block_id);
    $('.slider li a[href="#'+ block_id +'"]').closest('li').addClass('active');
    if (win_w < 900 || $target.hasClass("-color-black")) {
      $("#header").removeClass("-color-white").addClass("-color-black");
      $("#footer").removeClass("-color-white").addClass("-color-black");
      $(".slider__wrap").removeClass("-color-white").addClass("-color-black");
    }
    else{
      if ($target.hasClass("-color-white")){
        $("#header").removeClass("-color-black").addClass("-color-white");
        $("#footer").removeClass("-color-black").addClass("-color-white");
        $(".slider__wrap").removeClass("-color-black").addClass("-color-white");
      }
    }
  }

  $('.scroll_to').click(function(){
    var name_block = $(this).attr('href');
    if (win_w> 900) {
      $('.slider li a[href="' + name_block + '"]').click();
    }

    else{
      var offset_block = $(name_block).offset().top;
      $('html,body').animate({scrollTop: offset_block});
    }
  });

  $('#header .logo').click(function(){
    $('.slider li:first').click();
    return false;
  });

  $('.pager__prev').click(function(){
    if ($('.slider li:first') != $('.slider li.active')){
      $('.slider li.active').prev().click();
    }
    return false;
  });
  $('.pager__next').click(function(){
    if ($('.slider li:last') != $('.slider li.active')){
      $('.slider li.active').next().click();
    }
    return false;
  });

  $('.team__slider').slick({
    fade: false,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    prevArrow: '<div class="slick-prev"><div class="team__arr"></div></div>',
    nextArrow: '<div class="slick-next"><div class="team__arr"></div></div>',
    appendArrows: $('.team__arr_wrap'),
    appendDots: $('.team__dots'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.purchase__slider').slick({
    fade: false,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    prevArrow: '<div class="slick-prev"><div class="purchase__arr"></div></div>',
    nextArrow: '<div class="slick-next"><div class="purchase__arr"></div></div>',
    appendArrows: $('.purchase__arr_wrap'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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

  $('.hamburger').click(function(){
    $('.menu').toggleClass('open');
    return false;
  });

  $(document).click(function(e){
    $('.menu').removeClass('open');
    // if (!$(event.target).closest(".menu").length){
    // }
  })
    

  $(window).resize(function(){
    $('.menu').removeClass('open');
    win_w = $('.body_wrap').width();

    var targetID = $(".slider li.active a").attr('href');
      
    if (targetID == '#block-contacts'){
      if (win_w > 1200) {
        $(".slider__wrap").removeClass("-color-white").addClass("-color-black");
      }

      else{
        $(".slider__wrap").removeClass("-color-black").addClass("-color-white");
      }
    }
    if (win_w < 900) {
      $("#header").removeClass("-color-white").addClass("-color-black");
      $("#footer").removeClass("-color-white").addClass("-color-black");
      $(".slider__wrap").removeClass("-color-white").addClass("-color-black");
    }
    else{
      $(".slider li.active").click();
    }
  });

  // if (win_w > 900){
  //   var scale = 0.9;
  //   $(".block").each(function(index, el){
  //     contentEl = $(el).find(".content");
  //     contentEl[0].style.transform = 'scale(' + scale + ')';
  //     contentEl[0].style['-o-transform'] = 'scale(' + scale + ')';
  //     contentEl[0].style['-webkit-transform'] = 'scale(' + scale + ')';
  //     contentEl[0].style['-moz-transform'] = 'scale(' + scale + ')';
  //   });
  // }
});