

function log(message) {
    console.log(message.toLowerCase());
}

//Cost calculation
function compute() {

    //Calculates the pitch angle
    var degrees = getVal('pitchDegrees');
    log('pitch angle is ' + degrees + ' degrees.');

    //Calculates the cosine of the pitch angle
    if (hasValue(degrees)) {
        var cosPitch = Math.cos(degrees * Math.PI / 180);
        log('pitch angle cosine is ' + cosPitch.toFixed(6));

        //House Width input
        var width = getVal('houseWidth');
        log('house width: ' + width + ' feet.');

        //Calculated the half width of your house width
        if (hasValue(width)) {
            var hypotenuse = (width / 2) / cosPitch;
            log('half-roof width: ' + hypotenuse.toFixed(2) + ' feet');

            //Calculates your roof area
            var length = getVal('houseLength');
            if (hasValue(length)) {
                var roofArea = 2 * area(length, hypotenuse);
                log('roof area: ' + roofArea.toFixed(2) + ' square feet.');

                //Input for the length og the shingles
                var sLength = getVal('shingleLength');
                if (hasValue(sLength)) {
                    var sWidth = getVal('shingleWidth');
                    log('Shingle width in inches: ' + sWidth + ' inches.');
                    if (hasValue(sWidth)) {
                        sWidth = inchesToFeet(sWidth);

                        var shingleArea = area(sLength, sWidth);

                        log('Shingle area: ' + shingleArea.toFixed(2) + ' square feet.');

                        var numberOfShinglesRequired = Math.ceil(roofArea / shingleArea);

                        log('Shingles required: ' + numberOfShinglesRequired);

                        var sCost = getVal('shingleCost');

                        if (hasValue(sCost)) {

                            sCost = parseFloat(sCost);

                            log('Cost per shingle: $' + sCost.toFixed(2));

                            var totalShingleCost = (sCost * numberOfShinglesRequired);

                            log('Total Cost of shingles: $' + totalShingleCost.toFixed(2));

                        }
                    }
                }
            }
        }
    }
}

function getVal(id) {
    //console.log(id);
    return document.getElementById(id).value;
}

function len(someString) {
    return someString.toString().length;
}

function hasValue(value) {
    var exists = (len(value) > 0);
    return exists;
}

function inchesToFeet(inches) {
    return (inches / 12).toFixed(2);
}

function area(length, width) {
    return length * width;
}
