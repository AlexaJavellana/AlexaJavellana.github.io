//Function for hovering on arrow elements
  
$(function(){
  //Function for hovering on arrow elements
  // $('#arrowID').hover(function(){
  //   $('#enter').show();
  //   }, function(){
  //   $('#enter').hide();
  // });

  $('#arrowID').click(function(){
    $('#welcomepg').hide();
    aboutShow();
  });

  function aboutShow() {
    $('#aboutpg').show();
  }

  $('.st1').on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
    $('#aboutArrowID').hover(function() {
      $('#projects').show();
      }, function(){
      $('#projects').hide();  
    });
  });

  $('.st0').on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(){
    $('#arrowID').hover(function(){
      $('#enter').show();
      }, function(){
      $('#enter').hide();
    });
  });
});
