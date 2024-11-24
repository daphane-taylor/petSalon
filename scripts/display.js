function displayRow() {
  let tableBody = document.getElementById("pets"); 
  let result = ""; 
  
  for(let i=0; i<pets.length; i++){ 
    console.log("myForLoop"); 
    let pet = pets[i]; 
    
    result += `
        <tr> 
          <td>${pet.name}</td> 
          <td>${pet.age}</td> 
          <td>${pet.gender}</td> 
          <td>${pet.breed}</td>
          <td>${pet.type}</td>
          <td>${pet.service}</td>
          <td><button class="btn btn-dark btn-sm" onclick="deletePet()">Delete</button></td>   
        </tr>
      `
    }
  
    tableBody.innerHTML = result;
    displayInfo();
  }


function displayInfo() {
  let groomingDiv = document.getElementById("gTotal");
  let totalDiv = document.getElementById("total");
  grooming=0;

  totalDiv.innerHTML = pets.length;// total pets

  for(let i=0;i<pets.length; i ++){
    if(pets[i].service=="Grooming"){
      grooming++;
    }
    groomingDiv.innerHTML=grooming;
  }
}