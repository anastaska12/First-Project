import runGame from "../index.js";
import getRandomNumber from "../utils.js";

const gameRules = "Find the greatest common divisor of given numbers.";

const divisor1 = (number1, number2) => {
  let result1 = [];
  for (let i = 1; i < 10; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result1.push(i);
    } else {
      i += 1;
    }
  }
  return result1.pop();
};

const userNumber = () => {
  const number1 = getRandomNumber(1, 15);
  const number2 = getRandomNumber(1, 15);

  const correctAnswer = divisor1(number1, number2);

  const question = `${number1} ${number2}`;

  return [question, correctAnswer];
};

export default () => {
  runGame(gameRules, userNumber);
};
