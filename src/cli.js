import readlineSync from "readline-sync.js";

const welcome = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
};

export { welcome };
