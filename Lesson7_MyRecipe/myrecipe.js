/*
    Program Name: Recipe Display Application
    Author: Claire Fry 
    Date: November 27th, 2018
    Filename: myrecipe.js
*/

/* global $ */

//DOM traversal
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//attach an event listener
$("h3").click(display); 

//edit CSS
$("h3").hover(function(){
    $(this).css("background-color", "orange"); 
    }, function(){
    $(this).css("background-color", "red");
});


