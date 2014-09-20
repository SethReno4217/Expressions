function log(message) {
    console.log(message.toLowerCase());
}

//Roofing cost calculator
function compute() {

    //Calculates the pitch angle of your roof
    var degrees = getVal('pitchDegrees');
    log('pitch angle is ' + degrees + ' degrees.');
