'use strict';

module.exports = { scoreGame };

function scoreGame(game) {

  game = game.replace(/-/g, 0);

  let gameArray = game.split('||');
  let frameArray = gameArray[0].split('|');
  let bonusFrame = gameArray[1];

  return frameArray.reduce(function(accumulator, frame, idx) {
    
    let score = 0;

    frame.split("").forEach((char, frameIdx) => {

      switch (char) {
        case 'X':
          score += 10;
          score += computeRollFactor(frameArray.slice(idx + 1).concat([bonusFrame]).join("").split("").slice(0, 2));
          break;

        case '/':
          score = 10;
          score += computeRollFactor(frameArray.slice(idx + 1).concat([bonusFrame]).join("").split("").slice(0, 1));
          break;

        default:
          score += parseInt(char, 10);
      }
    });

    return accumulator + score;

  }, 0);

}

function computeRollFactor(rolls) {
  
  let addlScore = 0;

  rolls.forEach(roll => {
    switch(roll) {
      case 'X':
        addlScore += 10;
        break;
      
      case '/':
        addlScore = 10;
        break;

      default:
        addlScore += parseInt(roll, 10);
    }
  });

  return addlScore;
  
}
