
var dailymiles;
dailymiles = 30;

var costpergallon;
costpergallon = 3.50;

var daysperfillup;
daysperfillup = 14;

var sizeoftank;
sizeoftank = 16;

var mpg = Math.round(((daysperfillup/sizeoftank) * (dailymiles)) *100)/100;

var monthlycost = Math.round((1/mpg) * costpergallon * (dailymiles * 30.417) * 100)/100;
