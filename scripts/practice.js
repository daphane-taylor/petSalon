var globalVariable = "I am in global scope";

function myFunction() {
    var localVariable = "I am in a local scope";
    //this function can access the global variable
    console.log(globalVariable);
    if(true) {
        let blockVariable = "I am in a block scope";
        //this is limited to the block(for, if);
        console.log(blockVariable);
    }

    //this is limited to the function
    console.log(localVariable);
}

myFunction();

//name,age,gender
let student1 = {
    name: "Kit",
    age: 25,
    gender: "female"
    address = {
        street: "ave palm",
        zip: "30001"
    },
    hobbies: [hobby1, hobby2, hobby3]
}
console.log(student1);

//create an object with 5 properties
let collectionItem = {
    name: "Agate in Clear Quartz",
    form: "sphere",
    color: "light brown, tan, translucent",
    collected: "October 2024",
    weight: "2",
}
console.log(collectionItem);