$(document).ready(function(){

  $(".slider li a").click(function(){
    $(".slider li").removeClass('active');
    var targetID = $(this).attr("href");
    $('.slider li a[href=' + targetID +']').closest('li').addClass('active');
    var $target = $(targetID);
    $(".block").not($target).fadeOut();
    $target.fadeIn();
    return false;
  });
  $(".slider li").click(function(){
    $(".slider li").removeClass('active');
    var targetID = $(this).find("a").attr("href");
    $('.slider li a[href=' + targetID +']').closest('li').addClass('active');
    var $target = $(targetID);
    $(".block").not($target).fadeOut();
    $target.fadeIn();
    return false;
  });

  if ($(".slider li.active").length) {
    $(".slider li.active").click();
  }
  else{
    $('.block:first-of-type').fadeIn();
    var block_id = $('.block:first-of-type').attr('id');
    $('.slider li a[href="#'+ block_id +'"]').closest('li').addClass('active');
  }
});