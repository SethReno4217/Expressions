function log(message) {
    console.log(message.toLowerCase());
}

function compute() {

    var degrees = getVal('pitchDegrees');
    log('pitch angle is ' + degrees + ' degrees.');

    if (hasValue(degrees)) {
        var cosPitch = Math.cos(degrees * Math.PI / 180);
        log('pitch angle cosine is ' + cosPitch.toFixed(6));

        var width = getVal('houseWidth');
        log('house width: ' + width + ' feet.');

        if (hasValue(width)) {
            var hypotenuse = (width / 2) / cosPitch;
            log('half-roof width: ' + hypotenuse.toFixed(2) + ' feet');

            var length = getVal('houseLength');
            if (hasValue(length)) {
                var roofArea = 2 * area(length, hypotenuse);
                log('roof area: ' + roofArea.toFixed(2) + ' square feet.');

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