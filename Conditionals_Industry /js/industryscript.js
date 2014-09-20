var getresults;

var responseMessage = "";

var bytevalue = prompt("Enter the amount of Bytes","1024") ;

var selectunit = prompt("Enter the unit of measurement (Kb,Mb,Gb) ","Mb") ;

//Validate that byte value is a number
var verifyByte = parseFloat(bytevalue);
responseMessage = (bytevalue > 0 ? responseMessage : "bytevalue is not a valid number");
if (responseMessage.length > 0) (console.log(responseMessage));

//Validate that select unit is a string


if (selectunit == "Bytes") {
    getresults = bytevalue; }

        else
        if (selectunit == "Kb") {
            getresults = bytevalue * 1024; }

        else
        if (selectunit == "Mb") {
            getresults = bytevalue * 1024 * 1024; }

        else
        if (selectunit == "Gb") {
            getresults = bytevalue * 1024 * 1024 * 1024; }

console.log("The amount of "+ bytevalue + " " + selectunit + " = " + getresults + " Bytes ");
