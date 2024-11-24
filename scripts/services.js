let services = [];

//constructor Service
function Service(description, price) {
  //
}

//validations
function validService(service){
  let isValidDescription = true;
  let isValidPrice = true;

  if(service.description == "") {
    isValidDescription = false;
    $("#txtDescription").addClass("error");
    $("#descRequiredText").show();
  }else {
    isValidDescription = true;
    $("#txtDescription").removeClass("error");
    $("#descRequiredText").hide();
  }

  // service.price validation

  return isValidDescription && isValidPrice;
}

//use jQuery
function register() {
  let newService = new Service();
}

function init() {
  //hook events
}

window.onload = init;