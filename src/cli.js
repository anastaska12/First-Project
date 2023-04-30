import readlineSync from "readline-sync";

const getName = () {
   const name = readlineSync.question("May I have your name? ");
   return name;
}

const welcome = () => {
  console.log("Welcome to the Brain Games!");
  const userName = getName();
  console.log(`Hello, ${userName}!`);
};

export { welcome, getName } ;
