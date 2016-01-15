$(document).ready(function() {
$("form#question").submit(function(event) {

var characters = $("select#characters").val();
var age = parseInt($("input#age").val());
var jerry = $("select#jerry").val();
var animal = $("input#animal").val();
var niet = $("select#niet").val();
var quantum = $("input#quantum").val();
var test = animal.charCodeAt(0)-97;

if (characters === "westeros" && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10 && quantum ==='ant') {
  $("#rick").show();
} else {
  $("#rick").hide();
}

// if (characters !== "westeros" && characters === "mordor" && characters !== "deadwood" && characters !== "jerry" && characters !=='star') {
//   $('#q12').val(2);
// } else {
//   $('#q12').val(0);
// }
//
// if (characters !== "westeros" && characters !== "mordor" && characters === "deadwood" && characters !== "jerry" && characters !=='star') {
//   $('#q13').val(3);
// } else {
//   $('#q13').val(0);
// }
// if (characters !== "westeros" && characters !== "mordor" && characters !== "deadwood" && characters === "jerry" && characters !=='star') {
//   $('#q14').val(4);
// } else {
//   $('#q14').val(0);
// }
// if (characters !== "westeros" && characters !== "mordor" && characters !== "deadwood" && characters !== "jerry" && characters ==='star') {
//   $('#q15').val(5);
// } else {
//   $('#q15').val(0);
// }
// if (age) {
//   $('#q12').val(2);
// } else {
//   $('#q12').val(0);
// }
//
//   $('#meseeks').hide();
// }
event.preventDefault();
});
});
