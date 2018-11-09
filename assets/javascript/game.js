// Scotch Array
var scotches = ["ARDBEG", "BOWMORE", "CRAGGANMORE", "DALWHINNIE", "EDRADOUR",
    "FINLAGGAN", "GLENLIVET", "HILLSIDE", "INCHMOAN", "JURA",
    "KININVIE", "LAGAVULIN", "MACDUFF", "OBAN", "PITTYVAICH",
    "ROSEBANK", "SMOKEHEAD", "TALISKER", "VARIOUS", "WOLFBURN"];

// pull scotch from the array
var scotch = scotches[Math.floor(Math.random() * scotches.length)];

console.log("SCOTCH: " +scotch)

// Initial definition
var guessesAllowed = 10;

console.log("guessesAllowed: " +guessesAllowed)

// Inital guessCount
var guessCount = [];
console.log("guessCount: " +guessCount)

// console.log("GUESSES: "  +guesses)

// Initial definition NOT SURE IF NEEDED
var keyPressed; 

// Show Spaces for Scotch Length
var guessTheScotch = [];
for (var x = 0; x < scotch.length; x++) {
    guessTheScotch.push(" _ ");
}

// Show in HTML under: <div id="guessTheScotch"></div>
document.getElementById("guessTheScotch").innerHTML = guessTheScotch;


// WORKS UPTO THIS?




//** */FIN**
















