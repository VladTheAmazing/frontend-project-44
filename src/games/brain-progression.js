/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';

const randomNumber = (min, max) => { // функия по созданию случайного числа
  let str = '';
  const r = Math.random() * (max - min) + min;
  str += str + Math.floor(r);
  return str;
};

const checkSolution = () => { // запуск функции
  const hello = 'Welcome to the Brain Games!';
  console.log(hello);
  const answerName = readlineSync.question('May I have your name? ');
  const name = answerName;
  const nameHello = `Hello, ${answerName}!`;
  console.log(nameHello);
  const questionText = 'What number is missing in the progression?';
  console.log(questionText);

  const arrFixCycle = [];
  for (let i = 0; i < 3; i += 1) {
    const arr = [];
    const random1 = randomNumber(0, 50);
    const random2 = randomNumber(51, 100);
    arr.push(random1, random2);

    const addArrInString = () => { // преобразовываем в строку для данныем массива для eval
      let str = '';
      str = `${str}${arr[1]}-${arr[0]}`;
      return str;
    };
    // eslint-disable-next-line no-eval
    const findDifferenceInString = eval(addArrInString());
    // высчитываем разницу между вторым и первым числом в массиве

    const newStringAndUpdateArr = () => {
    // eslint-disable-next-line max-len
    //  с помощью цикла создаем строку с новыми данными и добавдяем в существующий масив новые значения
      let str1 = '';
      const random3 = randomNumber(5, 10);
      for (let z = 1; z < random3; z += 1) {
        let str2 = '';
        str2 = `${str2 + arr[z]}+${findDifferenceInString}`;
        // eslint-disable-next-line no-eval
        const change = eval(str2);
        str1 = `${change}`;
        arr.push(change);
      }
      const str3 = `${arr[0]}${arr[1]}${str1}`;
      return str3;
    };
    newStringAndUpdateArr();

    const arrCopy1 = [...arr];// создаем копию обновленного массива нужна для сравнения потом
    const lengthArr = arr.length; // записываем в константу длину массива
    arr[randomNumber(0, lengthArr)] = '..'; // заменяем в массиве элемент
    const arrCopy3 = [...arr]; // копия для консоли
    const takeSymbol = arrCopy3.join(' ');
    console.log(`Question: ${takeSymbol}`); // выводим как строку
    const arrCopy2 = [...arr]; // создаем копию обновленного массива еще одну с другим уже значением

    const answerFigure = readlineSync.question('Your answer: ');

    const createArrComparison = () => {
    // создаем массив, добавляем в него полученный ответ, для сравнения потом ниже
      const arr2 = [];
      for (const item of arrCopy2) {
        if (item === '..') {
          arr2.push(answerFigure);
        }
        if (item !== '..') {
          arr2.push(item);
        }
      }
      return arr2;
    };
    createArrComparison();
    const fixArr = createArrComparison();

    const comparisonCheck = () => { // функия для отображения правильного ответа
      for (let i = 0; i < arrCopy1.length; i += 1) {
        for (let i = 0; i < arrCopy2.length; i += 1) {
          if (arrCopy1[i] !== arrCopy2[i]) {
            return arrCopy1[i];
          }
        }
      }
      return 'dd';
    };
    comparisonCheck();

    if (arrCopy1.toString() === fixArr.toString()) {
      console.log('Correct!');
      arrFixCycle.push('like');
      if (arrFixCycle.length === 3) {
        return `'Congratulations, ${name}!'`;
      }
    }
    if (arrCopy1.toString() !== fixArr.toString()) {
      return `'${answerFigure}' is wrong answer ;(. Correct answer was '${comparisonCheck()}'.\nLet's try again, ${name}!`;
    }
  }
  return 'dd';
};

export default checkSolution;
