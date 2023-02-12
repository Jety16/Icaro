const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un entero positivo: ', (input) => {
  let num = parseInt(input);

  if (!isNaN(num) && num > 0 && Number.isInteger(num)) {
    let odds = [];
    for (let i = 1; i <= num; i += 2) {
      odds.push(i);
    }
    console.log(odds.join(', '));
  } else {
    console.log('Ojo! No es positivo');
  }

  rl.close();
});