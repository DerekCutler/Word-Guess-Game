// Scotch Array
let scotches = ["ARDBEG", "BOWMORE", "CRAGGANMORE", "DALWHINNIE", "EDRADOUR",
    "FINLAGGAN", "GLENLIVET", "HILLSIDE", "INCHMOAN", "JURA",
    "KININVIE", "LAGAVULIN", "MACDUFF", "OBAN", "PITTYVAICH",
    "ROSEBANK", "SMOKEHEAD", "TALISKER", "VARIOUS", "WOLFBURN"];

// pull scotch from the array
let scotch = scotches[Math.floor(Math.random() * scotches.length)];

// console.log("SCOTCH: " + scotch)

// Initial definition
let guessesAllowed = 15;

// console.log("guessesAllowed: " + guessesAllowed)

// Inital guessCount
let guessCount = 0;

// console.log("GUESSES: "  +guesses)

// Initial definition 
let key;

// Show Spaces for Scotch Length
let guessTheScotch = [];

// display _ for letter count
for (let x = 0; x < scotch.length; x++) {
    guessTheScotch.push("_");
}

// Show in HTML under: <div id="guessTheScotch"></div>
document.getElementById("guessTheScotch").innerHTML = guessTheScotch;
// 

// event listener for CAP output & ++guess
document.addEventListener("keyup", function (event) {
    key = event.key.toUpperCase();
    guessCount++
    // Scotch Loop
    for (let i = 0; i < scotch.length; i++) {
        // console.log("scotch[i]: " + scotch[i]);

        if (scotch[i] === key) {
            guessTheScotch[i] = key;

            document.getElementById("guessTheScotch").innerHTML = guessTheScotch;
        }
    }

    // check if game is over.
    if (guessTheScotch.indexOf("_") == -1) {
        alert("Congratulations!\nYou won yourself a glass of " + scotch + "!")
    }
    else if (guessCount === guessesAllowed) {
        alert("Looks like you may have had one too many glasses of " + scotch + " already!\nYou lose!!")
    }
    // console.log("guessCount: " + guessCount)
    // console.log(key)
});


// WORKS UPTO THIS

//** */FIN**
















