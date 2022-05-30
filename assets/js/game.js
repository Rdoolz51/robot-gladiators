var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";

var enemyHealth = 50;

var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

        //player robot attacks, enemy loses health equal to player's attack value.
        enemyHealth = enemyHealth - playerAttack;

        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //enemy robot attacks, player loses health equal to enemy's attack value.
        playerHealth = playerHealth - enemyAttack;

        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died.");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    } 
    else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        //confirm player wants to skip

        var conirmSkip = window.confirm("Are you sure you'd like to skip this battle?");

        //if yes(true), leave fight.
        if(confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            //subtract money for player for skipping
            playerMoney = playerMoney - 2;
        }
        //if no(false), ask question again by running fight() again
        else {
            fight();
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
}
fight();