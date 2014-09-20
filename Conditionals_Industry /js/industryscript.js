var getresults;

var responseMessage = "";

var bytevalue = prompt("Enter the amount of Bytes","1024") ;

var selectunit = prompt("Enter the unit of measurement (Bytes,Kb,Mb,Gb) ","Mb") ;

var baseConstantByte = 1024;

var KbExponent = 1 ;

var MbExponent = 2 ;

var GbExponent = 3 ;

//Validate that byte value is a number
var verifyByte = parseFloat(bytevalue);
responseMessage = (verifyByte > 0 ? responseMessage : "bytevalue is not a valid number");
if (responseMessage.length > 0) (console.log(responseMessage));

//Validate that select unit is a string
var isunitValid = (selectunit == "Bytes") || (selectunit == "Kb") || (selectunit == "Mb") || (selectunit == "Gb");
console.log(isunitValid);
if (!isunitValid)(console.log("Unit of measure is not valid") );

if (isunitValid && (verifyByte > 0) ) {

    if (selectunit == "Bytes") {
        getresults = verifyByte; }

            else
            if (selectunit == "Kb") {
                getresults = verifyByte * Math.pow(baseConstantByte, KbExponent); }

            else
            if (selectunit == "Mb") {
                getresults = verifyByte * Math.pow(baseConstantByte, MbExponent); }

            else
            if (selectunit == "Gb") {
                getresults = verifyByte * Math.pow(baseConstantByte, GbExponent); }


    console.log("The amount of "+ bytevalue + " " + selectunit + " = " + getresults + " Bytes ");
                        }
else {
    console.log("One or more inputs are invalid. No calculation is performed.");
}