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

  $('#serenityrightArrow').click(function() {
    $('.serenityPg').hide();
    designShow();
  });

  $('#serenityrightArrow').hover(function() {
    $('#serenityNext').show();
    }, function(){
    $('#serenityNext').hide();  
  });

  function designShow() {
    $('.designPg').show();
  }

  $('#design').click(function() {
    $('#projectspg').hide();
    designShow();
  });

  $('#designleftArrow').hover(function() {
    $('#designPast').show();
    }, function(){
    $('#designPast').hide();  
  });

  $('#designleftArrow').click(function() {
    $('.designPg').hide();
    serenityShow();
  });
  
  $('#designrightArrow').hover(function() {
    $('#designNext').show();
    }, function(){
    $('#designNext').hide();  
  });

  $('#designrightArrow').click(function() {
    $('.designPg').hide();
    tokyoShow();
  });

  function tokyoShow() {
    $('.tokyoPg').show();
  }
  
  $('#tokyo').click(function() {
    $('#projectspg').hide();
    tokyoShow();
  });

  $('#tokyoleftArrow').hover(function() {
    $('#tokyoPast').show();
    }, function(){
    $('#tokyoPast').hide();  
  });

  $('#tokyorightArrow').hover(function() {
    $('#tokyoNext').show();
    }, function(){
    $('#tokyoNext').hide();  
  });

  $('#tokyoleftArrow').click(function() {
    $('.tokyoPg').hide();
    designShow();
  });

  $('#tokyorightArrow').click(function() {
    $('.tokyoPg').hide();
    nycShow();
  });

  $('#nyc').click(function() {
    $('#projectspg').hide();
    nycShow();
  });

  function nycShow() {
    $('.nycPg').show();
  }

  $('#nycleftArrow').hover(function() {
    $('#nycPast').show();
    }, function(){
    $('#nycPast').hide();  
  });

  $('#nycleftArrow').click(function() {
    $('.nycPg').hide();
    tokyoShow();
  });
  /******************* codes for slide shows ********************/ 
  //realized that for different amounts of images, we're gonna have to instantiate 
  //codes/functions for each different project page 
  var slideIndex = 1;
  
  //serenity slide show 
  showSerenitySlides(slideIndex);
  // Next/previous controls
  function plusSerenitySlides(n) {
    showSerenitySlides(slideIndex += n);
  }
  
  $('.prev.serenity').click(function() { 
    plusSerenitySlides(-1);
  });

  $('.next.serenity').click(function() { 
    plusSerenitySlides(1);
  });

  function showSerenitySlides(n) {
    var i;
    var slides = document.getElementsByClassName("serenitySlide");
    var dots = document.getElementsByClassName("serenitydot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }

  //tokyo slide show 
  showTokyoSlides(slideIndex);
  // Next/previous controls
  function plusTokyoSlides(n) {
    showTokyoSlides(slideIndex += n);
  }
  
  $('.prev.tokyo').click(function() { 
    plusTokyoSlides(-1);
  });

  $('.next.tokyo').click(function() { 
    plusTokyoSlides(1);
  });

  function showTokyoSlides(n) {
    var i;
    var slides = document.getElementsByClassName("tokyoSlide");
    var dots = document.getElementsByClassName("tokyodot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }

  //nyc slide show 
  showNycSlides(slideIndex);
  // Next/previous controls
  function plusNycSlides(n) {
    showNycSlides(slideIndex += n);
  }
  
  $('.prev.nyc').click(function() { 
    plusNycSlides(-1);
  });

  $('.next.nyc').click(function() { 
    plusNycSlides(1);
  });

  function showNycSlides(n) {
    var i;
    var slides = document.getElementsByClassName("nycSlide");
    var dots = document.getElementsByClassName("nycdot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }

  //design slide show 
  showDesignSlides(slideIndex);
  // Next/previous controls
  function plusDesignSlides(n) {
    showDesignSlides(slideIndex += n);
  }
  
  $('.prev.design').click(function() { 
    plusDesignSlides(-1);
  });

  $('.next.design').click(function() { 
    plusDesignSlides(1);
  });

  function showDesignSlides(n) {
    var i;
    var slides = document.getElementsByClassName("designSlide");
    var dots = document.getElementsByClassName("designdot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }

});