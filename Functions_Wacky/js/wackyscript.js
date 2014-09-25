//Roll some Dice!
//Wont make you better IRL

//Random dice roll calculation

var diceSides = prompt("Enter how many sides the dice has" , "8");
var forceofThrow = prompt("Enter how hard you want to throw the dice!" , "10");

function dice()
{
    return Math.floor(diceSides*Math.random()+forceofThrow);
}

//Displays your roll in an alert, refresh the page to roll again!
function showDice()
{
    a=0;
    b=0;
    a=dice();
    b=dice();
    alert("You got "+a+" and "+b+" together that is "+(a+b));
}
console.log(showDice());