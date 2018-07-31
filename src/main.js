import { takesRollChecksForOne, updateTurnTotal, switchPlayers, updateScoreDisplay, updateRollDisplay, animateRandomNumber } from './pig-dice';
import './styles.css';

$(document).ready(function() {
  var turnTotal = 0;

  $("button#name-submit").click(function(event) {
    event.preventDefault();
    var playerOneInput = $("input#nameFieldOne").val();
    var playerOne = new Player(playerOneInput);
    var playerTwoInput = $("input#nameFieldTwo").val();
    var playerTwo = new Player(playerTwoInput);
    $("span.player1-name").text(playerOne.name);
    $("span.player2-name").text(playerTwo.name);

    $("#names-div").hide();

    switchPlayers(playerTwo.points, playerTwo, playerOneInput);

    $(".scores-display").show();
    $("span.player-one-name").text(playerOne.name)
    $("span.player-two-name").text(playerTwo.name)
    updateScoreDisplay(playerOne.points, playerTwo.points, turnTotal)

    $("#dice1").click(function() {
      var roll = animateRandomNumber("1");
      updateRollDisplay(roll);
      var isOne = takesRollChecksForOne(roll);
      turnTotal = updateTurnTotal(roll, isOne, turnTotal, playerOne.points, playerOne, playerOne.name)
      updateScoreDisplay(playerOne.points, playerTwo.points, turnTotal)
    })

    $("#dice2").click(function() {
      var roll = animateRandomNumber("2");
      updateRollDisplay(roll);
      var isOne = takesRollChecksForOne(roll);
      turnTotal = updateTurnTotal(roll, isOne, turnTotal, playerTwo.points, playerTwo, playerOne.name);
      updateScoreDisplay(playerOne.points, playerTwo.points, turnTotal)
    })

    $("button#player-one-hold").click(function(){
      playerOne.points += turnTotal
      switchPlayers(playerOne.points, playerOne, playerOne.name)
      turnTotal = 0
      updateScoreDisplay(playerOne.points, playerTwo.points, turnTotal)
    })

    $("button#player-two-hold").click(function(){
      playerTwo.points += turnTotal
      switchPlayers(playerTwo.points, playerTwo, playerOne.name)
      turnTotal = 0
      updateScoreDisplay(playerOne.points, playerTwo.points, turnTotal)
    })
  })
})
