let pets = []; // Empty array 

let petSalon = { 
    name: "The Fashion Pet", 
    address: { 
        street: "Palm Ave", 
        zip: "22900"
    } 
}; 

// Creating the pets using object literals 
let pet1 = { 
    name: "Scooby", 
    age: 80, 
    gender: "Male",
    service: "Haircut",
    breed: "Great Dane"
}; 
let pet2 = { 
    name: "Scrappy", 
    age: 70, 
    gender: "Male",
    service: "Daycare",
    breed: "Great Dane"
}; 
let pet3 = { 
    name: "Bella", 
    age: 4, 
    gender: "Female", 
    service: "Daycare", 
    breed: "Labrador" 
}; 
let pet4 = { 
    name: "Zeus", 
    age: 50, 
    gender: "Male", 
    service: "Haircut", 
    breed: "St Bernard" 
};

// Push the objects into the array 
pets.push(pet1, pet2, pet3, pet4); 

function displayPetNames() {
    for(let i=0;i<4;i++){
        document.getElementById("petList").innerHTML += `<li> ${pets[i].name} </li>`;
    }
    document.getElementById("petList").innerHTML += "We have " + pets.length + " pets";
}