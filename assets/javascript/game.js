

var q = [
    'What is R2-D2\'s name often shortened to?',
    'What did Han use to slice open the belly of his tauntaun?',
    'Who was the final rescuer to enter Jabba\'s palace?',
    'Who told Luke, "Join me and I will complete your training"?',
    'What controls a Jedi\'s actions, but also obeys his commands?'
];

var a1 = [
    "<input type=\"radio\" name=\"radio1\" value=\"22\" onclick=\"q1i()\"> 22<br>",
    "<input type=\"radio\" name=\"radio2\" value=\"Lightsaber\" onclick=\"q2c()\"> Lightsaber<br>", //correct
    "<input type=\"radio\" name=\"radio3\" value=\"Leia\" onclick=\"q3i()\"> Leia<br>",
    "<input type=\"radio\" name=\"radio4\" value=\"Chewy, in his own way\" onclick=\"q4i()\"> Chewy<br>",
    "<input type=\"radio\" name=\"radio5\" value=\"The Force\" onclick=\"q5c()\"> The Force<br>"
];

var a2 = [
    "<input type=\"radio\" name=\"radio1\" value=\"R2\" onclick=\"q1c()\"> R2<br>", //correct
    "<input type=\"radio\" name=\"radio2\" value=\"Toothbrush\" onclick=\"q2i()\"> Toothbrush<br>",
    "<input type=\"radio\" name=\"radio3\" value=\"Chewy<\" onclick=\"q3i()\"> Chewy<br>",
    "<input type=\"radio\" name=\"radio4\" value=\"Yoda\" onclick=\"q4i()\"> Yoda<br>",
    "<input type=\"radio\" name=\"radio5\" value=\"Evil\" onclick=\"q5i()\"> Evil<br>"
];

var a3 = [
    "<input type=\"radio\" name=\"radio1\" value=\"RD\" onclick=\"q1i()\"> RD<br>",
    "<input type=\"radio\" name=\"radio2\" value=\"Knife\" onclick=\"q2i()\"> Knife<br>",
    "<input type=\"radio\" name=\"radio3\" value=\"Han\" onclick=\"q3i()\"> Han<br>",
    "<input type=\"radio\" name=\"radio4\" value=\"Darth Vader\" onclick=\"q4c()\"> Darth Vader<br>", //correct
    "<input type=\"radio\" name=\"radio5\" value=\"The Ring\" onclick=\"q5i()\"> The Ring<br>"
];

var a4 = [
    "<input type=\"radio\" name=\"radio1\" value=\"D2\" onclick=\"q1i()\"> D2<br>",
    "<input type=\"radio\" name=\"radio2\" value=\"His hands! Ew\" onclick=\"q2i()\"> His hands<br>",
    "<input type=\"radio\" name=\"radio3\" value=\"Luke\" onclick=\"q3c()\"> Luke<br>", //correct
    "<input type=\"radio\" name=\"radio4\" value=\"Obi-Wan\" onclick=\"q4i()\"> Obi-Wan<br>",
    "<input type=\"radio\" name=\"radio5\" value=\"Pizza\" onclick=\"q5i()\"> Pizza<br>"
];

var n = 0;

var score = 0;
n++;
var wrong = 0;



function begin() {
    seconds = 60;
    $('#disappear').text('');
    $('#message').text('');
    $('#question').text(q[0]);
    $('#option1').html(a1[0]);
    $('#option2').html(a2[0]);
    $('#option3').html(a3[0]);
    $('#option4').html(a4[0]);
    $('#number').text(n++);
    runTimer();
}

function q1c() {
    // $('#answer').html("<div class=\"green\">Correct!</div>");
    // $('#option1').text('');
    // $('#option2').text('');
    // $('#option3').text('');
    // $('#option4').text('');
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/question1-r2d2.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    // $('#next').html("<button class=\"blueButton\" onclick=\"new2()\">Next</button>");
    score++;
    $('#score').text(score);
    $('#question').text(q[1]);
    $('#option1').html(a1[1]);
    $('#option2').html(a2[1]);
    $('#option3').html(a3[1]);
    $('#option4').html(a4[1]);
    $('#next').text('');
    $('#answer').text('');
    $('#number').text(n++);
}

function q1i() {
    // $('#answer').html("<div class=\"red\">Incorrect!</div>");
    // $('#option1').text('');
    // $('#option2').text('');
    // $('#option3').text('');
    // $('#option4').text('');
    // $('#next').html("<button class=\"blueButton\" onclick=\"new2()\">Next</button>");
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/wrong-answer.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    wrong++;
    $('#wrong').text(wrong);
}

function q2c() {
    // $('#answer').html("<div class=\"green\">Correct!</div>");
    // $('#option1').text('');
    // $('#option2').text('');
    // $('#option3').text('');
    // $('#option4').text('');
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/question2-tauntaun.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    // $('#next').html("<button class=\"blueButton\" onclick=\"new3()\">Next</button>");
    score++;
    $('#score').text(score);
    $('#question').text(q[2]);
    $('#option1').html(a1[2]);
    $('#option2').html(a2[2]);
    $('#option3').html(a3[2]);
    $('#option4').html(a4[2]);
    $('#next').text('');
    $('#answer').text('');
    $('#number').text(n++);
}

function q2i() {
    // $('#answer').html("<div class=\"red\">Incorrect!</div>");
    // $('#option1').text('');
    // $('#option2').text('');
    // $('#option3').text('');
    // $('#option4').text('');
    // $('#next').html("<button class=\"blueButton\" onclick=\"new3()\">Next</button>");
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/wrong-answer.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    wrong++;
    $('#wrong').text(wrong);
}

