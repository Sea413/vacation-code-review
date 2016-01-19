$(document).ready(function() {
$("form#question").submit(function(event) {

var characters = $("select#characters").val();
var age = parseInt($("input#age").val());
var jerry = $("select#jerry").val();
var animal = $("input#animal").val();
var niet = $("select#niet").val();
var random = animal.charCodeAt(0)-97;
var random = Math.floor((Math.random()*5) + 1);

if (random === 1) {
  $("#jb").show();
}
else {
$("#jb").hide();
}
if (random === 2){
  $("#worf").show();
}
else {
$("#worf").hide();
}
if (random === 3) {
$("#frodo").show();
} else {
  $("#frodo").hide();
}
if (random === 4) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (random === 5) {
$("#beth").show();
  } else {
$("#beth").hide();
}
event.preventDefault();
});
});
