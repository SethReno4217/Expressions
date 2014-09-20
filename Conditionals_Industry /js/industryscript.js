var getresults;

var bytevalue = prompt("Enter the amount of Bytes","1024") ;

var selectunit = prompt("Enter the unit of measurement (Kb,Mb,Gb) ","Mb") ;

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

console.log(getresults);