//Estimate of how many miles you drive a day
var dailymiles;
dailymiles = 30;

//The cost of gas per gallon
var costpergallon;
costpergallon = 3.50;

//The amount of days in between fill ups
var daysperfillup;
daysperfillup = 14;

//The size of the gas tank in your vehicle
var sizeoftank;
sizeoftank = 16;

//This will calculate your MPG. Days per fill up divided by the size of your tank multiplied by your daily miles rounded.
var mpg = Math.round(((daysperfillup/sizeoftank) * (dailymiles)) *100)/100;

//This will calculate your expected monthly cost
var monthlycost = Math.round((1/mpg) * costpergallon * (dailymiles * 30.417) * 100)/100;

//This is the message that will display in the console of your browser
console.log(("Your monthly total cost for gas is $") + monthlycost);
console.log(("Your yearly total for gas is $") + monthlycost * 12);
console.log(("If you have multiple vehicles, just simply input the information for the other vehicle " +
               "and then add the two totals together "));