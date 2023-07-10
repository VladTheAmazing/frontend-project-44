for (let i = 0; i <= 3; i++) {
    let random1 = randomNumberOne(0, 100);
    let random2 = randomNumberTwo(0, 100);


    const addString = () => {
        let str = '';
        str = str + random1 + '%' + random2;
        return str;
    };
    console.log(addString());

    let answerFigure = readlineSync.question('Your answer:');
    let r = random1 % random2;
    
    if (r === 0) {
        if (answerFigure == random2) {
            const answerTrue = 'Correct!';
            console.log(answerTrue);
            arr.push(answerTrue);
            if (arr.length === 3) {
                return `'Congratulations, ${name}!'`;
            }
        }
        if (answerFigure != random2) {
            return 'noCorrect'
        }
    }
    if (r !== 0) {
        random1 = random2;
        random2 = r;
    }
}