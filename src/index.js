import readlineSync from "readline-sync.js";

const runGame = (gameRules, userNumber) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = userNumber();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");
    if (userAnswer !== String(correctAnswer)) {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`
      );
      return;
    } else {
      console.log("Correct!");
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
