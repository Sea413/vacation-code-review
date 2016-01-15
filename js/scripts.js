$(document).ready(function() {
$("form#question").submit(function(event) {

var characters = $("select#characters").val();
var age = parseInt($("input#age").val());
var jerry = $("select#jerry").val();
var animal = $("input#animal").val();
var niet = $("select#niet").val();
var quantum = $("input#quantum").val();

if (alien === "Gearhead" && alien !== "Birdperson" && alien !== "Zeke" && age>50 && musical !=='Schwifty') {
  $('#rick').show();
} else {
  $('#rick').hide();
}

if (alien !== "Gearhead" && alien === "Birdperson" && alien !== "Zeke" && age>50 && musical !=='Schwifty') {
  $('#morty').show();
} else {
  $('#morty').hide();
}

if (alien !== "Gearhead" && alien !== "Birdperson" && alien === "Zeke" && age>50 && musical !=='Schwifty') {
  $('#jerry').show();
} else {
  $('#jerry').hide();
}
if (age<=50 && age>= 31 && (musical !=='Schwifty')) {
  $('#beth').show();
} else {
  $('#beth').hide();
}
if (age>=1 && age<=30 && (musical !=='Schwifty')) {
  $('#summer').show();
} else {
  $('#summer').hide();
}
if (age>0 && musical ==='Schwifty') {
  $('#meseeks').show();
} else {
  $('#meseeks').hide();
}
event.preventDefault();
});
});
