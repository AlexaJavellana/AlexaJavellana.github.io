//Function for hovering on arrow elements
  
$(function(){
  //Function for hovering on arrow elements
  $('#arrowID').click(function(){
    $('#welcomepg').hide();
    aboutShow();
  });

  function aboutShow() {
    $('#aboutpg').show();
  }

  $('.st0').on("animationend", function(){
    $('#arrowID').hover(function(){
      $('#enter').show();
      }, function(){
      $('#enter').hide();
    });
  });

});
