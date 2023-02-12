const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una palabra: ', (word) => {
  for (let i = 0; i < 10; i++) {
    console.log(word);
  }
  rl.close();
});