//Roll some Dice!
//Wont make you better IRL

//Random dice roll calculation
function dice()
{
    return Math.floor(6*Math.random()+1);
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