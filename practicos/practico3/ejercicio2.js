const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Ingrese su edad: ', (word) => {
        for (let i = 1; i <= parseInt(word); i++) {
            console.log(i);
          }

    rl.close();
});