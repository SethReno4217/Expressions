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

var mpg = Math.round(((daysperfillup/sizeoftank) * (dailymiles)) *100)/100;

var monthlycost = Math.round((1/mpg) * costpergallon * (dailymiles * 30.417) * 100)/100;

console.log(("Your monthly total cost for gas is $") + monthlycost);
