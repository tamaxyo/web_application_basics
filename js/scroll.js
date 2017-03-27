$(function(){
  $("#scroll_top").click(function(){
    $("body").animate({scrollTop: 0}, 1000);
  });

  $("#scroll_bottom").click(function(){
    $("body").animate({scrollTop: $(document).height() - $(window).height()}, 1000);
  })
});
