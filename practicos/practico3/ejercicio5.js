const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese palabras: ', (w) => {
    let word = w.split(' ');

    for (let i = word.length - 1; i >= 0; i--) {
      console.log(word[i]);
    }
    rl.close()
  });