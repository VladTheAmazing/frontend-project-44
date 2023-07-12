import readlineSync from 'readline-sync';

const randomNumber = (min, max) => {  // функия по созданию случайного числа
    let str = '';
    const r = Math.random() * (max - min) + min;
    str = str + Math.floor(r);
    return str;
};

export const checkSolution = () => {
    const hello = 'Welcome to the Brain Games!';
    console.log(hello);
    const answerName = readlineSync.question('May I have your name? ');
    const name = answerName;
    const nameHello = `Hello ${answerName}!`;
    console.log(nameHello);
    const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    console.log(questionText);

    const arrFixCycle = [];
    for (let i = 0; i < 3; i++) {
        let random1 = randomNumber(1, 100);
        console.log(`Question: ${random1}`);
        const arr = [];
        const arr2 = [];

        for (let i = 2; i < random1; i++) {
            let value = random1 / i;  // ответ по операции
            let checkValue = Number.isInteger(value); // проверка на целотсность 

            if (checkValue === true) {
                arr.push(value);
            }
            else if (checkValue === false) {
                arr2.push(value);
            }
        }

        const prAndNpr = () => {
            if (arr.length > 0) {
                return 'no'; // непростое
            }
            else if (arr.length === 0) {
                return 'yes';// простое
            }
        };
        prAndNpr();

        let answerYesNo = readlineSync.question('Your answer: ');

        if (answerYesNo == prAndNpr()) {
            console.log('Correct!')
            arrFixCycle.push('like');
            if (arrFixCycle.length === 3) {
                return `'Congratulations, ${name}!'`;
            }
        }
        if (answerYesNo != prAndNpr()) {
            return `'${answerYesNo}' is wrong answer ;(. Correct answer was '${prAndNpr()}'.\nLet's try again,${name}!`;
        }
    }
};