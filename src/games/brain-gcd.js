import readlineSync from 'readline-sync';

const randomNumber = (min, max) => { // первая функция по созданию случайного числа
  let str = '';
  const r = Math.random() * (max - min) + min;
  str += str + Math.floor(r);
  return str;
};

const checkSolution = () => {
  const hello = 'Welcome to the Brain Games!';
  console.log(hello);
  const answerName = readlineSync.question('May I have your name? ');
  const name = answerName;
  const nameHello = `Hello, ${answerName}!`;
  console.log(nameHello);
  const questionText = 'Find the greatest common divisor of given numbers.';
  console.log(questionText);

  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    let random1 = randomNumber(1, 100);
    let random2 = randomNumber(1, 100);
    const addString = () => {
      let str = '';
      str = `${random1} ${random2}`;
      return str;
    };
    console.log(`Question: ${addString()}`);
    const answerFigure = readlineSync.question('Your answer: ');

    const checkDevider = () => {
      const cycle = random1 % random2;
      for (let z = 0; z <= cycle; z += 1) {
        const r = random1 % random2;
        if (r === 0) {
          return random2;
        }
        if (r !== 0) {
          random1 = random2;
          random2 = r;
        }
      }
      return 'dd';
    };
    if (answerFigure === checkDevider()) {
      arr.push(answerFigure);
      if (arr.length === 3) {
        return `'Congratulations, ${name}!'`;
      }
    }
    if ((answerFigure !== checkDevider())) {
      return `'${answerFigure}' is wrong answer ;(. Correct answer was '${checkDevider()}'.\nLet's try again, ${name}!`;
    }
  }
  return 'dd';
};

export default checkSolution;
