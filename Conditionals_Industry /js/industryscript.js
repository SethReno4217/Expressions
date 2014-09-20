var getresults;

var bytevalue = 10000;

var selectunit = "Gb";

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