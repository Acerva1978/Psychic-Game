 // array that lists out all letters.
    //var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var lettersGuessed = [];
    
   


    // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];      

var computerGuess = String.fromCharCode(Math.round(Math.random() * 26) + 97);
       

    
    // console.log(computerGuess);
//function to capture user's keyboard input and make the input lowercase
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();
    
    //document.getElementById('guess').innerHTML = keyPress;
      addLetter(keyPress);

}

//function to catch repeat letters and/or add players guess to lettersGuessed string
function addLetter (usersKeypress) {


 var repeatGuess = lettersGuessed.some(function(item){
       return item === usersKeypress;
       })

          if (repeatGuess) {
      
           } else {
           lettersGuessed.push(usersKeypress);
            
           showLettersGuessed();
           guessMatch(usersKeypress);
        }

 }


function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("playersLetGuess").innerHTML = tempStr;
}

function guessMatch (character) {


    if (character === computerGuess) {
        wins = wins + 1;
        showWins();
        resetVariables ();
        


    } else if (guessesLeft === 0) {
        resetVariables ();

        losses = losses + 1;
        showLosses();
         
       
    } else {
        guessesLeft = guessesLeft -1;
        showGuessesRemaining();
    }
}


function showWins() {
    document.getElementById("letWins").innerHTML = wins;
}


    function showLosses() {
     document.getElementById("letLosses").innerHTML = losses;
   }


function showGuessesRemaining() {
    document.getElementById("letGuesses").innerHTML = guessesLeft;
}


function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 10;
    
}

function startGame() {
    showGuessesRemaining();
    showWins();
    showLosses()
}



startGame();