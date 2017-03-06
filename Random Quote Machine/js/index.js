

var colors=["	#839192", "	#BA4A00 ", "#196F3D","#2E4053 ", "#5499C7", "#D98880"];
var quoteContent = "";
var quoteAuthor = "";



function big(){
  getFromAPI();
  changeColor();
}
function getFromAPI(){
  
  $.ajax({
     headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success:function(quote){
      var q = JSON.parse(quote);
      quoteContent=q.quote;
      quoteAuthor = q.author;
      $("#quote-text").text(q.quote);
      $("#quote-author").text(q.author);
    }
  });
  
}

function changeColor(){  
  var color = Math.floor(Math.random() * colors.length);
   var button_before = {"border-color":  colors[color],"color":colors[color]};
  var  button_hover = {"background-color": colors[color], "color":"#FFFFFF"};
   var button_after ={"border-color":  colors[color],"background-color":"#FFFFFF", "color":colors[color]};
  $("html body").animate({
       backgroundColor: colors[color]
     }, 1000);
  $("html body").css("background-color", colors[color]);
   $(".quote-body").css("color", colors[color]);
  $("#new-quote").css(button_before);
 
  $("#new-quote").hover(function(){
   $("#new-quote").css(button_hover);
  }, function(){
   $(this).css(button_after);
  });
    $("#tweet").css(button_before);
   $("#tweet").addClass("animated bounce");
  $("#tweet").hover(function(){
   $("#tweet").css(button_hover);
  }, function(){
   $(this).css(button_after);
  });
}

function shareTwitter(){
  $("#twitter-link").attr('href', 'https://twitter.com/intent/tweet?hashtags=randomQuote&text=' + encodeURIComponent('"' + quoteContent + '" ' + quoteAuthor));
    }


$(document).ready(function() {
 big();
   
  $('#new-quote').on('click', big);
  $("#tweet").on('click', shareTwitter);

  });