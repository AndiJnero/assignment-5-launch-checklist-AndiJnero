// Write your JavaScript code here!

const { formSubmission, validateInput, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let document = window.document
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems");

    list.style.visibility = "hidden";
    
    let testForm = document.querySelector("testForm");
    testForm.addEventListener("submit", function(event) {
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        

        //After validation, update a list of what is currently ready or not ready for the shuttle launch.
        //Flags  whether the shuttle is ready for launch & by using the DOM to update the CSS
        if (validateInput(pilot.value) == "Empty" || validateInput(copilot.value) == "Empty" || validateInput(fuelLevel.value) == "Empty" || validateInput(cargoLevel.value) == "Empty") {
            list.style.visibility = "hidden";
            alert( "All fields required"); 
            event.preventDefault();
        }
        if (validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number") {
            list.style.visibility = "hidden";
            alert( "Fuel Level & Cargo Mass are numbers only"); 
            event.preventDefault();
        }
        if(validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a number") {
            list.style.visibility = "hidden";
            alert( "Pilot & CoPilot's names should be letters"); 
            event.preventDefault();
        }
        event.preventDefault();
     })
         
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanets = pickPlanet(listedPlanets);

       addDestinationInfo(window.document, pickedPlanets.name, pickedPlanets.diameter, pickedPlanets.star, pickedPlanets.distance, pickedPlanets.moons, pickedPlanets.imageUrl)
   })
   
});