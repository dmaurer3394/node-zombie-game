var inquirer = require("inquirer");
var userHealth = 100;
var zombieHealth = 50;
var randomMessage = 0;
var criticalMessages = ["You knocked his arm off!", "You got gud!", "You dropped your weapon, but it cut his foot off!", "With a swing, you got him right in the knee!", "Headshot!", "Right in the stomach! He sure felt that!", "In just a moment, you delivered a perfect strike!", "Swung for his head, hit his shoulder. It seems to be more effective..."];
var critMissMessages = ["You really missed him this time...", "yOu ReAlLy WhIfFeD iT...", "I hope you weren't aiming for the ground...", "You do know this is life and death, right?", "You're not planting flowers, you're fighting a zombie!", "Next time, just aim for the torso...", "Swing and a miss..."];

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
                randomMessage = Math.floor(Math.random() * critMissMessages.length);
                console.log(critMissMessages[randomMessage]);
                console.log("He hit you for " + randomHitPoints + " hit points")
                userHealth -= randomHitPoints;
            } else if (userInput === randomToGuess) {
                randomHitPoints = randomHitPoints * 2;
                console.log("----- CRITICAL HIT -----");
                randomMessage = Math.floor(Math.random() * criticalMessages.length);
                console.log(criticalMessages[randomMessage]);
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
                console.log("===============================")
                console.log("You struck the finishing blow. You're safe...for now.")
                winGame();
            } else if (userHealth <= 0) {
                console.log("===============================")
                console.log("You're bit! You're stating to feel weird...")
                loseGame();
            } else {
            guessNumber()
            }
        })
}