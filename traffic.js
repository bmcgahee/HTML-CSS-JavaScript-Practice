$(document).ready(function() {
   
   $("#power").click(function() {
         blinkRed();
         blinkYellow();
         blinkGreen();
         setInterval(blinkRed, 1000);
         setInterval(blinkYellow, 1200);
         setInterval(blinkGreen, 1400);
   });

   $("#red").click(function() {
      $("#light").css("color", "red").html("Red Light");
   });

   $("#yellow").click(function() {
      $("#light").css("color", "yellow").html("Yellow Light");
   });

   $("#green").click(function() {
      $("#light").css("color", "lime").html("Green Light");
   }); 

   $("#redrule").click(function() {
      $("#rules").css("color", "red").html("Red means 'stop'.");
   });  

   $("#yellowrule").click(function() {
      $("#rules").css("color", "yellow").html("Yellow means 'yield'.");
   });  

   $("#greenrule").click(function() {
      $("#rules").css("color", "lime").html("Green means 'go'.");
   }); 

   $("#firststat").click(function() {
      $("#stats").css("color", "black").html("The average driver is distracted for at least 5 seconds, which is enough time to travel a football field blindfolded at 55 mph.");
   });

   $("#secondstat").click(function() {
      $("#stats").css("color", "black").html("Since 2010, approximately 660,000 Americans text while driving.");
   });

   $("#thirdstat").click(function() {
      $("#stats").css("color", "black").html("You have a greater chance of getting into an accident within a 5 mile radius from your home than a 50 mile radius from your home.");
   });

   $("#fourthstat").click(function() {
      $("#stats").css("color", "black").html("In 2013, about 31% of traffic deaths were caused by drunk driving.");
   });

  $("#fifthstat").click(function() {
      $("#stats").css("color", "black").html("Out of any age group, teenage drivers have the lowest seat belt usage.");
   });

  $("#q1").hide();
  $("#q2").hide();
  $("#q3").hide();

  $("#trivia").click(function() {
      $("#traffictrivia").css("color", "green", "font-family", "Arial", "font-weight", "bold").html("Traffic Trivia!");
      $("#q1").show();
      $("#q2").show();
      $("#q3").show();
      $("#questions").css("color", "white", "font-style", "italic").html("Click any of the blue buttons to answer the questions. Use the mouse to point to the answer you think is correct. The correct answer is highlighted in green.");
  });

  $("#q1").click(function() {
      $("#questions").css("color", "black").html("Traffic law says that each occupant in the front seat of a passenger vehicle, including the driver must:");
      $("#choice1").css("color", "black").html("a) have a proper tool box.");
      $("#choice2").css("color", "black").html("b) possess a valid driver's license.");
      $("#choice3").css("color", "black").html("c) wear a seat belt.");
      $("#choice4").css("color", "black").html("d) wear a helmet.");

      $("#choice3").hover(function(){
        $(this).css("color", "lime");
        }, function(){
        $(this).css("color", "black");
       });
  });

    $("#q2").click(function() {
      $("#questions").css("color", "black").html("On a divided highway, cars traveling on the opposite side of a stopped school bus are not required to:");
      $("#choice1").css("color", "black").html("a) come to a complete stop.");
      $("#choice2").css("color", "black").html("b) slow down.");
      $("#choice3").css("color", "black").html("c) pay special attention to children.");
      $("#choice4").css("color", "black").html("d) remain attentive.");

      $("#choice1").hover(function(){
        $(this).css("color", "lime");
        }, function(){
        $(this).css("color", "black");
       });

      $("#choice3").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "black");
       });
    }); 

    $("#q3").click(function() {
      $("#questions").css("color", "black").html("Which of the following actions should you take if you experience a suddent tire blow-out on the road?");
      $("#choice1").css("color", "black").html("a) Forcefully apply the brakes.");
      $("#choice2").css("color", "black").html("b) Immediately move to the shoulder of the road.");
      $("#choice3").css("color", "black").html("c) Hit the accelerator.");
      $("#choice4").css("color", "black").html("d) Grasp the steering wheel firmly.");

      $("#choice4").hover(function(){
        $(this).css("color", "lime");
        }, function(){
        $(this).css("color", "black");
       });

      $("#choice1").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "black");
       });

      $("#choice3").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "black");
       });
    });  
});

function blinkRed() 
{
  $("#red").fadeIn(500);
  $("#red").fadeOut(500);
}

function blinkYellow() 
{
  $("#yellow").fadeIn(600);
  $("#yellow").fadeOut(600);
}
 
function blinkGreen() 
{
  $("#green").fadeOut(700);
  $("#green").fadeIn(700);
}
