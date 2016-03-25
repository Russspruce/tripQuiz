$(document).ready(function() {
  $("form#charQuiz").submit(function() {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5]:checked").val());
    var total = 0;
    total = (answer1+answer2+answer3+answer4+answer5)
    if (5 <= total && total <=10) {
      alert("")
    } else if (11 <= total && total <=14) {
      alert("")
    } else if (total === 25) {
      alert("")
    }
  });
});
