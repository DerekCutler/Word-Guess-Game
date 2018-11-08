
//  setting up start of game 

resetGame(){
alert("You have 10 guesses to guess the Scotch\nGood luck!!")
randomScotch();
calculateNumberOfLetters();
}


// guesses loop key listener

for (g = 1; g <= 10; i++) {
    // key listener that counts and adds to guesses g
    if (g === 10);
    alert("Maybe you've had a little too much Scotch already");
    resetGame();
}

// Array of Scotches (20 varieties)
var scotches = ["Ardbeg", "Bowmore", "Cragganmore", "Dalwhinnie", "Edradour", "Finlaggan", "Glenlivet", "Hillside", "Inchmoan", "Jura", "Kininvie", "Lagavulin", "Macduff", "Oban", "Pittyvaich", "Rosebank", "Smokehead", "Talisker", "Various", "Wolfburn"],



// random select a Scotch from Array 
    randomScotch(i) {
            Math.floor(Math.random() * scotches.length) = [i];
            scotches[i] = scotch;
            return scotch;
            // console.log(scotch)
        }

// create an array of letter in the word or other way to seperate the characters


// Display Letters Hidden but with underscore 





// If all letters guessed than show

// If all letters guessed that alert("YOU WIN! \nEnjoy yourself a nice glass of Scotch!")


// You Win Else You Lose

//  reset the game 




