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
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // // Thumbnail image controls
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }

  $('.prev').click(function() { 
    plusSlides(-1);
  });

  $('.next').click(function() { 
    plusSlides(1);
  });

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("projectSlides");
    var dots = document.getElementsByClassName("dot");
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
