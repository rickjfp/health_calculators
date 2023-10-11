
// BMI tool - units determined by metric selection
function bmi_calc() {
    
    // Get variables from the input
    var unitType = document.getElementById("unitType").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Label the input fields
    if (unitType === "metric") {
        document.getElementById("weightLabel").innerHTML = "Weight (kg):";
        document.getElementById("heightLabel").innerHTML = "Height (m):";
    } else if (unitType === "standard") {
        document.getElementById("weightLabel").innerHTML = "Weight (lbs):";
        document.getElementById("heightLabel").innerHTML = "Height (ft):";
    }

    // Convert any standard calcs to metric
    if ( unitType == "standard") {
        var weight_kg = weight / 2.20462;
        var height_m = height / 3.28084;
    } else if (unitType == "metric") {
        var weight_kg = weight;
        var height_m = height;
    }

    // Check if the inputs are valid numbers
    if (isNaN(weight_kg) || isNaN(height_m) || weight_kg <= 0 || height_m <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Calculate BMI
    var bmi = weight_kg / (height_m * height_m);

    // Display the BMI
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
    
    // Determine BMI category
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display BMI category
    document.getElementById("category").innerHTML = "Category: " + category;
}