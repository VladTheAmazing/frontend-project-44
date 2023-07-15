import readlineSync from 'readline-sync';

const randomNumber = (min, max) => { // первая функция по созданию случайного числа
  let str = '';
  const r = Math.random() * (max - min) + min;
  str += str + Math.floor(r);
  return str;
};

const randomOperation = () => {
  // функцця по созданию случайного символа для операции со значением +,-,*;
  const arr = ['*', '+', '-'];
  const arrTakeRandom = arr[Math.floor(Math.random() * arr.length)];
  return arrTakeRandom;
};

const checkAnswerFigure = () => {
  const hello = 'Welcome to the Brain Games!';
  console.log(hello);
  const answerName = readlineSync.question('May I have your name? ');
  const name = answerName;
  const nameHello = `Hello, ${answerName}!`;
  console.log(nameHello);
  const questionText = 'What is the result of the expression?';
  console.log(questionText);
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const random1 = randomNumber(0, 100); // создаем случайное число от 0 до 100
    const random2 = randomNumber(0, 100); // создаем еще одно случайное число от 0 до 100
    const fixOperetion = randomOperation(); // фиксируем символ операции
    const addString = () => {
      let str = '';
      str = `${random1} ${fixOperetion} ${random2}`; // добавляем в строку 1 число операцию и 2 число
      return str;
    };
    console.log(`Question: ${addString()}`); // отображаем само выражение
    // eslint-disable-next-line no-eval
    const calculation = eval(addString());
    // с помощью функции eval из строки получаем значение выражения
    const answerFigure = readlineSync.question('Your answer: ');
    const calcStr = calculation.toString();
    console.log(answerFigure);
    if (calcStr === answerFigure) {
      const answerTrue = 'Correct!';
      console.log(answerTrue);
      arr.push(answerTrue);
      if (arr.length === 3) {
        return `'Congratulations, ${name}!'`;
      }
    }
    if (calcStr !== answerFigure) {
      return `'${answerFigure}' is wrong answer ;(. Correct answer was '${calculation}'.\nLet's try again, ${name}!`;
    }
  }
  return 'f';
};

export default checkAnswerFigure;
