const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Ingrese un numero: ', (word) => {
        for (let i = 1; i <= parseInt(word); i++) {
         console.log("*".repeat(i))
        }
    rl.close();
});