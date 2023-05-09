import runGame from "../index.js";
import randomNumber from "../randomNumber.js";

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
  const start = randomNumber(1, 50);
  const step = randomNumber(2, 5);
  const length = randomNumber(5, 10);
  const unknownIndex = randomNumber(0, length);
  const array = realisation(step, length, start);

  const answer = array[unknownIndex];
  array[unknownIndex] = "..";

  const question = array.join("  ");

  return [question, answer];
};

export default () => {
  runGame(gameRules, userNumber);
};
