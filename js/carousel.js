$(document).ready(function(){

  var slideWidth = $('.slide').width(),
      numOfSlides = $('.slide').size(),
      positionNum = 0,
      slideSpeed = 400;

  //set the width of div#tray
  $('#tray').width(slideWidth * numOfSlides);

  $('a.next').click(function(event){

    if (positionNum === (numOfSlides - 1)){
      //when we are one the last slide
      positionNum = 0;
    } else {
   //update positionNumber
    positionNum += 1;
  }
 
    //calc distance to move
    var distance = positionNum * slideWidth;
    //animate the #tray that distance
    $('#tray').animate({right: distance}, slideSpeed);
    event.preventDefault();
  });

  $('a.prev').click(function(event){

    if (positionNum === 0){
      //when we are on the first slide
      positionNum = (numOfSlides - 1)
    } else {
      positionNum -= 1;
    }

    //calc distance to move
    var distance = positionNum * slideWidth;
    //animate the #tray that distance
    $('#tray').animate({right: distance}, slideSpeed);
    event.preventDefault();
  });

});