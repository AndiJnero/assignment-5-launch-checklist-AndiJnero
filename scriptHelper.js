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

function validateInput(testInput) { 
   if (testInput === "") {
       return "Empty";
   } else if (isNaN(testInput) === true) {
       return "Not a Number";
   } else {
       return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let h2 = document.getElementById("launchStatus");

 //The list of shuttle requirements, should be updated if something is not ready for launch
    if (fuelLevel < 10000 && cargoLevel > 10000) {
        list.style.display = "visible";
        pilotStatus.innerHTML.trim() = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML.trim() = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML.trim() = "Fuel level to low for launch";
        cargoStatus.innerHTML.trim() = "Cargo mass to heavy for Launch";
        h2.innerHTML.trim() = "Shuttle not ready for launch";
        h2.style.color = "rgb(255,0,0)";
    } else if (cargoLevel <= 10000 && fuelLevel < 10000) {
        list.style.display = "visible";
        pilotStatus.innerHTML.trim() = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML.trim() = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML.trim() = "Cargo mass ready for launch";
        fuelStatus.innerHTML.trim() = "Fuel level to low for launch";
        h2.innerHTML.trim() = "Shuttle not ready for launch";
        h2.style.color = "rgb(255,0,0)";
    } else if (cargoLevel > 10000 && fuelLevel >= 10000) {
        list.style.display = "visible";
        pilotStatus.innerHTML.trim() = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML.trim() = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML.trim() = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML.trim() = "Fuel level ready for launch";
        h2.innerHTML.trim() = "Shuttle not ready for launch";
        h2.style.color = "rgb(255,0,0)";
    } else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        list.style.display = "visible";
        pilotStatus.innerHTML.trim() = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML.trim() = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML.trim() = "Cargo mass ready for launch";
        fuelStatus.innerHTML.trim() = "Fuel level ready for launch";
        h2.innerHTML.trim() = "Shuttle is Ready for Launch";
        h2.style.color = "rgb(0,128,0)";
    }
}
    
async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json'); 
        const data = planetsReturned.json();
        console.log(data);
        return data;
}

    return planetsReturned;


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
