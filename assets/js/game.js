var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";

var enemyHealth = 50;

var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    //player robot attacks, enemy loses health equal to player's attack value.
    enemyHealth = enemyHealth - playerAttack;

    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //enemy robot attacks, player loses health equal to enemy's attack value.
    playerHealth = playerHealth - enemyAttack;

    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

}

fight();