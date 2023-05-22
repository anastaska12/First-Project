import runGame from "../index.js";
import getRandomNumber from "../utils.js";

const gameRules = "What is the result of the expression?";

const calculator = (num1, num2, randomSign) => {
  if (randomSign === "+") {
    return num1 + num2;
  } else if (randomSign === "-") {
    return num1 - num2;
  } else {
    return num1 * num2;
  }
};

const userNumber = () => {
  const arr = ["+", "*", "-"];
  const index = getRandomNumber(arr.length - 1);
  const randomSign = arr[index];

  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 10);

  const question = `${num1} ${randomSign} ${num2}`;
  const correctAnswer = calculator(num1, num2, randomSign);

  return [question, correctAnswer];
};

export default () => {
  runGame(gameRules, userNumber);
};
