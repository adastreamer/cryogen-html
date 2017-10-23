$(document).ready(function(){
  $(".slider li a").click(function(){
    var targetID = $(this).attr("href");
    var $target = $(targetID);
    $(".block").not($target).fadeOut();
    $target.fadeIn();
    return false;
  });
  $(".slider li").click(function(){
    var targetID = $(this).find("a").attr("href");
    var $target = $(targetID);
    $(".block").not($target).fadeOut();
    $target.fadeIn();
    return false;
  });
});