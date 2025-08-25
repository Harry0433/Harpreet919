// Ternary Operator Example
function Ride_Function() {
    let Height = document.getElementById("Height").value;
    let CanRide = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = CanRide + " to ride.";
}

// Constructor Example
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Creating new objects
let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Function to display constructor object
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

// Nested Function Example
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();

    function Count() {
        let Starting_point = 9;
        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point;
    }
}
