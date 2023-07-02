import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const questionName = readlineSync.question('May I have your name? ');
const name = questionName;
const nameHello = `Hello ${questionName}!`;
console.log(nameHello);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const checkNumber = () => {
  const randomNumber = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  };

  const arr = [];
  for (let i = 0; i < 3; i++) {
    let random = randomNumber(0, 100);
    const question = `Question: ${random}`;
    console.log(question);
    let answer = readlineSync.question('Your answer:');

    if (random % 2 === 0) {
      random = 'yes';
    }
    else if (random % 2 !== 0) {
      random = 'no';
    }

    if (answer === random) {
      answer = 'Correct';
    }
    else if (answer !== random) {
      return `'${answer}' is wrong answer ;(. Correct answer was ${random}.\nLet's try again,${name}!`;
    }
    console.log(answer);

    if (answer === 'Correct') {
      arr.push(answer);
      if (arr.length === 3) {
        return `Congratulations, ${name}!`;
      }
    }
  }
};
console.log(checkNumber());