function q3c() {
    $('#answer').html("<div class=\"green\">Correct!</div>");
    $('#option1').text('');
    $('#option2').text('');
    $('#option3').text('');
    $('#option4').text('');
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/question3-luke.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    // $('#next').html("<button class=\"blueButton\" onclick=\"new4()\">Next</button>");
    score++;
    $('#score').text(score);
    $('#question').text(q[3]);
    $('#option1').html(a1[3]);
    $('#option2').html(a2[3]);
    $('#option3').html(a3[3]);
    $('#option4').html(a4[3]);
    $('#next').text('');
    $('#answer').text('');
    $('#number').text(n++);
}

function q3i() {
    // $('#answer').html("<div class=\"red\">Incorrect!</div>");
    // $('#option1').text('');
    // $('#option2').text('');
    // $('#option3').text('');
    // $('#option4').text('');
    // $('#next').html("<button class=\"blueButton\" onclick=\"new4()\">Next</button>");
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/wrong-answer.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    wrong++;
    $('#wrong').text(wrong);
}

function q4c() {
    $('#answer').html("<div class=\"green\">Correct!</div>");
    $('#option1').text('');
    $('#option2').text('');
    $('#option3').text('');
    $('#option4').text('');
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/question4-darth.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    // $('#next').html("<button class=\"blueButton\" onclick=\"new5()\">Next</button>");
    score++;
    $('#score').text(score);
    $('#question').text(q[4]);
    $('#option1').html(a1[4]);
    $('#option2').html(a2[4]);
    $('#option3').html(a3[4]);
    $('#option4').html(a4[4]);
    $('#next').text('');
    $('#answer').text('');
    $('#number').text(n++);
}

function q4i() {
    // $('#answer').html("<div class=\"red001\">Incorrect!</div>");
    // $('#option1').text('');
    // $('#option2').text('');
    // $('#option3').text('');
    // $('#option4').text('');
    // $('#next').html("<button class=\"blueButton\" onclick=\"new5()\">Next</button>");
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/wrong-answer.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    wrong++;
    $('#wrong').text(wrong);
}

function q5c() {
    $('#answer').html("<div class=\"green\">Correct!</div>");
    $('#option1').text('');
    $('#option2').text('');
    $('#option3').text('');
    $('#option4').text('');
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/question5-the-force.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    // $('#next').html("<button class=\"blueButton\" onclick=\"end()\">End of Quiz</button>");
    score++;
    $('#score').text(score);
    $('#message').html("You got " + score + " right!<br>You got " + wrong + " wrong!");
    $('#answer').text('');
    $('#question').text('');
    $('#option1').text('');
    $('#option2').text('');
    $('#option3').text('');
    $('#option4').text('');
    $('#next').html("<button class=\"blueButton\" onclick=\"repeat()\">Play Again</button>");
    stopTimer();
}

function q5i() {
    // $('#answer').html("<div class=\"red\">Incorrect!</div>");
    // $('#option1').text('');
    // $('#option2').text('');
    // $('#option3').text('');
    // $('#option4').text('');
    // $('#next').html("<button class=\"blueButton\" onclick=\"end()\">End of Quiz</button>");
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/wrong-answer.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    wrong++;
    $('#wrong').text(wrong);
}

// function new2() {
//     runTimer();
//     $('#question').text(q[1]);
//     $('#option1').html(a1[1]);
//     $('#option2').html(a2[1]);
//     $('#option3').html(a3[1]);
//     $('#option4').html(a4[1]);
//     $('#next').text('');
//     $('#answer').text('');
//     $('#number').text(n++);
// }

// function new3() {
//     runTimer();
//     $('#question').text(q[2]);
//     $('#option1').html(a1[2]);
//     $('#option2').html(a2[2]);
//     $('#option3').html(a3[2]);
//     $('#option4').html(a4[2]);
//     $('#next').text('');
//     $('#answer').text('');
//     $('#number').text(n++);
// }

// function new4() {
//     runTimer();
//     $('#question').text(q[3]);
//     $('#option1').html(a1[3]);
//     $('#option2').html(a2[3]);
//     $('#option3').html(a3[3]);
//     $('#option4').html(a4[3]);
//     $('#next').text('');
//     $('#answer').text('');
//     $('#number').text(n++);
// }

// function new5() {
//     runTimer();
//     $('#question').text(q[4]);
//     $('#option1').html(a1[4]);
//     $('#option2').html(a2[4]);
//     $('#option3').html(a3[4]);
//     $('#option4').html(a4[4]);
//     $('#next').text('');
//     $('#answer').text('');
//     $('#number').text(n++);
// }

// function end() {
//     $('#message').html("You got " + score + " right!<br>You got " + wrong + " wrong!");
//     $('#answer').text('');
//     $('#question').text('');
//     $('#option1').text('');
//     $('#option2').text('');
//     $('#option3').text('');
//     $('#option4').text('');
//     $('#next').html("<button class=\"blueButton\" onclick=\"repeat()\">Play Again</button>");
// }

function repeat() {
    location.reload();
}
  
var number = 60;

var intervalId = 0;

function runTimer() {
    if (number > 0) {
        stopTimer();
    } else {
        number= 60;
    }
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#show-number").html(number);
    if (number <= 0) {
        stopTimer();
        timesUpMessage();
    }
}

function stopTimer() {
    clearInterval(intervalId);
}

function timesUpMessage() {
    $('#winLoseDisplay').html("<img class=\"img-fluid\" src=\"assets/images/out-of-time.jpg\">");
    $('#winLoseDisplay').show(0).delay(3000).hide(0);
    
    setTimeout(function(){
        location.reload();
    }, 3000);
}
