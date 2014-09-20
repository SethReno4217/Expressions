function log(message) {
    console.log(message.toLowerCase());
}

//Roofing cost calculator
function compute() {

    //Calculates the pitch angle of your roof
    var degrees = getVal('pitchDegrees');
    log('pitch angle is ' + degrees + ' degrees.');

    //Calculates the cosine of the pitch angle
    if (hasValue(degrees)) {
        var cosPitch = Math.cos(degrees * Math.PI / 180);
        log('pitch angle cosine is ' + cosPitch.toFixed(6));

        //Calculates the house width
        var width = getVal('houseWidth');
        log('house width: ' + width + ' feet.');