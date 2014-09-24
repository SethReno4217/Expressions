function findFactors() {

    var noCommonfactors = [0];

    var value1 = 20;

    var value2 = 85;


    if ( isNaN( value1 ) || isNaN( value2 ) ) {

        alert( "Please enter valid number values" );

        noCommonfactors.reset();

        return;

    }


        if ( value1 == 0 || value2 == 0 ) {

            alert( "No common factors" );

            return;

        }

    value1 = Math.abs( value1 );

    value2 = Math.abs( value2 );



    var answer = "1";



    for ( var x = 2; x < Math.min( value1, value2 ); x ++ ) {

        var check1 = value1 / x;



        if ( check1 == Math.round( check1 ) ) {

            var check2 = value2 / x;

            if ( check2 == Math.round( check2 ) ) {

                answer += ", " + x;




            }

        }

    }

    console.log( "value1 = " + value1 + "\nvalue2 = " + value2 + "\nCommon Factors: " + answer );

}
console.log(findFactors());