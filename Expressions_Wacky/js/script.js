alert("BE SURE YOU ENTER THE RIGHT INFORMATION!");
//*Enter your Birth Month
var BirthMonth;
        BirthMonth = 10;

//*Enter your Birth Date
var BirthDate;
        BirthDate = 24;

//*Enter the LAST 2 digits of your Birth Year
var BirthYear;
        BirthYear = 90;

//*Birthday Calculation, DO NOT CHANGE
var var1 = BirthMonth + 18

var var2 = var1 * 25;

var var3 = var2 - 333;

var var4 = var3 * 8;

var var5 = var4 - 554;

var var6 = var5 / 2;

var var7 = var6 + BirthDate;

var var8 = var7 * 5;

var var9 = var8 + 692;

var var10 = var9 * 20;

var var11 = var10 + BirthYear;

var ExactBirthDay = var11 - 32940;

var String1 = "Your Exact Date of Birth is";

console.log(String1.concat(ExactBirthDay));