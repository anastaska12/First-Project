import runGame from "../index.js";
import getRandomNumber from "../utils.js";

const gameRules =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return "no";
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return "no";
    }
  }
  return "yes";
};

const userNumber = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrime(number);
  return [number, answer];
};

export default () => {
  runGame(gameRules, userNumber);
};
