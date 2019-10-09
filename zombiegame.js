var inquirer = require("inquirer");
var userHealth = 100;
var zombieHealth = 50;

console.log("\nYou're caught in a zombie apocolypse!\nOn your daily trip to the city to find food, you encountered a zombie horde.\nYou were able to distract most of the herd, but one of them saw you!\nHe's running straight at you!");
guessNumber();

function winGame() {
    console.log("You Win");
};

function loseGame() {
    console.log("You Lose");
};

function guessNumber() {

    console.log("\nYour health: " + userHealth);
    console.log("\nThe zombie's health: " + zombieHealth + "\n");

    var randomToGuess = Math.floor(Math.random() * 5) + 1;
    var randomHitPoints = Math.floor(Math.random() * 10) + 1;
    var zombieCritNumber = Math.floor(Math.random() * 10) + 1;
    var critChance = Math.floor(Math.random() * 10) + 1;

    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a number between 1 & 5",
                name: "number"
            },

        ])
        .then(function(result) {
            var userInput = parseFloat(result.number);
            var numberPlusOne = userInput + 1;
            var numberMinusOne = userInput - 1;

            console.log("===============================")
            // console.log("random to guess: " + randomToGuess); 
            // console.log("random hit points " + randomHitPoints); 
            // console.log("user crit number: " + zombieCritNumber);
            // console.log("crit chance " + critChance);
            // console.log(parseInt(userInput));
            // console.log(parseInt(numberPlusOne));
            // console.log(parseInt(numberMinusOne));
            // console.log("===============================")

            if (zombieCritNumber === critChance) {
                randomHitPoints = randomHitPoints * 2;
                console.log("----- CRITICAL MISS -----");
                console.log("yOu ReAlLy WhIfFeD iT...");
                console.log("He hit you for " + randomHitPoints + " hit points")
                userHealth -= randomHitPoints;
            } else if (userInput === randomToGuess) {
                randomHitPoints = randomHitPoints * 2;
                console.log("----- CRITICAL HIT -----");
                console.log("You got gud!");
                console.log("You hit him for " + randomHitPoints + " hit points");
                zombieHealth -= randomHitPoints;
            } else if (userInput + 1 === randomToGuess || userInput - 1 === randomToGuess) {
                console.log("You hit him for " + randomHitPoints + " hit points");
                zombieHealth -=randomHitPoints;
            } else {
                console.log("You missed and he got you");
                console.log("He hit you for " + randomHitPoints + " hit points");
                userHealth -= randomHitPoints;
            };

            if (zombieHealth <= 0) {
                console.log("You struck the finishing blow. You're safe...for now.")
                winGame();
            } else if (userHealth <= 0) {
                console.log("You're bit! You're stating to feel weird...")
                loseGame();
            } else {
            guessNumber()
            }
        })
}