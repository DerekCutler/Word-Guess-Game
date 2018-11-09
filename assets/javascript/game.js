let scotches = ["Ardbeg", "Bowmore", "Cragganmore", "Dalwhinnie", "Edradour", "Finlaggan", "Glenlivet", "Hillside", "Inchmoan", "Jura", "Kininvie", "Lagavulin", "Macduff", "Oban", "Pittyvaich", "Rosebank", "Smokehead", "Talisker", "Various", "Wolfburn"];
let scotch = scotches[Math.floor(Math.random() * scotches.length)];
let g = 10;
let keyPressed
let guessTheScotch = [];
for (let x = 0; x < scotch.length; x++) {
    guessTheScotch.push(" _ ");
}

document.getElementById("guessTheScotch").innerHTML = guessTheScotch.join("");

document.addEventListener("keypress", function (pressed) {
    keyPressed = pressed.key.toUpperCase();

    for (var i = 0; i < scotch.length; i++) {
        if (scotch.charAt[i] === keyPressed) {
            if (i !== -1) {
                guessTheScotch[i] = keyPressed;
                document.getElementById("guessTheScotch").innerHTML = guessTheScotch.join(" ");
            }
            else {g--}
        }

    }



    console.log(keyPressed);
});
//here****

console.log(guessTheScotch);

console.log(scotch);


console.log(keyPressed)

// function: resetGame(){
//     alert("You have 10 guesses to guess the Scotch\nGood luck!!")
//     randomScotch();
//     calculateNumberOfLetters();
// }


// // guesses loop key listener
// document.onkeyup() {
//     f{
//         if (g < 11) {
//             alert("You have " + (10 -= g) + " guesses left.")
//         }
//         else {
//             alert("Maybe you've had a little too much Scotch already...\nDo you want to try again?");
//             resetGame();
//         }
//     }



//     // Array of Scotches (20 varieties)
//     var scotches = ["Ardbeg", "Bowmore", "Cragganmore", "Dalwhinnie", "Edradour", "Finlaggan", "Glenlivet", "Hillside", "Inchmoan", "Jura", "Kininvie", "Lagavulin", "Macduff", "Oban", "Pittyvaich", "Rosebank", "Smokehead", "Talisker", "Various", "Wolfburn"],



//         // random select a Scotch from Array 
//         function randomScotch(i) {
//             scotches[i] = scotch;
//             return scotch;
//             // console.log(scotch)
//         }

//     // create an array of letter in the word or other way to seperate the characters


//     // Display Letters Hidden but with underscore 





//     // If all letters guessed than show

//     // If all letters guessed that alert("YOU WIN! \nEnjoy yourself a nice glass of Scotch!")


//     // You Win Else You Lose

//     //  reset the game 

//     //  setting up start of game 

//     resetGame(){
//         alert("You have 10 guesses to guess the Scotch\nGood luck!!")
//         randomScotch();
//         calculateNumberOfLetters();
//     }


//     // guesses loop key listener

//     for (g = 1; g <= 10; i++) {
//         // key listener that counts and adds to guesses g
//         if (g === 10);
//         alert("Maybe you've had a little too much Scotch already");
//         resetGame();
//     }

//     // Array of Scotches (20 varieties)




//         // random select a Scotch from Array 
//         randomScotch(i) {
//             Math.floor(Math.random() * scotches.length) = [i];
//             scotches[i] = scotch;
//             return scotch;
//             // console.log(scotch)
//         }

// // create an array of letter in the word or other way to seperate the characters


// // Display Letters Hidden but with underscore 





// // If all letters guessed than show

// // If all letters guessed that alert("YOU WIN! \nEnjoy yourself a nice glass of Scotch!")


// // You Win Else You Lose

// //  reset the game 




