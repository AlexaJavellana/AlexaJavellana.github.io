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

  $('#aboutArrowID').hover(function() {
    $('#projects').show();
    }, function(){
    $('#projects').hide();  
  });
  // ibm arrow hovers and click functionality project page 
  $('#ibm').click(function() {
    $('#projectspg').hide();
    ibmShow();
  });

  function ibmShow() {
    $('.ibmPg').show();
  }

  $('#ibmleftArrow').hover(function() {
    $('#ibmHome').show();
    }, function(){
    $('#ibmHome').hide();  
  });

  $('#ibmleftArrow').click(function() {
    $('.ibmPg').hide();
    projectsShow();
  });

  $('#ibmrightArrow').hover(function() {
    $('#ibmNext').show();
    }, function(){
    $('#ibmNext').hide();  
  });

  $('#ibmrightArrow').click(function() {
    $('.ibmPg').hide();
    serenityShow();
  });
  // end ibm functionality project page
  $('#serenity').click(function() {
    $('#projectspg').hide();
    serenityShow();
  });

  function serenityShow() {
    $('.serenityPg').show();
  }

  $('#serenityleftArrow').click(function() {
    $('.serenityPg').hide();
    ibmShow();
  });

  $('#serenityleftArrow').hover(function() {
    $('#serenityPast').show();
    }, function(){
    $('#serenityPast').hide();  
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
