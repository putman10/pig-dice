import { Player, takesRollChecksForOne, updateTurnTotal, switchPlayers, updateScoreDisplay, updateRollDisplay, animateRandomNumber } from './../src/pig-dice.js';

describe('Player', function() {

  it('should test whether a Player has the correct name', function() {
    var player = new Player("Ryan")
    expect(player.name).toEqual("Ryan")
  });
});

describe('takesRollChecksForOne', function() {

  it('should test whether a roll of one returns true', function() {
    var roll = takesRollChecksForOne(1)
    expect(roll).toEqual(true)
  });

  it('should test whether a roll of 5 returns false', function() {
    var roll = takesRollChecksForOne(5)
    expect(roll).toEqual(false)
  });
});

describe('updateTurnTotal', function() {

  it('should test whether the correct turn total is returned', function() {
    var playerOne = new Player("Ryan")
    var turnTotal = updateTurnTotal(1, true, 0, 12, playerOne, "Ryan")
    expect(turnTotal).toEqual(0)
  });
});
