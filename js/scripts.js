$(document).ready(function() {
$("form#question").submit(function(event) {

var characters = $("select#characters").val();
var age = parseInt($("input#age").val());
var jerry = $("select#jerry").val();
var animal = $("input#animal").val();
var niet = $("select#niet").val();
var quantum = $("input#quantum").val();

if (characters === "westeros"){
// if (characters === "westeros" && characters !== "mordor" && characters !== "deadwood" && characters !== "jerry" && characters !=='star' && age> 1 && age <=20 && animal==='ant' && niet === 'satre' && niet !== 'kant' && niet !=='foucault' && niet !=='schopenhauer') {
  $(h1).show();
} else {
  $(h1).hide();
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
