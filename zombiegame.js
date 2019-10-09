var inquirer = require("inquirer");
var userHealth = 100;
var zombieHealth = 30;

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
    var randomHitPoints = Math.floor(Math.random() * 5) + 1;
    var userCritNumber = Math.floor(Math.random() * 15) + 1;
    var critChance = Math.floor(Math.random() * 15) + 1;

    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a number between 1 & 5",
                name: "number"
            },

        ])
        .then(function(result) {

            console.log("===============================")
            // console.log("random to guess: " + randomToGuess); 
            // console.log("random hit points " + randomHitPoints); 
            // console.log("user crit number: " + userCritNumber);
            // console.log("crit chance " + critChance)
            // console.log("===============================")

            if (userCritNumber === critChance) {
                randomHitPoints = randomHitPoints * 2
            }

            if (userCritNumber === critChance) {
                // console.log("critical hit points: " + randomHitPoints);
                console.log("----- CRITICAL HIT -----");
            };

            if (result.number == randomToGuess) {
                console.log("Great guess!\n");
                console.log("You got him for " + randomHitPoints + " hit points!");
                zombieHealth -= randomHitPoints;
            } else {
                console.log("Wrong guess...\n");
                console.log("He got you for " + randomHitPoints + " hit points!");
                userHealth -= randomHitPoints;
            }

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