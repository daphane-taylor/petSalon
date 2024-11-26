console.log("Welcome to jQuery");

/*
JS vs JQuery

JS ... document.getElementById("results");
jQuery ... $("#results");

JS ... document.getElementByTagName("p");
jQuery ... $("p");

JS ... document.getElementByClassName(".text");
jQuery ... $(".text");
*/

//ID SELECTORS
let redParagraph = $("#red")
.css("background", "red")
.css("color", "white");
console.log("my red paragraph ", redParagraph);

let blueParagraph = $("#blue")
.css("background", "blue")
.css("color", "white");


//CLASS SELECTORS
let myParagraphWithBorder = $(".with-border");
myParagraphWithBorder.css("border", "5px dashed yellow");

myParagraphWithBorder.click(function() {
    console.log("Clicked");

    $(this).addClass("bg-gray");
    }
);

//TAG SELECTORS
let paragraphs = $("p");
paragraphs.css("cursor", "pointer");

//SIMPLE AND COMMON FUNCTION
function register(){
    console.log("Registering Function");

    let testEntry = $("#testInput").val();
    $("#results").append(`<li>${testEntry}</li>`);

    $("#testInput").val("");// clear input
}

//EVENTS
$("#btnRegister").on("click", register);

//SIMPLE AND COMMON FUNCTION
function clickMe() {
    console.log("ClickMe btn");

    $("p:first").hide();
    $("p:last").css("border", "5px solid skyblue");
}

$("#newBtn").on("click", clickMe);

//ANIMATIONS
function showName() {
    $("#user-name").slideDown();
}

function hideName() {
    $("#user-name").slideUp(1500);
}