// $(document).ready(function() {
$("form#question").submit(function(event) {

var characters = $("select#characters").val();
var age = parseInt($("input#age").val());
var jerry = $("select#jerry").val();
var animal = $("input#animal").val();
var niet = $("select#niet").val();
var test = animal.charCodeAt(0)-97;

if (characters === "westeros" && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'yes' && niet === 'satre' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'no' && niet === 'satre' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'no' && niet === 'satre' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'no' && niet === 'satre' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'no' && niet === 'satre' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'no' && niet === 'satre' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'no' && niet === 'satre' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'no' && niet === 'satre' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'no' && niet === 'satre' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'no' && niet === 'satre' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'no' && niet === 'satre' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'yes' && niet === 'kant' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'no' && niet === 'kant' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'yes' && niet === 'foucault' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'no' && niet === 'foucault' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'yes' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'no' && niet === 'schopenhauer' && test>=0 && test<=10) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'yes' && niet === 'satre' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'no' && niet === 'satre' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'no' && niet === 'satre' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'no' && niet === 'satre' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'no' && niet === 'satre' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'no' && niet === 'satre' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'no' && niet === 'satre' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'no' && niet === 'satre' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'no' && niet === 'satre' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'no' && niet === 'satre' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'no' && niet === 'satre' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'yes' && niet === 'kant' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'no' && niet === 'kant' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'yes' && niet === 'foucault' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'no' && niet === 'foucault' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'yes' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "westeros" && age> 1 && age <=20 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "westeros" && age> 21 && age <=40 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "westeros" && age> 41 && age <=60 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "westeros" && age> 61 && age <=80 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "westeros" && age> 80 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "mordor" && age> 1 && age <=20 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "mordor" && age> 21 && age <=40 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "mordor" && age> 41 && age <=60 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "mordor" && age> 61 && age <=80 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "mordor" && age> 80 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === "deadwood" && age> 1 && age <=20 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === "deadwood" && age> 21 && age <=40 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === "deadwood" && age> 41 && age <=60 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === "deadwood" && age> 61 && age <=80 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === "deadwood" && age> 80 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'jerry' && age> 1 && age <=20 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'jerry' && age> 21 && age <=40 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'jerry' && age> 41 && age <=60 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'jerry' && age> 61 && age <=80 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'jerry' && age> 80 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
if (characters === 'star' && age> 1 && age <=20 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#got").show();
} else {
  $("#got").hide();
}
if (characters === 'star' && age> 21 && age <=40 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#frodo").show();
} else {
  $("#frodo").hide();
}
if (characters === 'star' && age> 41 && age <=60 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#worf").show();
} else {
  $("#worf").hide();
}
if (characters === 'star' && age> 61 && age <=80 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#jb").show();
} else {
  $("#jb").hide();
}
if (characters === 'star' && age> 80 && jerry === 'no' && niet === 'schopenhauer' && test>=11 && test<=26) {
  $("#beth").show();
} else {
  $("#beth").hide();
}
event.preventDefault();
});
// });
