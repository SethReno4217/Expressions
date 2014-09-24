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














    }
}
}
}
}
}
}