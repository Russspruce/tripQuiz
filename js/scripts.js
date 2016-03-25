$(document).ready(function() {


  $("button#results").click(function() {
    $("#hide").fadeIn(1500);
  });

  $("form#tripQuiz").submit(function() {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=question1]:checked").val());
    var answer2 = parseInt($("input:radio[name=question2]:checked").val());
    var answer3 = parseInt($("input:radio[name=question3]:checked").val());
    var answer4 = parseInt($("input:radio[name=question4]:checked").val());
    var answer5 = parseInt($("input:radio[name=question5]:checked").val());
    var total = 0;

    total = (answer1+answer2+answer3+answer4+answer5)

    if (total === 5 || total === 4 || total === 3) {
         // $(".resultOne")toggle();
         // alert("This is a 3 test")
         $(location).attr("href", "result1.html");
       }
     else if (total === 6 || total === 7 ) {
         // $(".resultOne")toggle();
         // alert("This is a 3 test")
         $(location).attr("href", "result2.html");
       }
 else if (total === 8) {
      // $(".resultOne")toggle();
      // alert("This is a 3 test")
      $(location).attr("href", "result3.html");
    }
  });
});
