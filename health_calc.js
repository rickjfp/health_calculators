// Split out the BMI tool include converter
function convert_to_metric() {
    var lbs = parseFloat(document.getElementById("lbs").value);
    var ft = parseFloat(document.getElementById("ft").value);
    var inch = parseFloat(document.getElementById("inch").value);

    // Check if the inputs are negative
    if ( lbs < 0 || ft < 0 || inch < 0 ) {
        alert("Only works with positive numbers.");
        return;
    }

    var weight_convert = (lbs * .4536).toFixed(2) ;
    var height_convert = (( ft * 0.3048 ) + (inch * 0.0254)).toFixed(3) ;

    // Display Conversion
    document.getElementById("weight_convert").innerHTML = "kg: " + weight_convert;
    document.getElementById("height_convert").innerHTML = "m: " + height_convert;
}


// BMI tool - units determined by metric selection
function bmi_calc() {
    
    // Get variables from the input
    var weight_kg = parseFloat(document.getElementById("weight").value);
    var height_m = parseFloat(document.getElementById("height").value);

    // Check if the inputs are negative
    if ( weight_kg < 0 || height_m < 0 ) {
        alert("Only works with positive numbers.");
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
    
    // Check if the inputs are negative
    if ( age < 0 ) {
        alert("Only works with positive numbers.");
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


// Fitness Calc
function fit_points_calc() {
    
    var z1m = parseFloat(document.getElementById("z1m").value) || 0;
    var z2m = parseFloat(document.getElementById("z2m").value) || 0;
    var z3m = parseFloat(document.getElementById("z3m").value) || 0;
    var z4m = parseFloat(document.getElementById("z4m").value) || 0;
    var z5m = parseFloat(document.getElementById("z5m").value) || 0;


    // Check if the inputs are negative
    if ( z1m < 0 || z2m < 0 || z3m < 0 || z4m < 0 || z5m < 0  ) {
        alert("Only works with positive numbers.");
        return;
    }

    // fit points
    var ftpts_wk_target = 150;
    var ftpts = (z1m * 0.5) + (z2m * 1) + (z3m * 1.5) + (z4m * 2) + (z5m * 2.5);

    document.getElementById("fitpts_trg").innerHTML = 
        "Weekly Target: " + ftpts_wk_target;
    document.getElementById("fitpts").innerHTML = 
        "Fitness Points: " + ftpts;
}


// Nutrition Calc
function nutrition_calc() {
    
    // Healthy food servings
    var fruveg = parseFloat(document.getElementById("fruveg").value);
    var wholegrain = parseFloat(document.getElementById("wholegrain").value);
    var leanprotein = parseFloat(document.getElementById("leanprotein").value);
    var healthyfats = parseFloat(document.getElementById("healthyfats").value);

    // Unhealthy treats!
    var oil = parseFloat(document.getElementById("oil").value);
    var processed = parseFloat(document.getElementById("processed").value);
    var sugar = parseFloat(document.getElementById("sugar").value);
    var alcohol = parseFloat(document.getElementById("alcohol").value);

    var score_num = (fruveg + wholegrain + leanprotein + healthyfats) - oil - processed - sugar - alcohol;
    var score_den = 20

    var score = (score_num / score_den)*100

    document.getElementById("nutritionScore").innerHTML = 
        "Score: " + score + "%"

    
}