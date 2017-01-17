'use strict';

let bowling = require('./bowling.js');

describe('Bowling game: score', function () {
  it('Game: X|X|X|X|X|X|X|X|X|X||XX', function () {
    bowling.scoreGame('X|X|X|X|X|X|X|X|X|X||XX').should.equal(300);
  });

  it('Game: 9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||', function () {
    bowling.scoreGame('9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||').should.equal(90);
  });

  it('Game: 5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5', function () {
    bowling.scoreGame('5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5').should.equal(150);
  });

  it('Game: X|7/|9-|X|-8|8/|-6|X|X|X||81', function () {
    bowling.scoreGame('X|7/|9-|X|-8|8/|-6|X|X|X||81').should.equal(167);
  });
  it('Game: X|7/|9-|X|-8|8/|-6|X|X|X||-1', function () {
    bowling.scoreGame('X|7/|9-|X|-8|8/|-6|X|X|X||-1').should.equal(151);
  });
  it('Game: --|--|--|--|--|--|--|--|--|-/||-1', function () {
    bowling.scoreGame('--|--|--|--|--|--|--|--|--|-/||-1').should.equal(10);
  });
  it('Game: --|--|--|--|--|--|--|--|--|X||-1', function () {
    bowling.scoreGame('--|--|--|--|--|--|--|--|--|X||-1').should.equal(11);
  });
});
