$(function(){
  var menu_buttons = $(".menu_button");
  var main_contents = $(".main_content");

  menu_buttons.click(function(){
    menu_buttons.each(function(){
      $(this).removeClass("selected_menu");
    });

    main_contents.each(function(){
      $(this).addClass("hidden_content");
    });


    var idx = menu_buttons.index(this);
    menu_buttons.eq(idx).addClass("selected_menu");
    main_contents.eq(idx).removeClass("hidden_content");
   });
});
