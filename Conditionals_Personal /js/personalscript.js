var playerHP = prompt("Enter your Health Points ", "50");

var selectWeapon = prompt("Select your weapon (Sword, Axe, Bow) ", "Sword");

var currentEnemyHP = 0;

var currentPlayerHP;

var meleeDmg = 0;

var swordMaxDmg = 12;

var axeMaxDmg = 8;

var bowMaxDmg = 5;

var responseMessage = "";

//Validate if Health Points are a number
var verifyPlayerHP = parseInt(playerHP);
currentPlayerHP = verifyPlayerHP;

responseMessage = (verifyPlayerHP > 0 ? responseMessage : "Health Points is not a valid number");

if (responseMessage.length > 0) (console.log(responseMessage));

//Validate a proper Weapon was chosen
var isWeaponValid = (selectWeapon == "Sword") || (selectWeapon == "Axe") || (selectWeapon == "Bow");
console.log(isWeaponValid);
if (!isWeaponValid)(console.log("You Have not chosen an appropriate Weapon!") );

//If both inputs check out, the calculation will proceed.
if (isWeaponValid && (verifyPlayerHP > 0) ) {
    currentEnemyHP = Math.floor(verifyPlayerHP * 1.1);
    console.log("The enemy has " + currentEnemyHP + " to start");
    console.log("You have " + currentPlayerHP + " to start");

    var totalRounds = 0;

    while ((currentEnemyHP > 0) && (currentPlayerHP > 0)) {

        totalRounds += 1;

        //Battle code, the fight is eye for and eye.


        //Players attack phase
        if (selectWeapon == "Sword") {
            meleeDmg = Math.floor((Math.random() * swordMaxDmg));
             }

        if (selectWeapon == "Axe") {
            meleeDmg = Math.floor((Math.random() * axeMaxDmg));
             }

        if (selectWeapon == "Bow") {
            meleeDmg = Math.floor((Math.random() * bowMaxDmg));
             }

        currentEnemyHP -= meleeDmg;

        var myDmg = 0;

        //Enemy attack phase
        if (selectWeapon == "Sword") {
            myDmg = Math.floor((Math.random() * swordMaxDmg));
        }

        if (selectWeapon == "Axe") {
            myDmg = Math.floor((Math.random() * axeMaxDmg));
        }

        if (selectWeapon == "Bow") {
            myDmg = Math.floor((Math.random() * bowMaxDmg));
        }

        currentPlayerHP -= myDmg;

        //It's only a flesh wound. (Battle Report)
        console.log("The enemy hit you for " + myDmg + " hit points of damage. You have "
            + currentPlayerHP + " left.");

        console.log("You hit the enemy for " + meleeDmg + " hit points of damage. The enemy has "
            + currentEnemyHP + " left.");


    }
}
console.log("This fight took " + totalRounds + " rounds of glorious battle! Good job, Cupcake!");