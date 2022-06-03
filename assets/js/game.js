var fight = function (enemy) {

    //repeat and execute as long as the enemy robot is alive

    while (playerInfo.health > 0 && enemy.health > 0) {

        console.log(enemy.attack);
        console.log(playerInfo.attack);

        //ask player if theyd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if the player picks 'skip' confirm and then stop the loop.
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {

            //Confirming that the player actually wants to skip and didn't just misclick.
            var confirmSkip = window.confirm("Are you sure you'd like to skip this battle?");

            //Player has signaled that they want to skip and then confirmed it. so we skip.
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                //As player wins battles they are awarded money which they can then use to skip fights. Money keeps the player from infinitely skipping battles.
                //subtract money from player for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }

        //player robot attacks enemy robot dealing random damage based on player's attack power.
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);

        console.log(playerInfo.name + " attacked " + enemy.name + " for " + damage + " damage." + enemy.name + " now has " + enemy.health + " health remaining.");

        //check that the enemy is still alive.
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award player money for winning battle. Money is used to allow the player to skip battles.
            playerInfo.money = playerInfo.money + 20;

            //the player won the battle. moving to next enemy/battle.
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        //enemy robot attacks, player loses health equal to enemy's attack value.
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);

        console.log(enemy.name + " attacked " + playerInfo.name + " for " + damage + " damage." + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

        //check to see if the player is still alive.
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died.");

            //The player is dead. Game is over.
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }

    } //end of while loop

} //end of fight()

var startGame = function () {

    //reset player stats for new game
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {

        if (playerInfo.health > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            //The player will fight enemies in the order defined by the program
            var pickedEnemyObj = enemyInfo[i];

            //reset enemy.health before starting new fight. Math.random will give a random number between 0 and 20.XX. Math.floor will round down to then nearest whole number. Therefore generating a random health between 40 and 60.
            pickedEnemyObj.health = randomNumber(40, 60);

            pickedEnemyObj.attack = randomNumber(10,14);

            //Start the fight.
            fight(pickedEnemyObj);

            //if we're still alive and not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

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
    if (playerInfo.health > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();

            break;

        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            playerInfo.upgradeAttack();

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

//Define the player robot
var playerInfo = {

    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {

            window.alert("Refilling Player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }

    }
}

//Define the enemy robot
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14),
        shield: {
            type: "Wood",
            strength: 10
        }
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];



//start the game when the page loads
startGame();