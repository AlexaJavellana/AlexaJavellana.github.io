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

  $('#aboutArrowID').click(function(){
    $('#aboutpg').hide();
    projectsShow();
  });

  function projectsShow() {
    $('#projectspg').show();
  }
  // $('.st1').on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
  //   $('#aboutArrowID').hover(function() {
  //     $('#projects').show();
  //     }, function(){
  //     $('#projects').hide();  
  //   });
  // });

  // $('.st0').on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(){
  //   $('#arrowID').hover(function(){
  //     $('#enter').show();
  //     }, function(){
  //     $('#enter').hide();
  //   });
  // });
  $('#aboutArrowID').hover(function() {
    $('#projects').show();
    }, function(){
    $('#projects').hide();  
  });

  $('#ibm').click(function() {
    location.href = "test.html";
  });
  $('#serenity').click(function() {
    location.href = "test.html";
  });
  $('#datacens').click(function() {
    location.href = "test.html";
  });
  $('#design').click(function() {
    location.href = "test.html";
  });
  $('#tokyo').click(function() {
    location.href = "test.html";
  });
  $('#nyc').click(function() {
    location.href = "test.html";
  });
});
