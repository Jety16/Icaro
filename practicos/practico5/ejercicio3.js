const readlineSync = require("readline-sync");

const generar_caracteres = (letter, number) => {
    let string = "";
    if (typeof letter != "string"){
        return "Thats NOT A STRING!!!!"
    }
    if (number < 0){
        return "Enter a natural number or 0"
    }
    for (let i = 0; i < number; i++){
        string += letter;
    }
    return string
}

console.log(generar_caracteres(
    readlineSync.question("pls, enter a letter:  "),
    readlineSync.question("pls, enter the number of times to repeat it:  ")
))

