$(document).ready(function() {
$("form#question").submit(function(event) {

var characters = $("select#characters").val();
var age = parseInt($("input#age").val());
var jerry = $("select#jerry").val();
var animal = $("input#animal").val().s.charCodeAt(0) - 97;
var niet = $("select#niet").val();
var quantum = $("input#quantum").val();

if (characters === "westeros" && characters !== "mordor" && characters !== "deadwood" && characters !== "jerry" && characters !=='star' && age> 1 && age <=20 && animal>1 && animal) {
  $('#q11').val(1);
} else {
  $('#q11').val(0);
}

if (characters !== "westeros" && characters === "mordor" && characters !== "deadwood" && characters !== "jerry" && characters !=='star') {
  $('#q12').val(2);
} else {
  $('#q12').val(0);
}

if (characters !== "westeros" && characters !== "mordor" && characters === "deadwood" && characters !== "jerry" && characters !=='star') {
  $('#q13').val(3);
} else {
  $('#q13').val(0);
}
if (characters !== "westeros" && characters !== "mordor" && characters !== "deadwood" && characters === "jerry" && characters !=='star') {
  $('#q14').val(4);
} else {
  $('#q14').val(0);
}
if (characters !== "westeros" && characters !== "mordor" && characters !== "deadwood" && characters !== "jerry" && characters ==='star') {
  $('#q15').val(5);
} else {
  $('#q15').val(0);
}
if (age) {
  $('#q12').val(2);
} else {
  $('#q12').val(0);
}

  $('#meseeks').hide();
}
event.preventDefault();
});
});
