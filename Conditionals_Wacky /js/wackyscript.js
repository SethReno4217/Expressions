var symptoms = ["Fever","Coughing","Boils","Loss of motor skills","Blood in urine","Weakness","Cold Sweat",
    "Chest Pain","Dizziness","Rash","Tenderness","Soreness","Vomiting","Hair loss","Irritable Bowls","Joint Pain"];

var age = prompt("Enter your Age", "23");

var streetNumber = prompt("Enter your street number", "1024");

var responseMessage = "";

var symptomModulus;

//Validate that the age value is a number
var verifyAge = parseInt(age);

responseMessage = (verifyAge > 0 ? responseMessage : "Age is not a valid number");

if (responseMessage.length > 0) (console.log(responseMessage));

//Validate that the age value is a number
var verifyStreet = parseInt(streetNumber);

responseMessage = (verifyStreet > 0 ? responseMessage : "Street number is not a valid number");

if (responseMessage.length > 0) (console.log(responseMessage));

if ((verifyStreet > 0) && (verifyAge > 0) ) {

    symptomModulus = (verifyStreet * verifyAge) % symptoms.length;

    console.log("Based on my street number and my age, my symptom is " + symptoms[symptomModulus] );

}
else {
    console.log("I can't tell whats wrong with you.");
}
console.log("I think I should mention that I am not a doctor.");




//Math.floor((Math.random() * 10) + 1);