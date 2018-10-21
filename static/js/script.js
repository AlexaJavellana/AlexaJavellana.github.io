//Function for hovering on arrow elements
  
$(function(){
  //Function for hovering on arrow elements
  $('#arrowID').hover(function(){
    $('#enter').show();
    }, function(){
    $('#enter').hide();
  });

  $('#arrowID').click(function(){
    $('#welcomepg').hide();
    aboutShow();
  });

  function aboutShow() {
    $('#aboutpg').show();
  }

  $('#st0').on("animationend", function(){
    $('#enter').show();
  });
});
