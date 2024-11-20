let pets =[];//empty array

//object literal
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"22900"
    }
}
//object constructor
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

// validations
function isValid(pet){
    let validation = true; //boolean result
    let inputName = document.getElementById("txtName");
    let inputAge = document.getElementById("txtAge");

    if(pet.name == ""){
        validation = false;
        inputName.classList.add("error");
    }

    if(pet.age == "") {
        validation = false;
        inputAge.classList.add("error");
    }

    return validation; //boolean result
}

//register function 
function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;

    console.log(inputName,inputAge,inputGender,inputBreed,inputService);
    
    // create the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService);
    console.log("newPet = ", newPet);

    // check validations
    if(isValid(newPet) == true) {
        //push the obj to the array
        pets.push(newPet);
        displayPet();
        //clear an input: document.getElementById("txtName").value="";
        //display the obj on the console
        console.log(pets);

        clearForm();
    }
    
}


function clearForm(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtService").value = "";
}


function init(){
    //execution code should be inside of this function 
    let pet1 = new Pet("Scooby",99,"Male","Dane","Grooming");//creating an obj
    //create two more pets
    let pet2 = new Pet("Scrappy",98,"Female","Mixed","Vaccines");
    pets.push(pet1,pet2);

    displayPet();
}

window.onload=init;//wait to render the HTML