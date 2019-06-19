$(document).ready(function() {

    var questions =[
        'What is R2-D2\'s name often shortened to?',
        'Which hand did Leia use to hold her blaster?',
        'What is the color of Obi-Wan\'s lightsaber?',
        'Who tells Luke, "Join me and I will complete your training"?',
        'Who was the final rescuer to enter Jabba\'s palace?',
        'Who told Luke, "Size matters not"?',
        'What controls a Jedi\'s actions, but also obeys his commands?',
        'What did Han use to slice open the belly of his tauntaun?',
        'What planet did Luke say gave him "the creeps"?'
    ];

    var answers = [
        'R2', // 22, D2, RD
        'Right', // Left, She didn't have one
        'Blue', // Green, Red, Rainbow
        'Darth Vader', // C3P0, Han, Yoda
        'Luke', // R2-D2, C3P0, Leia
        'Yoda', // Anakin, Chewy, Obi-Wan
        'The Force', // Lightsaber, Evil, Pizza
        'Lightsaber', // Toothbrush, Knife, Nothing
        'Dagobah' // Alaska, Tatooine, Hath
    ];



    var randomNumber = '';
     // randomize number of treats puppy wants
     function Numbers(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    

    var values = {
        blue: null,
        yellow: null,
        red: null,
        green: null
    };

    var totalBonesGiven = 0;
    var wins = 0;
    var losses = 0;

    // Use a function to initialize game to guarantee a reset
    function initializeGame() {
        values.blue = Numbers(1, 12);
        values.yellow = Numbers(1, 12);
        values.red = Numbers(1, 12);
        values.green = Numbers(1, 12);
        totalBonesGiven = '';
        randomNumber = Numbers(19, 120);
        $('#random-number').text(randomNumber);
        $("#user-message").empty();
    }

    
    
    // randomize number of each bone value when clicked
    $(".bone").on("click", function() {
        var color = $(this).attr('data-value');
        var valueToAdd = values[color];
        valueToAdd = parseInt(valueToAdd);
        totalBonesGiven = parseInt(valueToAdd) + totalBonesGiven;
        totalBonesGiven = parseInt(totalBonesGiven);
        $('#user-message').text(totalBonesGiven);

        if (totalBonesGiven === randomNumber) {
            wins++;
            $('#wins').text(wins);
            $('#alert-user').text("Perfect! Play again!");
            initializeGame();
        } else if (totalBonesGiven > randomNumber) {
            losses++;
            $('#losses').text(losses);
            $('#alert-user').text("Too many, try again!");
            initializeGame();
        } else {
            $('#alert-user').text("More treats please!");
        }
    });


    





    // Call initializeGame so we can set the state of our app
    initializeGame();
});
