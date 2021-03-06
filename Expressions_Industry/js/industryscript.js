//*Enter the number of degrees of the pitch angle
var degrees = 30;
console.log('pitch angle is ' + degrees + ' degrees.');

//*Calculates the cosine of pitch angle of the roof, writes the cosine to the console to verify that it
// was calculated correctly. All that is needed to calculate this is the degrees of the pitch angle.
var cosPitch = Math.cos(degrees * Math.PI / 180);
console.log('pitch angle cosine is ' + cosPitch.toFixed(6));

//*Input the width of your house
var HouseWidth = 20;
console.log('house width: ' + HouseWidth + ' feet.');

//*Calculates the hypotenuse of your roof
var hypotenuse = (HouseWidth / 2) / cosPitch;
console.log('half-roof width: ' + hypotenuse.toFixed(2) + ' feet');

//*Enter the Length of your house
var HouseLength = 50;

//*Calculates the total roof area
var roofArea = 2 * HouseLength * hypotenuse;
console.log('roof area: ' + roofArea.toFixed(2) + ' square feet.');

//*Enter the length of a roof shingle (s)
var sLength = 1.5;

//*Enter the width of a shingle
var sWidth = 10;
console.log('Shingle width in inches: ' + sWidth + ' inches.');

//*Calculates the shingle width to feet
var sWidthFeet = sWidth / 12.;

//*Calculates the area of the shingles on your roof
var shingleArea = sLength * sWidthFeet;
console.log('Shingle area: ' + shingleArea.toFixed(2) + ' square feet.');

//*Calculates the amount of shingles needed
var numberOfShinglesRequired = Math.ceil(roofArea / shingleArea);

//*Enter the price of a shingle
var shingleCost = 4;

//*Calculates the total cost
var totalShingleCost = shingleCost * numberOfShinglesRequired;
console.log('Total Cost of shingles: $' + totalShingleCost.toFixed(2));
