var currentPlayer= "X"
var turnNumber= 0
var endGame= false
function performLogic(b, t){
  $(b).hide();
  console.log(b)
  $(t).text(currentPlayer);
  changePlayer();
}
function changePlayer(){
  if (currentPlayer === "X"){
    currentPlayer= "O"
  }else{
    currentPlayer= "X"
  }
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");

});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

