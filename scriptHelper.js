// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
// Here is the HTML formatting for our mission target div.
    missiontarget = document.getElementById("missionTarget");
    missiontarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src=${imageUrl}>
        `   
}
//Validate the user-submitted data for every field & the user entered text for names and numbers for fuel and cargo levels
function validateInput(testInput) { 
   if (testInput === "") {
       return "Empty";
   } else if (isNaN(testInput) === false) {
       return "Not a Number";
   } else {
       return "Not a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

 //The list of shuttle requirements, should be updated if something is not ready for launch
    if (fuelLevel < 10000 && cargoLevel > 10000) {
        list.style.display = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "There is not enough fuel for the journey";
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "rgb(255,0,0)";
    } else if (cargoLevel <= 10000 && fuelLevel < 10000) {
        list.style.display = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass ready for launch";
        fuelStatus.innerHTML = "Fuel level to low for launch";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "rgb(255,0,0)";
    } else if (cargoLevel > 10000 && fuelLevel >= 10000) {
        list.style.display = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML = "Fuel level ready for launch";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "rgb(255,0,0)";
    } else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        list.style.display = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo ready for launch";
        fuelStatus.innerHTML = "Fuel level ready for launch";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(0,128,0)";
    }
}
    
async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json'); 
        const data = planetsReturned.json();
        console.log(data);
        return data;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    let currentPlanet = planets[randomIndex];
    return currentPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
