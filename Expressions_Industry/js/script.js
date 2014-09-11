//*Enter the number of degrees of the pitch angle
var degrees;
        degrees = 30;
            console.log('pitch angle is ' + degrees + ' degrees.');

//*Calculates the cosine of pitch angle of the roof, writes the cosine to the console to verify that it
// was calculated correctly. All that is needed to calculate this is the degrees of the pitch angle.
var cosPitch;
        cosPitch = Math.cos(degrees * Math.PI / 180);
            console.log('pitch angle cosine is ' + cosPitch.toFixed(6));

//*Input the width of your house
var HouseWidth;
        HouseWidth = 20;
            console.log('house width: ' + HouseWidth + ' feet.');

//*Calculates the hypotenuse of your roof
var hypotenuse;
        hypotenuse = (HouseWidth / 2) / cosPitch;
            console.log('half-roof width: ' + hypotenuse.toFixed(2) + ' feet');

//*Enter the Length of your house
var HouseLength;
        HouseLength = 50;

//*Calculates the total roof area
var roofArea;
        roofArea = 2 * HouseLength * hypotenuse;
            console.log('roof area: ' + roofArea.toFixed(2) + ' square feet.');

//*Length of the roof shingle (s)