var symptoms = ["Fever","Coughing","Boils","Loss of motor skills","Blood in urine","Weakness","Cold Sweat",
    "Chest Pain","Dizziness","Rash","Tenderness","Soreness","Vomiting","Hair loss","Irritable Bowls","Joint Pain"];
console.log("We have a list of " + symptoms.length + " symptoms." );

var age = prompt("Enter your Age", "23");
var streetNumber = prompt("Enter your street number", "1024");

//Validate that the age value is a number
var verifyAge = parseFloat(age);
responseMessage = (verifyAge > 0 ? responseMessage : "Age is not a valid number");
if (responseMessage.length > 0) (console.log(responseMessage));

//Validate that street number is a string
var isunitValid = (selectunit == "Bytes") || (selectunit == "Kb") || (selectunit == "Mb") || (selectunit == "Gb");
console.log(isunitValid);
if (!isunitValid)(console.log("Unit of measure is not valid") );


//Math.floor((Math.random() * 10) + 1);
var ageModulus = 1024 % 23;


console.log("The age modulus of my street number is " + (ageModulus) );
console.log("Therefore I have the following symptoms: " + symptoms[ageModulus] );