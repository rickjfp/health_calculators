// Split out the BMI tool include converter
function convert_to_metric() {
    var lbs = parseFloat(document.getElementById("lbs").value);
    var ft = parseFloat(document.getElementById("ft").value);
    var inch = parseFloat(document.getElementById("inch").value);

    // Check if the inputs are valid numbers
    if (isNaN(lbs) || isNaN(ft) || isNaN(inch) 
        || lbs <= 0 || ft <= 0 || inch < 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }
}


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



// Exercise Time Tracker
function hr_zone_calc() {

    // Set zone variables
    var age = parseFloat(document.getElementById("age").value);
    
    // Check if the inputs are valid numbers
    if (isNaN(age) || age <= 0 || age > 110) {
        alert("Please enter valid age.");
        return;
    }

    var maxHeartRate = 211 - (0.64 * age);
    
    document.getElementById("z1_hr").innerHTML = 
        "Zone 1 (50%-60%): " + Math.round(maxHeartRate * 0.5) + "-" + Math.round(maxHeartRate * 0.6) + " bpm";
    document.getElementById("z2_hr").innerHTML = 
        "Zone 2 (60%-70%): " + Math.round(maxHeartRate * 0.6) + "-" + Math.round(maxHeartRate * 0.7) + " bpm";
    document.getElementById("z3_hr").innerHTML = 
        "Zone 3 (70%-80%): " + Math.round(maxHeartRate * 0.7) + "-" + Math.round(maxHeartRate * 0.8) + " bpm";
    document.getElementById("z4_hr").innerHTML = 
        "Zone 4 (80%-90%): " + Math.round(maxHeartRate * 0.8) + "-" + Math.round(maxHeartRate * 0.9) + " bpm";
    document.getElementById("z5_hr").innerHTML = 
        "Zone 5 (90%-100%): " + Math.round(maxHeartRate * 0.9) + "-" + Math.round(maxHeartRate * 1) + " bpm";
}

function fit_points_calc() {
    
    var z1m = parseFloat(document.getElementById("z1m").value);
    var z2m = parseFloat(document.getElementById("z2m").value);
    var z3m = parseFloat(document.getElementById("z3m").value);
    var z4m = parseFloat(document.getElementById("z4m").value);
    var z5m = parseFloat(document.getElementById("z5m").value);

    // Check if the inputs are valid numbers
    if ( isNaN(z1m) || z1m < 0 
        || isNaN(z2m) || z2m < 0
        || isNaN(z3m) || z3m < 0 
        || isNaN(z4m) || z4m < 0 
        || isNaN(z5m) || z5m < 0 ) {
        alert("Please enter valid minutes.");
        return;
    }

    // fit points
    var ftpts_wk_target = 150;
    var ftpts = (z1m * 0.5) + (z2m * 1) + (z3m * 1) + (z4m * 1.5) + (z5m * 2);

    document.getElementById("fitpts").innerHTML = 
        "Weekly Target: " + ftpts_wk_target;
    document.getElementById("fitpts").innerHTML = 
        "Fitness Points: " + ftpts;
}