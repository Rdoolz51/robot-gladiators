//Define the player robot
var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;

//Define the enemy robot
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;

var enemyAttack = 12;

var fight = function (enemyName) {

    //repeat and execute as long as the enemy robot is alive

    while (playerHealth > 0 && enemyHealth > 0) {

        //ask player if theyd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if the player picks 'skip' confirm and then stop the loop.
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {

            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip this battle?");

            //if yes(true), leave fight.
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                //subtract money for player for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //player robot attacks, enemy loses health equal to player's attack value.
        enemyHealth = enemyHealth - playerAttack;

        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() since enemy is dead
            break;
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

            //leave while() since player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    } //end of while loop

} //end of fight()

for (var i = 0; i < enemyNames.length; i++) {

    if(playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        //pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        //reset enemyHealth before starting new fight
        enemyHealth = 50;

        //use debugger to pause script from running and check whats going on at that moment in the code
        //debugger;

        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter

        fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}