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

            //Confirming that the player actually wants to skip and didn't just misclick.
            var confirmSkip = window.confirm("Are you sure you'd like to skip this battle?");

            //Player has signaled that they want to skip and then confirmed it. so we skip.
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                //As player wins battles they are awarded money which they can then use to skip fights. Money keeps the player from infinitely skipping battles.
                //subtract money from player for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //player robot attacks enemy robot dealing random damage based on player's attack power.
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);

        console.log(playerName + " attacked " + enemyName + " for " + damage + " damage." + enemyName + " now has " + enemyHealth + " health remaining.");

        //check that the enemy is still alive.
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning battle. Money is used to allow the player to skip battles.
            playerMoney = playerMoney + 20;

            //the player won the battle. moving to next enemy/battle.
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //enemy robot attacks, player loses health equal to enemy's attack value.
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerHealth = Math.max(0, playerHealth - damage);

        console.log(enemyName + " attacked " + playerName + " for " + damage + " damage." + playerName + " now has " + playerHealth + " health remaining.");

        //check to see if the player is still alive.
        if (playerHealth <= 0) {
            window.alert(playerName + " has died.");

            //The player is dead. Game is over.
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    } //end of while loop

} //end of fight()

var startGame = function () {

    //reset player stats for new game
    playerHealth = 100;

    playerAttack = 10;

    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            //The player will fight enemies in the order defined by the program
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight. Math.random will give a random number between 0 and 20.XX. Math.floor will round down to then nearest whole number. Therefore generating a random health between 40 and 60.
            enemyHealth = randomNumber(40, 60);

            //Start the fight.
            fight(pickedEnemyName);

            //if we're still alive and not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {

                var storeConfirm = window.confirm("The fight is over, would you like to visit the store before the next round?");

                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }
    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function 
    endGame();
}

var endGame = function () {
    if (playerHealth > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function () {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
        case "Refill":
            if (playerMoney > 7) {

                window.alert("Refilling player's health by 20 for 7 dollars.");

                //increase health and decrease money of player
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {

                window.alert("You don't have enough money.");
            }

            break;

        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            if (playerMoney > 7) {

                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attk and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {

                window.alert("You don't have enough money.");
            }

            break;

        case "leave":
        case "LEAVE":
        case "Leave":
            window.alert("Leaving the store.");

            break;

        default:
            window.alert("You did not pick a valid option. Try again.");

            shop();

            break;
    }
}

var randomNumber = function (min, max) {

    var value = Math.floor(Math.random() * (max - min + 1) + min);


    return value;
}

//start the game when the page loads
startGame();