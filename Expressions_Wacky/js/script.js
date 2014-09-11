alert("BE SURE YOU ENTER THE RIGHT INFORMATION!");
//*Enter your Birth Month
var BirthMonth = 10;

//*Enter your Birth Date
var BirthDate = 24;

//*Enter the LAST 2 digits of your Birth Year
var BirthYear = 90;

//*Birthday Calculation, DO NOT CHANGE


var var1 = BirthMonth + 18; // Add 18 to your Birth month

var var2 = var1 * 25; // Multiply by 25

var var3 = var2 - 333; // Subtract 333

var var4 = var3 * 8; // Multiply by 8

var var5 = var4 - 554; // Subtract 554

var var6 = var5 / 2; // Divide by 2

var var7 = var6 + BirthDate; // Add your Birth date

var var8 = var7 * 5; // Multiply by 5

var var9 = var8 + 692; // Add 692

var var10 = var9 * 20; // Multiply by 20

var var11 = var10 + BirthYear; // Add the last 2 digits of your birth year

var ExactBirthDay = var11 - 32940; // Subtract 32940 to get your complete date of birth

var String1 = "Your Exact Date of Birth is ";

console.log(String1.concat (ExactBirthDay));