import readlineSync from 'readline-sync';

const name = () => {
  const questionName = readlineSync.question('May I have your name? ');
  const nameHello = `Hello, ${questionName}!`;
  return nameHello;
};
export default name;