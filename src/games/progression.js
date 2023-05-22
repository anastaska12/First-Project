import runGame from "../index.js";
import getRandomNumber from "../utils.js";

const gameRules = "What number is missing in the progression?";

const realisation = (step, length, start) => {
  let arr = [];
  for (let i = 0; i < length; i += 1) {
    const number = step * i + start;
    arr.push(number);
  }
  return arr;
};

const userNumber = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 5);
  const length = getRandomNumber(5, 10);
  const unknownIndex = getRandomNumber(0, length);
  const array = realisation(step, length, start);

  const answer = array[unknownIndex];
  array[unknownIndex] = "..";

  const question = array.join("  ");

  return [question, answer];
};

export default () => {
  runGame(gameRules, userNumber);
};
