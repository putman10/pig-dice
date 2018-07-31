// Business Logic

export function Player (userName) {
  this.name = userName;
  this.points = 0;
}


Player.prototype.diceRoll = function() {
  return (Math.ceil(Math.random() * 6));
};

export function takesRollChecksForOne(roll) {
  if (roll === 1) {
    return true;
  } else {
    return false;
  }
}

export function updateTurnTotal(roll, wasOneRolled, turnTotal, playerPoints, player, playerOneInput) {
  if (!wasOneRolled) {
    turnTotal += roll;
  } else {
    turnTotal = 0;
    switchPlayers(playerPoints, player, playerOneInput);
  }
  return turnTotal;
}


export function switchPlayers(points, player, playerOneInput) {

  // business side
  checkWinCondition(points);
  if (checkWinCondition(points)){
    winnerMessage(player);
  }
  // user interface side

  if (playerOneInput === player.name) {
    $("#player-one-buttons").hide();
    $("#player-two-buttons").fadeIn(3500);
  } else {
    $("#player-two-buttons").hide();
    $("#player-one-buttons").fadeIn(3500);
  }
}

function checkWinCondition(points) {
  if (points >= 100) {
    return true;
  }
}

function winnerMessage(player) {
  $(".winner-name").text(player.name);
  $(".winner-points").text(player.points);
  $("#winner-message").show();
}

// User Interface

export function updateScoreDisplay(playerOnePoints, playerTwoPoints, turnTotal) {
  $("#total").text(turnTotal);
  $("#turn-table").show();
  $("span#player-one-score").text(playerOnePoints);
  $("span#player-two-score").text(playerTwoPoints);
}

export function updateRollDisplay(roll) {
  $("#last-roll").text(roll);
}

export function animateRandomNumber(playerNumber) {
  var dice = $("#dice" + playerNumber);
  // dice.click(function(){
  $(".wrap" + playerNumber).append("<div id='dice_mask'></div>");//add mask
  dice.attr("class","dice");//After clearing the last points animation
  dice.css('cursor','default');
  var num = Math.floor(Math.random()*6+1);//random num 1-6
  dice.animate({left: '+2px'}, 50,function(){
    dice.addClass("dice_t");
  }).delay(100).animate({top:'-2px'},50,function(){
    dice.removeClass("dice_t").addClass("dice_s");
  }).delay(100).animate({opacity: 'show'},300,function(){
    dice.removeClass("dice_s").addClass("dice_e");
  }).delay(50).animate({left:'-2px',top:'2px'},50,function(){
    dice.removeClass("dice_e").addClass("dice_"+num);
  });
  $("#result" + playerNumber).html("Your last roll was a <span>"+num+"</span>");
  dice.css('cursor','pointer');
  $("#dice_mask").remove(); //remove mask

  return num;
}
